import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainScreen from "./Screens/MainScreen";
import BoardListScreen from "./components/post/BoardListScreen";
import BoardUpdateScreen from "./components/post/BoardUpdateScreen";
import BoardWriteScreen from "./components/post/BoardWriteScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/board_write" element={<BoardWriteScreen />} />
          <Route path="/board_update" element={<BoardUpdateScreen />} />
          <Route path="/board_list" element={<BoardListScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
