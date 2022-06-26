import React from 'react';
import './signUp.css';

const SignUp = props => (
  <form id='form' autoComplete='off'>
    <section className='signUp'>
      <form id='form' className='signUp__form' autoComplete='off'>
        <div>
          <input id='id' type='text' placeholder='아이디를 입력해주세요.' />
        </div>
        <div>
          <input
            id='pw'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            autoComplete='off'
          />
        </div>
        <div>
          <input
            id='pw-check'
            type='password'
            placeholder='비밀번호 확인을 입력해주세요.'
            autoComplete='off'
          />
        </div>
        <div>
          <input id='submit' type='submit' value='가입하기' />
        </div>
      </form>
    </section>
  </form>
);

export default SignUp;
