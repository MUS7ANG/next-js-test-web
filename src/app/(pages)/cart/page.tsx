'use client';
import { useCartStore } from '../../lib/store'

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>
            {cart.length === 0 ? (
                <p className="text-lg">Корзина пуста</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b py-2">
                                <span>{item.name}</span>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 p-1 border rounded"
                                        min="1"
                                    />
                                    <span>${item.price} x {item.quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xl font-semibold mt-4">Итого: ${total}</p>
                    <button
                        onClick={() => clearCart()}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Очистить корзину
                    </button>
                </div>
            )}
        </div>
    );
}