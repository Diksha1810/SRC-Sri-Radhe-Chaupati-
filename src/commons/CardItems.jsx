import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { createImmutableStateInvariantMiddleware} from "@reduxjs/toolkit";

function CardItems(props) {
  const dispatch = useDispatch();
  const [products,setProducts] = useState([props]);
  const addToCart = (product) => {
    dispatch(add(product));
    
  };
  

  return  (
    <>
   
    { products.map(item=>(<div className="card_container" styles={{ backgroundColor:"#e9ecef" }}>
      <div  className="card ad  mr-3" style={{ width: "20rem", height: "35rem" }}>
        <div Key={item.id || (Math.random()*100)}>
          {item.img && <img  className="card-img-top img2" src={item.img} alt="Card image" />}
          <div  className="card-body ">
           {item.name && <h4  className="card-title text-dark">{item.name}</h4>}
            {item.price && <p  className="card-text font-weight bold text-dark">&#x20B9;{item.price}</p>} 
            <Link to="#"  className="btn btn-primary"onClick={()=>addToCart(item)}>
              Order here
              </Link>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default CardItems;
