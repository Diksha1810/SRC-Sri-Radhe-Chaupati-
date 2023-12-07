import { useState } from "react";
import products from "../json/tandoori.json";
import { Link } from "react-router-dom";
import Layout from '../HOC/Layout'
import CardItems from "../commons/CardItems";

// import{useSelector,useDispatch} from "react-redux";

// import { INCREMENT,DECREMENT } from "../action/action";

// ... (imports)

function Tandoori() {
  const [data, setData] = useState(products);
  // const dispatch = useDispatch();

  // const counters = useSelector((state) => state.countReducer);

   const increment = (id) => {
  //   dispatch({
  //     type: INCREMENT,
  //     payload: id,
  //   });
   };

   const decrement = (id) => {
  //   dispatch({
  //     type: DECREMENT,
  //     payload: id,
  //   });
   };

  return (
    <>
      {data.map((item) => {
        const id = item.id;
        // const count = counters[id] || 0;

        return (
          <CardItems  name="Tandoori" {...item} api="/additem" type="get"/>
        );
      })}
    </>
  );
}

export default Layout(Tandoori);



    
