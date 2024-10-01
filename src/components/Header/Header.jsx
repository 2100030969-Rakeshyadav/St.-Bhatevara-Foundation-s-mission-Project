// import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you have some CSS for the header
import pic5 from "../../Assets/pic5.png"
const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/logintype'); // Adjust the path if you have a different route for login
  };

  return (
    <div className="navbar bg-base-100 bg-white flex justify-between">
      <div className="">
      <div className="image-container ml-[5rem]">
        <img src={pic5} alt="logo" height="50%" width="50%" />
        </div>
        <div className="dropdown">
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-Prata">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/alumni">Alumni</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-Prata">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/alumni">Alumni</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="text-white font-bold p-3 btn font-Prata bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-auto " onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default Header;