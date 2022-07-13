import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HotPlace from '../components/hotPlace';
import './recommended.css';
import data from '../static/resource/dummyData';



const Recommended = () => {
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
      {data.map((el,idx) => {
        return <RecommendedBox data = {el} key={idx}/>})}
    </div>
  );
};

function RecommendedBox (props){
  return (
  <div className='container'>
  <div className='container_left'>
    <button className='container_left_like'>좋아요</button>
    <div className='container_left_title'>{props.data.title}</div>
    <div className='container_left_location'>{props.data.location}</div>
    <div className='container_left_content'>{props.data.content}</div>
  </div>
  <div className='container_right'>
    <img src={props.data.picture} className='picture'></img>
  </div>
  </div>
  )
}

function Modal(){
  return (
    <div className='modal'>
      <span>지도 api</span>
    </div>
  )
}
export default Recommended;

