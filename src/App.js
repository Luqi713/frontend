import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Component/Signup";
import Home from "./Component/Home";
import ProductView from "./Component/ViewProduct";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-product" element={<ProductView />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
