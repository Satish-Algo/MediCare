import React, { useEffect, useState } from "react";
import dbService from "../../appwrite/db-Service/Db-Service.js";
import {LabTestCard} from "../serviceCard/LabTestCard.jsx";

function LabTests() {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const res = await dbService.getLabTests()
                console.log(res)
                setTests(res.rows || []);
            } catch (err) {
                setError("Failed to load lab tests");
            } finally {
                setLoading(false);
            }
        };
        fetchTests();
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
        <div className="w-full min-h-screen flex flex-col items-center p-6 bg-green-50">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Available Lab Tests</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {tests.map((test) => (
                    <LabTestCard key={test.$id} test={test} />
                ))}
            </div>
        </div>
    );
}

export default LabTests;
