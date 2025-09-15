import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
    alert("Terima kasih! Anda telah berlangganan newsletter kami.");
  };

  return (
    <footer className="relative border-t bg-blue-600 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 -top-20 flex justify-center">
        <div className="h-40 w-[90%] max-w-6xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6 pt-16 lg:px-8 lg:pt-20">
        

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
  <img 
    src="img/logo.png" 
    alt="Logo" 
    className="h-10 w-10 object-contain" 
  />
  <div>
    <p className="text-lg font-bold tracking-tight">Infistream</p>
    <p className="-mt-1 text-xs uppercase tracking-[0.2em] text-blue-200">Harmoni Teknologi</p>
  </div>
</div>

            </div>
            {/* <p className="mt-4 max-w-sm text-sm text-slate-300">
              Solusi komprehensif untuk simulasi CFD, pelatihan, dan konsultasi rekayasa. Kami membantu mempercepat inovasi produk Anda.
            </p> */}
            <div className="mt-6 flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-blue-300" />
              <p>
                Jl. Mayang 08, Bunulrejo, Blimbing<br />
                Kota Malang, Jawa Timur, Indonesia 65123
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-300" />
                <a href="https://wa.me/6281333546332" className="hover:text-white">+62 813-3354-6332</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-300" />
                <a href="mailto:hello@infimech.id" className="hover:text-white">hello@infimech.id</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">Layanan</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>CFD Simulation Services</li>
              <li>CFD Training Services</li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">Berlangganan</h4>
            <p className="mt-4 text-sm text-slate-300">Masukkan email Anda untuk mendapatkan kabar terbaru dari kami.</p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <div className="flex rounded-lg ring-1 ring-white/10 focus-within:ring-white/30">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  className="w-full rounded-l-lg bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                  required
                />
                <button type="submit" className="rounded-r-lg bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white md:mt-16">
          <p>Copyright © 2025 PT Infimech Harmoni Teknologi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;