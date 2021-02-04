import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <a  href="index.html" className="btn btn-primary btn-mine py-3">Click me</a>
            <Container>
                <Row>
                    <Col className="text-center py-3" sm={12} md={6} lg={3}>
                        <ul>
                            <li className="font-weight-bold">Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                        </ul>
                    </Col>
                    <Col className="text-center py-3" sm={12} md={6} lg={3}>
                        <ul>
                            <li className="font-weight-bold">Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                        </ul>
                    </Col>
                    <Col className="text-center py-3" sm={12} md={6} lg={3}>
                        <ul>
                            <li className="font-weight-bold">Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                        </ul>
                    </Col>
                    <Col className="text-center py-3" sm={12} md={6} lg={3}>
                        <ul>
                            <li className="font-weight-bold">Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                            <li>Lorem hello world</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
