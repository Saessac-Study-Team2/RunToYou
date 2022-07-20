// import React, {useEffect, useRef} from "react";

// const Map = () => {
//     const mapRef = useRef();

//     const loadMap=()=> {
//         window.kakao.maps.load(()=>{
//             if(mapRef.current){
//                 const options = {
//                     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//                     level: 3
//                 };
//                 const map = new window.kakao.maps.Map(mapRef.current, options);              
//             }
//         });
//     };
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.type = "text/javascript";
//         script.src ="//dapi.kakao.com/v2/maps/sdk.js?appkey=b8e29d56ed569599b109eb6a9fc059f9&autoload=false";
//         document.head.appendChild(script);

//         script.onload = () => {
//             loadMap();
//         }

//     },[]);
//     return <section>
//         <div ref={mapRef} style={{width: 500, height: 500}}>

//         </div>
//     </section>
// };




// export default Map;