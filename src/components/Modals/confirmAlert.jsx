import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Wraper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px,
    rgba(0, 0, 0, 0.3) 0px 6px 8px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 25rem;
  height: 20rem;
  img {
    width: 4rem;
    margin-bottom: 1rem;
  }
  .msg {
    color: #111;
    font-size: 16px;
    margin-bottom: 1rem;
  }
  .target {
    color: black;
    font-size: 24px;
    margin-bottom: 1rem;
  }
  button {
    width: 3rem;

    color: white;
    padding: 10px;
    margin-left: 4px;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    border-radius: 1rem;
  }
  .btns {
    display: flex;
    align-items: center;

    .true {
      background: red;
    }
    .false {
      background: green;
    }
  }
`;
const ConfirmAlert = ({ message, onComfirm, target }) => {
  return (
    <Container onClick={() => onComfirm(false)}>
      <Wraper onClick={e => e.stopPropagation()}>
        <h1 className='target'>{target}</h1>
        <h3 className='msg'>{message}</h3>
        <img src='/favicon.ico' alt='favicon' />
        <div className='btns'>
          <button className='true' onClick={() => onComfirm(true)}>
            Yes
          </button>
          <button className='false' onClick={() => onComfirm(false)}>
            No
          </button>
        </div>
      </Wraper>
    </Container>
  );
};

export default ConfirmAlert;
