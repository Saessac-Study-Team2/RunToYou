import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wraper = styled.div`
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

  .msg {
    color: #111;
    font-size: 16px;
  }
  .target {
    color: black;
    font-size: 24px;
  }
  button {
    color: white;
    padding: 10px;
    margin-left: 4px;
    border: none;
    cursor: pointer;
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
        <h3 className='msg'>{message}</h3>
        <h1 className='target'>{target}</h1>
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
