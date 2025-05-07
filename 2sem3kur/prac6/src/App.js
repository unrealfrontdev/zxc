import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
    } else {
      const updatedCart = [...cart];
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
    }
  };

  const goToHome = () => {
    setShowCart(false);
    setSelectedProduct(null);
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <Header onCartClick={() => setShowCart(true)} onHomeClick={goToHome} />
      {showCart ? (
        <Cart
          cartItems={cart}
          onRemove={removeFromCart}
          onBack={goToHome}
          onUpdateQuantity={updateQuantity}
        />
      ) : selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          addToCart={addToCart}
          onBack={goToHome}
        />
      ) : (
        <Main addToCart={addToCart} onProductClick={showProductDetails} />
      )}
    </div>
  );
}

export default App;
