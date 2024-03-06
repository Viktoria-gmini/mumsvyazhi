import React, {Component, useState, useEffect} from 'react';
import {Button, Col, Container, Nav, Navbar} from "react-bootstrap";
import {ReactComponent as Eye}  from '../img/cart/eye _icon.svg';
import {ReactComponent as Delete}  from '../img/cart/delete.svg';
import {ReactComponent as Price}  from '../img/cart/price.svg';
import Header from "./Main/header";

import { addToCart } from '../components/Main/card'; //

const Cart = (props) => {
    useEffect(() => {
        // Ваш код эффекта
    }, [props.init]);
    const handleAddToCart = (product) => {
        addToCart(product); // Вызов функции addToCart из импортированного модуля
    }

    return (
        <div className='cart-main'>
            <Header></Header>
            <div className="duble-block container-fluid">
                <Col className="product-list-cart xs={6}>xs=6">
                    <div className="flex-cart">
                        <div className="cards_card">
                            <div className='card-cart'>
                                <div className="img-product-cart">
                                    {/*<img className="img" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>*/}
                                </div>
                                <div className="name-product-cart">
                                    <p className="card-name">{props.product.title}</p>
                                    <p className="price">{props.product.price} рублей</p>
                                </div>
                                <div className="button-product-cart">
                                    <Delete onClick={() => props.removeItem(props.product)} className="delite_icon" ></Delete>
                                    <Eye className="eye_icon"></Eye>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="price-cart xs={6}>xs=6">
                    <div className="price_flex">
                        <div className="mess_price_block">
                            <div className="messanger">
                                <p className="messanger_text">оставьте, пожалуйста, телефон или ссылку на любой мессенджер</p>
                                <input className="messanger_input" type='text' placeholder='@samplename'/>
                            </div>
                            <div className="price-block-img animated">
                                <Price className="price" ></Price>
                                <p className="sum_text">сумма: 1000 ₽</p>
                                <button className="bttn_zakaz">cоздать заказ</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        </div>
    );
}

export default Cart;