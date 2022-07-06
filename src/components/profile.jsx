import React, { useState } from 'react';
import EditProfile from './editProfile';

const Profile = ({ list, setList, addProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEditBtnClick = () => {
    setIsOpen(!isOpen);
  };
  const userId = list[0];
  const profileImg = list[1];
  const nickName = list[2];
  const aboutMe = list[3];
  const preferPlace = list[4];

  return (
    <section className='Profile'>
      <div>
        <div>id : {userId}</div>
        <img src={`http://34.168.215.145/${profileImg}`} />
        <div>nickName : {nickName}</div>
        <div>aboutMe : {aboutMe}</div>
        <div>preferPlace : {preferPlace}</div>
      </div>
      <button onClick={handleEditBtnClick}>editProfile</button>
      {isOpen ? (
        <EditProfile
          addProfile={addProfile}
          list={list}
          setList={setList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </section>
  );
};

export default Profile;
