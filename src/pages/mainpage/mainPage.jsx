import React, { useEffect, useState } from "react";
import Weather from "./weather/weather";
import Posts from "./posts/posts";
import Header from "../../components/header/header";
import styles from "./mainPage.module.css";
import Footer from "../../components/footer/footer";
import { useRecoilState } from "recoil";
import {
  postsState,
  locationListState,
  userIDState,
  userState,
} from "../../library/atom";
import { getPosts, getUsers } from "../../library/axios";
const axios = require("axios");
const MainPage = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useRecoilState(userIDState);

  // 게시글 받아오기
  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data.reverse());
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    getUsers() //
      .then((res) => setUsers(res));
  }, []);

  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.main}>
          <div className={styles.mainContents}>
            <Weather />
            <Posts
              userId={userId}
              users={users}
              posts={posts}
              setPosts={setPosts}
              locationList={locationList}
            />
          </div>
        </div>
        {/* <Footer /> */}
        <Header />
      </div>
    </>
  );
};

export default MainPage;
