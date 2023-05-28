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

const BoardUpdateScreen = () => {
  // 업데이트 - U
  const updatePost = async (id, age) => {
    // 내가 업데이트 하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const postDoc = doc(db, "posts", id);
    // 내가 업데이트 하고자 하는 key를 어떻게 업데이트할지 준비,, 중요한점이 db에는 문자열로 저장되어있다. 그래서 createUsers()함수안에서 age를 생성할때 숫자열로 형변환 해줘야한다
    const newField = { age: age + 1 };
    // updateDoc()을 이용해서 업데이트
    await updateDoc(postDoc, newField);
    // 화면 업데이트를 위한 state 변경
    setChanged(true);
  };
  return (
    <>
      <button
        onClick={() => {
          updatePost(value.id, value.age);
        }}
        className="bg-green-400 hover:bg-green-300 text-white font-bold py-1 px-2 mr-1 rounded"
      ></button>
    </>
  );
};
export default BoardUpdateScreen;
