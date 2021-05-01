import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Mobile Phone",
          price: 9999,
          qty: 1,
          img: '',
          id: 1
        },
        {
          title: "Watch",
          price: 999,
          qty: 2,
          img: '',
          id: 2
        },
        {
          title: "Laptop",
          price: 99999,
          qty: 1,
          img: '',
          id: 3
        }
      ]
    }
  }

  increaseQty = (prod) => {
    console.log('Increase qty of ', prod)

    const { products } = this.state;
    const index = products.indexOf(prod);

    products[index].qty += 1;

    this.setState({
      products
    })

  }

  decreaseQty = (prod) => {
    console.log('Decrease qty of', prod);
    const { products } = this.state;
    const index = products.indexOf(prod);

    // console.log('index',products[index].qty)
    if (products[index].qty > 0) {
      products[index].qty -= 1;
      this.setState({
        products
      })
    }
  }

  deleteItem = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); //[] without that given id

    this.setState({
      products: items
    })
  }

  getItemCount = () =>{
    const { products } = this.state;
    let count = 0;

    products.forEach ((product) => { 
      count += product.qty;
    }
    )
    return count;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        < Navbar count={this.getItemCount()} />
        < Cart
          products={products}
          onIncreaseQty={this.increaseQty}
          onDecreaseQty={this.decreaseQty}
          onDeleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
