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
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3YAt7n4qIAEV4DQeixrLlMvjH7i8d8vkQA&usqp=CAU',
          id: 1
        },
        {
          title: "Watch",
          price: 999,
          qty: 2,
          img: 'https://blogs-images.forbes.com/anthonydemarco/files/2019/09/IWC-Top-Gun-PNG.png',
          id: 2
        },
        {
          title: "Laptop",
          price: 99999,
          qty: 1,
          img: 'https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
          id: 3
        }
      ]
    }
  }

  increaseQty = (prod) => {
    console.log('Increase qty of ', prod)

    const { products } = this.state;
    // console.log('Hello shiv check thsi', products)
    const index = products.indexOf(prod);
    // console.log('index chaie muje', index)

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

  getTotal = () =>{
    const { products } = this.state;
    let total = 0;

    products.map((product) => {
        total = total + product.qty*product.price ;
      })
      return total
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
        <div style={{padding:10, fontSize:20, fontWeight:500 }}> TOTAL :- {this.getTotal()} </div>
      </div>
    );
  }
}

export default App;
