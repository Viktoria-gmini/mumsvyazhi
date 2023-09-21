import React from "react";
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Component} from 'react';
import Home from "./pages/home";
import faqQ from "./pages/faqQ";
import FaqQ from "./pages/faqQ";


class App extends Component{
  render(){
    return (
        <div>
            <Home></Home>
        </div>
    );
  }
}

export default App;
