import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import "./index.css";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,

  document.getElementById("root")
);
