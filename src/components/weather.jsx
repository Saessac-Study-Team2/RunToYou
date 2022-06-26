import { useEffect, useState } from 'react';

function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const [datas, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [weatherIcon, setWeatherIcon] = useState(null)

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

  useEffect(() => {
    getLocation()
    if (latitude !== null) getData()
  }, [latitude])

  if (loading) return null

  return (
    <div>
      <img src={weatherIcon} alt='weather_icon'></img>
      <div>
        {/* <span>{"위치 : " + datas.name + " / "}</span> */}
        <span>{"날씨 : " + datas.weather[0].description + " / "}</span>
        <span>{"온도 : " + datas.main.temp + "°C / "}</span>
        <span>{"습도 : " + datas.main.humidity + "%"}</span>
      </div>
    </div>
  );
}

export default Weather;