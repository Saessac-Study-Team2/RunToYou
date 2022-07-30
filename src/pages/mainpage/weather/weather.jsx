import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./weather.module.css";
import Loading from "./loading";

function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [intervalWeatherData, setIntervalWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 위치 추적하기
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        // 위치 추적 활성화 시, 사용자 위도/경도 받아오기
        setLatitude(data.coords.latitude);
        setLongitude(data.coords.longitude);
      },
      () => {
        // 위치 추적 비활성화 or 실패 시, 디폴트 위도/경도 받아오기 (여의도 한강공원)
        setLatitude(37.526359155559);
        setLongitude(126.93352258617);
        console.log("err occurred OR location tracking blocked");
      }
    );
  };

  // 현재 날씨 데이터 가져오기
  const getCurrentWeatherData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=kr`
      )
      .then((res) => {
        const { data } = res;
        const currentWeatherData = {
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          location: data.name,
          weather: data.weather[0].description,
          temp: data.main.temp,
          hum: data.main.humidity,
          wind: data.wind.speed,
        };

        setCurrentWeatherData(currentWeatherData);
      })
      .then(() => setIsLoading(false))
      .catch(() => {
        window.location.reload();
      });
  };

  // 3시간 단위 날씨 데이터 가져오기
  const getIntervalWeatherData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=kr&units=metric`
      )
      .then((res) => {
        const { data } = res;
        const idxLimitedData = data.list.filter(
          (el, idx) => idx > 2 && idx < 9
        );

        const intervalWeatherData = idxLimitedData.map((el) => ({
          icon: `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
          temp: el.main.temp,
          time: el.dt_txt,
        }));

        setIntervalWeatherData(intervalWeatherData);
      })
      .then(() => setIsLoading(false))
      .catch(() => {
        console.log("err");
      });
  };

  useEffect(() => {
    getLocation();
    if (latitude !== null) {
      getCurrentWeatherData();
      getIntervalWeatherData();
    }
  }, [latitude]);

  return (
    <div className={styles.weather_container}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className={styles.weather_now_wrapper}>
            <div className={styles.weather_location}>
              {latitude === 37.526359155559 && longitude === 126.93352258617 ? (
                <div className={styles.location}>
                  <span>{currentWeatherData.location}</span>
                  <span> (위치 추적 비허용)</span>
                </div>
              ) : (
                <div className={styles.location}>
                  {currentWeatherData.location}
                </div>
              )}
            </div>
            <div className={styles.weather_now_graphic}>
              <img
                className={styles.weather_now_icon}
                src={currentWeatherData.icon}
                alt="weather_icon"
              />
              <div className={styles.weather_now_temp}>
                <span>{currentWeatherData.temp + "°"}</span>
              </div>
            </div>
            <div className={styles.weather_desc}>
              {currentWeatherData.weather}
            </div>
            <dl className={styles.weather_summary}>
              <dt className={styles.term}>습도</dt>
              <dd className={styles.desc}>{currentWeatherData.hum + "%"}</dd>
              <dt className={styles.term}>풍속</dt>
              <dd className={styles.desc}>{currentWeatherData.wind + "m/s"}</dd>
            </dl>
          </div>
          <ul className={styles.interval_weather_container}>
            {intervalWeatherData &&
              intervalWeatherData.map((el, idx) => (
                <li className={styles.interval_weather_wrapper} key={idx}>
                  <dl>
                    <dt className={styles.interval_time}>
                      {el.time.slice(11, 13) === "00"
                        ? "내일"
                        : el.time.slice(11, 13) + "시"}
                    </dt>
                    <img
                      className={styles.interval_weather_icons}
                      src={el.icon}
                      alt="weather_icons"
                    ></img>
                    <dd className={styles.interval_temp}>{`${el.temp}°`}</dd>
                  </dl>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Weather;
