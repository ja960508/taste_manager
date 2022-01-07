import { Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./pages/login/login";
import Main from "./pages/main/main";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
