import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartProduct {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartStore {
    cart: CartProduct[],
    addToCart: (product: {id: number, name: string, price: number}) => void
    removeFromCart: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    clearCart: () => void
}


export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
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
                })
            },
            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                })),

            updateQuantity: (id, quantity) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
                    ),
                })),
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart',
            storage: createJSONStorage(() => localStorage),
        }
    )

);