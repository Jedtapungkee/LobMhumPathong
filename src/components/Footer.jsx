import React from "react";
import { FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white p-6 mb-5">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-semibold text-lg mb-2">Contact</h2>
          <p className="flex justify-center items-center gap-2">
            <FaFacebook size={18} /> Lob Mhum Patong
          </p>
          <p className="flex justify-center items-center gap-2 mt-1">
            <FaPhone size={16} /> 00-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;