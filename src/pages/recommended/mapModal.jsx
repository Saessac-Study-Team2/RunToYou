import React from "react";
import styled from "styled-components";
import MapContainer from "./mapContainer";

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

function MapModal(props) {
  console.log("mo");
  return (
    <ModalBackdrop>
      <MapContainer data={props} />
    </ModalBackdrop>
  );
}

export default MapModal;
