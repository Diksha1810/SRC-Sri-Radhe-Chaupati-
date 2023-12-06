import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function CardItems(props) {
    useEffect(()=>{
        if(!props.api||!props.type) return;
               axios[props.type]("http://localhost:4000"+props.api).then(response=>{
            console.log(response.data)
        })
    },[props.api])
  return (
    <div className="card_container" styles={{ backgroundColor: "#e9ecef" }}>
      <div class="card ad  mr-3" style={{ width: "20rem", height: "35rem" }}>
        <div Key={props.id || (Math.random()*100)}>
          {props.img && <img class="card-img-top img2" src={props.img} alt="Card image" />}
          <div class="card-body ">
           {props.name && <h4 class="card-title">{props.name}</h4>}
            {props.price && <p class="card-text">{props.price}</p>}

            <Link to="#" class="btn btn-primary">
              Order here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
