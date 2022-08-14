import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./pages/mainpage/weather/loading";
import { isUserState } from "./library/atom";
import { useRecoilState } from "recoil";
import "./App.css";
import { getLoginCookie } from "./library/cookie";
const Intro = React.lazy(() => import("./pages/intro/intro"));
const SignUp = React.lazy(() => import("./pages/signup/signUp"));
const Login = React.lazy(() => import("./pages/login/login"));
const MainPage = React.lazy(() => import("./pages/mainpage/mainPage"));
const Recommended = React.lazy(() => import("./pages/recommended/recommended"));
const MyPage = React.lazy(() => import("./pages/mypage/myPage"));
const PostPage = React.lazy(() => import("./pages/mainpage/postPage"));
const App = props => {
  const [isLogin, setIsLogin] = useRecoilState(isUserState);
  useEffect(() => {
    setIsLogin(Boolean(getLoginCookie()));
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loading />}>
        <div className='App'>
          <Routes>
            <>
              <Route path='/' element={<Intro />}></Route>
              <Route
                path='/signup'
                element={isLogin ? <Navigate to='/mainpage' /> : <SignUp />}
              ></Route>
              <Route
                path='/login'
                element={isLogin ? <Navigate to='/mainpage' /> : <Login />}
              ></Route>
              <Route path='/mainpage' element={<MainPage />}></Route>
              <Route path='/recommended' element={<Recommended />}></Route>
              <Route
                path='/mypage/*'
                element={!isLogin ? <Navigate to='/login' /> : <MyPage />}
              ></Route>
              <Route path='/post/:id' element={<PostPage />}></Route>
            </>
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
