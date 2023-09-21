import React, {Component} from 'react';
import {Col, Container} from "react-bootstrap";
import CaruselBox from "./CaruselBox";
import photo_footer from '../img/photo_footer.png';
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
                            </Col>
                            <CaruselBox className='carusel_flex'></CaruselBox>
                            <img
                                src={photo_footer}
                                height={792}
                                width={642}
                                className={"d-inline-block align-center justify-content-end"}
                                alt="logo"
                            />
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Footer;