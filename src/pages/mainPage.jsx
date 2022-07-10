import Weather from "../components/weather";
import Posts from "../components/posts";
import Search from "../components/search";
const MainPage = () => {
  return (
    <>
      <h1>MainPage</h1>
      <Search />
      <Weather />
      <Posts />
    </>
  );
};

export default MainPage;
