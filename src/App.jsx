import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import RateUsPage from "./components/Rate/RateUsPage/RateUsPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* tu komponenty, ktore maja sie wyswietlac caly czas */}
        <Navbar />

        {/* do tego momentu */}
        {/* kompo ktore beda sie pojawiac i znikac (podstrony ktore beda sie przelaczac) */}
        <Routes>
          {/* router pilnuje urli - działa na podstawie urla */}
          {/* / to oznacza, że masz homepage może być /login */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/rateus" element={<RateUsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* ---- */}
        {/* tu poniżej znow kompo, ktore maja sie wyswietlac caly czas - np. footer  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
