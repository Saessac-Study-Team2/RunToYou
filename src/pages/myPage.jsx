import React, { useState } from 'react';
import Profile from '../components/profile';
// import Filtering from '../components/filtering';

const MyPage = ({ posts, setPosts }) => {
  const [selected, setSelected] = useState('all');

  const selectBoxChange = event => {
    setSelected(event.target.value);
  };

  // const selectedPosts = posts.filter(post => {
  //   return post.username === selected;
  // });

  return (
    <>
      <h1>Mypage</h1>
      <Profile />
      {/* <Filtering
        selected={selected}
        setSelected={setSelected}
        selectBoxChange={selectBoxChange}
      /> */}
      {/* <ul className='myPosts'>
        {selected === 'all' //처음이면 전부 다 보여줘.
          ? posts.map(post => {
              return <Post />;
            })
          : selectedPosts.map(post => {
              //처음 아니라면 셀렉된 옵션값거
              return <Post />;
            })}
      </ul> */}
    </>
  );
};

export default MyPage;
