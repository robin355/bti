import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookF,FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-black #005e9e text-white">
  <div className="flex-1 gap-4 justify-items-center items-center">
    <div className='flex gap-2 hover:text-blue-500 justify-items-center items-center'>
    <BsTelephone></BsTelephone>
    <p className=" normal-case">16604</p>
    </div>
    <div className='flex gap-2 hover:text-blue-500 justify-items-center items-center'>
    <GoMail></GoMail>
    <p className=" normal-case">robinmahmud358@gmail.com</p>
    </div>
  </div>
  <div>
    <div className="dropdown dropdown-end flex gap-2">
    <FaFacebookF className='hover:text-blue-500'></FaFacebookF>
    <BsInstagram className='hover:text-blue-500'></BsInstagram>
    <FaLinkedin className='hover:text-blue-500'></FaLinkedin>
    <IoLogoYoutube className='hover:text-blue-500'></IoLogoYoutube>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;