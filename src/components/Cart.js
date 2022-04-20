import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { AppContext } from "../App";
import { MdClose } from "react-icons/md";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { cart } = useContext(AppContext);
  return (
    <>
      <div className={`${styles.cart} ${isCartOpen ? styles.open : ""}`}>
        <div className={styles.title}>
          <h1>Your Cart</h1>
          <div className={styles.icon} onClick={() => setIsCartOpen(false)}>
            <MdClose />
          </div>
        </div>
        <div className={styles.cart_items}>
          {cart.length > 0 && cart.map((item) => <CartItem item={item} />)}
        </div>
      </div>
      <div
        className={`${styles.backdrop} ${isCartOpen ? styles.open : ""}`}
      ></div>
    </>
  );
};

export default Cart;

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
};
