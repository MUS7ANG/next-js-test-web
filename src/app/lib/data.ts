export interface Product {
    id: number
    name: string
    price: number
    image: string
}
export const products: Product[] = [
    { id: 1, name: 'Футболка', price: 20, image: '/images/tshirt.jpg' },
    { id: 2, name: 'Джинсы', price: 50, image: '/images/jeans.jpg' },
];