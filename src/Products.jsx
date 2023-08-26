import React, { useEffect, useState } from "react";
import Ui from "./Ui";

const Products = () => {
  const [products, setProducts] = useState([]); 
  const getdata = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="main-box">
      {products.map((val) => (
        <Ui key={val.id} {...val} />
      ))}
    </div>
  );
};

export default Products;
