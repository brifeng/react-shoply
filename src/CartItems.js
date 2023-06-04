import React from "react";
import { useSelector } from 'react-redux';

const CartItems = ({ add, remove }) => {
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);

    const items = Object.keys(cart).map(id => (
        <li>
            {products[id].name} ${products[id].price} qty:{cart[id]}
            <button onClick={() => remove(id)}>-</button>
            <button onClick={() => add(id)}>+</button>
        </li>
    ));

    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default CartItems;