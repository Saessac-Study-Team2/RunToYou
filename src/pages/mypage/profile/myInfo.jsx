import React, { useState, useRef } from 'react';
import { addProfile } from '../../../library/axios';
import { nicknameState, aboutMeState } from '../../../library/atom';
import { useRecoilState } from 'recoil';

const MyInfo = () => {
  const [modal, setModal] = useState();
  const nicknameRef = useRef();
  const aboutMeRef = useRef();
  const handleSubmitNameInfo = event => {
    event.preventDefault();
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
        <p>nickName : {nickname}</p>
        {aboutMe ? (
          <p>aboutMe : {aboutMe}</p>
        ) : (
          <p>aboutMe : 간단한 자기소개를 작성할 수 있습니다.</p>
        )}
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          닉네임, 자기소개 수정
        </button>
      </section>
      {modal && (
        <div>
          <input
            ref={nicknameRef}
            type='text'
            name='nickname'
            placeholder='nickname'
          />
          <textarea
            ref={aboutMeRef}
            name='aboutMe'
            placeholder='Please Write about you'
          ></textarea>
          <button type='submit' onClick={handleSubmitNameInfo}>
            submit
          </button>
        </div>
      )}
    </>
  );
};

export default MyInfo;
