import Products from "../json/snacks.json";
import { useState } from "react";
function Snacks() {
    const [data, setData] = useState(Products)
    return (
        <>
            {
                data.map((item) => {

                    return (
                        <>

                            <div class="jumbotron jumbotron-fluid d-inline-flex ">

                                < div class="card ad mt-4 mr-3" style={{ width: "20rem", height: "35rem" }} >
                                    <div Key={item.id}>
                                        <img class="card-img-top img2" src={item.img} alt="Card image" />
                                        <div class="card-body ">
                                            <h4 class="card-title">{item.name}</h4>
                                         <h5 className="card-text">{item.price}</h5>

                                            <a href="#" class="btn btn-primary">Order here</a>
                                        </div>
                                    </div>
                                </div >
                                </div>
                
                        </>
                    )
                })
            }
        </>
    )
}
export default Snacks;
