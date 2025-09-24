import React from 'react';
import Logo from "../../logo/Logo.jsx";
import {Link} from "react-router-dom";
import Input from "../../inputfield/Input.jsx";
import Button from "../../button/Button.jsx";
import{useForm} from "react-hook-form";
import authService from "../../../appwrite/authService/AuthService.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../../store/feature/auth/authSlice.js";
import {useState} from "react";

function Login() {
    const [error, setError] = useState(null);
    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login =async (data) => {
        console.log(data);

            try {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) {
                    // already logged in
                    dispatch(setUser(currentUser));
                    navigate("/");
                    return;
                }

                const account = await authService.login({
                    email: data.email,
                    password: data.password,
                });

                if (account) {
                    const userdata = await authService.getCurrentUser();
                    if (userdata) {
                        dispatch(setUser(userdata));
                        navigate("/");
                    }
                }
            } catch (err) {
                setError(err);
            }
        };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="mx-auto w-full max-w-lg bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-xl p-10 border border-black/10">
                <div className="mb-4 flex justify-center">
                    <Logo width="100px"/>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-primary hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-4 text-center"> {error.message || "Something went wrong"}</p>}

                <form onSubmit={handleSubmit(login)} className="space-y-5 mt-6">

                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...(register("password", {required: "Password is required"}))}
                    />
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="max-w-xs w-full bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-200"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;