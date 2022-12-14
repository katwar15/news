import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import RateUsPage from "./components/Rate/RateUsPage/RateUsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import UserPage from "./components/UserPage/UserPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { authContext } from "./helpers/authContex";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // ustawiasz false, bo użytkownik jak wchodzi na stronę, to nie jest zalogowany;

  // tu znalazła się ta funkcja, bo
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
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
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          {/* ---- */}
          {/* tu poniżej znow kompo, ktore maja sie wyswietlac caly czas - np. footer  */}
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
