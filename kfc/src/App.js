import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/header/header";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Deals from "./components/pages/Deals";
import SignIn from "./components/pages/SignIn";
import Bucket from "./components/pages/Bucket";
import Login from "./components/pages/Login";

const App=()=> {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Deals" element={<Deals/>}/>
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/bucket" element={<Bucket/>} />
        <Route path="/Login" element={<Login/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
