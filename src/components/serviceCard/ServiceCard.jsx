import React from 'react';
export default function ServiceCard({ iconUrl, title, description,}) {
    return (
        <div
            className=" bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <img src={iconUrl} alt={title} className="mx-auto w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
}
