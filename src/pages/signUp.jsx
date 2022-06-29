import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Alert,
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IsValid = (password, confirmPassword) => {
  if (password.length < 6 || confirmPassword.length < 6) {
    return false;
  } else if (password !== confirmPassword) {
    return false;
  } else {
    return true;
  }
};

const SignUp = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const id = data.get('id');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    if (!id || !password || !confirmPassword) {
      setError('모든 항목을 입력해주세요.');
      return;
    }
    if (!IsValid(password, confirmPassword)) {
      setError('비밀번호를 확인하세요.');
      return;
    }
    postUserData(id, password);
  };

  const confirmSignUp = (id, password) => {
    const body = {
      userid: id,
      userpassword: password,
    };

    if (checkId(id)) {
      return fetch(`http://34.168.215.145/user/insert?`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } else {
      setError('아이디중복');
    }
  };

  const checkId = id => {
    return fetch(`http://34.168.215.145/user/checkid?userid=${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => (result === 'true' ? true : false))
      .catch(error => console.log('error', error));
  };

  const postUserData = async (id, password) => {
    try {
      // setLoading(true);
      await checkId(id);
      if (checkId(id)) await confirmSignUp(id, password);
      else await alert('id 중복');
      // await confirmSignUp(id, password);
      // // console.log(checkId(id));
      // checkId(id) ? console.log('가능') : console.log('중복');
    } catch (error) {
      console.log(error);
    }
  };

  //err message 2 초후 삭제.
  useEffect(() => {
    if (!error) return;
    setTimeout(() => {
      setError('');
    }, 3000);
  }, [error]);

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'magenta' }}>
          <TagIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          회원가입
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='id'
                required
                fullWidth
                label='id'
                autoFocus
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='password'
                required
                fullWidth
                label='password'
                type='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='confirmPassword'
                required
                fullWidth
                label='confirmPassword'
                type='password'
              />
            </Grid>
          </Grid>
          {error ? (
            <Alert sx={{ mt: 3 }} severity='error'>
              {error}
            </Alert>
          ) : null}
          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            loading={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </LoadingButton>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link
                to='/login'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                계정있어? 로그인해
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
