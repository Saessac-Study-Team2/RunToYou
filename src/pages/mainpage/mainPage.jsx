import React, { useState, useEffect } from "react";
import Weather from "./weather/weather";
import Posts from "./posts/posts";
import Search from "./serch/search";
import WriteModal from "../../components/Modals/writeModal";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./mainPage.module.css";

import { useRecoilState } from "recoil";
import {
  isUserState,
  postsState,
  locationListState,
  userIDState,
  postsLengthState,
} from "../../library/atom";
import { getPosts, getProfile, getPlace } from "../../library/axios";
import Pagination from "../../components/Pagination/Pagination";
import { style } from "@mui/system";

const axios = require("axios");
const MainPage = ({ isUser, setIsUser }) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [posts, setPosts] = useRecoilState(postsState);
  // const [writer, setWriter] = useState("");
  // const [selected, setSelected] = useState("지역검색");
  // const [recruit, setRecruit] = useState("모집상태");
  const [modalOpen, setModalOpen] = useState(false);
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [userId, setUserId] = useRecoilState(userIDState);
  // const [myPosts, setMyPosts] = useState(false);
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(1);
  const [postsLength, setPostsLength] = useRecoilState(postsLengthState);
  // const offset = (page - 1) * limit;

  //장소 리스트 가져오기
  useEffect(() => {
    axios
      .get("http://34.168.215.145/location/list")
      .then((res) => {
        setLocationList(res.data);
        console.log("장소완료");
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
      <Header isUser={isUser} setIsUser={setIsUser} />
      <main className={styles.mainBody}>
        <section>
          <h1>MainPage</h1>
          {isLogin && <button onClick={openModal}>글쓰기</button>}
          {/* <Search
        selected={selected}
        setPosts={setPosts}
        setSelected={setSelected}
        posts={posts}
        recruit={recruit}
        setRecruit={setRecruit}
        writer={writer}
        setWriter={setWriter}
        myPosts={myPosts}
        setMyPosts={setMyPosts}
        userId={userId}
      /> */}
          <WriteModal
            locationList={locationList}
            open={modalOpen}
            close={closeModal}
            header="글쓰기"
            setPosts={setPosts}
          ></WriteModal>
          <Weather />
          <Posts
            // offset={offset}
            // limit={limit}
            // selected={selected}
            posts={posts}
            // recruit={recruit}
            // writer={writer}
            setPosts={setPosts}
            locationList={locationList}
            // myPosts={myPosts}
            // setMyPosts={setMyPosts}
          />
          {/* <Pagination
        total={postsLength}
        limit={limit}
        page={page}
        setPage={setPage}
      ></Pagination> */}

          <Footer />
        </section>
      </main>
    </>
  );
};

export default MainPage;
