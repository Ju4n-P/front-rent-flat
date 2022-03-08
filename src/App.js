import NavbarOld from "./components/navbar-old/NavbarOld";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Post from "./pages/post/Post"
import ListOfComponents from "./components/listOfCompnents/ListOfComponents";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarOld/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<ListOfComponents />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
