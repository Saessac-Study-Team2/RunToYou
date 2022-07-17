import React, { useState } from "react";
import { getLoginCookie } from "../../library/cookie";
import "./writeModal.css";
const axios = require("axios");

const WriteModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, locationList, setPosts } = props;
  // const handleClickWriteBtn = () => {
  const [topicTitle, setTopicTitle] = useState("");
  const [locationLid, setLocationLid] = useState(0);
  const [topicContent, setTopicContent] = useState("");

  const handleRquestSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://34.168.215.145/topic/insert",
        {
          topictitle: topicTitle,
          topiccontents: topicContent,
          location_lid: locationLid,
          type: "friend",
        },
        { headers: { Authorization: getLoginCookie() } }
      )
      .then(function (response) {
        axios
          .get("http://34.168.215.145/topic/list")
          .then((res) => {
            setPosts(res.data);
            close();
            setTopicTitle("");
            setLocationLid(0);
            setTopicContent("");
          })
          .catch((error) => console.log("error", error));
        console.log("well done!");
      })
      .catch(function (error) {
        console.log("전송 실패");
      });
  };

  const handleTopicTitle = (e) => {
    setTopicTitle(e.target.value);
  };
  const handleTopicContent = (e) => {
    setTopicContent(e.target.value);
  };
  const handleLocationLid = (e) => {
    setLocationLid(e.target.value);
    console.log(locationLid);
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <form>
              <div>
                <span>제목</span>
                <input
                  type="text"
                  value={topicTitle}
                  onChange={handleTopicTitle}
                  placeholder="제목을 입력해주세요"
                ></input>
              </div>
              <div>
                <span>지역</span>
                <select onChange={handleLocationLid} value={locationLid}>
                  <option>지역을 선택해주세요</option>
                  {locationList.map((x, idx) => {
                    return <option value={x.lid}>{x.locationName}</option>;
                  })}
                </select>
              </div>
              <div>
                <span>내용</span>
                <textarea
                  placeholder="내용을 입력해주세요"
                  type="text"
                  className="writeModal__content"
                  value={topicContent}
                  onChange={handleTopicContent}
                ></textarea>
              </div>
              <button onClick={handleRquestSubmit}>전송</button>
            </form>
          </main>
          <footer>
            <button type="submit" className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default WriteModal;
