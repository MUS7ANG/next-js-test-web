"use client"

import {useCartStore} from "@/@/app/lib/store";

export default function Cart () {
    const cart = useCartStore(state => state.cart);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div className="page">
            <h1>Cart - {cartCount}</h1>
        </div>
    )
}