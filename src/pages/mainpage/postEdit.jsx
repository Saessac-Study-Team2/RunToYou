import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const axios = require("axios");

const PostEdit = ({ locationList }) => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "http://34.168.215.145/";
  //id로 게시글 받아오기
  useEffect(() => {
    axios
      .get(`${url}topic/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(!loading);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log(id);
  console.log(post);
  return (
    <div>
      {!loading ? (
        <>
          <input value={post[0].topicTitle}></input>
          <input value={post[0].recruit}></input>
          <textarea value={post[0].topicContents}></textarea>
          {/* <select onChange={handleLocationLid} value={locationLid}>
            <option>지역을 선택해주세요</option>
            {locationList.map((x, idx) => {
              return <option value={x.lid}>{x.locationName}</option>;
            })}
          </select> */}
        </>
      ) : null}
    </div>
  );
};

export default PostEdit;
