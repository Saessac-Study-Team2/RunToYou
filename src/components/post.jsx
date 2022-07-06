
import React from "react";
import "./post.css";


// MainPage에 posts state에서 데이터를 받아서 게시글 하나를 만드는 컴포넌트
const Post = ({ post }) => {
  return (

    <li className="post__container" id={post.id}>
      <div className="post__info__col">
        <div className="post__userImage"></div>
        <span className="post__userName">{post.username}</span>
      </div>
      <div className="post__info__col2">
        <span className="post__place">{post.place}</span>
        <span className="post__like">♥︎{post.like}</span>
      </div>

      <div className="post__info__col3">
        <p className="post__content">{post.content}</p>
      </div>
      <div className="post__info__col4">
        <div className="post__recruit">
          {post.recruit === true ? "모집중" : "모집완료"}
        </div>
        <div className="post__createAt">{post.createdAt}</div>
        <button className="post__comment_downBtn">▼</button>

      </div>
    </li>
  );
};

export default Post;
