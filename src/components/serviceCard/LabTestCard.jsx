import React from "react";
import {motion} from "framer-motion";
export function LabTestCard({ test }) {
    return (
        < motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
        >
        <div className="bg-white shadow-md rounded-lg p-6 text-center w-64 cursor-pointer hover:scale-105 transform transition-transform">

            <h3 className="text-xl font-semibold">{test.name}</h3>
            <p className="text-gray-600 mt-2">{test.description}</p>
            {test.price && <p className="text-green-500 mt-2">₹{test.price}</p>}
            <button className="mt-4 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500">
                Book Test
            </button>
        </div>
        </motion.div>
    );
}
