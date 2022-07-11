import Post from "./post";

const Posts = ({ posts, selected }) => {
  console.log(selected);
  let filteredPosts = posts;
  for (let i = 0; i < posts.length; i++) {
    for (let key in posts[i]) {
      if (key === "locationName") {
        filteredPosts = posts.filter((x) => {
          return x[key] === selected;
        });
      }
    }
  }

  return (
    <ul>
      {selected === "장소검색"
        ? posts.map((post, idx) => <Post key={idx} post={post} />)
        : filteredPosts.map((post, idx) => <Post key={idx} post={post} />)}
    </ul>
  );
};

export default Posts;
