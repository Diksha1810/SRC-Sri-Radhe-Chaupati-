import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function CardItems(props) {
  const [products,setProducts] = useState([]);
    useEffect(()=>{
      console.log(props)
        if(!props.api||!props.type) return;
            axios[props.type]("http://localhost:4000"+props.api).then(response=>{
            console.log(response.data)
            setProducts(prev=>response.data)
        })

        console.log(props.name)
    },[])
  return  (
    <>
    {JSON.stringify()}
    {products && products.map(item=>(<div className="card_container" styles={{ backgroundColor: "#e9ecef" }}>
      <div class="card ad  mr-3" style={{ width: "20rem", height: "35rem" }}>
        <div Key={item.id || (Math.random()*100)}>
          {item.img && <img class="card-img-top img2" src={item.img} alt="Card image" />}
          <div class="card-body ">
           {item.name && <h4 class="card-title">{item.name}</h4>}
            {item.price && <p class="card-text font-weight bold">&#x20B9;{item.price}</p>}
            <Link to="#" class="btn btn-primary">
              Order here
            </Link>
          </div>
        </div>
      </div>
    </div>))}
    </>
  )
}

export default CardItems;
