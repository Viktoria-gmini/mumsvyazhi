import React, {Component} from 'react';
import {Button, Col, Container, Nav, Navbar} from "react-bootstrap";
import {ReactComponent as Logo} from "../img/logo.svg";
import {ReactComponent as Telegram}  from '../img/telegram.svg';
import {ReactComponent as Instagram}  from '../img/insta.svg';
import {ReactComponent as Faq}  from '../img/faq.svg';
import {ReactComponent as Eye}  from '../img/eye _icon.svg';
import {ReactComponent as Delete}  from '../img/delete.svg';
import {ReactComponent as Price}  from '../img/price.svg';

;
class Cart extends Component {

    render() {

        return (
            <div className='cart-main container-fluid'>
                <div className="header_cart container-fluid">
                    <Navbar className="header_menu justify-content-around header_cart" collapseOnSelect expand="md">
                        <Container>
                            <Navbar.Brand href="/">
                                <Logo  className="d-inline-block align-top" height='117' width='156'></Logo>
                            </Navbar.Brand>
                            <Navbar href="/faq">
                                <Nav.Link href="/faqQ">
                                    <Faq className="d-inline-block align-top faqQ" height='68' width='68'></Faq>
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
                </div>
                <div className="hidden_block"></div>
                <div className="duble-block container-fluid">
                    <Col className="product-list-cart xs={6}>xs=6">
                        <div className="flex-cart">
                            <div className='card-cart'>
                                <div className="img-product-cart">

                                </div>
                                <div className="name-product-cart">
                                    <p>name</p>
                                    <p>price</p>
                                </div>
                                <div className="button-product-cart">
                                    <Delete className="delite_icon" ></Delete>
                                    <Eye className="eye_icon"></Eye>
                                </div>
                            </div>
                            <div className='card-cart'>
                                <div className="img-product-cart">

                                </div>
                                <div className="name-product-cart">
                                    <p>name</p>
                                    <p>price</p>
                                </div>
                                <div className="button-product-cart">
                                    <Delete className="delite_icon" ></Delete>
                                    <Eye className="eye_icon"></Eye>
                                </div>
                            </div>
                            <div className='card-cart'>
                                <div className="img-product-cart">

                                </div>
                                <div className="name-product-cart">
                                    <p>name</p>
                                    <p>price</p>
                                </div>
                                <div className="button-product-cart">
                                    <Delete className="delite_icon" ></Delete>
                                    <Eye className="eye_icon"></Eye>
                                </div>
                            </div>
                            <div className='card-cart'>
                                <div className="img-product-cart">

                                </div>
                                <div className="name-product-cart">
                                    <p>name</p>
                                    <p>price</p>
                                </div>
                                <div className="button-product-cart">
                                    <Delete className="delite_icon" ></Delete>
                                    <Eye className="eye_icon"></Eye>
                                </div>
                            </div>
                            <div className='card-cart'>
                                <div className="img-product-cart">

                                </div>
                                <div className="name-product-cart">
                                    <p>name</p>
                                    <p>price</p>
                                </div>
                                <div className="button-product-cart">
                                    <Delete className="delite_icon" ></Delete>
                                    <Eye className="eye_icon"></Eye>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="price-cart xs={6}>xs=6">
                        <div className="price_flex">
                            <div className="messanger">
                                <p className="messanger_text">оставьте, пожалуйста, телефон или ссылку на любой мессенджер</p>
                                <input className="messanger_input" type='text' placeholder='@samplename'/>
                            </div>
                            <div className="price-block-img animated">
                                <Price className="price" >
                                </Price>
                                <p className="sum_text">сумма: 1000 ₽</p>
                                <button className="bttn_zakaz">cоздать заказ</button>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Cart;