import React from "react";
import styled from "styled-components";

const MainArea = styled.div`
@import url('https://fonts.googleapis.com/css?family=Lobster+Two');

h1 {
	font-family: 'Lobster Two', cursive;
	font-size: 5rem;
	text-shadow: 0px 1px 0px rgba(255, 255, 255, 1);
	color: #343434;
}

.container {
	position: relative;
	z-index: 1011;
	background-color: #f4f5f7;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 30vh;
	overflow: hidden;
}

.pulse {
	z-index: -1;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 30rem;
	
	circle {
		fill: #1ccf00;
		transform: scale(0);
		opacity: 0;
		transform-origin: 50% 50%;
		animation: pulse 2s cubic-bezier(.5,.5,0,1);
		
		&:nth-child(2) {
			fill: #efb700;
			animation: pulse 2s 0.75s cubic-bezier(.5,.5,0,1);
		}
		
		&:nth-child(3) {
			fill: #2b81f1;
			animation: pulse 2s 1.5s cubic-bezier(.5,.5,0,1);
		}
		
	}
	
}
@keyframes pulse {
	
	25% {
		opacity: 0.4;
	}
	
	100% {
		transform: scale(1);
	}
	
}
`;

const EventModal = () => {

    return (
        <>
        <MainArea>
        <div className="container">
	
        <h1>새싹2팀🧡<p/>수고하셨습니다</h1>

        <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle id="Oval" cx="512" cy="512" r="512"></circle>
      <circle id="Oval" cx="512" cy="512" r="512"></circle>
          <circle id="Oval" cx="512" cy="512" r="512"></circle>
      </svg>

    </div>
    </MainArea>
    </>
    )
}

export default EventModal;