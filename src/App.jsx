import './App.css'

import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home'
import Frete from './components/pages/Frete'

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/frete" element={<Frete/>} />       
        </Routes>
        </ BrowserRouter>
    )
}