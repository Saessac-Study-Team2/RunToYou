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

const IsValidID = id => {
  const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$');
  return ID_REGEX.test(id);
};
const IsValidPW = (password, confirmPassword) => {
  const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$');
  return PW_REGEX.test(password);
};

const SignUp = () => {
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newID, setNewID] = useState(null);
  const [newPW, setNewPW] = useState(null);

  const handleSubmit = async event => {
    setError([]);

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const id = data.get('id');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    let isOK = await checkId(id);

    if (!id || !password || !confirmPassword) {
      setError(prev => [...prev, '모든 항목을 입력해주세요.']);
      return;
    }

    if (!IsValidID(id)) {
      setError(prev => [
        ...prev,
        '아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
      ]);
    }

    if (!isOK) {
      setError(prev => [...prev, '중복된 아이디 입니다.']);
    }

    if (password !== confirmPassword) {
      setError(prev => [...prev, '비밀번호가 일치하지 않습니다.']);
    }

    if (!IsValidPW(password)) {
      setError(prev => [
        ...prev,
        '비밀번호는 8~16자 영문 대 소문자, 숫자를 사용하세요.',
      ]);
    }
    if (error.length === 0) {
      setNewID(id);
      setNewPW(password);
    }
  };

  const signUp = (id, password) => {
    const body = {
      userid: id,
      userpassword: password,
    };

    fetch(`http://34.168.215.145/user/insert?`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  const checkId = id => {
    return fetch(`http://34.168.215.145/user/checkid?userid=${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => response.msg)
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    if (newID) {
      signUp(newID, newPW);
    }
  }, [newID]);

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
          {error.map(el => (
            <Alert sx={{ mt: 3 }} severity='error'>
              {el}
            </Alert>
          ))}

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
                이미 계정이 있으신가요? 로그인하기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
