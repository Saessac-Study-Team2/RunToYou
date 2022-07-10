import React from "react";
import "./search.css";

const Search = () => {
  return (
    <form className="search__container">
      <select className="search__place">
        <option value={"장소검색"}>장소</option>
        <option>경의선숲길</option>
        <option>서울숲</option>
        <option>한강공원</option>
      </select>
      <input placeholder="작성자" className="search__writer"></input>
      <select className="search__recruit">
        <option value="">모집중</option>
        <option value="">모집완료</option>
      </select>
      <button className="search__btn">검색</button>
    </form>
  );
};

export default Search;
