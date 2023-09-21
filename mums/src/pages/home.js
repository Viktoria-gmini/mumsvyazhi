import React, {Component} from 'react';
import CaruselBox from "../components/CaruselBox";
import '../index.css';
import Header from "../components/header";
import Promo from "../components/Promo";
import Main from "../components/Main/Main";
import Footer from "../components/Footer";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Promo></Promo>
                <Main></Main>
                <Footer></Footer>
            </div>

        );
    }
}

