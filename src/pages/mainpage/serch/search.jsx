import "./search.css";
import { useRecoilState } from "recoil";
import { postsState, isUserState } from "../../../library/atom";
import WriteModal from "../../../components/Modals/writeModal";
import { useState } from "react";
import styles from "./search.module.css";

const Search = ({
  posts,
  selected,
  setSelected,
  recruit,
  setRecruit,
  writer,
  setWriter,
  myPosts,
  setMyPosts,
  setPosts,
  locationList,
}) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const locationNameList = ["강동구", "관악구", "마포구"];
  const recruitList = ["모집중", "모집완료"];
  const [modalOpen, setModalOpen] = useState(false);

  //모달
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleRecruit = (e) => {
    setRecruit(e.target.value);
  };
  const handleWriter = (e) => {
    setWriter(e.target.value);
  };
  const handleMyPosts = (e) => {
    setMyPosts(!myPosts);
  };
  for (let i = 0; i < posts.length; i++) {
    for (let key in posts[i]) {
      if (key === "locationName") {
        if (locationNameList.indexOf(posts[i][key]) === -1)
          locationNameList.push(posts[i][key]);
      }
    }
  }
  return (
    <>
      <section className={styles.search__container}>
        <div className={styles.container__col1}>
          {isLogin && (
            <button className={styles.writeBtn} onClick={openModal}>
              글쓰기
            </button>
          )}
          {isLogin ? (
            <button
              className={styles.myPosts}
              onClick={handleMyPosts}
              type="button"
            >
              {myPosts === true ? "전체보기" : "내글보기"}
            </button>
          ) : null}
          <WriteModal
            locationList={locationList}
            open={modalOpen}
            close={closeModal}
            header="글쓰기"
            setPosts={setPosts}
          ></WriteModal>
        </div>
        <div className={styles.container__col2}>
          <div className={styles.selectBox}>
            <select
              onChange={handleSelect}
              value={selected}
              className={styles.select1}
            >
              <option value={"지역검색"}>--지역--</option>
              {locationNameList.map((el, idx) => {
                return (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.selectBox}>
            <select
              onChange={handleRecruit}
              value={recruit}
              className={styles.select2}
            >
              <option value={"모집상태"}>--모집상태--</option>
              {recruitList.map((el, idx) => {
                return (
                  <option
                    key={idx}
                    value={el === "모집중" ? "recruiting" : "recruited"}
                  >
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            value={writer}
            onChange={handleWriter}
            placeholder="작성자"
            className={styles.writer}
          ></input>
        </div>
      </section>
    </>
  );
};

export default Search;
