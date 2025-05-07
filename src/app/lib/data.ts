export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    features: string[];
    category: string;
    rating?: number;
};

export const products: Product[] = [
    {
        id: 1,
        name: 'Футболка',
        price: 20,
        image: '/clothes.jpg',
        description: 'Удобная хлопковая футболка для повседневной носки. Идеально подходит для лета.',
        features: ['100% хлопок', 'Дышащая ткань', 'Машинная стирка'],
        category: 'Одежда',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Джинсы',
        price: 50,
        image: '/clothes.jpg',
        description: 'Классические джинсы прямого кроя. Подходят для любого случая.',
        features: ['Прочный деним', 'Пять карманов', 'Средняя посадка'],
        category: 'Одежда',
        rating: 4.7,
    },
    {
        id: 3,
        name: 'Кроссовки',
        price: 80,
        image: '/clothes.jpg',
        description: 'Легкие кроссовки для спорта и прогулок. Обеспечивают комфорт в течение всего дня.',
        features: ['Амортизирующая подошва', 'Сетчатый верх', 'Нескользящая подошва'],
        category: 'Обувь',
        rating: 4.8,
    },
];