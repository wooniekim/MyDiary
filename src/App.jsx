import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainScreen from "./Screens/MainScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
