import { useDispatch, useSelector } from "react-redux"
import { remove } from "../store/cartSlice";
function Cart(){
  const dispatch=useDispatch();
    const products=useSelector(state=>state.cart)
    console.log(products,"showwww");
 
const removeCart=(id)=>{
dispatch(remove(id))


}

return (
  <>
    {products.map((item) => {
      return (
        <>
        
        <div className="col-sm-12">
        <div key={item.id}>
          <img src={item.img} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button className="btn btn-danger"onClick={()=>removeCart(item.id)}>Remove</button>
        </div>
        </div>
        </>
      );
    })}
  </>
);

}
export default Cart