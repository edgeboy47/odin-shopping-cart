import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { AppContext } from "../App";

const ProductDetails = () => {
  const state = useLocation();
  const product = state.state;
  const { dispatch } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles.details}>
        <div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
            ${parseFloat(product.price).toFixed(2)}
          </div>
          <div className={styles.description}>{product.description}</div>
        </div>
        <div className={styles.add_button}>
          <button onClick={() => dispatch({ type: "ADD", payload: product })}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
