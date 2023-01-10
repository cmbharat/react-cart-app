import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    //state is way to store local data for particular component ,in object structure
    this.state = {
      products: [
        {
          price: 999,
          title: "mobile phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          id: 1,
        },
        {
          price: 9999,
          title: "TV",
          qty: 1,
          img: "https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.jpg?b=1&s=170667a&w=0&k=20&c=rT4t6CuNap53Qu78fbFGMy5IEji46IqQDILCrfAcHtg=",
          id: 2,
        },
        {
          price: 99999,
          title: "Laptop",
          qty: 1,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          id: 3,
        },
      ],
    };
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
