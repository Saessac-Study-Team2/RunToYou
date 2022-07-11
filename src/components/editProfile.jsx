import axios from 'axios';
import React, { useRef } from 'react';
import { getLoginCookie } from '../library/cookie';
import imageCompression from 'browser-image-compression';
const EditProfile = ({ addProfile, isOpen, setIsOpen }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const nickName = event.target[2].value;
    const info = event.target[4].value;

    addProfile({ nickName, info });
    setIsOpen(!isOpen);
  };

  async function handleImageUpload(event) {
    // const formData = new FormData();
    const imageFile = ref.current.files[0];
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(
        'compressedFile instanceof Blob',
        compressedFile instanceof Blob
      ); // true
      console.log(`compressedFile size ${compressedFile.size / 400 / 400} MB`); // smaller than maxSizeMB

      await uploadToServer(compressedFile); // write your own logic
    } catch (error) {
      console.log(error);
    }
  }
  const uploadToServer = async file => {
    const formData = new FormData();
    formData.append('profileImg', file);

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
    // const handleSubmitImg = async e => {
    //   const formData = new FormData();
    //   formData.append('profileImg', ref.current.files[0]);

    //   const res = await axios.post(
    //     'http://34.168.215.145/user/picture',
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         authorization: getLoginCookie(),
    //       },
    //     }
    //   );
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
          <button onClick={handleImageUpload}>이미지변경</button>
        </div>
        <div className='profile__content'>
          <label htmlFor='nickname'>Enter your nickname </label>
          <input type='text' name='nickname' id='nickname' required />
          <label htmlFor='place'>Enter your favorite place </label>
          <input type='text' name='place' id='place' required />

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
