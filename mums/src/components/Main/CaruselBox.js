import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";

class CaruselBox extends Component {
    render() {
        return (
            <Carousel className='carousel'>
                <Carousel.Item>
                    <div className='slider'>
                        <Carousel.Caption>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Как к Вам обращаться?</Form.Label>
                                <Form.Control type="text" placeholder="Иванов Иван Иванович"/>
                            </Form.Group>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider'>
                        <Carousel.Caption>
                            <Form.Group className="mb-3" controlId="network">
                                <Form.Label>Оставьте, пожалуйста, телефон или ссылку на любой мессенджер</Form.Label>
                                <Form.Control type="text" placeholder="Например: telegram @mamsvyazhi"/>
                            </Form.Group>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Опишите изделие (цвета, пряжу, ключевые слова) - и прикрепите, по возможности,
                                фото-референсы</Form.Label>
                            {/*  загрузка файла  */}
                        </Form.Group>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider'>
                        <div className="text-slider-sicceful">
                            <h2>СПАСИБО ЗА ЗАКАЗ!</h2>
                            <p>Мы свяжемся с вами, чтобы уточнить детали и подтвердить его</p>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CaruselBox;






