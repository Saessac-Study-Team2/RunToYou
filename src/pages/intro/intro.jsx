import React from "react";
import { useRecoilState } from "recoil";
import { isUserState } from "../../library/atom";
import styles from "./intro.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

const Intro = () => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);

  return (
    <section className={styles.bgImg}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={process.env.PUBLIC_URL + "/img/logo1.png"}
          alt="logo_img"
        />
        <div className={styles.buttonContainer}>
          {isLogin ? (
            <Link className={styles.link} to="/mainpage">
              <button className={styles.button}>Main Page</button>
            </Link>
          ) : (
            <>
              <Link className={styles.link} to="/login">
                <button className={styles.button}>Log in</button>
              </Link>
              <Link className={styles.link} to="/signup">
                <button className={styles.button}>Sign up</button>
              </Link>
              <Link className={styles.link} to="/mainpage">
                <button className={styles.button}>Guest</button>
              </Link>
            </>
          )}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Intro;
