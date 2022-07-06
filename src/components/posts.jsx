import React from 'react';
import Post from './post';
const Posts = () => {
  const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

  const posts = [
    //테스트용 더미데이터
    {
      id: 1,
      username: 'kimcoding',
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,


      content: "오늘 저녁에 같이 뛰실 분 ! ",
      place: "한강공원",
      like: 8,
      recruit: true,
      createdAt: "15분전",
      updatedAt: "2022-02-24T16:17:47.000Z",

    },
    {
      id: 2,
      username: 'parkhacker',
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,

      content: "경의선숲길 선착순 3명 모십니다",
      place: "경의선숲길",
      recruit: false,
      like: 1,
      createdAt: "2시간전",
      updatedAt: "2022-02-25T16:17:47.000Z",

    },
    {
      id: 3,
      username: 'leedesign',
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,

      content: "같이 뛰실 분",
      place: "서울숲",
      recruit: true,
      like: 3,
      createdAt: "2022.07.05",
      updatedAt: "2022-02-26T16:17:47.000Z",

    },
  ];

  return (
    <ul>
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
