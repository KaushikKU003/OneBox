import React from 'react'
// import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo1 from "../Images/logo1.svg"
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function Home() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');  // This gets the token from the URL
if (token) {
  localStorage.setItem('token', token);  // Store the token in local storage
}
else{
  console.log("no token");
  
}
  return (
    <>
    <div>
  {/* Header */}
  <div className="h-16 w-screen bg-white dark:bg-[#1F1F1F] fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0] z-20">
    <b>Onebox</b>
    <div className="pr-10 flex items-center">
      <span className="cursor-pointer flex items-center">
        Tim&apos;s Workspace
      </span>
    </div>
  </div>

  {/* Sidebar */}
  <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10 pt-16">
    {/* Logo */}
    <div className="rounded-xl">
      <img
        src={logo1}
        className="h-8 rounded-xl object-left overflow-visible"
        alt="Logo"
      />
    </div>

    {/* Icons */}
    <div className="text-[#AEAEAE] text-2xl space-y-10">
      <div className="cursor-pointer p-1"  onClick={() => navigate('/home/dashboard')}>
        <RiHome5Fill />
      </div>
      <div className="cursor-pointer p-1" onClick={() => navigate('/home/profile')}>
        <RiUserSearchLine />
      </div>
      <div className="cursor-pointer p-1" onClick={() => navigate('/home/mail')}>
        <RiMailFill />
      </div>
      <div className="cursor-pointer p-1" onClick={() => navigate('/home/send')}>
        <IoIosSend />
      </div>
      <div className="cursor-pointer p-1" onClick={() => navigate('/home/stack')}>
        <SiElasticstack />
      </div>
      <div className="cursor-pointer p-1" onClick={() => navigate('/home/inbox')}>
        <FaInbox />
      </div>
      <div className="cursor-pointer p-1" onClick={() => navigate('/home/stats')}>
        <IoStatsChartSharp />
      </div>
    </div>

    {/* User Avatar */}
    <div className="text-white bg-blue-500 p-2 rounded-full">KK</div>
  </div>
</div>
    {/* Main content where nested route content will be rendered */}
    <div className="h-screen">
        <Outlet /> {/* This will render the nested routes (Dashboard, Profile, etc.) */}
      </div>
    </>
  )
}

export default Home
