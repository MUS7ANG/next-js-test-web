import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Навигация</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-gray-300">
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-gray-300">
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="hover:text-gray-300">
                                    Корзина
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts" className="hover:text-gray-300">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                        <ul className="space-y-2">
                            <li>Email: shop@example.com</li>
                            <li>Телефон: +7 (123) 456-78-90</li>
                            <li>Адрес: ул. Примерная, 123, Город</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="hover:text-gray-300">
                                Twitter
                            </a>
                            <a href="https://instagram.com" className="hover:text-gray-300">
                                Instagram
                            </a>
                            <a href="https://facebook.com" className="hover:text-gray-300">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p>© 2025 Мой Магазин. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}