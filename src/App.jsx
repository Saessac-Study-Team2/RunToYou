import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isUserState } from "./library/atom";
import { useRecoilState } from "recoil";
import Intro from "./pages/intro/intro";
import SignUp from "./pages/signup/signUp";
import Login from "./pages/login/login";
import MainPage from "./pages/mainpage/mainPage";
import Recommended from "./pages/recommended/recommended";
import MyPage from "./pages/mypage/myPage";
import PostPage from "./pages/mainpage/postPage";
import "./App.css";
import { getLoginCookie } from "./library/cookie";
const App = (props) => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  useEffect(() => {
    setIsLogin(Boolean(getLoginCookie()));
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <>
            <Route path="/" element={<Intro />}></Route>
            <Route
              path="/signup"
              element={isLogin ? <Navigate to="/mainpage" /> : <SignUp />}
            ></Route>
            <Route
              path="/login"
              element={isLogin ? <Navigate to="/mainpage" /> : <Login />}
            ></Route>
            <Route path="/mainpage" element={<MainPage />}></Route>
            <Route path="/recommended" element={<Recommended />}></Route>
            <Route
              path="/mypage/*"
              element={!isLogin ? <Navigate to="/login" /> : <MyPage />}
            ></Route>
            <Route path="/post/:id" element={<PostPage />}></Route>
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
