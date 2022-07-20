import React from "react";
import axios from "axios"
import styles from "./comment.module.css";
import { getLoginCookie } from "../../library/cookie";
import { useRecoilState } from "recoil";
import { userState } from "../../library/atom";

const Comment = ({ tcid, createdAt, nickname, userID, userPicture, topicComment, getComments }) => {
    const [userInfo, isUserInfo] = useRecoilState(userState);
    const asteriskUserId = userID.slice(0, 3) + "**"
    const userName = `${nickname} (${asteriskUserId})`

    const createdAtKr = new Date(createdAt);
    const hours = String(createdAtKr.getHours()).padStart(2, '0')
    const minutes = String(createdAtKr.getMinutes()).padStart(2, '0')
    const createdDateAndTime = `${createdAtKr.toLocaleDateString()} ${hours}:${minutes}`

    console.log(userInfo)
    // 로그인 유지 중에도 유저 정보가 들어왔다 안들어왔다 함

    function deleteComment(tcid) {
        if (window.confirm("댓글을 지우시겠습니까?")) {
            return axios
                .delete(`http://34.168.215.145/topiccomments/${tcid}`, {
                    headers: { Authorization: getLoginCookie() }
                })
                .then((res) => {
                    getComments();
                }).catch((err) => {
                    console.log("deleteComment err", err)
                })
        }
    }

    return (
        <div key={tcid} className={styles.comment}>
            <div className={styles.comment_image_container}>
                <img src={`http://34.168.215.145/${userPicture}`} alt="user-picture" />
            </div>
            <div className={styles.comment_right_part}>
                <div className={styles.comment_content}>
                    <div className={styles.comment_author}>{userName}</div>
                    <div className={styles.created_at}>{createdDateAndTime}</div>
                    <div className={styles.comment_text}>{topicComment}</div>
                    <div className={styles.comment_actions}>
                        {userInfo.userID === userID && <div
                            className={styles.comment_action}
                            onClick={() => deleteComment(tcid)}
                        >
                            Delete
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;