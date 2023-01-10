import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <FaShoppingCart style={styles.cartIcon} />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "0px 5px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
