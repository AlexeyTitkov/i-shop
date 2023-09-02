import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export const Bestsellers = () => {

  const [products, setProducts] = useState([])

  const navigate = useNavigate();


  useEffect(()=>{
    const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/')
    promise.then((response) => {
      const products = response.data
      setProducts(products)
    })
  },[])

  const navigateToProductHandler = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div className="bestSeller">
      <h2>BEST SELLER</h2>
      <div className="cards">
        {
          products.map((element)=>{
            return (  <div className="card" onClick={()=>navigateToProductHandler(element.id)}>
              <img src={element.image} alt="img"/>
              <h4>{element.title}</h4>
              <p className="price">${element.price}</p>
              <button>Show more</button>
            </div>)
          })
        }
      </div>
    </div>
  )
}