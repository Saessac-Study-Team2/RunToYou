import React, { useEffect, useState } from "react";
import WriteModal from "../../../components/Modals/writeModal";
import PostPage from "../postPage";
import styles from "./post.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getLoginCookie } from "../../../library/cookie";
import { getPosts, getProfile, getUsers } from "../../../library/axios";
const axios = require("axios");

// MainPage에 posts state에서 데이터를 받아서 게시글 하나를 만드는 컴포넌트
const Post = ({ post, setPosts, locationList, userId, users }) => {
  const createdAt = post.created_at.slice(0, 10);
  const [modalOpen, setModalOpen] = useState(false);
  const [writer2, setWriter] = useState({});
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 글 삭제 요청
  const handlePostDelete = () => {
    axios
      .delete(`https://saessac.kro.kr:80/topic/${post.tid}`, {
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
  const getWritersInfo = () => {
    // console.log(post.userID);
    // console.log(users);
    const writer = users.filter((el) => {
      return el.userID === post.userID;
    });
    console.log(writer[0]);
    setWriter(writer[0]);
    console.log(writer2);
    setModal(!modal);
  };

  return (
    <>
      <li className={styles.post__container} id={post.tid}>
        <div className={styles.post__info__col1}>
          <h2 className={styles.post__title}>{post.topicTitle}</h2>
          <p className={styles.post__content}>{post.topicContents}</p>
        </div>
        <div className={styles.post__info__col2}>
          <div
            className={
              post.recruit === "recruiting"
                ? styles.post__recruiting
                : styles.post__recruited
            }
          >
            {post.recruit === "recruiting" ? "모집중" : "모집완료"}
          </div>
          <span className={styles.post__place}>{post.locationName}</span>
        </div>
        <div className={styles.post__info__col3}>
          <img
            onClick={getWritersInfo}
            className={styles.post__userImage}
            width={100}
            src={`https://saessac.kro.kr:80/${post.userPicture}`}
          ></img>
          <span className={styles.post__userName}>{post.nickName}</span>
          <div className={styles.post__createAt}>{createdAt}</div>
          {modal && (
            <>
              <p>{writer2.info}</p>
            </>
          )}
        </div>
        <div className={styles.post__info__col4}>
          <Link
            to={{
              pathname: `/post/${post.tid}`,
              state: {
                id: post.tid,
              },
            }}
          >
            <button className={styles.postPageBtn}>더보기</button>
          </Link>
        </div>
      </li>
    </>
  );
};

export default Post;
