import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, increaseQuantity, reduceQuantity, deleteQuantity } = props;
  // console.log(this.props);
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ color: "#777" }}>{title}</div>
        <div>Rs {price}</div>
        <div>Qty: {qty}</div>
        <div className="cart-item-actions">
          <FaPlus
            //   onClick={this.increaseQuantity.bind(this)}
            onClick={() => {
              increaseQuantity(product);
            }}
            className="action-items"
            alt="Add"
          />
          <FaMinus
            onClick={() => {
              reduceQuantity(product);
            }}
            className="action-items"
            alt="Decrease"
          />
          <FaTrash
            onClick={() => {
              deleteQuantity(product.id);
            }}
            className="action-items"
            alt="Delete"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};

export default CartItem;
