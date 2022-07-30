import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getPosts, getProfile } from '../../library/axios';
import { getLoginCookie } from '../../library/cookie';
import WriteModal from '../../components/Modals/writeModal';
import { useRecoilState } from 'recoil';
import { postsState, locationListState, userIDState } from '../../library/atom';
import Comments from '../../components/comments/comments';
import Header from '../../components/header/header';
import styles from './postPage.module.css';
import ConfirmAlert from '../../components/Modals/confirmAlert';
const axios = require('axios');

const PostPage = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  console.log(post);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useRecoilState(postsState);
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [confirmModal, setConfirmModal] = useState(false);
  const [userId, setUserId] = useRecoilState(userIDState);

  const navigate = useNavigate();

  // 서버 날짜 변환 함수
  const toLocaleDate = createdAt => {
    const createdAtKr = new Date(createdAt);
    const hours = String(createdAtKr.getHours()).padStart(2, '0');
    const minutes = String(createdAtKr.getMinutes()).padStart(2, '0');
    return `${createdAtKr.toLocaleDateString()} ${hours}:${minutes}`;
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //id로 게시글 받아오기
  useEffect(() => {
    axios
      .get(`http://34.168.215.145/topic/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(!loading);
      })
      .catch(error => console.log('error', error));
  }, []);

  const openConfirm = () => {
    setConfirmModal(!confirmModal);
  };

  const confirmDelete = res => {
    if (res) {
      openConfirm();
      PostDelete();
    } else {
      openConfirm();
    }
  };

  // 글 삭제 요청
  const PostDelete = () => {
    axios
      .delete(`http://34.168.215.145/topic/${id}`, {
        headers: { Authorization: getLoginCookie() },
      })
      .then(() => {
        getPosts()
          .then(data => {
            setPosts(data);
          })
          .then(() => {
            console.log('삭제 완료');
            navigate('/mainpage');
          });
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div className={styles.post_page_container}>
      {confirmModal && (
        <ConfirmAlert
          message={'삭제 하시겠습니까?'}
          onComfirm={confirmDelete}
        />
      )}
      <Header />
      {!loading ? (
        <div className={styles.post_page_wrapper}>
          <div className={styles.post_page_contents}>
            <h1 className={styles.post_page_title}>{post[0].topicTitle}</h1>
            <div className={styles.user_info}>
              <img
                src={`${'http://34.168.215.145/'}${post[0].userPicture}`}
              ></img>
              <div className={styles.user_profile}>
                <div className={styles.user_id}>{post[0].nickName}</div>{' '}
                <div className={styles.created_at}>
                  {toLocaleDate(post[0].created_at)}
                </div>
              </div>
              <div className={styles.button_container}>
                {userId === post[0].userID ? (
                  <button
                    className={styles.button_delete}
                    onClick={openConfirm}
                  >
                    삭제
                  </button>
                ) : null}
                {userId === post[0].userID ? (
                  <button className={styles.button_edit} onClick={openModal}>
                    수정
                  </button>
                ) : null}
              </div>
            </div>
            <div className={styles.post_page_main_text}>
              {post[0].topicContents}
            </div>
            <WriteModal
              open={modalOpen}
              close={closeModal}
              header='글수정'
              setPosts={setPosts}
              post={post}
              locationList={locationList}
            ></WriteModal>
          </div>
        </div>
      ) : null}
      <Comments id={id} />
    </div>
  );
};

export default PostPage;
