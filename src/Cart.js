import React from "react";
import { useSelector } from 'react-redux';
import CartItems from "./CartItems";

const Cart = ({ add, remove }) => {
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    // const cartItems = Object.keys(cart).map(id => (
    //     <li>
    //         {products[id].name} ${products[id].price} qty:{cart[id]}
    //         <button onClick={() => remove(id)}>-</button>
    //         <button onClick={() => add(id)}>+</button>
    //     </li>
    // ));

    let cartTotal = 0;
    for (let p in products) {
        const { price } = products[p];
        const qty = cart[p] || 0;
        cartTotal += price * qty;
    }
    // const cartPrices = Object.keys(cart).map(id => (
    //     products[id].price
    // ));
    // const cartTotal = cartPrices.reduce(
    //     (acc, curr) => )
    return (
        <div>
            <h1>My Shopping Cart</h1>
            <CartItems add={add}
                remove={remove} />
            <h5>Total: ${cartTotal}</h5>
        </div>
    )
}

export default Cart;