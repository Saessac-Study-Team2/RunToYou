import React from "react";
import Post from "./post";
const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <ul>
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
