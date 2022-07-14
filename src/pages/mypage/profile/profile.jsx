import React, { useState } from 'react';
import EditProfile from '../../../components/editProfile/editProfile';

const Profile = ({
  userList,
  setUserList,
  addProfile,
  getPlace,
  addPlace,
  places,
  deletePlace,
  deleteImg,
  getProfile,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEditBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const { favoritLocation, info, nickName, userID, userPicture } = userList;
  return (
    <section className='Profile'>
      <div>
        <p>id : {userID}</p>
        <img src={`http://34.168.215.145/${userPicture}`} alt='profile img' />
        <p>nickName : {nickName}</p>
        <p>aboutMe : {info}</p>
        <p>
          preferPlace :
          {Array.isArray(favoritLocation) &&
            favoritLocation.map(el => <span key={el[0]}>{el[1]}</span>)}
        </p>
      </div>
      <button onClick={handleEditBtnClick}>editProfile</button>
      {isOpen ? (
        <EditProfile
          deletePlace={deletePlace}
          getProfile={getProfile}
          places={places}
          getPlace={getPlace}
          addPlace={addPlace}
          addProfile={addProfile}
          userList={userList}
          setUserList={setUserList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          deleteImg={deleteImg}
        />
      ) : null}
    </section>
  );
};

export default Profile;
