import React, { useState } from "react";

function Addfood() {
  const [food, setFood] = useState({});

  const handleChange = (e) => {
    console.log(food);
    setFood((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFileChnage = (e) => {
    console.log(e);
    setFood((prev) => ({ ...prev, [e.target.name]: e.files }));
  };

  return (
    <div>
      <div className="row justify-content-cenmmbnnter">
        <form className="form-group" name="foodList" multipart>
          <div className="">
            Name:
            <input
              name="food_name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="">
            Type:
            <input
              name="food_type"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="">
            Price:
            <input
              name="food_price"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="">
            Category
            <input
              name="food_category"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </form>
          <div className="" htmlFor="food_image_1">
            Image
            <input
              name="food_image"
              id="food_image"
              className="form-control"
              onChange={handleFileChnage}
              type="file"
            />
            {/* <p className="btn btn-primary ">Add New Image</p> */}
          </div>
      </div>
    </div>
  );
}

export default Addfood;
