import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './loginPage';
import LandingPage from './LandingPage';

function App() {
    return (

        <BrowserRouter >
        <Routes >
        <Route path = "/" element = {<LandingPage/> }/>
        <Route path = "/login" element = { <LoginPage/> } />
      
        </Routes> 
        </BrowserRouter>

    );
}

export default App;