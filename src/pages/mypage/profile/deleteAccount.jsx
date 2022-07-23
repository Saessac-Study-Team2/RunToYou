import React, { useState } from 'react';
import { isUserState } from '../../../library/atom';
import { deleteAccount } from '../../../library/axios';
import { deleteCookie, getLoginCookie } from '../../../library/cookie';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styles from './deleteAccount.module.css';

const DeleteAccount = props => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const handleDltAccount = () => {
    deleteAccount();
    deleteCookie();
    setIsLogin(Boolean(getLoginCookie()));
    navigate('/');
  };

  return (
    <>
      {modal ? (
        <div className={styles.dltAccount}>
          <section className={styles.dltAccountModal}>
            <p>정말 떠나시는 건가요? 한 번 더 생각해 주시겠어요?</p>
            <p>
              RunToYou 에서 작성한 모든 글과 개인 정보가 삭제됩니다. 삭제된
              정보는 다시 복구 할 수 없습니다.
            </p>
            <p>더욱 발전하는 RunToYou가 되겠습니다</p>
            <p>
              풍랑은 가고 너울이 온다. 반드시 우리 다시 만나자. 권비영 풍화 중
            </p>
            <button className={styles.modalBtn} onClick={handleDltAccount}>
              떠나기
            </button>
            <button
              className={styles.modalBtn}
              onClick={() => setModal(!modal)}
            >
              머무르기
            </button>
          </section>
        </div>
      ) : (
        <div>
          <button
            className={styles.modalBtn}
            onClick={() => {
              setModal(!modal);
            }}
          >
            회원 탈퇴
          </button>
        </div>
      )}
    </>
  );
};

export default DeleteAccount;
