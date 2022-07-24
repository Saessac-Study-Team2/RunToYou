import React, { useState, useEffect } from "react";
import Weather from "./weather/weather";
import Posts from "./posts/posts";
import WriteModal from "../../components/Modals/writeModal";
import Header from "../../components/header/header";
import styles from "./mainPage.module.css";
import Footer from "../../components/footer/footer";

import { useRecoilState } from "recoil";
import {
  isUserState,
  postsState,
  locationListState,
  userIDState,
  postsLengthState,
} from "../../library/atom";
import { getPosts } from "../../library/axios";

const axios = require("axios");
const MainPage = ({ isUser, setIsUser }) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [posts, setPosts] = useRecoilState(postsState);
  const [modalOpen, setModalOpen] = useState(false);
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [userId, setUserId] = useRecoilState(userIDState);
  const [postsLength, setPostsLength] = useRecoilState(postsLengthState);
  //장소 리스트 가져오기
  useEffect(() => {
    axios
      .get("http://34.168.215.145/location/list")
      .then((res) => {
        setLocationList(res.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // 게시글 받아오기
  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
        setPostsLength(data.length);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //모달
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.mainPage}>
        <Header isUser={isUser} setIsUser={setIsUser} />
        <div className={styles.main}>
          {isLogin && <button onClick={openModal}>글쓰기</button>}
          <WriteModal
            locationList={locationList}
            open={modalOpen}
            close={closeModal}
            header="글쓰기"
            setPosts={setPosts}
          ></WriteModal>
          <div className={styles.mainContents}>
            <Weather />
            <Posts
              posts={posts}
              setPosts={setPosts}
              locationList={locationList}
            />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainPage;
