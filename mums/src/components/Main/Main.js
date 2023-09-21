import React, {Component} from 'react';

import {ProductService} from "../../services/ProductService.js"
import { useState } from "react";
import { useEffect } from "react";
import {Products} from "./products";
import {Container} from "react-bootstrap";

const Main = () =>{
            const [prodList, setProdList] = useState([]);
            useEffect(() => {
                init();
            }, []);
            const init = () => {
                ProductService
                    .getProducts()
                    .then((res) => {
                        console.log(res.data);
                        setProdList(res.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        console.log("blyaaaaa")
                    });
            }
        return (
           <>
               <div className='main'>
                        <div className="d-flex justify-content-around card_wrap">
                            <Container>
                                <Products products = {prodList} />
                            </Container>
                        </div>
               </div>
           </>
        );
}

export default Main;