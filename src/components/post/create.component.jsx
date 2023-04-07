import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import db from "../../firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState();
  //   const [validationError, setValidationError] = useState("");

  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: description,
        image: image,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="container">
      <h1 className="text-5xl font-bold text-blue-300">글 작성</h1>
      <div className="w-full max-w-2xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={createPost}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              제목
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              글
            </label>
            <input
              className="shadow appearance-none border rounded w-full h-52 py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="글을 입력해주세요"
              //   size="500"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          {/* <div classNameName="mt-3 mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              사진
            </label>
            <input
              type="file"
              onChange={changeHandler}
              className="block text-gray-700 text-sm font-bold mb-2"
            ></input>
          </div> */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              글 작성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
