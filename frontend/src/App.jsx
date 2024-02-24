import { useEffect, useState } from 'react';
import axios from 'axios';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/App.scss';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8000/get_products/")
      .then(res => {
        setProducts(res.data);
        console.log(res);
      });
  }, []);


  function handleClick() {
    setIsClicked(true);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  };

  function handleMouseLeave() {
    setIsHovered(false);
  };

  return (
    <>
      <div className='dotted-bg'></div>
      <main className={`${isClicked ? 'product-mode' : ''}`}>
        <section>
          <p className='primecell-text'>prime<span className={`blue-text ${isHovered ? 'rainbow' : ''} ${isClicked ? 'rainbow' : ''}`}>cell</span></p>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faCartShopping}/> products
          </button>

        </section>

        <div className={`products ${isClicked ? 'products-product-mode' : ''}`}>
          <ul>
              {products.map(product => (
                <div key={product.id}>
                  <img src={product.url} key={product.id} className='product-image'/>
                  <li className="product-description" key={product.id}>{product.name} <br /> <span className='green-text'>{product.price}₺</span></li>
                  <a href="" target='_blank noopener noreferrer'>Ürüne git</a>
                </div>
              ))}
          </ul>
        </div>
      </main>

    </>
  );
}

export default App;
