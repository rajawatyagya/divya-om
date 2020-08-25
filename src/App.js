import React from 'react';
import './App.scss';
import FootPage from "./components/footPage/FootPage";
import NavbarPage from "./components/navbarPage/NavbarPage";


function App() {
    return (
        <div className="App">
            <NavbarPage />
            <FootPage />
        </div>
    );
}

export default App;
