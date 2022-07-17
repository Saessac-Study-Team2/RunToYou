import React, { useState, useEffect } from 'react';
import Weather from './weather/weather';
import Posts from './posts/posts';
import Search from './serch/search';
import WriteModal from '../../components/Modals/writeModal';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { getLoginCookie } from '../../library/cookie';
const axios = require('axios');
const MainPage = ({ isUser, setIsUser }) => {
  const [posts, setPosts] = useState([]);
  const [writer, setWriter] = useState('');
  const [selected, setSelected] = useState('지역검색');
  const [recruit, setRecruit] = useState('모집상태');
  const [modalOpen, setModalOpen] = useState(false);
  //모달
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // 게시글 받아오기
  useEffect(() => {
    axios
      .get('http://34.168.215.145/topic/list')
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <section>
      <Header isUser={isUser} setIsUser={setIsUser} />
      <h1>MainPage</h1>
      <Search
        selected={selected}
        setSelected={setSelected}
        posts={posts}
        recruit={recruit}
        setRecruit={setRecruit}
        writer={writer}
        setWriter={setWriter}
      />
      {/* {isUser ? <button onClick={openModal}>글쓰기</button> : null} */}
      <button onClick={openModal}>글쓰기</button>
      <WriteModal open={modalOpen} close={closeModal} header='글쓰기'>
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 */}
        함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </WriteModal>
      <Weather />
      <Posts
        selected={selected}
        posts={posts}
        recruit={recruit}
        writer={writer}
      />
      <Footer />
    </section>
  );
};

export default MainPage;