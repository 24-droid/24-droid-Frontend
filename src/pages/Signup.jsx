import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import icons
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "developer",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0b20]">
      <div
        className="flex flex-col items-center justify-center w-120 bg-amber-200 m-auto rounded-lg border-white border-2"
      >
        <p
          className="font-[40%] text-center text-4xl mb-4 text-black"
          style={{
            fontSize: "1.6rem",
            lineHeight: "1.2",
            fontFamily: "Roboto",
          }}
        >
          Sign Up
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[80%]">
          <div>
            <label htmlFor="username" className="pl-4 text-black">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full h-12 bg-white text-black border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
              placeholder="John Doe"
              onChange={handleChange}
              value={formData.username}
              style={{ border: "2px solid black" }}
            />
          </div>

          
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
              onChange={handleChange}
              value={formData.email}
              style={{ border: "2px solid black" }}
            />
          </div>

        
          <div>
            <label htmlFor="role" className="pl-4 text-black">
              Role
            </label>
            <select
              id="role"
              name="role"
              onChange={handleChange}
              value={formData.role}
              className="w-full h-12 text-black bg-white border border-black rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
              style={{ border: "2px solid black", color: "black" }}
            >
              <option value="developer" className="text-black">
                Developer
              </option>
              <option value="teacher" className="text-black">
                Teacher
              </option>
              <option value="student" className="text-black">
                Student
              </option>
            </select>
          </div>

         
          <div className="relative">
            <label htmlFor="password" className="pl-4 text-black">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full h-12 bg-white text-black border border-black rounded-md px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
              style={{ border: "2px solid black" }}
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute top-10 right-3 text-gray-600 hover:text-gray-900"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

         
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-30 h-10 rounded-lg  bg-blue-400 border-black text-black border-2"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="flex gap-2 items-center justify-center pt-4">
          <p className="text-gray-700">Already have an account? </p>
          <Link
            to="/login"
            className="text-black hover:opacity-40 underline"
            style={{ color: "black" }}
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
1