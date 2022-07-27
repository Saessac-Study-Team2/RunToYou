import { useRecoilState, useResetRecoilState } from "recoil";
import Post from "./post";
import {
  userIDState,
  postsLengthState,
  postsState,
  isUserState,
} from "../../../library/atom";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import Search from "../serch/search";

import { render } from "@testing-library/react";
import styles from "./posts.module.css";

const Posts = ({
  // offset,
  // limit,
  // recruit,
  // writer,
  locationList,
  // myPosts,
  setFilteredPosts,
}) => {
  const [userId, setUserId] = useRecoilState(userIDState);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [postsLength, setPostsLength] = useRecoilState(postsLengthState);
  const [selected, setSelected] = useState("지역검색");
  const [recruit, setRecruit] = useState("모집상태");
  const [writer, setWriter] = useState("");
  const [myPosts, setMyPosts] = useState(false);
  const [posts, setPosts] = useRecoilState(postsState);
  const [renderPosts, setRenderPosts] = useState(posts);

  let filteredPosts = posts;

  for (let i = 0; i < posts.length; i++) {
    for (let key in posts[i]) {
      if (key === "recruit" && recruit !== "모집상태") {
        console.log("모집상태 뭐야 대체", recruit);
        filteredPosts = filteredPosts.filter((x) => {
          return x[key] === recruit;
        });
      }
      if (key === "locationName" && selected !== "지역검색") {
        filteredPosts = filteredPosts.filter((x) => {
          return x[key] === selected;
        });
      }
      if (key === "userID" && writer !== "") {
        filteredPosts = filteredPosts.filter((x) => {
          return x[key].indexOf(writer) !== -1;
        });
      }
      if (key === "userID" && myPosts !== false) {
        filteredPosts = filteredPosts.filter((x) => {
          return x[key] === userId;
        });
      }
    }
  }
  setPostsLength(filteredPosts.length);
  useEffect(() => {
    setPostsLength(filteredPosts.length);
    setPage(1);
    if (
      recruit === "모집상태" &&
      selected === "지역검색" &&
      writer === "" &&
      myPosts === false
    ) {
      setPostsLength(posts.length);
      setPage(1);
    }
  }, [selected, writer, recruit, myPosts]);
  filteredPosts = filteredPosts.slice(offset, offset + limit);

  return (
    <>
      <div className={styles.posts_Main}>
        <Search
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
          locationList={locationList}
        />

        <ul className={styles.posts__ul}>
          {filteredPosts.map((post, idx) => (
            <Post
              locationList={locationList}
              setPosts={setPosts}
              key={idx}
              userId={userId}
              post={post}
            />
          ))}
        </ul>

        <Pagination
          total={postsLength}
          limit={limit}
          page={page}
          setPage={setPage}
        ></Pagination>
      </div>
    </>
  );
};

export default Posts;
