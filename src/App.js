import Layout from "./layout/Layout";
import NavBar from "./components/navbar/navbar"
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Post from "./pages/post/Post"
import ListOfComponents from "./compnents/listOfCompnents/ListOfComponents";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'
import Footer from './components/footer/footer'

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <NavBar />
          <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/:id" element={<ListOfComponents />} />
              </Routes>
          </Layout>
          <Footer />
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
