import * as React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditPost from "./components/post/edit.component";
import PostList from "./components/post/list.component";
import CreatePost from "./components/post/create.component";

function App() {

  return (
    <Router>
        <Link to={"/"} className="text-white navbar-brand">
          영진전문대 성능좋은 게시판 "영게"
        </Link>
        <Routes>
          <Route exact path='/' element={<PostList />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
        </Routes>
    </Router>
  )
}
export default App
