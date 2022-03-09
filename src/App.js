import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import SignupPage from "./pages/signupPage/SignupPage";
import Post from "./pages/post/Post";
import ListOfComponents from "./compnents/listOfCompnents/ListOfComponents";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_up" element={<SignupPage />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<ListOfComponents />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
