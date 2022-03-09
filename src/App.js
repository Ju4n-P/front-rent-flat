import NavBar from "./components/navbar";
import Footer from './components/footer/Footer';
import ListOfComponents from "./components/listOfCompnents/ListOfComponents";
import Register from "./components/Register"
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Post from "./pages/post/Post";
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post" element={<Post />} />
              <Route path="/post/:id" element={<ListOfComponents />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
