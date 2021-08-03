import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const { products } = props;

    // const arr = [1,2,3,4,5]

    return (
        <div className="cart">
            {/* < CartItem qty={56} price={599} title={"shiv"} /> */}

            { products.map((prod) => {
                return (
                    <CartItem
                        onIncreaseQty={props.onIncreaseQty}
                        onDecreaseQty={props.onDecreaseQty}
                        onDeleteItem={props.onDeleteItem}
                        productzzz={prod}
                        key={prod.id} />
                )
            })} 


            {/* { arr.map((item) => {
                return item + 5;
                })
            } */}
            
        </div>

    );
}


export default Cart;