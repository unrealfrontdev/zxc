import iphone12 from './photo/iphone12.jpg';
import iphone13 from './photo/iphone13.jpg';
import iphone14 from './photo/iphone14.jpg';
import iphone15 from './photo/iphone15.jpg';
import iphone16 from './photo/iphone16.jpg';
import HeaderComp from './component/headerComp';
import Product from './component/product';

const product = [
  {name: 'iphone 12', price: 200, stock: 10, link: iphone12},
  {name: 'iphone 13', price: 300, stock: 15, link: iphone13},
  {name: 'iphone 14', price: 400, stock: 20, link: iphone14},
  {name: 'iphone 15', price: 500, stock: 25, link: iphone15},
  {name: 'iphone 16', price: 600, stock: 30, link: iphone16}
];

function App() {
  return (
    <>
      <HeaderComp />
      <div className="product-container">
        {product.map(item => (
          <Product 
            name={item.name} 
            price={item.price} 
            stock={item.stock} 
            link={item.link} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
