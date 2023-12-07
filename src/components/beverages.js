import products from "../json/beverages.json";
import { useState } from "react";
import CardItems from "../commons/CardItems";
import Layout from "../HOC/Layout";
function Beverages() {
    const [data, setData] = useState(products)
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <>
                          <CardItems  name="Beverages" {...item}/>

                        </>
                    )

                }
                )
            }
        </>
    )
}
export default Layout(Beverages);