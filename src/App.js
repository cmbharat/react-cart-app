import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
class App extends React.Component {
  constructor() {
    super();

    //state is way to store local data for particular component ,in object structure
    this.state = { products: [] };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        // console.log(snapshot);
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }
  increaseQuantity = (product) => {
    //set state form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  decreaseQuantity = (product) => {
    // this.setState((prevState) => {
    //   if (prevState.qty === 0) {
    //     return;
    //   }
    //   return { qty: prevState.qty - 1 };
    // });

    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty == 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({ products: products });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  deleteQuantity = (id) => {
    // console.log("inside delete");
    const { products } = this.state;
    const items = products.filter((item) => {
      return item.id !== id;
    }); //returns array where id is not equal to id that is being passed

    this.setState({
      products: items,
    });
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cost = 0;

    products.map((product) => {
      cost = cost + product.qty * product.price;
    });
    return cost;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Navbar count={this.getCartCount()} />
          <Cart
            products={products}
            increaseQuantity={this.increaseQuantity}
            reduceQuantity={this.decreaseQuantity}
            deleteQuantity={this.deleteQuantity}
          />
          <div style={{ padding: 10, fontSize: 20 }}>
            TOTAL:{this.getCartTotal()}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
