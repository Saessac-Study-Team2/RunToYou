import React, { useState } from "react";
import WriteModal from "../../../components/Modals/writeModal";
import PostPage from "../postPage";
import styles from "./post.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getLoginCookie } from "../../../library/cookie";
import { getPosts, getProfile } from "../../../library/axios";
const axios = require("axios");

// MainPage에 posts state에서 데이터를 받아서 게시글 하나를 만드는 컴포넌트
const Post = ({ post, setPosts, locationList, userId }) => {
  const createdAt = post.created_at.slice(0, 9);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 글 삭제 요청
  const handlePostDelete = () => {
    axios
      .delete(`http://34.168.215.145/topic/${post.tid}`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(function (response) {
        getPosts()
          .then((data) => {
            setPosts(data);
          })
          .catch((error) => console.log("error", error));
        console.log("well done!");
      });
  };

  return (
    <li className={styles.post__container} id={post.tid}>
      <div className={styles.post__info__col1}>
        <h2 className={styles.post__title}>{post.topicTitle}</h2>
        <p className={styles.post__content}>{post.topicContents}</p>
      </div>
      <div className={styles.post__info__col2}>
        <div className={styles.post__recruit}>
          {post.recruit === "recruiting" ? "모집중" : "모집완료"}
        </div>
        <span className={styles.post__place}>{post.locationName}</span>
      </div>
      <div className={styles.post__info__col3}>
        <img
          className={styles.post__userImage}
          width={100}
          src={`http://34.168.215.145/${post.userPicture}`}
        ></img>
        <span className={styles.post__userName}>{post.userID}</span>
        <div className={styles.post__createAt}>{createdAt}</div>
      </div>
      <div className={styles.post__info__col4}></div>

      <Link
        to={{
          pathname: `/post/${post.tid}`,
          state: {
            id: post.tid,
          },
        }}
      >
        <button className={styles.postPageBtn}>더보기▼</button>
      </Link>
    </li>
  );
};

export default Post;
