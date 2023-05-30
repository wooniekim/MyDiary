import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// db에 데이터에 접근을 도와줄 친구들
import { addDoc } from "firebase/firestore";

import { db } from "../../firebase-config";
// db에 데이터에 접근을 도와줄 친구들
import { collection } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

const BoardWriteScreen = () => {
  const navigate = useNavigate();
  // db의 users 컬렉션을 가져옴
  const postsCollectionRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // Create
  const createPosts = async () => {
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    await addDoc(postsCollectionRef, { title: title, content: content });
    // 화면 업데이트를 위한 state 변경
    navigate("/board_list");
  };

  const [state, setState] = useState({ text: "" });
  const handleChange = (value) => {
    setState({ text: value });
  };

  return (
    <>
      <div className="h-100%">
        <div>
          <input
            type="text"
            placeholder="제목"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="글"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <button onClick={createPosts}>글 쓰기</button>
        </div>
      </div>
    </>
  );
};

export default BoardWriteScreen;
