import React, { useState } from "react";
import axios from "axios";
import { getLoginCookie } from "../../library/cookie";
import { useRecoilState } from "recoil";
import { isUserState } from "../../library/atom";
import styles from "./commentForm.module.css";

const CommentForm = ({ topicId, getComments }) => {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  const postComment = (topicId, topicComment) => {
    const newComment = {
      topic_tid: topicId,
      topiccomment: topicComment,
    };

    return axios
      .post(`http://34.168.215.145/topiccomments/insert`, newComment, {
        headers: { Authorization: getLoginCookie() },
      })
      .then((res) => {
        getComments();
      })
      .catch((err) => {
        console.log("postComment err", err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postComment(topicId, text);
    setText("");
  };

  return (
    <div className="comment_container">
      <form onSubmit={onSubmit}>
        <textarea
          className={styles.comment_form_textarea}
          placeholder={
            isLogin ? "댓글을 작성해주세요" : "로그인 후 댓글 작성해주세요"
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={styles.comment_form_button}
          onClick={onSubmit}
          disabled={isTextareaDisabled || !isLogin}
        >
          작성
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
