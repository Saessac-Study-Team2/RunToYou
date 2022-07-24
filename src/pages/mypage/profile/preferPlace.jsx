import React, { useState, useRef } from 'react';
import { addPlace, deletePlace } from '../../../library/axios';
import { useRecoilState } from 'recoil';
import { userPlaceState, locationListState } from '../../../library/atom';
import styles from './preferPlace.module.css';

const PreferPlace = () => {
  const [userPlace, setUserPlace] = useRecoilState(userPlaceState);
  const [locationList, setLocationList] = useRecoilState(locationListState);

  const [modal, setModal] = useState(false);
  const placeRef = useRef();

  const handleDeleteLocation = event => {
    event.preventDefault();
    const arr = [...userPlace];
    const deletedPlaces = arr.filter(el => {
      return Number(el[0]) !== event.target.value;
    });

    deletePlace(event.target.value) //
      .then(setUserPlace(deletedPlaces));
  };

  const handleAddLocation = async event => {
    event.preventDefault();
    setModal(!modal);
    const newPlace = placeRef.current.value;
    const currentsts = placeRef.current.text;
    const newPlaceArr = newPlace.split(',');
    const placeNumArr = userPlace.map(
      el => Number(el[0]) === Number(newPlaceArr[0])
    );
    console.log(currentsts);
    if (newPlaceArr[0] === '추가') return;
    if (!placeNumArr.includes(true)) {
      addPlace(newPlaceArr[0]) //
        .then(setUserPlace(prev => [...prev, newPlaceArr]));
    } else {
      return;
    }
  };
  return (
    <section className={styles.section}>
      <p className={styles.info}>선호 지역 : </p>
      <div className={styles.places}>
        {Array.isArray(userPlace) && userPlace.length !== 0 && (
          <ul className={styles.editPlaces}>
            {userPlace.map(el => (
              <li
                className={styles.editPlace}
                key={el[0]}
                value={el[0]}
                onClick={handleDeleteLocation}
              >
                <span
                  className={styles.placeName}
                  onClick={handleDeleteLocation}
                >
                  {el[1]}
                </span>
                <span className={styles.xmark} onClick={handleDeleteLocation}>
                  X
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <select
        className={styles.select}
        // size={8}
        ref={placeRef}
        name='place'
        onChange={handleAddLocation}
      >
        <option key='000' value={null}>
          추가
        </option>
        {locationList.map(place => (
          <option key={place.lid} value={[place.lid, place.locationName]}>
            {place.locationName}
          </option>
        ))}
      </select>
      {/* </div> */}
    </section>
  );
};

export default PreferPlace;
