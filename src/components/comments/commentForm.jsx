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
  const maxLength = 1000;
  const url = "https://saessac.kro.kr:80/";

  const postComment = (topicId, topicComment) => {
    const newComment = {
      topic_tid: topicId,
      topiccomment: topicComment,
    };

    return axios
      .post(`${url}topiccomments/insert`, newComment, {
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

  function numberMaxLength(value) {
    if (value.length > maxLength) {
      setText(value.slice(0, maxLength));
    }
  }

  return (
    <div className="comment_container">
      <form onSubmit={onSubmit}>
        <textarea
          className={styles.comment_form_textarea}
          maxLength={maxLength}
          placeholder={
            isLogin ? "댓글을 작성해주세요" : "로그인 후 댓글 작성해주세요"
          }
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            numberMaxLength(e.target.value);
          }}
        />
        <div className={styles.button_N_max_length}>
          <button
            className={styles.comment_form_button}
            onClick={onSubmit}
            disabled={isTextareaDisabled || !isLogin}
          >
            작성
          </button>
          <div
            className={styles.max_length}
          >{`( ${text.length.toLocaleString()} / ${maxLength.toLocaleString()} )`}</div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
