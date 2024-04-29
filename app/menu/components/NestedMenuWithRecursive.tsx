"use client";

import React, { useState } from "react";

const menuData = [
  {
    label: "Home",
    children: [
      {
        label: "About Us",
        children: [
          { label: "Mission" },
          { label: "Vision" },
          { label: "Team" },
        ],
      },
      { label: "Services" },
      { label: "Contact Us" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Product 1" },
      { label: "Product 2" },
      { label: "Product 3" },
    ],
  },
];

interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setExpandedItem((prevLabel) => (prevLabel === label ? null : label));
  };

  return (
    <ul className="ml-4">
      {items.map((item, index) => (
        <li key={index} className="py-1">
          <a
            href="#"
            className="block text-gray-800 hover:bg-gray-200 py-1 px-2 rounded"
            onClick={() => toggleItem(item.label)}
          >
            {item.label}
          </a>
          {item.children && item.label === expandedItem && (
            <Menu items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

const NestedMenu: React.FC = () => (
  <div className="bg-gray-200 w-52 mx-auto">
    <Menu items={menuData} />
  </div>
);

export default NestedMenu;
