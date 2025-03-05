import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, CheckCircle, Instagram } from 'lucide-react';

const Footer = () => {
  

  return (
    <footer className=" bg-gray-800 text-white py-3 mt-4">
      <div className="max-w-7xl mx-auto  flex flex-col sm:flex-row justify-between items-center space-y-2 ">
      

      <div className="flex space-x-4 ">
          <a href="#" className="hover:text-blue-400 transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Linkedin size={18} />      
          </a>
        </div>
        <p className="text-sm mb-4 sm:mb-0 ">&copy; {new Date().getFullYear()} Navi All rights reserved.</p>

      
 
      </div>
    </footer>
  );
};

export default Footer;
