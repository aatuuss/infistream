import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import ikon yang dibutuhkan

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-blue-500  text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* Logo - Menggunakan tag <img> */}
              <img
                src="img/logo.png" // Ganti dengan path ke gambar logo Anda
                alt="Company Logo"
                className="h-20 w-auto mr-3" // Sesuaikan ukuran logo sesuai kebutuhan
              />
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              A CFD literacy platform offering insights from industry and academic, backed by expert experience since 2018
            </p>
          </div>

          {/* Service Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  CFD Simulation Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  CFD Training Services
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join a Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-300 border-opacity-30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm opacity-90">
              Copyright © 2025 PT Infimech Harmoni Teknologi
            </div>

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
              <div className="flex items-start md:items-center space-x-2"> {/* Mengubah items-center menjadi items-start untuk alamat */}
                <FaMapMarkerAlt className="text-lg" />
                <div>
                  <span className="font-semibold block">MALANG OFFICE</span>
                  <span className="opacity-90">
                    Jl. Mayjen 08, Bunulrejo, Blimbing Kota Malang, Jawa Timur Indonesia, 65123
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2 md:mt-0"> {/* Menambahkan margin top untuk mobile */}
                <a href="mailto:info@infimech.tech" className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity">
                  <FaEnvelope className="text-lg" />
                  <span>info@infimech.tech</span>
                </a>
                <a href="tel:+6281315346332" className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity">
                  <FaPhone className="text-lg" />
                  <span>+6281315346332</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;