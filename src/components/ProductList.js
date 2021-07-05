import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  <ListView />;
  return <GridView products={products}></GridView>;
};

export default ProductList;
