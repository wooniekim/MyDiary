import { useState, useEffect, useId } from "react";
import "../App.css";
// 파이어베이서 파일에서 import 해온 db
import { db } from "../firebase-config";
// db에 데이터에 접근을 도와줄 친구들
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

const MainScreen = () => {
  // changed를 true로 바꿔주면 되지않을까?
  const [changed, setChanged] = useState(false);

  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [posts, setPosts] = useState([]);
  // db의 users 컬렉션을 가져옴
  const postsCollectionRef = collection(db, "posts");

  // 시작될때 한번만 실행 // 읽어오기 - R
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getPosts = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(postsCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
    // 뭐든 동작할때마다 changed가 true값으로 변경되니까 화면을 그리고 다시 false로 돌려줘야지 다시 써먹는다.
    setChanged(false);
  }, [changed]); // 처음에 한번 그리고, changed가 불릴때마다 화면을 다시 그릴거다

  // 삭제 - D
  const deletePost = async (id) => {
    // 내가 삭제하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const postDoc = doc(db, "posts", id);
    // deleteDoc을 이용해서 삭제
    await deleteDoc(postDoc);
    // 화면 업데이트를 위한 state 변경
    setChanged(true);
  };

  // 띄워줄 데이터 key값에 고유ID를 넣어준다.
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
    <div className="h-100%">
      <div>
        {/* 증가버튼은 이 안에 있어야지, 각기 다른 데이터마다 붙는다, users data를 map으로 돌기때문에, 그 안의 id랑 age를 넣어주면 된다.*/}
        {/* id를 넣어주는 이유는, 우리가 수정하고자 하는 데이터를 찾아야하기 때문에. */}
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Name
              </th>
              <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                User Name
              </th>
              <th className="bg-red-300 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                수정 / 삭제
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">{showPosts}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MainScreen;
