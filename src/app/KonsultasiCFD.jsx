import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KonsultasiCFD = () => {
  const componentRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Efek Judul utama → fade + slide + scale
      gsap.fromTo(
        ".scroll-animated-h1",
        { opacity: 0, y: -60, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".scroll-animated-h1",
            start: "top 90%",
          },
        }
      );

      // Gambar utama
      gsap.fromTo(
        ".scroll-animated-img",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".scroll-animated-img",
            start: "top 85%",
          },
        }
      );

      // Teks "Jasa simulasi CFD meliputi"
      gsap.fromTo(
        ".scroll-animated-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scroll-animated-text",
            start: "top 85%",
          },
        }
      );

      // Cards → smooth animasi
      gsap.set(".card-animation-item", {
        opacity: 0,
        scale: 0.8,
        y: 50,
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 0,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 85%",
          end: "top 20%",
          scrub: 0.5,
        },
      })
        .to(".card-animation-item", {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.2, // Sedikit perkecil stagger
          duration: 1.8, // Perpanjang durasi sedikit
          ease: "back.out(1.7)", // Ganti dengan ease yang lebih bouncy
        })
        .to(".card-left", { x: -300, duration: 2.2, ease: "power3.out" }, ">") // Sesuaikan durasi dan ease
        .to(".card-center", { y: -120, duration: 2.2, ease: "power3.out" }, "<+0.1") // Sesuaikan durasi dan ease
        .to(".card-right", { x: 300, duration: 2.2, ease: "power3.out" }, "<+0.2"); // Sesuaikan durasi dan ease
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="relative w-full min-h-screen p-8 overflow-hidden bg-gradient-to-b from-white to-[#1E90FF]"
    >
      {/* Judul + Gambar Tengah */}
      <div className="grid align-items-center justify-items-center">
        <h1
          className="col-start-1 row-start-1 z-0 text-center text-5xl md:text-7xl font-extrabold text-transparent 
                     bg-clip-text bg-gradient-to-t from-white to-[#4facfe] 
                     tracking-wider drop-shadow-[0_0_25px_rgba(97,167,255,0.8)] scroll-animated-h1"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          <span>KONSULTASI</span>{" "}
          <span>CFD</span>
        </h1>
        <img
          src="/img/konsultasi.png"
          alt="Simulasi CFD"
          className="col-start-1 row-start-1 z-0 w-full max-w-lg mx-auto scroll-animated-img"
        />
      </div>

      {/* Teks + Button sejajar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-12 relative z-0 scroll-animated-text mt-6 mb-12">
        <p className="font-bold text-4xl md:text-2xl text-white drop-shadow-lg">
          <span>Jasa</span>
          <span> simulasi</span>
          <span> CFD </span>
          <span>meliputi</span>
          <span> :</span>
        </p>
        <a
          href="#"
          className="bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-600 px-6 py-2 rounded-full shadow-md hover:bg-white transition inline-flex items-center gap-2"
        >
          Learn More <span>→</span>
        </a>
      </div>

      {/* Cards */}
      <div className="cards-container relative w-full h-96 flex justify-center items-center z-0 mt-16">
        {/* Card kiri */}
        <div className="card-animation-item card-left w-72 h-40 drop-shadow-2xl">
          <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-4 flex items-center justify-between">
            <div className="text-white text-xl font-bold text-center drop-shadow-lg">
              <p>INDUSTRI</p>
              <p>MARITIM</p>
            </div>
            <img
              src="/img/maritim.png"
              alt="Industri Maritim"
              className="w-32 h-24 -translate-y-2"
            />
          </div>
          <div
            className="absolute bottom-[-17px] right-4 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[20px] border-t-white/40 backdrop-blur-2xl
              border-r-[10px] border-r-transparent
              translate-y-1 drop-shadow-2xl"
          ></div>
        </div>

        {/* Card tengah */}
        <div className="card-animation-item card-center w-72 h-40 drop-shadow-2xl">
          <div className="relative z-0 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-4 flex items-center justify-between">
            <div className="text-white text-xl font-bold text-center drop-shadow-lg">
              <p>INDUSTRI</p>
              <p>DIRGANTARA</p>
            </div>
            <img
              src="/img/dirgantara.png"
              alt="Industri Dirgantara"
              className="w-32 h-24 -translate-y-2"
            />
          </div>
          <div
            className="absolute bottom-[-17px] right-4 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[20px] border-t-white/40 backdrop-blur-2xl
              border-r-[10px] border-r-transparent
              translate-y-1 drop-shadow-2xl"
          ></div>
        </div>

        {/* Card kanan */}
        <div className="card-animation-item card-right w-72 h-40 drop-shadow-2xl">
          <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-4 flex items-center justify-between">
            <div className="text-white text-xl font-bold text-center drop-shadow-lg">
              <p>INDUSTRI</p>
              <p>ENERGI</p>
            </div>
            <img
              src="/img/energi.png"
              alt="Industri Energi"
              className="w-32 h-24"
            />
          </div>
          <div
            className="absolute bottom-[-17px] right-4 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[20px] border-t-white/40 backdrop-blur-2xl
              border-r-[10px] border-r-transparent
              translate-y-1 drop-shadow-2xl"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default KonsultasiCFD;