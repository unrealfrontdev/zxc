import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

function ProductDetails({ product, addToCart, onBack }) {
  if (!product) return null;

  return (
    <Container className="mt-4">
      <Button variant="secondary" className="mb-3" onClick={onBack}>
        Назад к списку
      </Button>
      <Card>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ 
            height: '400px', 
            objectFit: 'contain',
            padding: '20px'
          }} 
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text className="h4">
            Цена: {product.price} ₽
          </Card.Text>
          <Button 
            variant="primary" 
            onClick={() => addToCart(product)}
          >
            Добавить в корзину
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;