import "./search.css";

const Search = ({ posts, selected, setSelected }) => {
  const locationNameList = ["강동구", "관악구", "마포구"];
  console.log(selected);
  const handleSelect = (e) => {
    setSelected(e.target.value);
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
    <form className="search__container">
      <select
        onChange={handleSelect}
        value={selected}
        className="search__place"
      >
        <option value={"장소검색"}>지역</option>
        {locationNameList.map((el, idx) => {
          return (
            <option key={idx} value={el}>
              {el}
            </option>
          );
        })}
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
