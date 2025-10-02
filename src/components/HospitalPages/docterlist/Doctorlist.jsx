import React, { useEffect, useState } from 'react';
import dbService from "../../../appwrite/db-Service/Db-Service.js";
import { FaUserMd } from "react-icons/fa"; // 👨‍⚕️ Icon for doctor

function Doctorlist() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const docdata = await dbService.get();
                console.log("Fetched data:", docdata);
                setDoctors(docdata.rows || []); // ✅ using `rows`
            } catch (err) {
                console.log("Error fetching doctors:", err);
                setError("Failed to fetch doctors");
            } finally {
                setLoading(false);
            }
        };
        fetchDoctor();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-green-50">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-green-600 font-semibold text-lg animate-pulse">
                        Loading doctors...
                    </p>
                </div>
            </div>
        );
    }
    if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

    return (
        <div className="min-h-screen bg-green-50 py-10 px-5">
            <h2 className="text-3xl font-bold text-green-600 text-center mb-10">
                Our Experienced Doctors
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="w-64 h-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center p-6"
                    >
                        {/* 👨‍⚕️ Doctor Icon */}
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FaUserMd className="text-green-600 text-4xl" />
                        </div>

                        {/* Doctor Info */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {doctor.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-1">
                            {doctor.specialization}
                        </p>
                        <p className="text-sm text-gray-500 mb-1">
                            {doctor.qualification}
                        </p>
                        <p className="text-xs text-gray-400 mt-2 italic">
                            {doctor.experience || "Experience not available"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctorlist;
