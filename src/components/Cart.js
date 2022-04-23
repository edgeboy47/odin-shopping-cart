import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { AppContext } from "../App";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";

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
        {cart.length > 0 && (
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className={styles.total}>
              Subtotal: $
              {parseFloat(
                cart.reduce((a, b) => {
                  return a + b.price * b.count;
                }, 0)
              ).toFixed(2)}
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
      <div
        className={`${styles.backdrop} ${isCartOpen ? styles.open : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>
    </>
  );
};

export default Cart;
const CartItem = ({ item }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.cartItem_details}>
        <div className={styles.cartItem_title}>
          <h3>{item.title}</h3>
          <h5>${parseFloat(item.price).toFixed(2)}</h5>
        </div>
        <div className={styles.cartItem_controls}>
          <div
            className={styles.icon}
            onClick={() => {
              dispatch({ type: "REMOVE", payload: item.id });
            }}
          >
            <MdRemove />
          </div>
          <input
            min={1}
            type="number"
            name="quantity"
            id=""
            value={item.count}
            onChange={(e) => {
              dispatch({type: "SET_COUNT", payload: { id: item.id, count: e.target.value }});
            }}
          />
          <div
            className={styles.icon}
            onClick={() => {
              dispatch({ type: "ADD", payload: item });
            }}
          >
            <MdAdd />
          </div>
        </div>
      </div>
    </div>
  );
};
