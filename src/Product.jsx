import {useEffect, useState} from "react";
import axios from "axios";
import rating from '../src/assets/img/rating.svg';
import cartWhite from '../src/assets/img/cartWhite.svg';
import arrow from '../src/assets/img/arrowBack.svg';
import {Link, useParams} from "react-router-dom";

export const Product = () => {

  const [product, setProduct] = useState(null)

  let {productId} = useParams()


  useEffect(() => {
    const promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
    promise.then((response) => {
      const product = response.data
      setProduct(product)
    })
  }, [])


  return (
    <div>
      <div className="arrowBack"><Link to={"/"}>
        <img src={arrow} alt="arrow"/>
        Back to BEST SELLER
      </Link>
      </div>

      {product === null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="product">
          <img src={product.image} alt={`image ${product.title}`}/>
          <div className="info">
            <p className="title">{product.title}</p>
            <p className="price">${product.price}</p>
            <div className="rating">
              <p>Rating: {product.rating ? product.rating.rate : 'N/A'}</p>
              {product.rating && <img src={rating} alt=""/>}
            </div>
            <div className="category">
              <span>Category: </span>
              <p>{product.category}</p>
            </div>
            <p className="description">{product.description}</p>
            <button>
              <img src={cartWhite} alt="cart image"/>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );

}