'use client'

import React, { useState } from 'react';
import FilterMenu from './components/FilterMenu';
import ProductList from './components/ProductList';

interface MenuItem {
    id: number;
    title: string;
    children?: MenuItem[];
}

interface Product {
    id: number;
    name: string;
    category: number;
    price: number;
}

const data: MenuItem[] = [
    {
        id: 1,
        title: "IELTS",
        children: [
            {
                id: 11,
                title: "Reading",
                children: [
                    {
                        id: 111,
                        title: "Mock-up",
                        children: [
                            { id: 1111, title: "IELTS Reading Mock-up" },
                        ],
                    },
                    {
                        id: 112,
                        title: "Free-Exam",
                        children: [
                            { id: 1121, title: "IELTS Reading Free-Exam" },
                        ],
                    },
                ],
            },
            {
                id: 12,
                title: "Writing",
                children: [
                    {
                        id: 121,
                        title: "Free-Exam",
                        children: [
                            { id: 1211, title: "IELTS Writing Free-Exam" },
                        ],
                    },
                    {
                        id: 122,
                        title: "Live-class",
                        children: [
                            { id: 1221, title: "IELTS Writing Live-class" },
                        ],
                    },
                ],
            },
            {
                id: 13,
                title: "Speaking",
                children: [
                    {
                        id: 131,
                        title: "Mock-up",
                        children: [
                            { id: 1311, title: "IELTS Speaking Mock-up" },
                        ],
                    },
                    {
                        id: 132,
                        title: "Live-class",
                        children: [
                            { id: 1321, title: "IELTS Speaking Live-class" },
                        ],
                    },
                ],
            },
            {
                id: 14,
                title: "Listening",
                children: [
                    {
                        id: 141,
                        title: "Mock-up",
                        children: [
                            { id: 1411, title: "IELTS Listening Mock-up" },
                        ],
                    },
                    {
                        id: 142,
                        title: "Free-Exam",
                        children: [
                            { id: 1421, title: "IELTS Listening Free-Exam" },
                        ],
                    },
                ],
            },
        ],
    },
];

const products: Product[] = [
    { id: 1, name: 'IELTS Reading Mock-up', category: 1111, price: 100 },
    { id: 2, name: 'IELTS Reading Free-Exam', category: 1121, price: 200 },
    { id: 3, name: 'IELTS Writing Free-Exam', category: 1211, price: 150 },
    { id: 4, name: 'IELTS Writing Live-class', category: 1221, price: 300 },
    { id: 5, name: 'IELTS Speaking Mock-up', category: 1311, price: 100 },
    { id: 6, name: 'IELTS Speaking Live-class', category: 1321, price: 200 },
    { id: 7, name: 'IELTS Listening Mock-up', category: 1411, price: 150 },
    { id: 8, name: 'IELTS Listening Free-Exam', category: 1421, price: 300 },
];

const Home: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const getAllChildCategoryIds = (menuItem: MenuItem): number[] => {
        let ids = [menuItem.id];
        if (menuItem.children) {
            menuItem.children.forEach((child) => {
                ids = ids.concat(getAllChildCategoryIds(child));
            });
        }
        return ids;
    };

    const handleCategoryChange = (categoryId: number) => {
        let newSelectedCategories: number[] = [];
        const category = findCategoryById(data, categoryId);
        if (category) {
            const allCategoryIds = getAllChildCategoryIds(category);
            if (selectedCategories.includes(categoryId)) {
                newSelectedCategories = selectedCategories.filter((id) => !allCategoryIds.includes(id));
            } else {
                newSelectedCategories = [...selectedCategories, ...allCategoryIds];
            }
        }
        setSelectedCategories(newSelectedCategories);
    };

    const findCategoryById = (menuItems: MenuItem[], id: number): MenuItem | null => {
        for (const item of menuItems) {
            if (item.id === id) {
                return item;
            }
            if (item.children) {
                const found = findCategoryById(item.children, id);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };

    const filteredProducts = selectedCategories.length
        ? products.filter((product) =>
            selectedCategories.includes(product.category)
        )
        : products;

    return (
        <div className="flex">
            <FilterMenu
                data={data}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
            />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Home;
