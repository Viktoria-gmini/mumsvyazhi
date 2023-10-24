import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../img/logo.svg';
import telegram from '../img/telegram.svg';
import instagram from '../img/insta.svg';
import faq from '../img/faq.svg';
import cart from '../img/cart.svg';

// EБТВОЮ МАТЬ Я ЛЮБЛЮ ТВОИ ВОЛОСЫ Я ХОЧУ СПАТЬ С ТОБОЙ Я ХОЧУ СТАТЬ ТОБОЙ

export default class Header extends Component {
    render() {

        return (
            <>
                <Navbar  collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Brand href="/">
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
                                   <Nav.Link href="https://web.telegram.org/k/#@anncchh">
                                       <img
                                           src={telegram}
                                           height={74}
                                           width={82}
                                           className={"d-inline-block align-top"}
                                           alt="logo"
                                       />
                                   </Nav.Link>
                                </Navbar>
                                    <Nav.Link href="https://www.instagram.com/mamsvyzhi/">
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

            </>
        );
    }
}


