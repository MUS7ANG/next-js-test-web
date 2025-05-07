"use client"

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/@/app/lib/data';
import {useCartStore} from "@/@/app/lib/store";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === parseInt(params.id));
    const addToCart = useCartStore((state) => state.addToCart);
    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/" className="text-blue-500 hover:underline mb-4 block">
                ← Назад к каталогу
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-2xl text-gray-600 mb-4">${product.price}</p>
                    <p className="text-lg text-gray-600 mb-4">
                        <strong>Категория:</strong> {product.category}
                    </p>
                    {product.rating && (
                        <p className="text-lg text-gray-600 mb-4">
                            <strong>Рейтинг:</strong> {product.rating} / 5
                        </p>
                    )}
                    <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Характеристики:</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
}

