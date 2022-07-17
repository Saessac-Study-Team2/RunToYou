import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const axios = require("axios");

const PostPage = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "http://34.168.215.145/";
  //id로 게시글 받아오기
  useEffect(() => {
    axios
      .get(`${url}topic/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(!loading);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log(id);
  console.log(post);
  return (
    <div>
      {!loading ? (
        <>
          <h1>제목:{post[0].topicTitle}</h1>
          <div>내용:{post[0].topicContents}</div>
          <img width={100} src={`${url}${post[0].userPicture}`}></img>
          <div>작성자:{post[0].userID}</div>
          <div>{post[0].created_at}</div>
        </>
      ) : null}
    </div>
  );
};

export default PostPage;
