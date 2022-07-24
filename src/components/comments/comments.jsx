import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment";
import CommentForm from "./commentForm";
// import Pagination from "./pagination";
import { useRecoilState } from "recoil";
import { isUserState } from "../../library/atom";
import { getLoginCookie } from "../../library/cookie";
import styles from "./comments.module.css";

// TODO : 페이지네이션 구현하기 (무한 스크롤, 10개 단위)
// TODO : 로그인을 안 했을 때 상세페이지에 들어갈 수 없게 설정, 코드 수정하기
// TODO : 로딩 스테이트 추가

// http://34.168.215.145/topiccomments/38?offset=0
// http://34.168.215.145/topiccomments/38?offset=10
// sort=desc OR sort=asc

const Comments = ({ id }) => {
  // 위의 props는 topic_id
  const [comments, setComments] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [offset, setOffset] = useState(0);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    getComments();
  }, [offset]);

  const getComments = () => {
    return axios
      .get(
        `http://34.168.215.145/topiccomments/${id}?offset=${offset}&sort=desc`,
        { headers: { Authorization: getLoginCookie() } }
      )
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("getComments err", err);
      });
  };

  return (
    <div className={styles.comments}>
      {/* <div className={styles.comments_counter}>{`댓글 : ${comments.length}`}</div> */}
      <CommentForm topicId={id} getComments={getComments} />
      {isLogin ? (
        <div className={styles.comments_container}>
          {comments.length !== 0 &&
            comments.map((e) => (
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
      {isLogin && (
        <div className={styles.pagination_button}>
          <button
            className={styles.previous_button}
            onClick={() => setOffset(offset - 10)}
            disabled={offset === 0}
          >
            이전 페이지
          </button>
          <button
            className={styles.next_button}
            onClick={() => setOffset(offset + 10)}
            disabled={comments.length < 10}
          >
            다음 페이지
          </button>
        </div>
      )}
      {/* <Pagination page={page} setPage={setPage} setOffset={setOffset} /> */}
    </div>
  );
};

export default Comments;
