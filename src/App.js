import React from 'react';
import './App.css';
import FootPage from "./components/footPage/FootPage";
import NavbarPage from "./components/navbarPage/NavbarPage";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <div className="App">
        <NavbarPage />
        <MainPage />
        <FootPage />
    </div>
  );
}

export default App;
