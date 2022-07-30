import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.weather_loading}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loading"
      />
    </div>
  );
};

export default Loading;
