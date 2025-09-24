import React, {useEffect,useState} from 'react';
import {FaUserCircle} from "react-icons/fa";
import authService from "../../../appwrite/authService/AuthService.js";

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{

            const userdata = async ()=> {
                try {
                    const currantuser = await authService.getCurrentUser()
                    setUser(currantuser);

                } catch ( err) {
                    setError("Failed to load user data");
                } finally {
                    setLoading(false);
                }
            }
            userdata();
    },[]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

    return(
        <div className="flex justify-center items-center min-h-screen bg-green-50">
        <div className="w-full max-w-sm bg-white rounded-xl p-6 shadow-md">
            {/* Profile Icon */}
            <div className="flex justify-center mb-4">
                <FaUserCircle className="text-green-400 w-40 h-54" />
            </div>

            {/* User Info Placeholder */}
            <h2 className="text-center text-2xl font-bold mb-2">  {user?.name || "User Name"}</h2>
            <p className="text-center text-gray-600 mb-4"> {user?.email || "user@example.com"}</p>


        </div>
    </div>
    )
}

export default Profile;