import React, { useContext } from "react";
import styles from "./Products.module.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Products</span>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className={styles.card_container}>
      <Link to={`/products/${product.id}`} state={product}>
        {" "}
        <div className={styles.card}>
          <div className={styles.img_container}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.card_title}>{product.title}</div>
          <div className={styles.price}>
            <span>${parseFloat(product.price).toFixed(2)}</span>{" "}
            <span className={styles.icon}>
              <MdOutlineFavoriteBorder />
            </span>
          </div>
          <div className={styles.card_bottom}></div>
        </div>
      </Link>
      <button
        onClick={() => dispatch({ type: "ADD", payload: product })}
        className={styles.add_button}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
