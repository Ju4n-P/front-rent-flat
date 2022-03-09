import Layout from "./layout/Layout";
import NavBar from "./compnents/navbar/navbar"
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Post from "./pages/post/Post"
import ListOfComponents from "./compnents/listOfCompnents/ListOfComponents";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <NavBar />
          <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/:id" element={<ListOfComponents />} />
              </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
