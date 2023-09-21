import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../img/logo.svg';
import telegram from '../img/telegram.svg';
import instagram from '../img/insta.svg';
import faq from '../img/faq.svg';
import cart from '../img/cart.svg';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Swipe from "bootstrap/js/src/util/swipe";
import Home from "../pages/home";
import FaqQ from "../pages/faqQ";
import Cart from "../pages/Cart";

export default class Header extends Component {
    render() {
        return (
            // Запись франгмента для роутера
            <>
                <Navbar  collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Brand href="/home">
                            <img
                                src={logo}
                                height={117}
                                width={156}
                                className={"d-inline-block align-top"}
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle area-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-md-end'>
                            <Nav className="justify-content-md-between">
                                <Navbar href="/telegram" >
                                   <Nav.Link href="/telegram">
                                       <img
                                           src={telegram}
                                           height={74}
                                           width={82}
                                           className={"d-inline-block align-top"}
                                           alt="logo"
                                       />
                                   </Nav.Link>
                                </Navbar>
                                    <Nav.Link href="/instagram">
                                        <Navbar href="/instagram">
                                            <img
                                                src={instagram}
                                                height={68}
                                                width={68}
                                                className={"d-inline-block align-top"}
                                                alt="logo"
                                            />
                                        </Navbar>
                                    </Nav.Link>
                                <Navbar href="/faq">
                                    <Nav.Link href="/faqQ">
                                        <img
                                            src={faq}
                                            height={68}
                                            width={68}
                                            className={"d-inline-block align-top"}
                                            alt="logo"
                                        />
                                    </Nav.Link>
                                </Navbar>
                                <Navbar href="/cart">
                                    <Nav.Link href="/cart">
                                        <img
                                            src={cart}
                                            height={75}
                                            width={88.82}
                                            className={"d-inline-block align-top"}
                                            alt="logo"
                                        />
                                    </Nav.Link>
                                </Navbar>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={Home} />
                        <Route exact path="/faqQ" element={FaqQ} />
                        <Route exact path="cart" Component={Cart} />
                    </Routes>
                </Router>
            </>
        );
    }
}

