import React from "react";
import './CSS/index.css'
import './CSS/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import FaqQ from "./pages/faqQ";
import './CSS/index.scss'
import Game from "./pages/Game";


export default App;
export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqQ" element={<FaqQ />} />
            <Route path="/bunny" element={<Game />} />
        </Routes>
    )
}