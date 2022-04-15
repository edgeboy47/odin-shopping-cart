import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  MdSearch,
  MdShoppingCart,
  MdOutlineFavoriteBorder,
} from "react-icons/md";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>Logo</div>
      </Link>

      <nav>
        <Link to="/products">
          <MdSearch className={styles.icon} />
        </Link>
        <Link to="/products/:id"> {/* TODO */}
          <MdOutlineFavoriteBorder className={styles.icon} />
        </Link>
        <MdShoppingCart className={styles.icon} />
      </nav>
    </header>
  );
};

export default Header;
