import React from 'react';
// import profile from '../static/profile.png';

const Profile = ({ user }) => {
  const { nickName, info, userPicture } = { ...user[0] };
  return (
    <section className='Profile'>
      <div className='profile__img'>
        <img src={userPicture}></img>
      </div>
      <div className='profile__content'>
        <p className='profile__name'>{nickName}</p>
        <p className='profile__introduce'>{info}</p>
      </div>
    </section>
  );
};

export default Profile;
