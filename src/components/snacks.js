import Products from "../json/snacks.json";
import { useState } from "react";
import CardItems from "../commons/CardItems";
import Layout from "../HOC/Layout"
function Snacks() {
    const [data, setData] = useState(Products)
    return (
        <>
          {data.map((item) => {
            return <CardItems  name="Snacks" {...item} />;
          })}
        </>
      );
}
export default Layout(Snacks);
