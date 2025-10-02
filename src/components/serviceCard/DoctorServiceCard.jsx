import React from 'react';
import {useNavigate} from "react-router-dom";
import {FaUserMd} from "react-icons/fa";
function DoctorServiceCard({ doctor }) {
    const navigate = useNavigate();
    return (
        <div
            // onClick={() => navigate(`/doctor/${doctor.$id}`)}
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-64"
        >
            <div className="flex justify-center mb-4">
                <FaUserMd className="text-green-500 w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600 mt-1">{doctor.specialization}</p>
            <p className="text-gray-600 mt-1 text-sm">{doctor.qualification}</p>
            <p className="text-gray-500 text-sm mt-2">
                Experience: {doctor.experience}
            </p>
            <p className="text-gray-400 text-xs">
                Availability: {doctor.availability}
            </p>
        </div>
    );
}

export default DoctorServiceCard;