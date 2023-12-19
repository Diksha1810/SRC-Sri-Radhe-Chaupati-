import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  // console.log(products, "show");

  const removeCart = (id) => {
    dispatch(remove(id));
  };
  const Total = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      {products.map((item, index) => {
        return (
          <>
          <div className="col-sm-12">
            <div key={item.id}>
              <img src={item.img} />
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <label>Quantity</label>
              <select onChange={Total} value={quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <h1>{quantity * item.price}</h1>
            <button
              className="btn btn-danger"
              onClick={() => removeCart(item.id)}
            >
              <p></p>
              Remove
            </button>
          </div>
          <p>Total Price:</p>
          </>
        );
      })}
    </>
  );
}

export default Cart;
