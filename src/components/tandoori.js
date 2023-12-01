import { useState } from "react";
import products from "../json/tandoori.json";
import {useSelector ,useDispatch}from "red"
import { INCREMENT } from "../action";
import { DECREMENT } from "../action";

// ... (imports)

function Tandoori() {
  const [data, setData] = useState(products);
  const dispatch = useDispatch();

  const counters = useSelector((state) => state.countReducer);

  const increment = (id) => {
    dispatch({
      type: INCREMENT,
      payload: id,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: DECREMENT,
      payload: id,
    });
  };

  return (
    <>
      {data.map((item) => {
        const id = item.id;
        const count = counters[id] || 0;

        return (
          <div class="jumbotron jumbotron-fluid d-inline-flex ">
            <div class="card ad mt-4 mr-3" style={{ width: "20rem", height: "35rem" }}>
              <div key={id}>
                {/* ... (other card content) */}
                <button onClick={() => decrement(id)}>-</button>
                {count}
                <button onClick={() => increment(id)}>+</button>
                {/* ... (other card content) */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Tandoori;



    
