import "./search.css";
import { useRecoilState } from "recoil";
import { postsState } from "../../../library/atom";

const Search = ({
  posts,
  selected,
  setSelected,
  recruit,
  setRecruit,
  writer,
  setWriter,
}) => {
  const locationNameList = ["강동구", "관악구", "마포구"];
  const recruitList = ["모집중", "모집완료"];
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleRecruit = (e) => {
    setRecruit(e.target.value);
  };
  const handleWriter = (e) => {
    setWriter(e.target.value);
    console.log(writer);
  };
  for (let i = 0; i < posts.length; i++) {
    for (let key in posts[i]) {
      if (key === "locationName") {
        if (locationNameList.indexOf(posts[i][key]) === -1)
          locationNameList.push(posts[i][key]);
      }
    }
  }
  return (
    <section className="search__container">
      <select
        onChange={handleSelect}
        value={selected}
        className="search__place"
      >
        <option value={"지역검색"}>--지역--</option>
        {locationNameList.map((el, idx) => {
          return (
            <option key={idx} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      <select
        onChange={handleRecruit}
        value={recruit}
        className="search__recruit"
      >
        <option value={"모집상태"}>--모집상태--</option>
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
      <input
        value={writer}
        onChange={handleWriter}
        placeholder="작성자"
        className="search__writer"
      ></input>
    </section>
  );
};

export default Search;
