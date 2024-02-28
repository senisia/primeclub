import { useEffect, useState } from 'react';
import axios from 'axios';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/App.scss';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [products, setProducts] = useState([]);

  const apiUrl = "https://primeclub.cc/api"

  useEffect(() => {
      axios.get(`${apiUrl}/get_products/`)
      .then(res => {
        setProducts(res.data);
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
          <p className='primeclub-text'>prime<span className={`blue-text ${isHovered ? 'rainbow' : ''} ${isClicked ? 'rainbow' : ''}`}>club</span></p>
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
                  <img src={`${apiUrl}/products/${product.id}/image`} key={product.id} className='product-image'/>
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
