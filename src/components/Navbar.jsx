import React, { useState } from "react";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#cce7f8",
          borderBottom: "1px solid #ccc",
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="img/logo.png"
              alt="Infimechn Logo"
              style={{ height: "56px", width: "auto" }}
            />
          </a>

          {/* Bagian kanan */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Tombol pencarian */}
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                width: "220px",
                padding: "8px 12px",
                fontSize: "14px",
                color: "#555",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <svg
                style={{
                  width: "16px",
                  height: "16px",
                  color: "#666",
                  marginRight: "8px",
                }}
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
              Search...
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
