import React, { useContext } from "react";
import { AppContext } from "../App";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  MdSearch,
  MdShoppingCart,
} from "react-icons/md";

const Header = ({ setIsCartOpen }) => {
  const { cart } = useContext(AppContext);
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>Home</div>
      </Link>

      <nav>
        <Link to="/products">
          <div className={styles.icon}>
            <MdSearch />
          </div>
        </Link>
        <div
          className={styles.icon}
          onClick={() => setIsCartOpen(true)}
        >
          <MdShoppingCart /> {cart.length > 0 && <span className={styles.badge}>{parseInt(cart.reduce((a, b) => a + b.count, 0))}</span>}
          {/* TODO style cart icon badge */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
