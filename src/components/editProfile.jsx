import React from 'react';

const EditProfile = ({ addProfile }) => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value
    );
    const nickname = event.target[0].value;
    // const location = event.target[1].value;
    const info = event.target[2].value;
    addProfile({ nickname, info });
  };

  return (
    <section className='edit__profile'>
      <form action='' method='get' className='form' onSubmit={handleSubmit}>
        <div className='profile__img'>이미지 인풋</div>
        <div className='profile__content'>
          <label htmlFor='title'>Enter your nickname </label>
          <input type='text' name='name' id='name' required />
          <label htmlFor='title'>Enter your favorite place </label>
          <input type='text' name='title' id='title' required />
          <textarea
            id='story'
            name='story'
            placeholder='Please Write about you'
            required
          ></textarea>
          <input type='submit' value='submit' />
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
