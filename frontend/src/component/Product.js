import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <div>
            <Card className="my-3 p-3 rounded-4">
                
                    <a href={`/product/${product._id}`}>
                        <Card.Img src={product.image} varient='right' />
                    </a>
                <Card.Body>
                    
                    <Card.Title as='div' varient='right'>
                        <div className='my-3'>
                            {product.rating} from {product.numReviews} reviews 
                        </div>
                    </Card.Title>
                    <Card.Title as='div'>
                        <div className='my-3'>
                            <h1><strong>{product.price}</strong></h1>
                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
