import { useState } from "react";
import products from "../json/snacks.json";
import { useSelector, useDispatch } from "react-redux";
import countReducer from "../reducer/incReducer";
import { DECREMENT, INCREMENT } from "../action";
function Snacks() {
    const [data, setData] = useState(products)
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.countReducer)
    const increment = (id) => {
      dispatch({
        type: INCREMENT,
        payload: id
      })
    }
  
    const decrement = (id) => {
      dispatch({
        type: DECREMENT,
        payload: id
      })
    }
  
    return (
      <>
        {
          data.map((item) => {
            const count = counter[item.id] || 0;
  
            return (
              <div className="jumbotron jumbotron-fluid d-inline-flex ">
  
                < div className="card ad mt-4 mr-3" style={{ width: "20rem", height: "35rem" }} >
                  <div Key={item.id}>
                    <img className="card-img-top img2" src={item.img} alt="Card image" />
                    <div className="card-body ">
                      <h4 className="card-title text-dark">{item.name}</h4>
                      
                      <p className="card-text font-weight-bold text-dark">{item.price}</p>
                      
                        <button className="btn btn-danger"onClick={()=>decrement(item.id)}>-</button><span className="text-dark">Quantity{count}</span> <button className="btn btn-danger" onClick={()=>increment(item.id)}>+</button>
                    
                   
                         <p>{item.description}</p>
  
                      <a href="#" className="btn btn-primary">Order here </a>
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
export default Snacks;
