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

const Login = props => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [ID, setID] = useState(null);
  const [PW, setPW] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const id = data.get('id');
    const password = data.get('password');

    if (!id || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    } else {
      setID(id);
      setPW(password);
    }
  };

  const login = (ID, PW) => {
    const body = {
      userid: ID,
      userpassword: PW,
    };

    fetch('http://34.168.215.145/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    if (ID) login(ID, PW);
  }, [ID]);

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
          로그인
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
            로그인
          </LoadingButton>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link
                to='/signup'
                style={{ textDecoration: 'none', color: 'black' }}
              >
                계정없어? 가입해
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
