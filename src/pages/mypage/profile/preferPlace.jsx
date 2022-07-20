import React, { useState, useRef } from 'react';
import { getPlace, addPlace, deletePlace } from '../../../library/axios';
import { useRecoilState } from 'recoil';

import {
  userPlaceState,
  userIDState,
  nicknameState,
  aboutMeState,
  UserAvataState,
} from '../../../library/atom';

const PreferPlace = ({ places }) => {
  const [avata, setAvata] = useRecoilState(UserAvataState);
  const [userPlace, setUserPlace] = useRecoilState(userPlaceState);
  const [userID, setUserID] = useRecoilState(userIDState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [aboutMe, setAboutMe] = useRecoilState(aboutMeState);

  const [modal, setModal] = useState(false);
  const placeRef = useRef();

  const handleSubmitPlace = async event => {
    event.preventDefault();

    const newPlace = placeRef.current.value;
    console.log(newPlace);
    const newPlaceArr = newPlace.split(',');
    console.log(newPlaceArr);
    const placeNumArr = userPlace.map(
      el => Number(el[0]) === Number(newPlace[0])
    );

    if (!placeNumArr.includes(true)) {
      addPlace(newPlaceArr);
    } else {
      return;
    }
  };

  const handleDeleteLocation = e => {
    deletePlace(e.target.value).then(
      console.log(userPlace)
      // setUserPlace(prev => {
      //   prev.filter(el => {
      //     return el[0] !== e.target.value;
      //   });
      // })
    );
  };

  const handleAddLocation = async event => {
    event.preventDefault();

    const newPlace = placeRef.current.value;
    console.log(newPlace);
    const newPlaceArr = newPlace.split(',');
    console.log(newPlaceArr);
    const placeNumArr = userPlace.map(
      el => Number(el[0]) === Number(newPlaceArr[0])
    );

    if (!placeNumArr.includes(true)) {
      addPlace(newPlaceArr[0]).then(
        setUserPlace(prev => [...prev, newPlaceArr])
      );
    } else {
      return;
    }
  };
  return (
    <section>
      {!modal && (
        <p>
          preferPlace :
          {Array.isArray(userPlace) && userPlace.length !== 0
            ? userPlace.map(el => <span key={el[0]}>{el[1]}</span>)
            : ' 선호 장소를 추가해 주세요'}
        </p>
      )}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        {!modal ? ' 선호 장소 수정 하기' : '선호 장소 수정 완료'}
      </button>
      {modal && (
        <>
          <ul>
            {userPlace.map(el => (
              <li key={el[0]} value={el[0]} onClick={handleDeleteLocation}>
                {`${el[1]} 🗑`}
              </li>
            ))}
          </ul>
          <select
            size={8}
            ref={placeRef}
            name='place'
            onChange={handleAddLocation}
          >
            <option key='000' value={null}>
              선택 시 추가됩니다.
            </option>
            {places.map(place => (
              <option key={place.lid} value={[place.lid, place.locationName]}>
                {place.locationName}
              </option>
            ))}
          </select>
        </>
      )}
    </section>
  );
};

export default PreferPlace;
