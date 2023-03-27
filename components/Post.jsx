import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BiHappyAlt } from "react-icons/bi";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useSession } from "next-auth/react";
import Moment from "react-moment";

const Post = ({ id, username, img, userImg, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComments = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      userName: session.user.email,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    });
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timeStamp", "desc")
        ),
        (snapShot) => {
          setComments(snapShot.docs);
        }
      ),

    [db]
  );

  return (
    <>
      <div
        key={id}
        className=" rounded overflow-hidden border w-full  bg-white mt-2"
      >
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img src={userImg} alt="profilepic" />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">{username}</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg" />
          </span>
        </div>
        <img className="w-full bg-cover" src={img} />
        <div className="px-3 pb-2">
          <div className="pt-2 flex space-x-2 items-center ">
            <AiOutlineHeart size={25} className="far fa-heart cursor-pointer" />
            <FaRegCommentDots
              size={25}
              className="far fa-heart cursor-pointer"
            />
            <TbSend size={25} className="far fa-heart cursor-pointer" />
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">{username}</span> {caption}
            </div>
          </div>

          
          {comments.length > 0 && (
            <>
                <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
                View all {comments.length} comments
              </div>
              <div className="ml-10 h-20 overflow-y-scroll ">

              
              {comments.map((comment) => (
                <>
                <div key={comment.id} className="mb-3 flex items-center space-x-2 ">
                    <img src={comment.data().userImage} alt="" className="h-7 rounded-full "/>
                  <div className="mb-2 text-sm">
                    <span className="font-medium mr-2">
                      {comment.data().userName}
                    </span>{" "}
                    {comment.data().comment}
                  </div>
                  <Moment className="pl-5 text-xs" fromNow>{comment.data().timeStamp?.toDate()}</Moment>
                </div>
                
                </>
              ))}
              </div>
            </>
          )}
          {/* Input Comment */}
          <form className="flex items-center p-4">
            <BiHappyAlt size={20} />
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Add a comment ...."
              className="border-none flex-1 focus:ring-0 outline-none"
            />
            <button
              onClick={sendComments}
              type="submit"
              disabled={!comment.trim()}
              className="font-semibold text-blue-400"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post;
