'use client'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SideMenu = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative w-64 border-r border-gray-200">
            <div className={`h-64 overflow-y-hidden relative ${isExpanded ? 'h-auto' : 'h-64'}`}>
                <ul className="space-y-2 p-4">
                    {items.map((item, index) => (
                        <li key={index} className="text-gray-700">
                            {item}
                        </li>
                    ))}
                </ul>
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
            </div>
            <button
                onClick={toggleExpand}
                className="w-full text-center py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 flex justify-center items-center"
            >
                {isExpanded ? (
                    <>
                        Show Less <FaChevronUp className="ml-2" />
                    </>
                ) : (
                    <>
                        View More <FaChevronDown className="ml-2" />
                    </>
                )}
            </button>
        </div>
    );
};

export default SideMenu;
