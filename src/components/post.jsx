import React from 'react';

// MainPage에 posts state에서 데이터를 받아서 게시글 하나를 만드는 컴포넌트
const Post = ({ post }) => {
  return (
    <li className='post' id={post.id}>
      <div className='userInfo'>
        <span className='userName'>{post.username}</span>
        <span className='post__createAt'></span>
      </div>
      <div className='postInfo'>
        <p className='postContent'>{post.content}</p>
      </div>
    </li>
  );
};

export default Post;
