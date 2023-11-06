import { useState } from "react";
import products from "../json/tandoori.json";


function Tandoori(){
const[data,setData]=useState(products)
return (
    <>
    {
data.map((item)=>{
  return ( 
    <div class="jumbotron jumbotron-fluid d-inline-flex ">

    < div class="card ad mt-4 mr-3" style={{width: "20rem",height:"35rem" }} >
<div Key={item.id}>
<img class="card-img-top img2" src={item.img} alt="Card image" />
<div class="card-body ">
<h4 class="card-title">{item.name}</h4>
<p class="card-text ">{item.price}</p>
<p>{item.description}</p>
<a href="#" class="btn btn-primary">Order here </a>
</div>
</div>
</div >
</div>
  
  )
})
    }


    </>
  )
}
export default Tandoori


    
