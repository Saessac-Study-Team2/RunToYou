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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [IsUnique, setIsUnique] = useState(false);
  const [newID, setNewID] = useState(null);
  const [newPW, setNewPW] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const id = data.get('id');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    //모든 값이 들어 왔는 지 확인.
    if (!id || !password || !confirmPassword) {
      setError('모든 항목을 입력해주세요.');
      return;
    } else {
      //모든 값이 들어왔을 때
      if (!IsValidID(id)) {
        //id 확인
        console.log('아이디유효성 통과못함');
        setError(
          '아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
        );
        return;
      } else if (IsValidID(id)) {
        console.log('id 유효성 통과');
        let isOK = !checkId(id);
        if (!isOK) {
          setError('중복된 아이디 입니다.');
          return;
        }
      } else if (!(password !== confirmPassword)) {
        //비밀번호 두개 일치 확인.
        setError('비밀번호가 일치하지 않습니다.');
        return;
      }
      if (!IsValidPW(password)) {
        //비밀번호
        setError('8~16자 영문 대 소문자, 숫자를 사용하세요.');
        return;
      } else {
        console.log('id,pw셋');
        setNewID(id);
        setNewPW(password);
      }
    }
  };

  useEffect(() => {
    if (newID) signUp(newID, newPW);
  }, [newID]);

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
      .then(result => (result === 'true' ? true : false))
      .catch(error => console.log('error', error));
  };

  //err message 2 초후 삭제.
  useEffect(() => {
    if (!error) return;
    setTimeout(() => {
      setError('');
    }, 2000);
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
