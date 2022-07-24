import React, { useState, useRef } from 'react';
import { addProfile } from '../../../library/axios';
import { nicknameState, aboutMeState } from '../../../library/atom';
import { useRecoilState } from 'recoil';
import styles from './myinfo.module.css';

const MyInfo = () => {
  const [modal, setModal] = useState();
  const nicknameRef = useRef();
  const aboutMeRef = useRef();
  const handleSubmitNameInfo = event => {
    event.preventDefault();
    setModal(!modal);
    const nickname = nicknameRef.current.value || nickname;
    const info = aboutMeRef.current.value || aboutMe;

    addProfile(nickname, info)
      .then(setNickname(nickname))
      .then(setAboutMe(info));
  };
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [aboutMe, setAboutMe] = useRecoilState(aboutMeState);

  return (
    <>
      <section>
        <p className={styles.info}>Nickname : {nickname}</p>
        {aboutMe ? (
          <p className={styles.info}>About Me : {aboutMe}</p>
        ) : (
          <p className={styles.info}>
            aboutMe : 간단한 자기소개를 작성할 수 있습니다.
          </p>
        )}
        {!modal && (
          <button
            className={styles.modalBtn}
            onClick={() => {
              setModal(!modal);
            }}
          >
            닉네임, 자기소개 수정
          </button>
        )}
      </section>
      {modal && (
        <div className={styles.editModal}>
          <div>
            <label className={styles.editInfolable}>Nickname</label>
            <input
              className={styles.editInfoInput}
              ref={nicknameRef}
              type='text'
              name='nickname'
            />
          </div>
          <div>
            <label className={styles.editInfolable}>About Me</label>
            <textarea
              className={styles.editInfoInput}
              ref={aboutMeRef}
              name='aboutMe'
            ></textarea>
          </div>
          <button
            className={styles.changeInfoBtn}
            type='submit'
            onClick={handleSubmitNameInfo}
          >
            submit
          </button>
        </div>
      )}
    </>
  );
};

export default MyInfo;
