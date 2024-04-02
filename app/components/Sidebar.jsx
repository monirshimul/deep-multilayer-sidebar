"use client";
import { faAngleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = ({ data }) => {
  const [openMenus, setOpenMenus] = useState({});

  const handleMenuToggle = (menuId) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menuId]: !prevOpenMenus[menuId],
    }));
  };

  const renderSubMenu = (children, parentId) => {
    if (!children) return null;

    return (
      <ul className="pl-4">
        {children.map((childItem) => (
          <li key={childItem.id}>
            <div
              onClick={() => handleMenuToggle(childItem.id)}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <span>{childItem.title}</span>
              {childItem.children && (
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-400"
                  rotation={openMenus[childItem.id] ? 90 : 0}
                />
              )}
            </div>
            {openMenus[childItem.id] &&
              renderSubMenu(childItem.children, childItem.id)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex h-screen">
      <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-y-auto w-64">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Sidebar</h1>
          <button className="text-gray-600 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div>
          <ul>
            {data.map((menuItem) => (
              <li key={menuItem.id}>
                <div
                  onClick={() => handleMenuToggle(menuItem.id)}
                  className="flex items-center justify-between cursor-pointer py-2 px-4 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                >
                  <span>{menuItem.title}</span>
                  {menuItem.children && (
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-gray-400"
                      rotation={openMenus[menuItem.id] ? 90 : 0}
                    />
                  )}
                </div>
                {openMenus[menuItem.id] &&
                  renderSubMenu(menuItem.children, menuItem.id)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">{/* Your main content here */}</div>
    </div>
  );
};

export default Sidebar;
