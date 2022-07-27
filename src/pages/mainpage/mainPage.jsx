import React, { useEffect } from "react";
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
  postsLengthState,
} from "../../library/atom";
import { getPosts } from "../../library/axios";

const axios = require("axios");
const MainPage = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [locationList, setLocationList] = useRecoilState(locationListState);

  const [postsLength, setPostsLength] = useRecoilState(postsLengthState);

  // //장소 리스트 가져오기
  // useEffect(() => {
  //   axios
  //     .get("http://34.168.215.145/location/list")
  //     .then((res) => {
  //       setLocationList(res.data);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  // 게시글 받아오기
  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data.reverse());
        setPostsLength(data.length);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.main}>
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
        <Header />
      </div>
    </>
  );
};

export default MainPage;
