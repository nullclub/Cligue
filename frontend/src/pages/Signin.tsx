import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Signin: React.FC = () => {
    const [passwordType, setPasswordType] = useState("password");
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto">
                <h2 className="text-2xl font-bold text-center text-[#28a745] mb-6">Log In</h2>
                <form className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none" />
                    <div className="relative">
                        <input type={passwordType} placeholder="Password" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none pr-10" />
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-white" onClick={togglePasswordVisibility}>
                            {passwordType === "password" ? <HiOutlineEye className="text-gray-500" /> : <HiOutlineEyeOff className="text-gray-500" />}
                        </button>
                    </div>
                    <button type="submit" className="w-full p-3 rounded bg-white text-black font-bold">Log in</button>
                </form>
                <p className="text-gray-500 text-center text-sm mt-6">
                    By logging in, you agree to our <a href="#" className="text-gray-400">Terms</a>, <a href="#" className="text-gray-400">Data Policy</a> and <a href="#" className="text-gray-400">Cookies Policy</a>.
                </p>
                <p className="text-gray-500 text-center text-sm mt-6" onClick={() => {
                    navigate("/signup")
                }}>
                    Don't have an account? <a href="#" className="text-gray-400">Sign up</a>
                </p>
                <p className="text-gray-500 text-center text-sm mt-1" onClick={() => {
                    navigate("/forgotpassword")
                }}>
                    <a href="#" className="text-gray-400">Forgot Password?</a>
                </p>
            </div>
        </div>
    );
};

export default Signin;
