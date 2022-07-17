import React, { useState } from "react";
import WriteModal from "../../../components/Modals/writeModal";
import PostPage from "../postPage";
import "./post.css";
import { Link, useNavigate } from "react-router-dom";
import { getLoginCookie } from "../../../library/cookie";
const axios = require("axios");

// MainPage에 posts state에서 데이터를 받아서 게시글 하나를 만드는 컴포넌트
const Post = ({ post, setPosts }) => {
  const handlePostDelete = () => {
    axios
      .delete(`http://34.168.215.145/topic/${post.tid}`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(function (response) {
        axios
          .get("http://34.168.215.145/topic/list")
          .then((res) => {
            setPosts(res.data);
          })
          .catch((error) => console.log("error", error));
        console.log("well done!");
      });
  };
  return (
    <li className="post__container" id={post.tid}>
      <div className="post__info__col">
        <img
          width={100}
          src={`http://34.168.215.145/${post.userPicture}`}
        ></img>
        <span className="post__userName">{post.userID}</span>
      </div>
      <div className="post__info__col2">
        <span className="post__place">{post.locationName}</span>
        <span className="post__like">♥︎{post.like}</span>
        <button onClick={handlePostDelete}>삭제</button>
      </div>

      <div className="post__info__col3">
        <h2 className="post__title">{post.topicTitle}</h2>
        <p className="post__content">{post.topicContents}</p>
      </div>
      <div className="post__info__col4">
        <div className="post__recruit">
          {post.recruit === "recruiting" ? "모집중" : "모집완료"}
        </div>
        <div className="post__createAt">{post.created_at}</div>
        <Link
          to={{
            pathname: `/post/${post.tid}`,
            state: {
              id: post.tid,
            },
          }}
        >
          <button className="post__comment_downBtn">Button</button>
        </Link>
      </div>
    </li>
  );
};

export default Post;
