import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Home from "./components/Home";
import { createContext, useState, useReducer, useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
export const AppContext = createContext({});

const addToCart = (cart, product) => {
  const isInCart = cart.find((item) => item.id === product.id);

  // If product is already in cart, increase quantity, else add product to cart
  return isInCart
    ? cart.map((item) =>
        item.id === product.id
          ? { ...item, count: parseInt(item.count) + 1 }
          : item
      )
    : [...cart, { ...product, count: 1 }];
};

const removeFromCart = (cart, id) => {
  const isInCart = cart.find((item) => item.id === id);

  // If product is in cart, decrease quantity. If quantity is 1, remove product from cart
  if (isInCart) {
    return isInCart.count === 1
      ? cart.filter((item) => item.id !== id)
      : cart.map((item) =>
          item.id === id ? { ...item, count: parseInt(item.count) - 1 } : item
        );
  }

  return cart;
};

const setCount = (cart, id, count) => {
  return cart.map((item) =>
    item.id === id ? { ...item, count: parseInt(count) } : item
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addToCart(state, action.payload);

    case "REMOVE":
      return removeFromCart(state, action.payload);

    case "SET_COUNT":
      return action.payload.count < 1
        ? removeFromCart(state, action.payload.id)
        : setCount(state, action.payload.id, action.payload.count);

    default:
      return state;
  }
};

function App() {
  const [cart, dispatch] = useReducer(reducer, []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setProducts(json);
    }

    fetchData();
  }, []);

  return (
    <BrowserRouter basename="/odin-shopping-cart">
      <AppContext.Provider value={{ cart, dispatch }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
