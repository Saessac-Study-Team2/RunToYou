import React, { useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { addImg, deleteImg, getProfile } from '../../../library/axios';
import styles from './avata.module.css';
const Avata = ({ avata, setAvata }) => {
  const profileImgRef = useRef();
  // const [modal, setModal] = useState(false);
  const onButtonClick = event => {
    event.preventDefault();
    profileImgRef.current.click();
  };

  const handleImageUpload = async event => {
    const imageFile = profileImgRef.current.files[0];
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
      await onAddImg(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };
  const onAddImg = async compressedFile => {
    await addImg(compressedFile);
    await getProfile()
      .then(res => {
        if (res !== undefined) {
          console.log(res);
          setAvata(res.userPicture);
        }
      })
      .catch(error => {
        console.log('getUserInfo error', error);
      });
  };

  const handleImageDelete = async () => {
    await deleteImg();
    await getProfile()
      .then(res => {
        if (res !== undefined) {
          console.log(res);
          setAvata(res.userPicture);
        }
      })
      .catch(error => {
        console.log('getUserInfo error', error);
      });
  };
  return (
    <section className={styles.avata}>
      <div className={styles.avataWrapper}>
        <div className={styles.avataCentered}>
          <img
            name='file'
            className={styles.avataImg}
            src={`http://34.168.215.145/${avata}`}
            alt='profile img'
          />
          <input
            className={styles.imgInput}
            accept='image/*'
            type='file'
            name='profileImg'
            id='profileImg'
            ref={profileImgRef}
            onChange={handleImageUpload}
          />
        </div>
      </div>

      <button className={styles.modalBtn} onClick={onButtonClick}>
        이미지 변경
      </button>
      <button className={styles.dltImgBtn} onClick={handleImageDelete}>
        이미지 삭제
      </button>
    </section>
  );
};
export default Avata;
