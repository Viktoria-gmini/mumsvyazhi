import React, {Component} from 'react';
import CaruselBox from "../components/Main/CaruselBox";
import '../CSS/index.css';
import Header from "../components/Main/header";
import Promo from "../components/Main/Promo";
import Main from "./Main";
import Footer from "../components/Main/Footer";
export default class Home extends Component {
    render() {
        return (
            <div className="background">
                <Header></Header>
                <Promo></Promo>
                <Main></Main>
                <Footer></Footer>
            </div>

        );
    }
}

