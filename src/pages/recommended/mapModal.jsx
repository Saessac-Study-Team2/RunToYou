import React from "react";
import styled from "styled-components";
import MapContainer from "./mapContainer";

const ModalContainer = styled.div`
  width: 100px;
  height: 100px;
  background: tomato;
`;

function MapModal(props) {
  console.log("mo");
  return (
    <ModalContainer>
      cours marker
      <MapContainer data={props} />
    </ModalContainer>
  );
}

export default MapModal;
