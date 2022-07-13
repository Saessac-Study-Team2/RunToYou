import { useEffect, useState } from 'react';

function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const [currentWeatherData, setCurrentWeatherData] = useState(null)
  const [intervalWeatherData, setIntervalWeatherData] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [loading, setLoading] = useState(true)

  // 위치 추적하기
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      // 위치 추적 활성화 시, 사용자 위도/경도 받아오기
      setLatitude(data.coords.latitude)
      setLongitude(data.coords.longitude)
    }, () => {
      // 위치 추적 비활성화 or 실패 시, 디폴트 위도/경도 받아오기 (여의도 한강공원)
      setLatitude(37.526359155559)
      setLongitude(126.93352258617)
      console.log('err occurred OR location tracking blocked')
    })
  }

  // 현재 날씨 데이터 가져오기
  const getCurrentWeatherData = () => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=kr`)
      .then(res => res.json())
      .then(data => {

        const currentWeatherData = {
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          location: data.name,
          weather: data.weather[0].description,
          temp: data.main.temp,
          hum: data.main.humidity
        }

        setCurrentWeatherData(currentWeatherData)
      })
      .then(() => setLoading(false))
      .catch(() => { console.log('err') })
  }

  // 3시간 단위 날씨 데이터 가져오기
  const getIntervalWeatherData = () => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=kr&units=metric`)
      .then(res => res.json())
      .then(data => {

        const idxLimitedData = data.list.filter((el, idx) => idx > 1 && idx < 7)

        const intervalWeatherData = idxLimitedData.map((el) => (
          {
            icon: `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
            temp: el.main.temp,
            time: el.dt_txt
          }
        ))

        setIntervalWeatherData(intervalWeatherData)
      })
      .then(() => setLoading(false))
      .catch(() => { console.log('err') })
  }

  useEffect(() => {
    getLocation()
    if (latitude !== null) {
      getCurrentWeatherData()
      getIntervalWeatherData()
    }
  }, [latitude])

  if (loading) return null

  return (
    <div>
      <div className="weatherNow">
        <img src={currentWeatherData.icon} alt='weather_icon'></img>
        <div>
          <span>
            {
              latitude === 37.526359155559 && longitude === 126.93352258617 ?
                "위치 : " + currentWeatherData.location + " (위치 추적 비허용 상태)" + " / " :
                "위치 : " + currentWeatherData.location + " / "
            }
          </span>
          <span>{"날씨 : " + currentWeatherData.weather + " / "}</span>
          <span>{"온도 : " + currentWeatherData.temp + "°C / "}</span>
          <span>{"습도 : " + currentWeatherData.hum + "%"}</span>
        </div>
      </div>
      <div className="weatherThreeHourInterval">
        {intervalWeatherData && intervalWeatherData.map((el, idx) =>
          <span key={idx}>
            <img src={el.icon}></img>
            <span>{el.temp + '°C / '}</span>
            <span>{el.time.slice(11, 13) + '시'}</span>
          </span>)}
      </div>
    </div>
  );
}

export default Weather;