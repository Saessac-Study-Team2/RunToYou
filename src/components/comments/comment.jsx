import React, { useState } from "react";
import axios from "axios";
import styles from "./comment.module.css";
import { getLoginCookie } from "../../library/cookie";
import { useRecoilState } from "recoil";
import { userState } from "../../library/atom";
import ConfirmAlert from "../Modals/confirmAlert";

const Comment = ({
  tcid,
  createdAt,
  nickname,
  userID,
  userPicture,
  topicComment,
  getComments,
}) => {
  const [userInfo, isUserInfo] = useRecoilState(userState);
  const [confirmModal, setConfirmModal] = useState(false);

  const createdAtKr = new Date(createdAt);
  const hours = String(createdAtKr.getHours()).padStart(2, "0");
  const minutes = String(createdAtKr.getMinutes()).padStart(2, "0");
  const createdDateAndTime = `${createdAtKr.toLocaleDateString()} ${hours}:${minutes}`;

  function deleteComment() {
    axios
      .delete(`http://34.168.215.145/topiccomments/${tcid}`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(() => {
        getComments();
      })
      .catch((err) => {
        console.log("deleteComment err", err);
      });
  }

  const deleteConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  const deleteConfirm = (answer) => {
    if (answer) {
      deleteComment();
      deleteConfirmModal();
    } else {
      deleteConfirmModal();
    }
  };

  return (
    <div key={tcid} className={styles.comment}>
      {confirmModal && (
        <ConfirmAlert
          message={"댓글을 삭제하시겠습니까?"}
          onComfirm={deleteConfirm}
        />
      )}
      <div className={styles.comment_image_container}>
        <img src={`http://34.168.215.145/${userPicture}`} alt="user-picture" />
      </div>
      <div className={styles.comment_right_part}>
        <div className={styles.comment_content}>
          <div className={styles.comment_author}>{nickname}</div>
          <div className={styles.created_at}>{createdDateAndTime}</div>
          <div className={styles.comment_text}>{topicComment}</div>
          <div className={styles.comment_actions}>
            {userInfo.userID === userID && (
              <div
                className={styles.comment_action}
                onClick={deleteConfirmModal}
              >
                삭제하기
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
