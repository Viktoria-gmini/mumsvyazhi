import React, {Component} from 'react';
import promo_photo from '../../img/promo_photo.png';
import {Col, Container, Row} from "react-bootstrap";

class Promo extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='bttn_promo'>
                        <button className="bttn">
                             КУПИТЬ
                        </button>
                    </Col>
                    <Col className='promo_ph xs={6}'>
                        <img
                            src={promo_photo}
                            height={800}
                            width={704}
                            className={"d-inline-block "}
                            alt="logo"

                        />
                    </Col>
                    <Col className='bttn_promo'>
                        <button className="bttn">
                            КАСТОМ
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Promo;