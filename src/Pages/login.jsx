// src/components/Login.js
import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from "../Images/logo.svg";
import google from "../Images/google.png";

const Login = () => {
    const navigate=useNavigate()
    const token = localStorage.getItem("token");

	if (token) {
		navigate("/home");
	} else {
		navigate("/login");
	}

	const handleGoogleSignup = () => {
		window.location.href =
			"https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://one-box-tau.vercel.app/home";
	};
    
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      {/* Navbar */}
      <nav className="bg-black p-4 flex justify-center border-[#25262B] border">
        <img src={logo} alt="logo" />
      </nav>

      {/* Main content: Login form */}
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-custom-gradient p-6  w-[460px] h-[312px] gap-12 border border-[#343A40] rounded-[17px] ">
          {/* Create a new account section */}
          <h2 className="text-xl/[31px] font-sans font-semibold text-center mb-4 text-white">
            Create a new account
          </h2>

          {/* Sign up with Google button */}
          <button className= "mt-7 w-full bg-custom-gradient text-[#CCCCCC] border border-[#707172] h-12 rounded-[4px] px-2 py-4 flex items-center justify-center" onClick={handleGoogleSignup}>
            {/* Container for image and text */}
            <div className="flex items-center gap-2 " >
              {/* Google Image */}
              <img src={google} alt="google" className="w-5 h-5 " />

              {/* Text */}
              <span className="flex-grow font-sans font-normal text-base ">
                Sign Up with Google
              </span>
            </div>
          </button>

          <div className="mt-12 flex justify-center items-center flex-col gap-5">
            {/* Create an account button */}
            <button className="w-48 h-12 rounded-[4px] px-3  bg-CreatAccounnt text-white font-sans font-normal  text-sm ">
              Create an Account
            </button>

            {/* Already have an account */}
            <div className="text-center mt-4 font-sans font-normal text-base">
              <span className="text-[#909296]">Already have an account? </span>
              <a href="/login" className="text-[#C1C2C5] ">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#121212] text-center py-2 borde-[#25262B]">
        <p className="text-[#5C5F66] text-sm">
            © 2023 Reachinbox. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Login;
