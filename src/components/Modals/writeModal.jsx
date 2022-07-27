import React, { useEffect, useState } from "react";
import { getPosts } from "../../library/axios";
import { getLoginCookie } from "../../library/cookie";
import { useParams, useNavigate } from "react-router";
import "./writeModal.css";
const axios = require("axios");

const WriteModal = ({ open, close, locationList, header, setPosts, post }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const [topicTitle, setTopicTitle] = useState("");
  const [locationLid, setLocationLid] = useState(0);
  const [topicContent, setTopicContent] = useState("");
  const [recruiting, setRecruting] = useState("recruiting");
  const navigate = useNavigate();
  const recruitList = ["모집중", "모집완료"];

  useEffect(() => {
    if (header === "글수정") {
      setLocationLid(post[0].lid);
      setTopicContent(post[0].topicContents);
      setTopicTitle(post[0].topicTitle);
      setRecruting(post[0].recruit);
    }
  }, []);

  // 게시글 작성 요청
  const handleRquestSubmit = (e) => {
    e.preventDefault();
    if (header === "글쓰기") {
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
          getPosts()
            .then((data) => {
              setPosts(data);
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
    }
    if (header === "글수정") {
      axios
        .put(
          `http://34.168.215.145/topic/${post[0].tid}`,
          {
            topictitle: topicTitle,
            topiccontents: topicContent,
            recruit: recruiting,
          },
          { headers: { Authorization: getLoginCookie() } }
        )
        .then(() => {
          close();
          navigate(`/mainpage`);
        })
        .catch((err) => {
          console.log("글수정 에러");
        });
    }
  };

  const handleTopicTitle = (e) => {
    setTopicTitle(e.target.value);
  };
  const handleTopicContent = (e) => {
    setTopicContent(e.target.value);
  };
  const handleLocationLid = (e) => {
    setLocationLid(e.target.value);
  };
  const handleRecruit = (e) => {
    setRecruting(e.target.value);
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
                    return (
                      <option key={idx} value={x.lid}>
                        {x.locationName}
                      </option>
                    );
                  })}
                </select>
              </div>
              {header === "글수정" ? (
                <div>
                  <span>모집상태</span>
                  <select onChange={handleRecruit} value={recruiting}>
                    {recruitList.map((el, idx) => {
                      return (
                        <option
                          key={idx}
                          value={el === "모집중" ? "recruiting" : "recruited"}
                        >
                          {el}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : null}

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
