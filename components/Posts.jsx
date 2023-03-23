import React from "react";
import Post from "./Post";
const DummyData = [
  {
    id: "123",
    username: "kunwarabhi7",
    userImg: "https://avatars0.githubusercontent.com/u/38799309?v=4",
    img: "https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG",
    caption: "Jai Rajputana",
  },
  {
    id: "123",
    username: "kunwarabhi7",
    userImg: "https://avatars0.githubusercontent.com/u/38799309?v=4",
    img: "https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG",
    caption: "Jai Rajputana",
  },
];
function Posts() {
  return (
    <div className="">
      {DummyData.map(( post ) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
          img={post.img}
        />
      ))}
    </div>
  );
}

export default Posts;
