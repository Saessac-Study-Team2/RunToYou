import Weather from "../components/weather";
import Posts from "../components/posts";
import Search from "../components/search";
import React, { useState, useEffect } from "react";
const axios = require("axios");

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("지역");
  useEffect(() => {
    axios
      .get("http://34.168.215.145/topic/list")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <h1>MainPage</h1>
      <Search selected={selected} setSelected={setSelected} posts={posts} />
      <Weather />
      <Posts selected={selected} posts={posts} />
    </>
  );
};

export default MainPage;
