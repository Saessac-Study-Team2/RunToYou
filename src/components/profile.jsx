import React from 'react';
import profile from '../static/profile.png';

const Profile = props => {
  return (
    <section className='Profile'>
      <div className='profile__img'>
        <img src={profile} />
      </div>
      <div className='profile__content'>
        <p className='profile__name'>user.name</p>
        <p className='profile__myplace'>user.preferPlace</p>
        <p className='profile__introduce'>user.introduce</p>
      </div>
    </section>
  );
};

export default Profile;
