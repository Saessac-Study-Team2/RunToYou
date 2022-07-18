import Post from "./post";

const Posts = ({
  posts,
  selected,
  recruit,
  writer,
  openModal,
  setPosts,
  locationList,
  userId,
}) => {
  let filteredPosts = posts;
  for (let i = 0; i < posts.length; i++) {
    for (let key in posts[i]) {
      if (key === "recruit" && recruit !== "모집상태") {
        filteredPosts = filteredPosts.filter((x) => {
          return x[key] === recruit;
        });
      }
      if (key === "locationName" && selected !== "지역검색") {
        filteredPosts = filteredPosts.filter((x) => {
          return x[key] === selected;
        });
      }
      if (key === "userID" && writer !== "") {
        filteredPosts = filteredPosts.filter((x) => {
          return x[key].indexOf(writer) !== -1;
        });
      }
    }
  }
  return (
    <ul>
      {filteredPosts.map((post, idx) => (
        <Post
          locationList={locationList}
          setPosts={setPosts}
          key={idx}
          userId={userId}
          post={post}
        />
      ))}
    </ul>
  );
};

export default Posts;
