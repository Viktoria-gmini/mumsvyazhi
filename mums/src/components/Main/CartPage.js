import React, { useState } from 'react';
import Card from '../Main/card';
import Cart from '../Cart';



function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [base64Images, setBase64Images] = useState([]); // Исправлено название переменной на base64Images для лучшей читаемости

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productToRemove) => {
        setCartItems(cartItems.filter(item => item !== productToRemove));
    };

    // Загрузка изображений и установка массива Base64
    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await fetch('http://example.com/images'); // Замените URL на свой
                const data = await response.json(); // Предположим, что сервер возвращает данные в формате JSON
                const base64Images = data.map(image => image.base64); // Предположим, что на сервере вы получаете массив объектов с полями base64
                setBase64Images(base64Images); // Установка массива base64Images
            } catch (error) {
                console.error('Ошибка при загрузке изображений:', error);
            }
        };

        loadImage();
    }, []);

    return (
        <div>
            <h1>Корзина</h1>
            <div className="products">
                <Card addToCart={addToCart} product={{ id: 1, title: 'Товар 1', price: 100 }} />
                <Card addToCart={addToCart} product={{ id: 2, title: 'Товар 2', price: 200 }} />
                {/* Добавьте другие товары, если необходимо */}
            </div>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} base64Images={base64Images} /> {/* Передача base64Images в компонент Cart */}
        </div>
    );
}

export default CartPage;