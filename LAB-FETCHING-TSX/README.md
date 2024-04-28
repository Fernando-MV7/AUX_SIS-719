# LABORATORIO 9

# se convierte el codigo de getData 

# De JS 

( async () => {

  const randomProductId = Math.floor(Math.random() * 100) + 1;

  const url = `https://dummyjson.com/products/${randomProductId}`;
  
  const response = await fetch(url);
  
  const data = await response.json();

  console.log(data);

})();

# A ts

(async () => {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    const url = `https://dummyjson.com/products/${randomProductId}`;
  
    try {
      const response = await fetch(url);
      const data: any = await response.json();
      console.log(data);
    } 
    catch (error) {
      console.error('Error:', error);
    }
  })();

  # Luego cambiamos el codigo de Card de los componentes

  # de JSX

import { useEffect, useState } from "react";
import "./Card.css"

export const Card = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
        .then(res => res.json())
        .then(data => {setProduct(data)})
    },[]);

    return(
        <div className="card">
            <p>{product.title}</p>
            <p>Descripcion: {product.description}</p>
            <p>USD$: {product.price}</p>
        </div>
    )
};

# A TSX

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
    < div className="card">
      < p>{product.title}</p>
      < p>Descripción: {product.description}</p>
      < p>USD$: {product.price}</p>
    < /div>
  );
};

# Tambien modificamos el App, main y index

# App 

import './App.css'
import './async/services/getData'
import { Card } from './ui/components/Card'

function App() {

  return (
    <>
      < h2>LAB DATA - FETCHING< /h2 >
      < Card />
    </>
  )
}

export default App

# App.tsx

import React from 'react';
import './App.css';
import './async/getData';
import { Card } from './ui/components/Card';

function App() {
  return (
    <>
      < h2>LAB DATA - FETCHING< /h2 >
      < Card />
    </>
  );
}

export default App;

# main 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode>
    < App />
  < /React.StrictMode>,
)

# main tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  < React.StrictMode>
    < App />
  < /React.StrictMode>
);

# index

< !doctype html>
< html lang="en">
  < head>
    < meta charset="UTF-8" />
    < link rel="icon" type="image/svg+xml" href="/vite.svg" />
    < meta name="viewport" content="width=device-width, initial-scale=1.0" />
    < title>Vite + React</title>
  < /head>
  < body>
    < div id="root"></div>
    < script type="module" src="/src/main.jsx"></script>
  < /body>
< /html>

# index cambio

< !doctype html>
< html lang="en">
  < head>
    < meta charset="UTF-8" />
    < link rel="icon" type="image/svg+xml" href="/vite.svg" />
    < meta name="viewport" content="width=device-width, initial-scale=1.0" />
    < title>Vite + React</title>
  < /head>
  < body>
    < div id="root"></div>
    < script type="module" src="/src/main.tsx"></script>  => solo se modifica la extension jsx por tsx
  < /body>
< /html>

