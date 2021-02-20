import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../component/Product'
const HomeScreen = () => {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product =>{
                    return (
                        <Col sm={12} md={6} lg={4}>
                            <Product key={product._id}  product={product} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default HomeScreen

