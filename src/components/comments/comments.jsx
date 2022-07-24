import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment";
import CommentForm from "./commentForm";
import Pagination from "../Pagination/Pagination";
import { useRecoilState } from "recoil";
import { isUserState } from "../../library/atom";
import { getLoginCookie } from "../../library/cookie";
import styles from "./comments.module.css";

// TODO : 로그인을 안 했을 때 상세페이지에 들어갈 수 없게 설정, 코드 수정하기
// TODO : 로딩 스테이트 추가 (+로딩화면)
// sort=desc OR sort=asc 댓글 정렬 쿼리

const Comments = ({ id }) => {
  // 위의 props는 topic_id
  const [comments, setComments] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const commentsLength = comments.length;

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    return axios
      .get(`http://34.168.215.145/topiccomments/${id}?sort=desc`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log("getComments err", err);
      });
  };

  return (
    <div className={styles.comments}>
      <div className={styles.comments_counter}>{`댓글 ${comments.length}`}</div>
      <CommentForm topicId={id} getComments={getComments} />
      {isLogin ? (
        <div className={styles.comments_container}>
          {comments.length !== 0 &&
            comments
              .slice(offset, offset + limit)
              .map((e) => (
                <Comment
                  key={e.tcid}
                  tcid={e.tcid}
                  createdAt={e.created_at}
                  nickname={e.nickname}
                  userID={e.userID}
                  userPicture={e.userPicture}
                  topicComment={e.topicComent}
                  getComments={getComments}
                />
              ))}
        </div>
      ) : (
        <div className={styles.comments_container}>
          로그인 후 댓글 열람 가능합니다
        </div>
      )}
      <Pagination
        total={commentsLength}
        limit={limit}
        page={page}
        setPage={setPage}
      ></Pagination>
    </div>
  );
};

export default Comments;
