import { Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import Post from "./pages/post/post";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/post' element={<Post />} />
    </Routes>
  );
}

export default App;
