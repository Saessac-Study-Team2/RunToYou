import React, { useState, useEffect } from "react";
import Weather from "./weather/weather";
import Posts from "./posts/posts";
import Search from "./serch/search";
import WriteModal from "../../components/Modals/writeModal";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRecoilState } from "recoil";
import {
  isUserState,
  postsState,
  locationListState,
  userIDState,
} from "../../library/atom";
import { getPosts, getProfile, getPlace } from "../../library/axios";

const axios = require("axios");
const MainPage = ({ isUser, setIsUser }) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const [posts, setPosts] = useRecoilState(postsState);
  const [writer, setWriter] = useState("");
  const [selected, setSelected] = useState("지역검색");
  const [recruit, setRecruit] = useState("모집상태");
  const [modalOpen, setModalOpen] = useState(false);
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [userId, setUserId] = useRecoilState(userIDState);

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
      .then((data) => setPosts(data))
      .catch((error) => console.log("error", error));
  }, []);

  //모달
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //userId 가져오기

  return (
    <section>
      <Header isUser={isUser} setIsUser={setIsUser} />
      <h1>MainPage</h1>
      {isLogin && <button onClick={openModal}>글쓰기</button>}
      <Search
        selected={selected}
        setSelected={setSelected}
        posts={posts}
        recruit={recruit}
        setRecruit={setRecruit}
        writer={writer}
        setWriter={setWriter}
      />
      <WriteModal
        locationList={locationList}
        open={modalOpen}
        close={closeModal}
        header="글쓰기"
        setPosts={setPosts}
      ></WriteModal>
      <Weather />
      <Posts
        selected={selected}
        posts={posts}
        recruit={recruit}
        writer={writer}
        setPosts={setPosts}
        locationList={locationList}
        userId={userId}
      />
      <Footer />
    </section>
  );
};

export default MainPage;
