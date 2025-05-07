"use client"

import Link from "next/link";
import Image from "next/image";
import {useCartStore} from "@/@/app/lib/store";
import SearchBar from "@/@/app/components/SearchBar";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function Header() {
    const cart = useCartStore(state => state.cart);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        router.push(`/?search=${encodeURIComponent(query)}`);
    };

    return (
        <header className="bg-blue-500 p-4">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="next icon"
                    width={60}
                    height={60}
                    />
                    <Link href="/" className="text-amber-50. text-2xl font-bold">Shop</Link>
                </div>

            <nav className="flex flex-row justify-between space-x-6">
                <div className="w-full sm:w-auto max-w-md">
                    <SearchBar onSearchAction={handleSearch} />
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Image
                        className="dark:invert"
                        src="/window.svg"
                        alt="window"
                        width={24}
                        height={24}
                    />
                    <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-200">Home</Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Image
                        className="dark:invert"
                        src="/globe.svg"
                        alt="about"
                        width={24}
                        height={24}
                    />
                    <Link href="/about" className="text-white hover:text-gray-200">
                        О нас
                    </Link>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Image
                        className="dark:invert"
                        src="/file.svg"
                        alt="cart"
                        width={24}
                        height={24}
                    />
                    <Link href="/cart" className="text-white hover:text-gray-200">
                        Корзина {(cartCount)}
                    </Link>
                </div>
            </nav>
        </div>
        </header>
    )
}