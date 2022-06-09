import React from "react";
import { ProductCard } from "../Components/ProductCard";

import products from "./data.json";
import "./ProductListing.css";

export const ProductListing = () => {
  return (
    <>
      <div className="flex-container">
        <div className="grid-40">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
