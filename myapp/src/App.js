import { BrowserRouter, Routes, Route } from "react-router-dom";
import "animate.css";
import Home from "./Component/Home/home";
import Images from "./Component/Images/images";
import Layout from "./Component/Layout/Layout";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import NotFound from "./Component/404";
import Protected from "./Protected/Protected";
import Post from "./Component/Post/Post";
import Products from "./Component/Products/Products";
import Cart from "./Component/Cart/Cart";

// const router = createBrowserRouter([
//   { path: "/", element:<Layout><Home/></Layout> },
//   { path: "/images", element: <Layout><Images/></Layout> },
//   { path: "/login", element: <Layout><Login/></Layout> },
//   { path: "/profile", element: <Layout><Profile/></Layout> },
//   { path: "/*", element: <Layout><NotFound/></Layout> }
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/images" element={<Layout><Images /></Layout>} />
        <Route path="/login" element={<Layout><Login/></Layout>} />
        <Route element={<Protected/>}>
        <Route path="/profile" element={<Layout><Profile/></Layout>} />
        <Route path="/posts" element={<Layout><Post/></Layout>}/>
        <Route path="/cart" element={<Layout><Cart/></Layout>}/>
        </Route>
        <Route path="/products" element={<Layout><Products/></Layout>}/>
        <Route path="/*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
