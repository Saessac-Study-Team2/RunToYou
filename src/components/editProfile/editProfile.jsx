import axios from 'axios';
import React, { useRef } from 'react';
import { getLoginCookie } from '../../library/cookie';
import imageCompression from 'browser-image-compression';
const EditProfile = ({
  userList,
  addProfile,
  addPlace,
  places,
  deletePlace,
  deleteImg,
  getProfile,
}) => {
  const profileImgRef = useRef();
  const nicknameRef = useRef();
  const placeRef = useRef();
  const aboutMeRef = useRef();
  const preferPlace = userList.favoritLocation;
  const handleSubmitNameInfo = event => {
    event.preventDefault();
    const nickname = nicknameRef.current.value || userList.nickName;
    const info = aboutMeRef.current.value || userList.info;

    addProfile({ nickname, info });
  };

  const handleSubmitPlace = async event => {
    event.preventDefault();
    const newPlace = Number(placeRef.current.value);
    const placeNumArr = preferPlace.map(el => Number(el[0]) === newPlace);

    if (!placeNumArr.includes(true)) {
      addPlace(newPlace);
    } else {
      return;
    }
  };
  const handleImageDelete = () => {
    deleteImg();
  };

  const handleImageUpload = async event => {
    const imageFile = profileImgRef.current.files[0];
    // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      // console.log(
      //   'compressedFile instanceof Blob',
      //   compressedFile instanceof Blob
      // ); // true
      // console.log(`compressedFile size ${compressedFile.size / 400 / 400} MB`); // smaller than maxSizeMB

      await uploadToServer(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadToServer = async file => {
    const data = {
      profileImg: file,
    };

    await axios.post('http://34.168.215.145/user/picture', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: getLoginCookie(),
      },
    });
    await getProfile();
  };
  const handleDeleteLocation = e => {
    deletePlace(e.target.value);
  };
  return (
    <section>
      <div>
        <input
          type='file'
          name='profileImg'
          id='profileImg'
          ref={profileImgRef}
        />
        <button onClick={handleImageUpload}>이미지 변경</button>
        <button onClick={handleImageDelete}>이미지 삭제</button>
      </div>

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

      <h1>선호 지역 삭제</h1>
      <ul>
        {preferPlace.map(el => (
          <li key={el[0]} value={el[0]} onClick={handleDeleteLocation}>
            {`${el[1]} 🗑`}
          </li>
        ))}
      </ul>

      <select ref={placeRef} name='place' onChange={handleSubmitPlace}>
        <option key='000' value={null}>
          선호 지역 추가
        </option>
        {places.map(place => (
          <option key={place.lid} value={place.lid}>
            {place.locationName}
          </option>
        ))}
      </select>
    </section>
  );
};

export default EditProfile;
