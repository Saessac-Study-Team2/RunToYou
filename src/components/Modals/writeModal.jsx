import React, { useState } from "react";
import "./writeModal.css";
const axios = require("axios");

const WriteModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  // const handleClickWriteBtn = () => {
  //   axios
  //     .PUT("http://34.168.215.145/topic/insert", {
  //       topictitle: "Fred",
  //       topiccontents: "Flintstone",
  //       users_uid,
  //       location_lid,
  //       type,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const [topicTitle, setTopicTitle] = useState("");
  const [locationLid, setLocationLid] = useState("지역");
  const [topicContent, setTopicContent] = useState("");
  const handleWriteSubmit = (e) => {};
  const handleTopicTitle = (e) => {
    console.log(e.target.value);
    setTopicTitle(e.target.value);
  };
  const handleTopicContent = (e) => {
    console.log(e.target.value);
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
            <form onSubmit={handleWriteSubmit}>
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
                  <option value={"중랑구"}>중랑구</option>
                  <option value={"은평구"}>은평구</option>
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
              <button onClick={handleWriteSubmit}>전송</button>
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
