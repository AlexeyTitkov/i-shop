import {useEffect, useState} from "react";
import axios from "axios";
import rating from '../src/assets/img/rating.svg';
import cartWhite from '../src/assets/img/cartWhite.svg';
import arrow from '../src/assets/img/arrowBack.svg';
import {Link, useParams} from "react-router-dom";
import {Reviews} from "./Reviews";

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

  const [isProductInCart, setIsProductInCart] = useState(false)

  const addProductToCartHandler = () => {
    alert('Product added to cart')
    setIsProductInCart(true)
  }

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
        <div>
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
              <button
                onClick={addProductToCartHandler}
                style={{
                  background: isProductInCart ? '#FFFFFF' : '#2068F8',
                  color: isProductInCart ? '#2068F8' : '#FFFFFF',
                  border: isProductInCart ? '1px solid #2068F8' : '1px solid transparent',
                }}>
                <img src={cartWhite} alt="cart image" />
                {isProductInCart ? 'Go to cart' : 'Add to cart'}
              </button>
            </div>
          </div>
          <Reviews productId={productId} />
        </div>
      )}
    </div>
  );

}