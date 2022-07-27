import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getPosts, getProfile } from "../../library/axios";
import { getLoginCookie } from "../../library/cookie";
import WriteModal from "../../components/Modals/writeModal";
import { useRecoilState } from "recoil";
import { postsState, locationListState, userIDState } from "../../library/atom";
import Comments from "../../components/comments/comments";
import Header from "../../components/header/header";
import styles from "./postPage.module.css";
import ConfirmAlert from "../../components/Modals/confirmAlert";
const axios = require("axios");

const PostPage = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useRecoilState(postsState);
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [userId, setUserId] = useRecoilState(userIDState);
  const [confirmModal, setConfirmModal] = useState(false);

  const navigate = useNavigate();

  // 날짜
  // const createdAtKr = new Date(post[0].created_at);
  // const hours = String(createdAtKr.getHours()).padStart(2, "0");
  // const minutes = String(createdAtKr.getMinutes()).padStart(2, "0");
  // const createdDateAndTime = `${createdAtKr.toLocaleDateString()} ${hours}:${minutes}`;

  // 자동적인 get 요청에 useEffect 없음, 리코일로 전역 관리되는 userState에서 userID 받아오면..
  //userID 가져오기
  const getUserInfo = () => {
    getProfile()
      .then((res) => {
        setUserId(res.userID);
      })
      .then((res) => {
        console.log("user id가져오기");
      })
      .catch((error) => {
        console.log("getUserInfo error", error);
      });
  };
  getUserInfo();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //id로 게시글 받아오기
  useEffect(() => {
    axios
      .get(`http://34.168.215.145/topic/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(post);
        setLoading(!loading);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const openConfirm = () => {
    setConfirmModal(!confirmModal);
  };

  const confirmDelete = (res) => {
    if (res) {
      openConfirm();
      PostDelete();
    } else {
      openConfirm();
    }
  };

  // 글 삭제 요청
  const PostDelete = () => {
    axios
      .delete(`http://34.168.215.145/topic/${id}`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(() => {
        getPosts()
          .then((data) => {
            setPosts(data);
          })
          .then(() => {
            console.log("삭제 완료");
            navigate("/mainpage");
          });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className={styles.post_page_container}>
      {confirmModal && (
        <ConfirmAlert
          message={"삭제 하시겠습니까?"}
          onComfirm={confirmDelete}
        />
      )}
      <Header />
      {!loading ? (
        <div className={styles.post_page_wrapper}>
          <div className={styles.post_page_contents}>
            <h1>제목:{post[0].topicTitle}</h1>
            <div>내용:{post[0].topicContents}</div>
            <img
              className={styles.user_image}
              src={`${"http://34.168.215.145/"}${post[0].userPicture}`}
            ></img>
            <div>작성자:{post[0].userID}</div>
            <div>{post[0].created_at}</div>
            <WriteModal
              open={modalOpen}
              close={closeModal}
              header="글수정"
              setPosts={setPosts}
              post={post}
              locationList={locationList}
            ></WriteModal>
            {userId === post[0].userID ? (
              <button onClick={openConfirm}>삭제</button>
            ) : null}
            {userId === post[0].userID ? (
              <button onClick={openModal}>수정</button>
            ) : null}
          </div>
        </div>
      ) : null}
      <Comments id={id} />
    </div>
  );
};

export default PostPage;
