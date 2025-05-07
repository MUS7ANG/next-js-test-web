'use client';
import {useEffect, useState} from 'react';
import ProductCard from '@/@/app/components/ProductCard';
import SearchBar from '@/@/app/components/SearchBar';
import { products } from '@/@/app/lib/data';
import {useSearchParams} from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('search') || '';
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    useEffect(() => {
        setSearchQuery(initialQuery);
    }, [initialQuery]);

    const filteredProducts = products.filter((product) =>
        [product.name, product.category, product.description]
            .join(' ')
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Каталог товаров</h1>
            <div className="mb-8 max-w-md mx-auto">
                <SearchBar onSearchAction={setSearchQuery} />
            </div>
            {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-600">Товары не найдены</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </main>
    );
}