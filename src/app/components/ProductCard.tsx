'use client'

import {useCartStore} from "@/@/app/lib/store";
import Link from "next/link";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function ProductCard({product}: {product: Product}) {
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <div className="bg-blue-600 border-b-4 border-blue-400 rounded-md">
            <Link href={`/products/${product.id}`}>
                <img className="product-image p-0.5" src={product.image}  alt={"product image"}/>
                <h2 className="product-name p-2.5">{product.name}</h2>
                <p className="product-price p-2.5">{product.price}</p>
            </Link>
            <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Добавить в корзину
            </button>
        </div>
    )
}