'use client'

import React, { useState } from 'react';

interface MenuItem {
    id: number;
    title: string;
    children?: MenuItem[];
}

interface FilterMenuProps {
    data: MenuItem[];
    selectedCategories: number[];
    onCategoryChange: (categoryId: number) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ data, selectedCategories, onCategoryChange }) => {
    const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

    const handleMenuToggle = (menuId: number) => {
        setOpenMenus((prevOpenMenus) => ({
            ...prevOpenMenus,
            [menuId]: !prevOpenMenus[menuId],
        }));
    };

    const handleCheckboxChange = (itemId: number) => {
        onCategoryChange(itemId);
    };

    const renderSubMenu = (children: MenuItem[] | undefined) => {
        if (!children) return null;

        return (
            <ul className="pl-4">
                {children.map((childItem) => (
                    <li key={childItem.id}>
                        <div
                            onClick={() => handleMenuToggle(childItem.id)}
                            className="flex items-center justify-between cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(childItem.id)}
                                    onChange={() => handleCheckboxChange(childItem.id)}
                                    onClick={(e) => e.stopPropagation()} // Prevent click propagation to menu toggle
                                    className="form-checkbox"
                                />
                                <span>{childItem.title}</span>
                            </label>
                            {childItem.children && (
                                <span
                                    className={`transform ${openMenus[childItem.id] ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`}
                                >
                                    &gt;
                                </span>
                            )}
                        </div>
                        {openMenus[childItem.id] && renderSubMenu(childItem.children)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
            <ul>
                {data.map((menuItem) => (
                    <li key={menuItem.id}>
                        <div
                            onClick={() => handleMenuToggle(menuItem.id)}
                            className="flex items-center justify-between cursor-pointer py-2 px-4 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                        >
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(menuItem.id)}
                                    onChange={() => handleCheckboxChange(menuItem.id)}
                                    onClick={(e) => e.stopPropagation()} // Prevent click propagation to menu toggle
                                    className="form-checkbox"
                                />
                                <span>{menuItem.title}</span>
                            </label>
                            {menuItem.children && (
                                <span
                                    className={`transform ${openMenus[menuItem.id] ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`}
                                >
                                    &gt;
                                </span>
                            )}
                        </div>
                        {openMenus[menuItem.id] && renderSubMenu(menuItem.children)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterMenu;
