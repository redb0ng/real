//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import QRgen from "./components/views/QR/QRgenerator";
import QRscanner from "./components/views/QR/QRscanner";
import IdCard from "./components/views/IdCard/IdCard";
import Auth from "./hoc/auth";
import UploadPage from "./components/views/UploadPage/UploadPage";
// import { TramOutlined } from "@material-ui/icons";
import NavBar from "./components/views/NavBar/NavBar";
import test from "./components/views/test/Testa";
import Second from "./components/views/Second/Second";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={Auth(LandingPage, null)} />
            <Route path="/login" element={Auth(LoginPage, false)} />
            <Route path="/register" element={Auth(RegisterPage, false)} />
            <Route path="/qr_generator" element={Auth(QRgen, true)} />
            <Route path="/qr_scanner" element={Auth(QRscanner, true, true)} />
            <Route path="/idcard" element={Auth(IdCard, true)} />
            <Route path="/upload" element={Auth(UploadPage, true)} />
            <Route path="/test" element={Auth(test, null)} />
            <Route path="/Second" element={Auth(Second, null)} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
