import {create} from 'zustand'

interface CartProduct {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartStore {
    cart: CartProduct[],
    addToCart: (product: {id: number, name: string, price: number}) => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (product) => {
        set((state) => {
            const isItemExists = state.cart.find((item) => item.id === product.id)
            if (isItemExists) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                    )
                }
            }
            return {cart: [...state.cart, {...product, quantity: 1}]}
        });
    }
}))