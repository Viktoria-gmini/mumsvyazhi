import React from "react";
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Component} from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import FaqQ from "./pages/faqQ";


export default App;
export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqQ" element={<FaqQ />} />
        </Routes>
    )
}