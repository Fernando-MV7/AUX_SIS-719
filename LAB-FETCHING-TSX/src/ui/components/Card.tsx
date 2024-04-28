import React from 'react';
import { useEffect, useState } from "react";
import "./Card.css";

interface Product {
  title: string;
  description: string;
  price: number;
}

export const Card = () => {
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    fetch("https://dummyjson.com/products/2")
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="card">
      <p>{product.title}</p>
      <p>Descripción: {product.description}</p>
      <p>USD$: {product.price}</p>
    </div>
  );
};
