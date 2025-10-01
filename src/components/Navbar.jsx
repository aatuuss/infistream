import React, { useState } from "react";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#1E90FF] z-50 flex justify-center ">
        <div className="max-w-7xl w-full flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="img/logo.png"
              alt="Infimechn Logo"
              className="h-12 w-auto md:h-14"
            />
          </a>

          {/* Bagian kanan */}
          <div className="flex items-center gap-3">
            {/* Tombol pencarian */}
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex items-center w-40 sm:w-56 md:w-64 lg:w-72 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition"
            >
              <svg
                className="w-4 h-4 text-gray-500 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="hidden sm:inline">Search...</span>
              <span className="sm:hidden">Search</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && <SearchModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
