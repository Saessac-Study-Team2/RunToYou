import React from 'react';
import Profile from './profile/profile';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
//요청은 한번만 보내

const MyPage = () => {
  return (
    <section>
      <Header />
      <Profile />
      <Footer />
    </section>
  );
};

export default MyPage;
