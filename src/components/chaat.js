import { useState,useEffect } from "react";
import products from "../json/chaat.json";
import axios from "axios";

function Chaat() {
    const [data, setData] = useState([])
    
        const fetchData = async () => {
          try {  
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products,"hjdbehjdrd") ;
                       setData(response.data.products);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
      useEffect(()=>{
fetchData()
      },[])

    return (
        <>
 
  <div className="d-inline-flex">
    {data.map(item => (
      <div className="jumbotron jumbotron-fluid" key={item.id}>
        <div className="card ad mt-4 mr-3" style={{ width: "20rem", height: "35rem" }}>
          <img className="card-img-top img2" src={item.thumbnail} alt="Card image" />

          <div className="card-body">
            <h3 className="display-5 text-danger">{item.title}</h3>
            <h4 className="card-title text-dark">{item.brand}</h4>
            <p className="card-text text-dark">{item.price}</p>
            <p className="text-muted">{item.description}</p>
            <a href="#" className="btn btn-primary">
              Order here
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</>
    )

}
export default Chaat;