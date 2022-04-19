import React, { useContext } from "react";
import { AppContext } from "../App";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  MdSearch,
  MdShoppingCart,
  MdOutlineFavoriteBorder,
} from "react-icons/md";

const Header = () => {

  const {cart} = useContext(AppContext);
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>Logo</div>
      </Link>

      <nav>
        <Link to="/products">
          <div className={styles.icon}>
            <MdSearch />
          </div>
        </Link>
        <Link to="/favourites">
          <div className={styles.icon}>
            <MdOutlineFavoriteBorder />
          </div>
        </Link>
        <div className={styles.icon}>
          <MdShoppingCart />{" "}{cart.length > 0 && <span>{cart.length}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
