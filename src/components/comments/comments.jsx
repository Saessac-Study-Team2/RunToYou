import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment";
import CommentForm from "./commentForm";
import Pagination from "../Pagination/Pagination";
import { useRecoilState } from "recoil";
import { isUserState } from "../../library/atom";
import { getLoginCookie } from "../../library/cookie";
import styles from "./comments.module.css";

const Comments = ({ id }) => {
  // props는 topic_id
  const [comments, setComments] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  // 페이지네이션
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const commentsLength = comments.length;
  const url = "https://saessac.kro.kr:80/";

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    return axios
      .get(`${url}topiccomments/${id}?sort=desc`, {
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
    <div className={styles.comments_container}>
      <div className={styles.comments_area}>
        <div
          className={styles.comments_counter}
        >{`댓글 ${comments.length}`}</div>
        <CommentForm topicId={id} getComments={getComments} />
        {isLogin ? (
          <div className={styles.comments_list}>
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
      </div>
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
