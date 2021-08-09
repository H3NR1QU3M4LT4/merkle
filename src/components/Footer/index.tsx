import React from "react";
import { formatDate } from "../../utils/FormatDate";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-2 sticky bottom-0">
      <div className="sm: flex justify-center items-center text-gray-500 mb-1 py-1">
        <div className="hidden md:block md:px-8">
          © {formatDate(new Date())}  <span className="font-bold">Merkle.</span>
          {formatDate(new Date())} All rigths reserved
        </div>
        <div className="hidden md:block md:px-8">
          Designed by
          <span className="font-bold">Merkle.</span>
        </div>
      </div>

      <div className="md:hidden sm: flex font-light justify-center text-gray-500 text-sm py-1">
        © {formatDate(new Date())}  <span className="font-bold">Merkle.</span>
        {formatDate(new Date())}All rigths reserved
      </div>

      <div className="md:hidden sm: flex font-light justify-center text-gray-500 text-sm py-1 mb-4">
        <p>
          Designed by
          <span className="font-bold">Merkle.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
