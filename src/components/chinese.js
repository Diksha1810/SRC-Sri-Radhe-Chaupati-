import chinese1 from "../json/chinese.json";
import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import Layout from "../HOC/Layout";
import CardItems from "../commons/CardItems";

function Chinese() {
  const [data, setData] = useState(chinese1);

  console.log(data, "data");
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <CardItems name="Chinese" {...item} />
          </>
        );
      })}
    </>
  );
}
export default Layout(Chinese);
