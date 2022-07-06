import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HotPlace from '../components/hotPlace';
import './recommended.css';

const Recommended = () => {
  let [hotPlaceList, sethotPlaceList] = useState('더미데이터');
  let [date, setDate] = useState('날짜')
  let [likeBtn, setLikeBtn] = useState(0);
  let [modal, setModal] = useState(false);

  function like(){
    setLikeBtn(likeBtn+1)
  }

  return (
    <div className='recommended'>
      <div className='black-nav'>
        <h4 style={{color : 'grey', fontSize : '16px'}}>hotPlace</h4>
      </div>
      <Routes>
        <Route path='hotPlace' element={<HotPlace />}></Route>
      </Routes>
      <div></div>
    </div>
  );
};

function Modal(){
  return (
    <div className='modal'>
      <span>지도 api</span>
    </div>
  )
}
export default Recommended;

