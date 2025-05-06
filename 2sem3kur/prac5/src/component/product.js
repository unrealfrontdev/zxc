import React from 'react';
import './product.css'; 
function Product(props) {
  return (
    <div className="product">
      <h2>{props.name}</h2>
      <img style={{ width: '270px', height: '200px' }} src={props.link} alt="параша" />
      <p>Осталось: {props.stock}</p>
      <p>Цена: {props.price}</p>
      <button>покупка недоступна в вашем регионе</button>
    </div>
  );
}
export default Product;