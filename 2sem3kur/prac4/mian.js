// filepath: c:\Users\elise\Desktop\petrov\bookstore\main.js
// Функциональный компонент
function BookFunctional({ title, author, price, oldPrice, image }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: '250px', objectFit: 'cover' }} // Фиксируем высоту и используем objectFit
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Автор: {author}</p>
        <p className="card-text">
          <span className="text-danger fw-bold">{price} ₽</span>
          {oldPrice && (
            <span className="text-muted ms-2 text-decoration-line-through">
              {oldPrice} ₽
            </span>
          )}
        </p>
        <button className="btn btn-primary">Добавить в корзину</button>
      </div>
    </div>
  );
}

// Компонент на основе класса ES6
class BookClass extends React.Component {
  render() {
    const { title, author, price } = this.props;
    return (
      <div className="card m-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Автор: {author}</p>
          <p className="card-text">Цена: {price} ₽</p>
        </div>
      </div>
    );
  }
}

// Компонент с использованием стрелочной функции
const BookArrow = ({ title, author, price }) => (
  <div className="card m-2" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Автор: {author}</p>
      <p className="card-text">Цена: {price} ₽</p>
    </div>
  </div>
);

const books = [
  {
    id: 1,
    title: '1984',
    author: 'Джордж Оруэлл',
    price: 500,
    oldPrice: 700,
    image: 'https://avatars.mds.yandex.net/i?id=a991d5b69b8a8ea3ce51d3bdd0ab1a4c0025aa93-12423448-images-thumbs&n=13',
  },
  {
    id: 2,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 600,
    oldPrice: 800,
    image: 'https://avatars.mds.yandex.net/i?id=3369c06497282c3714c1784d7f801559756772fb-5869158-images-thumbs&n=13',
  },
  {
    id: 3,
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 700,
    oldPrice: 900,
    image: 'https://avatars.mds.yandex.net/i?id=40e75ab5547255e97cf7b4f7537c1b8eedd4c4fc-4866016-images-thumbs&n=13',
  },
];

// Компонент Header с меню
function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="container d-flex justify-content-center py-2">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Книги</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Статьи</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Обзоры книг</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Отрывки из книг</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Тесты</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Интервью</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Игры</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Открытки</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Чек-листы</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Бинго</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Авторы</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Bookstore() {
  return (
    <div>
      <Header /> {/* Включаем Header */}
      <div className="container mt-4">
        <h1 className="text-center">Книжный магазин</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {books.map((book) => (
            <BookFunctional key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

BookFunctional.defaultProps = {
  price: 100,
};
BookClass.defaultProps = {
  price: 100,
};
BookArrow.defaultProps = {
  price: 100,
};

ReactDOM.render(<Bookstore />, document.getElementById('root'));