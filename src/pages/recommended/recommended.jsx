import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';



import data from '../../static/resource/dummyData';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

// import Map from '../recommended/map';
import MapContainer from './mapContainer';
import styled from 'styled-components';
import styles from './recommended.module.css';
const ModalContainer = styled.div`
width: 100px;
height: 100px;
background: tomato;
`


const Recommended = ({ isUser, setIsUser }) => {

  return (
    <div className={styles.all}>
      <Header isUser={isUser} setIsUser={setIsUser} />
      
      
      <section className={styles.recommended}>
        <div className='black-nav'>
          {/* <button onClick={() => 
            {data.map((el, idx) => {
              return <RecommendedBox data={el} key={idx} />;
            })}
          
          } style={{ color: 'grey', fontSize: '16px' }}>hotPlace</button> */}
          <button style={{ color: 'grey', fontSize: '16px' }}>hotPlace</button>
        </div>
        {data.map((el, idx) => {
          return <RecommendedBox data={el} key={idx} />;
        })}
      </section>
      
      <Footer />
    </div>
  );
};

function RecommendedBox(props) {

  let [likeBtn, setLikeBtn] = useState(0);
  
  
  function like() {
    setLikeBtn(likeBtn + 1);
  }
  let [modal, setModal] = useState(false);

  return (
    <div className='container'>
      <div className='container_left'>
        <button className='container_left_like'>
          좋아요
          <span onClick={like}>👍🏻</span> {likeBtn}
        </button>
        <div className='container_left_title'>{props.data.title}</div>
        <div className='container_left_location'>{props.data.location}</div>

        <div className='container_left_content'>{props.data.content}</div>        
        {/* <MapContainer data={props}/> */}
      </div>
      <div>
        <button onClick={() => {setModal(!modal)}}>지도보기</button>
      </div>
        {modal === true ? <Modal data={props.data}/> : null}
        {/* {modal === true ? '안녕디지몬' : null} */}
      <div className={styles.container_right}>
        <img src={props.data.picture} className={styles.picture}></img>
      </div>
    </div>
  );
}


export function Modal(props) {
  console.log('mo');
  return (
    <ModalContainer>
      
      cours marker
      <MapContainer data={props}/>
      
    </ModalContainer>
  );
}
export default Recommended;
