import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Accardion from "../components/Questions/accardion";
import Header from "../components/header";
import header_questions from "../components/Questions/header_questions";
import Header_questions from "../components/Questions/header_questions";


class FaqQ extends Component {
    render() {
        return (
            <Container className="vh-100 px-0 quest_main" fluid={true}>
                <Header_questions></Header_questions>
            </Container>
        );
    }
}

export default FaqQ;