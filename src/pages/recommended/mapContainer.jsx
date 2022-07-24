import { useState, useEffect } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";


const MapContainer = (props) => {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
  });
  const [searchAddress, SetSearchAddress] = useState();

  // 주소 입력후 검색 클릭 시 원하는 주소로 이동
  const SearchMap = () => {
    const ps = new window.kakao.maps.services.Places()
    const placesSearchCB = function(data, status, pagination) {
      if (status === window.kakao.maps.services.Status.OK) {
        const newSearch = data[0]
        setState({
          center: { lat: newSearch.y, lng: newSearch.x }          
        })
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB); 
  }

  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value)
  }
console.log(props.data.data);

  return (
    <>
    {console.log(props.data.data)}
      <Map
        center={props.data.data.point[0]}
        isPanto={state.isPanto}
        style={{ width: "500px", height: "500px" }}
      >
        {props.data.data.point.map((e, i) => (
        <MapMarker position={e}>
          <div style={{color:"#000"}}>{props.data.data.location[i]}</div>
        </MapMarker>
        )
        )}
      </Map>
      <div>
        <input onChange={handleSearchAddress}></input>
        <button onClick={SearchMap}>클릭</button>
      </div>
    </>
  )
}

export default MapContainer