import React, {Component} from 'react';
import {Col, Container} from "react-bootstrap";
import CaruselBox from "./CaruselBox";
import footer_img from '../../img/footer_img.png';
class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
                    <Container>
                        <div className='footer_flex'>
                            <Col className='footer_text'>
                                <p className='footer_text_cus'>Кастом</p>
                                <p className='footer_text_disc'>
                                    Не нашли в каталоге то, что хотели ? Заполните форму для создания уникальной вещи,
                                    связанной по вашему описанию и фотографиям.
                                </p>
                                <CaruselBox className='carusel_flex'></CaruselBox>
                            </Col>
                            <Col className="footer_img">
                                <img
                                src={footer_img}
                                height={756}
                                width={486}
                                className={"d-inline-block align-center justify-content-end"}
                                alt="logo"
                            /></Col>

                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Footer;