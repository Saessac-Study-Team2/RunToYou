import { useRecoilState } from "recoil";
import Post from "./post";
import { userIDState, postsState } from "../../../library/atom";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import Search from "../serch/search";
import { render } from "@testing-library/react";
import styles from "./posts.module.css";

const Posts = ({ locationList, userId }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [selected, setSelected] = useState("지역검색");
  const [recruit, setRecruit] = useState("모집상태");
  const [writer, setWriter] = useState("");
  const [myPosts, setMyPosts] = useState(false);
  const [posts, setPosts] = useRecoilState(postsState);
  let filteredPosts = posts;

  for (let i = 0; i < posts.length; i++) {
    for (let key in posts[i]) {
      if (key === "recruit" && recruit !== "모집상태") {
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
  const renderList = filteredPosts.slice(offset, offset + limit);

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
          {renderList.map((post, idx) => (
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
          total={filteredPosts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        ></Pagination>
      </div>
    </>
  );
};

export default Posts;
