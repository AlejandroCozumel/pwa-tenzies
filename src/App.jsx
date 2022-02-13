import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Tenzies from "./views/Tenzies";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { myContext } from "./Context";

const App = () => {

  const userObject = useContext(myContext);
  console.log('info',userObject);
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Tenzies /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tenzies" element={<Tenzies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
