import { useState } from "react";
import products from "../json/chaat.json";
import CardItems from "../commons/CardItems";
import Layout from "../HOC/Layout";
function Chaat(){
    const [data, setData] = useState(products)
    return (
        <>
            {
                data.map((item) => {
                    return (
                       <CardItems  name="Chaat" {...item}/>

                    )
                })
            }


        </>
    )

}
export default Layout(Chaat);