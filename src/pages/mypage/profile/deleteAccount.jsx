import React, { useState } from "react";
import { isUserState } from "../../../library/atom";
import { deleteAccount } from "../../../library/axios";
import { deleteCookie, getLoginCookie } from "../../../library/cookie";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styles from "./deleteAccount.module.css";

const DeleteAccount = (props) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  const handleDltAccount = () => {
    deleteAccount();
    deleteCookie();
    setIsLogin(Boolean(getLoginCookie()));
    navigate("/");
  };

  return (
    <>
      {modal && (
        <div
          className={styles.dltAccount}
          onClick={() => {
            setModal(!modal);
          }}
        >
          <section
            className={styles.dltAccountModal}
            onClick={(e) => e.stopPropagation()}
          >
            <p className={styles.messasge1}>
              정말 떠나시는 건가요? 한 번 더 생각해 주시겠어요?
            </p>
            <p className={styles.messasge2}>
              RunToYou 에서 작성한 모든 글과 개인 정보가 삭제됩니다.
            </p>
            <p className={styles.messasge2}>
              삭제 된 정보는 다시 복구 할 수 없습니다.
            </p>
            <p className={styles.messasge3}>
              더욱 발전하는 RunToYou가 되겠습니다
            </p>
            <img
              className={styles.favicon}
              src={process.env.PUBLIC_URL + "/favicon.ico"}
              alt="favicon"
            />
            <div>
              <button className={styles.modalBtn} onClick={handleDltAccount}>
                떠나기
              </button>
              <button
                className={styles.modalBtn}
                onClick={() => setModal(!modal)}
              >
                머무르기
              </button>
            </div>
          </section>
        </div>
      )}

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
    </>
  );
};

export default DeleteAccount;
