import ProductCard from "@/@/app/components/ProductCard";
import {products} from "@/@/app/lib/data";


export default function Home() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Каталог товаров</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
