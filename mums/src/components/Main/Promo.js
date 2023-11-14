import React, {Component} from 'react';
import promo_photo from '../../img/promo_photo.png';
import {Col, Container, Row} from "react-bootstrap";

class Promo extends Component {
    render() {
        return (
            <Container className="promo">
                <div className="promo_padding myrow" >
                    <div className='bttn_promo mycol'>
                        <button className="bttn">
                             КУПИТЬ
                        </button>
                    </div>
                    <div className='promo_ph'>
                        <img
                            src={promo_photo}
                            height={800}
                            width={703.88}
                            className={"d-inline-block "}
                            alt="logo"

                        />
                    </div>
                    <div className='bttn_promo mycol'>
                        <button className="bttn btn_right">
                            КАСТОМ
                        </button>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Promo;