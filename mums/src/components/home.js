import React, {Component} from 'react';
import Header from "./header";
import Promo from "./Promo";
import Main from "./Main";
import Footer from "./Footer";
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

