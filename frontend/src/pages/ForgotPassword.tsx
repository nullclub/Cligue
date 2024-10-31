import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#28a745] mb-6">
          Forgot Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 rounded bg-white text-black font-bold"
          >
            Reset Password
          </button>
        </form>
        <p
          className="text-gray-500 text-center text-sm mt-6"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Remembered your password?{" "}
          <a href="#" className="text-gray-400">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
