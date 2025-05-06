import React from 'react';

function Header({ onCartClick, onHomeClick }) {
  return (
    <header className="bg-primary text-white d-flex justify-content-between align-items-center p-3">
      <div>
        <img src="https://example.com/logo.png" alt="Логотип" style={{ height: '50px' }} />
      </div>
      <h1 className="m-0">Магазин клавиатур</h1>
      <div>
        <button onClick={onHomeClick} className="btn btn-success me-2">
          Главная
        </button>
        <button onClick={onCartClick} className="btn btn-success">
          Корзина
        </button>
      </div>
    </header>
  );
}

export default Header;