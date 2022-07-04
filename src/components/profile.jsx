import React, { useState } from 'react';
import EditProfile from './editProfile';

const Profile = ({ list, setList, addProfile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEditBtnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className='Profile'>
      {list.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
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
