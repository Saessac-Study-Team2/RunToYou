import React, { useEffect, useState } from "react";
import Weather from "../components/weather";
import Posts from "../components/posts";
const MainPage = () => {
  const post1 = [
    {
      id: 2,
      username: "parkhacker",
      content:
        "형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.",
      createdAt: "2022-02-25T16:17:47.000Z",
      updatedAt: "2022-02-25T16:17:47.000Z",
    },
  ];
  const [posts, setPosts] = useState([...post1]); //게시글 데이터
  const onClick = () => {
    setPosts([
      ...post1,
      {
        id: 3,
        username: "Jinji",
        content:
          "진지 최고! 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.",
        createdAt: "2023-02-25T16:17:47.000Z",
        updatedAt: "2023-02-25T16:17:47.000Z",
      },
    ]);
  };

  return (
    <>
      <h1>MainPage</h1>
      <button onClick={onClick}>Submit</button>
      <Weather />
      <Posts posts={posts} />
    </>
  );
};

export default MainPage;
