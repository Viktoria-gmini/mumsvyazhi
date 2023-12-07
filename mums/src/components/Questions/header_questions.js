import React, {Component} from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Accardion_quest from "./accardion";
import {ReactComponent as Cart} from "../../img/header/cart.svg";
import Bug from "../../img/faq/Bug.png"
import {ReactComponent as Logo} from "../../img/header/logo.svg";
import {ReactComponent as Telegram}  from '../../img/header/telegram.svg';
import {ReactComponent as Instagram}  from '../../img/header/insta.svg';

class HeaderQuestions extends Component {
    render() {
        return (

            <Container collapseOnSelect expand="md">
                <Navbar className="header_menu justify-content-around" collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Brand href="/">
                            <Logo  className="d-inline-block align-top" height='117' width='156'></Logo>
                        </Navbar.Brand>
                        <Navbar href="/cart">
                            <Nav.Link href="/cart">
                                <Cart className="d-inline-block align-top cart" height='75' width='88.82'></Cart>
                            </Nav.Link>
                        </Navbar>
                        <Navbar.Toggle area-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-md-end'>
                            <Nav className="justify-content-md-between">
                                <Navbar href="/telegram" >
                                    <Nav.Link href="https://web.telegram.org/k/#@anncchh">
                                        <Telegram className="d-inline-block align-top telegram" height='74' width='82'></Telegram>
                                    </Nav.Link>
                                </Navbar>
                                <Nav.Link href="https://www.instagram.com/mamsvyzhi/">
                                    <Navbar href="/instagram">
                                        <Instagram className="d-inline-block align-top instagram" height='68' width='68'></Instagram>
                                    </Navbar>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <p className="text_quest">Частые вопросы</p>
               <div className="quest_flex">
                   <Col className="bug_wrap">
                       <img
                           src={Bug}
                           height={350}
                           width={380}
                           className={"d-inline-block justify-content-center align-items-center bug"}
                           alt="logo"
                       />
                   </Col>
                   <Col>
                       <Accardion_quest></Accardion_quest>
                   </Col>
               </div>

            </Container>
        );
    }
}

export default HeaderQuestions;