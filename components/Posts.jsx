import React, { useEffect, useState } from "react";
import Post from "./Post";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

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
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      ( onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      )),

    [db]
  );

  console.log(posts);
  return (
    <div className="">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          caption={post.data().caption}
          img={post.data().image}
        />
      ))}
    </div>
  );
}

export default Posts;
