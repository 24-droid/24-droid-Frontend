import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Icons for password visibility

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0b20]">
      <div
        className="flex flex-col items-center justify-center w-120 bg-amber-200 m-auto rounded-lg border-white border-2"
      >
        <p
          className="text-center text-4xl mb-4 text-black"
          style={{ fontSize: "1.6rem", lineHeight: "1.2", fontFamily: "Roboto" }}
        >
          Login
        </p>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80%]">
          <div>
            <label htmlFor="email" className="pl-4 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-12 bg-white border text-black border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
              placeholder="abc@example.com"
              style={{ border: "2px solid black", color: "black" }}
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="password" className="pl-4 text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="w-full h-12 bg-white border text-black border-black rounded-md px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
                placeholder="Enter your password"
                style={{ border: "2px solid black", color: "black" }}
                onChange={handleChange}
                value={formData.password}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-30 h-10 rounded-lg drop-shadow-lg bg-blue-400 border-2 border-black  text-black px-4"
            >
              Submit
            </button>
          </div>

          <div className="flex gap-2 items-center justify-center pt-4">
            <p className="text-gray-700">Don't have an account?</p>
            <Link to="/signup" className="text-black hover:opacity-40 underline">
              Signup Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
