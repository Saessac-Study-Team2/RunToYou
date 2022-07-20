import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./comment"
import CommentForm from "./commentForm"
import { useRecoilState } from "recoil";
import { isUserState } from "../../library/atom";
import { getLoginCookie } from "../../library/cookie";
import styles from "./comments.module.css";

// 페이지네이션 구현하기 (무한 스크롤, 10개 단위)
// 로그인을 안 했을 때 상세페이지에 들어갈 수 없게 하면, 코드 수정하기

const Comments = ({ id }) => { // topic_tid
  const [comments, setComments] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    return axios
      .get(`http://34.168.215.145/topiccomments/${id}`, {
        headers: { Authorization: getLoginCookie() }
      })
      .then((res) => {
        setComments(res.data);
      }).catch((err) => {
        console.log("getComments err", err)
      })
  }

  return (
    <div className={styles.comments}>
      <div className={styles.comments_counter}>{`댓글 : ${comments.length}`}</div>
      <CommentForm topicId={id} getComments={getComments} />
      {
        isLogin ? <div className={styles.comments_container}>
          {comments.length !== 0 && comments.map((e) => (
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
          : <div className={styles.comments_container}>로그인 후 댓글 열람 가능합니다</div>
      }
    </div>
  )
}

export default Comments;