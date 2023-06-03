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
    await addDoc(postsCollectionRef, {
      title: title,
      content: content,
      createAt: new Date(new Date()),
    });
    // 화면 업데이트를 위한 state 변경
    navigate("/board_list");
  };

  const [state, setState] = useState({ text: "" });
  const handleChange = (value) => {
    setState({ text: value });
  };

  return (
    <>
      <body>
        <div className="flex flex-col justify-center items-center h-[100vh] ">
          <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px] undefined border border-gray-200">
            <div class="relative flex flex-row justify-between">
              <h4 class="text-xl font-bold text-navy-700 mb-3">
                ❤️ 일기 쓰기 ❤️
              </h4>
            </div>
            <div className="mb-3">
              <label className="text-sm text-navy-700 font-bold">제목</label>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="text-sm text-navy-700 font-bold">내용</label>
              <textarea
                type="text"
                placeholder="내용을 입력해주세요"
                className="mt-2 flex py-16 w-full items-center justify-center rounded-xl border bg-white/0 text-sm outline-none border-gray-200"
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              />
            </div>
            <button
              className="bg-red-300 text-white p-3 rounded-xl"
              onClick={createPosts}
            >
              글 쓰기
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default BoardWriteScreen;
