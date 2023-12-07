import { useState } from "react";
import products from "../json/South.json";
import CardItems from "../commons/CardItems";
import Layout from "../HOC/Layout";
function South() {
  const [data, setData] = useState(products);
  return (
    <>
      {data.map((item) => {
        return <CardItems  name="South" {...item} />;
      })}
    </>
  );
}
export default Layout(South);
