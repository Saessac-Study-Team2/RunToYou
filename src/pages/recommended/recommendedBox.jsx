import React, { useState } from "react";
import MapModal from "./mapModal";
import styles from "./recommendedBox.module.css";

function RecommendedBox(props) {
  let [likeBtn, setLikeBtn] = useState(0);

  function like() {
    setLikeBtn(likeBtn + 1);
  }
  let [modal, setModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <button className={styles.container_left_like}>
          좋아요
          <span onClick={like}>👍🏻</span> {likeBtn}
        </button>
        <div className={styles.container_left_title}>{props.data.title}</div>
        <div className={styles.container_left_location}>
          {props.data.location}
        </div>

        <div className={styles.container_left_content}>
          {props.data.content}
        </div>
        {/* <MapContainer data={props}/> */}
      </div>
      <div>
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          지도보기
        </button>
      </div>
      {modal === true ? <MapModal data={props.data} /> : null}
      {/* {modal === true ? '안녕디지몬' : null} */}
      <div className={styles.container_right}>
        <img src={props.data.picture} className={styles.picture}></img>
      </div>
    </div>
  );
}

export default RecommendedBox;
