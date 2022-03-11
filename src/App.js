import NavBar from "./components/navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/Profile"
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddPage from "./pages/AddPage/AddPage";


function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles/:id" element={<AddPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
