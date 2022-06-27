import React from 'react';

const EditProfile = props => {
  return (
    <section className='edit__profile'>
      <div className='profile__img'>
        <input type='text'>img</input>
      </div>
      <div className='profile__content'>
        <input type='text' className='profile__name'></input>
        <input type='text' className='profile__myplace'></input>
        <input type='text' className='profile__introduce'></input>
      </div>
    </section>
  );
};

export default EditProfile;
