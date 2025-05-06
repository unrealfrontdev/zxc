import React, { useState } from 'react';


function Main({ addToCart }) {
  const [expandedProductId, setExpandedProductId] = useState(null);

  const products = [
    { id: 1, name: 'Клавиатура Logitech G Pro', price: '12000₽', image: 'https://example.com/logitech-g-pro.jpg', description: 'Игровая клавиатура с подсветкой и механическими переключателями.' },
    { id: 2, name: 'Клавиатура Razer BlackWidow', price: '15000₽', image: 'https://example.com/razer-blackwidow.jpg', description: 'Механическая клавиатура с RGB-подсветкой и программируемыми клавишами.' },
    { 
      id: 3, 
      name: 'Клавиатура Corsair K95', 
      price: '17000₽', 
      image: 'https://example.com/corsair-k95.jpg', 
      description: 'Премиальная клавиатура с алюминиевым корпусом и макросами.' 
    },
    { 
      id: 4, 
      name: 'Клавиатура SteelSeries Apex Pro', 
      price: '18000₽', 
      image: 'https://example.com/steelseries-apex-pro.jpg', 
      description: 'Клавиатура с регулируемым ходом клавиш и OLED-дисплеем.' 
    },
    { 
      id: 5, 
      name: 'Клавиатура HyperX Alloy FPS', 
      price: '10000₽', 
      image: 'https://example.com/hyperx-alloy-fps.jpg', 
      description: 'Компактная клавиатура для FPS-игр с прочной стальной рамой.' 
    },
    { 
      id: 6, 
      name: 'Клавиатура ASUS ROG Strix Scope', 
      price: '14000₽', 
      image: 'https://example.com/asus-rog-strix-scope.jpg', 
      description: 'Игровая клавиатура с широкими клавишами и RGB-подсветкой.' 
    },
  ];

  const toggleDescription = (id) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Список товаров</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button onClick={() => toggleDescription(product.id)} className="btn btn-primary me-2">
                  {expandedProductId === product.id ? 'Скрыть' : 'Подробнее'}
                </button>
                {expandedProductId === product.id && <p className="mt-2">{product.description}</p>}
                <button onClick={() => addToCart(product)} className="btn btn-success">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;