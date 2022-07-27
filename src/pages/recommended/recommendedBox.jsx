import React, { useState } from "react";
import MapModal from "./mapModal";
import styles from "./recommendedBox.module.css";

function RecommendedBox(props) {
  // let [likeBtn, setLikeBtn] = useState(0);
  let [modal, setModal] = useState(false);

  // function like() {
  //   setLikeBtn(likeBtn + 1);
  // }

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_title}>{props.data.title}</div>
        <div className={styles.container_left_location}>
          {props.data.location}
        </div>

        <div className={styles.container_left_content}>
          {props.data.content}
        </div>
        {/* <MapContainer data={props}/> */}
        {/* <div className={styles.like_Btn}>
          <button className={styles.container_left_like}>
            <span onClick={like}>좋아요👍🏻</span> {likeBtn}
          </button>
        </div> */}
      </div>
      <div>
        <div className={styles.container_right}>
          <img src={props.data.picture} className={styles.picture}></img>
        </div>
        <div className={styles.api}>
          <button
            className={styles.api_btn}
            onClick={() => {
              setModal(!modal);
            }}
          >
            지도보기
          </button>
        </div>
        {modal === true ? (
          <MapModal data={props.data} setModal={setModal} />
        ) : null}
        {/* {modal === true ? '안녕디지몬' : null} */}
      </div>
    </div>
  );
}

export default RecommendedBox;
