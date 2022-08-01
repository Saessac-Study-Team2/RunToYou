import React, {useState} from "react";
import data from "../../static/resource/dummyData";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import RecommendedBox from "./recommendedBox";
import EventModal from "./eventModal"

// import Map from '../recommended/map';
import styles from "./recommended.module.css";

const Recommended = ({ isUser, setIsUser }) => {
  let [modals, setModals] = useState(false);
  return (
    <div className={styles.all}>
      <Header isUser={isUser} setIsUser={setIsUser} />

      <section className={styles.recommended}>
        <div className={styles.black_nav}>
          {/* <button onClick={() => 
            {data.map((el, idx) => {
              return <RecommendedBox data={el} key={idx} />;
            })}
          
          } style={{ color: 'grey', fontSize: '16px' }}>hotPlace</button> */}
          <button className={styles.hotplace}
          onClick={() => {
            setModals(!modals);
          }} >Click</button>
        {modals === true ? (
          <EventModal setModals={setModals} />
        ) : null}
        </div>
        {data.map((el, idx) => {
          return <RecommendedBox data={el} key={idx} />;
        })}
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Recommended;
