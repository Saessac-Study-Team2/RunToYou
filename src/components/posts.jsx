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
      content:
        '모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.',
      createdAt: '2022-02-24T16:17:47.000Z',
      updatedAt: '2022-02-24T16:17:47.000Z',
    },
    {
      id: 2,
      username: 'parkhacker',
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content:
        '형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.',
      createdAt: '2022-02-25T16:17:47.000Z',
      updatedAt: '2022-02-25T16:17:47.000Z',
    },
    {
      id: 3,
      username: 'leedesign',
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content:
        '모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 모든 국민은 양심의 자유를 가진다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 연소자의 근로는 특별한 보호를 받는다. 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.',
      createdAt: '2022-02-26T16:17:47.000Z',
      updatedAt: '2022-02-26T16:17:47.000Z',
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
