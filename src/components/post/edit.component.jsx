import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UpdatePost() {
    const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  //   const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line
  }, []);

  // 글 내용 가져오기
  const fetchPost = async () => {
    await axios
      .post(`http://localhost/api/posts_update/${id}`)
      .then(({ data }) => {
        const title = data[0]["title"];
        const description = data[0]["description"];
        setTitle(title);
        setDescription(description);
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  // 글 업데이트 함수
  const updatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "POST");
    formData.append("title", title);
    formData.append("description", description);
    if (image !== null) {
      formData.append("image", image);
    }

    await axios
      .post(`http://localhost/api/posts/${id}`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          //   setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-5xl font-bold text-blue-300">글 수정</h1>
      <div className="w-full max-w-2xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={updatePost}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              제목
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              placeholder="제목을 입력해주세요"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              글
            </label>
            <input
              className="shadow appearance-none border rounded w-full h-52 py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              value={description}
              placeholder="글을 입력해주세요"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="mt-3 mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              사진
            </label>
            <input
              type="file"
              onChange={changeHandler}
              className="block text-gray-700 text-sm font-bold mb-2"
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              글 수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
