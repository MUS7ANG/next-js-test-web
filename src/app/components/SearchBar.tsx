'use client'

import React, {useState} from "react";
import {products} from "@/@/app/lib/data";

type SearchBarProps = {
    onSearchAction: (query: string) => void;
}

export default function SearchBar({onSearchAction}: SearchBarProps) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        onSearchAction(value);

        const filteredSuggestions = products.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
            .map((p) => p.name)
            .slice(0, 5);
        setSuggestions(value ? filteredSuggestions : []);
    }
    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Поиск товаров..."
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {query && (
                <button
                    onClick={() => {
                        setQuery('');
                        onSearchAction('');
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
            )}
            {suggestions.length > 0 && (
                <ul className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-300"
                            onClick={() => {
                                setQuery(suggestion);
                                onSearchAction(suggestion);
                                setSuggestions([]);
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}