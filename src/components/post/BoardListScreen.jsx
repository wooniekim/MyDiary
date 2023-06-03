import { useState, useEffect } from "react";
// 파이어베이서 파일에서 import 해온 db
import { db } from "../../firebase-config";
// db에 데이터에 접근을 도와줄 친구들
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const BoardListScreen = () => {
  const [value, onChange] = useState(new Date());
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    getPosts();
  });

  const [isWriteOpen, setIsWriteOpen] = useState(false);

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // 삭제
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  const showPosts = posts.map((value) => (
    <tr
      key={value.id}
      className="bg-white border border-grey-500 md:border-none block md:table-row"
    >
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
        {value.title}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          {value.content}
        </span>
        {value.content}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          {String(value.createAt.toDate())}
        </span>
        {String(value.createAt.toDate())}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <NavLink
          to={"/board_update"}
          className="bg-green-400 hover:bg-green-300 text-white font-bold py-1 px-2 mr-1 rounded"
        >
          Edit
        </NavLink>
        <button
          onClick={() => {
            deletePost(value.id);
          }}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <div className="h-100%">
        <div>
          <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  제목
                </th>
                <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  글
                </th>
                <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  날짜
                </th>
                <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  수정 / 삭제
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">{showPosts}</tbody>
          </table>
        </div>
        {/* 캘린더랑 글쓰기 폼 담고있는 div */}
        <div className="grid grid-cols-2 mt-6">
          <div className="grid place-items-center ml-6">
            <Calendar
              locale="en"
              formatDay={(locale, date) => moment(date).format("DD")}
              onChange={onChange}
              value={value}
              showNeighboringMonth={false}
            />
            <button
              onClick={() => setIsWriteOpen(!isWriteOpen)}
              className="text-xs bg-red-300 font-medium rounded-lg hover:bg-red-200 text-white px-4 py-2.5"
            >
              일기쓰기
            </button>
          </div>
          {isWriteOpen ? (
            <div className=" w-full flex flex-col justify-center items-center mx-auto">
              <section className="w-2/3 h-full !p-6 mx-auto bg-white border border-gray-200 rounded-[20px]">
                <div class="relative flex flex-row justify-between">
                  <h4 class="text-xl font-bold text-navy-700 mb-1">
                    ❤️ 2023.05.23 일기 ❤️
                  </h4>
                </div>
                <div className="mb-1">
                  <h2 className="font-semibold text-gray-800">🍪 제목 🍪</h2>
                </div>
                <div>
                  <p className="mt-3 text-sm text-gray-600">
                    미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케
                    싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다..
                    그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에
                    맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인
                    영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터
                    명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이
                    웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한
                    걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게
                    나루토가 없다면..
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
                  <button className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    수정
                  </button>
                  <button className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    삭제
                  </button>
                </div>
              </section>
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center mx-auto">
              <div className="flex flex-col rounded-[20px] w-2/3 bg-white bg-clip-border shadow-3xl shadow-shadow-500 !p-4 undefined border border-gray-200">
                <div class="relative flex flex-row justify-between">
                  <h4 class="text-xl font-bold text-navy-700 mb-1">
                    ❤️ 일기 쓰기 ❤️
                  </h4>
                </div>
                <div className="mb-1">
                  <label className="text-sm text-navy-700 font-bold">
                    제목
                  </label>
                  <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                  />
                </div>
                <div className="mb-1">
                  <label className="text-sm text-navy-700 font-bold">
                    내용
                  </label>
                  <textarea
                    type="text"
                    placeholder="내용을 입력해주세요"
                    className="mt-2 flex py-16 w-full items-center justify-center rounded-xl border bg-white/0 text-sm outline-none border-gray-200"
                  />
                </div>
                <button className="bg-red-300 text-white p-3 rounded-xl">
                  글 쓰기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default BoardListScreen;
