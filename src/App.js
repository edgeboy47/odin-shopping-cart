import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Home from "./components/Home";
import { createContext, useState, useEffect } from "react";
export const AppContext = createContext({});

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  //TODO useeffect to get products from api
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setProducts(json);
    }

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            {/* <Route path="/products/:id" element={} /> */}
          </Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
