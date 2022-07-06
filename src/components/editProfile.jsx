import axios from 'axios';
import React, { useRef } from 'react';
import { getLoginCookie } from '../library/cookie';

const EditProfile = ({ addProfile, isOpen, setIsOpen }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const nickName = event.target[0].value;
    const info = event.target[2].value;
    addProfile({ nickName, info });
    setIsOpen(!isOpen);
  };
  const handleSubmitImg = async e => {
    const formData = new FormData();
    formData.append('profileImg', ref.current.files[0]);

    const res = await axios.post(
      'http://34.168.215.145/user/picture',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: getLoginCookie(),
        },
      }
    );

    console.log(res.data);
  };
  const ref = useRef(null);

  return (
    <section className='edit__profile'>
      <form action='' method='get' className='form' onSubmit={handleSubmit}>
        <div className='profile__img'>
          이미지 인풋
          <label htmlFor='profileImg'>Enter your image</label>
          <input
            type='file'
            name='profileImg'
            id='profileImg'
            ref={ref}
          ></input>
          <button onClick={handleSubmitImg}>이미지변경</button>
        </div>
        <div className='profile__content'>
          <label htmlFor='nickname'>Enter your nickname </label>
          <input type='text' name='nickname' id='nickname' required />
          <label htmlFor='title'>Enter your favorite place </label>
          <input type='text' name='title' id='title' required />
          <textarea
            id='story'
            name='story'
            placeholder='Please Write about you'
            required
          ></textarea>
          <input type='submit' value='submit' />
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
