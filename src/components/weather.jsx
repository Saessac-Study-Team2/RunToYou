import { useEffect, useState } from 'react';

function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [weatherIcon, setWeatherIcon] = useState(null)

  const [weatherIcons, setWeatherIcons] = useState(null)

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      setLatitude(data.coords.latitude)
      setLongitude(data.coords.longitude)
    }, () => { console.log('err') })
  }

  const getData = () => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=kr`)
      .then(res => res.json())
      .then(data => {
        const weatherIcon = data.weather[0].icon;
        const weatherIconAdress = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        setData(data)
        setWeatherIcon(weatherIconAdress)
      })
      .then(() => setLoading(false))
      .catch(() => { console.log('err') })
  }

  const getThreeHourIntervalData = () => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=kr&units=metric`)
      .then(res => res.json())
      .then(data => {

        const idxLimitedData = data.list.filter((el, idx) => idx > 1 && idx < 7)

        const weatherDatas = idxLimitedData.map((el) => (
          {
            temp: el.main.temp + '°C',
            icon: `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
            time: el.dt_txt.slice(11, 13) + '시'
          }
        ))

        setWeatherIcons(weatherDatas)
      })
      .then(() => setLoading(false))
      .catch(() => { console.log('err') })
  }

  useEffect(() => {
    getLocation()
    if (latitude !== null) {
      getData()
      getThreeHourIntervalData()
    }
  }, [latitude])

  if (loading) return null

  return (
    <div>
      <div className="weatherNow">
        <img src={weatherIcon} alt='weather_icon'></img>
        <div>
          {/* <span>{"위치 : " + data.name + " / "}</span> */}
          <span>{"날씨 : " + data.weather[0].description + " / "}</span>
          <span>{"온도 : " + data.main.temp + "°C / "}</span>
          <span>{"습도 : " + data.main.humidity + "%"}</span>
        </div>
      </div>
      <div className="weatherThreeHourInterval">
        {weatherIcons && weatherIcons.map((el, idx) =>
          <span key={idx}>
            <img src={el.icon}></img>
            <span>{el.temp}</span>
            <span>{el.time}</span>
          </span>)}
      </div>
    </div>
  );
}

export default Weather;