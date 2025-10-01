import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KonsultasiCFD = () => {
  const componentRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // === Animasi judul ===
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // === Animasi gambar ===
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // === Animasi teks penjelasan ===
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // === Animasi Kartu ===
      let mm = gsap.matchMedia();

      // --- Desktop ---
      mm.add("(min-width: 768px)", () => {
        gsap.set(".card-animation-item", {
          opacity: 0,
          scale: 0.8,
          y: 50,
          position: "absolute",
          left: "50%",
          top: "0",
          transform: "translateX(-50%)",
          zIndex: 0,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 85%",
            end: "top 20%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        })
          .to(".card-animation-item", {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.2,
            duration: 1.2,
            ease: "back.out(1.7)",
          })
          .to(".card-left", { x: -300, duration: 2, ease: "power3.out" }, ">")
          .to(".card-center", { y: -80, duration: 2, ease: "power3.out" }, "<+0.1")
          .to(".card-right", { x: 300, duration: 2, ease: "power3.out" }, "<+0.2");
      });

      // --- Mobile ---
      mm.add("(max-width: 767px)", () => {
        gsap.set(".card-animation-item", {
          opacity: 0,
          scale: 0.8,
          y: 50,
          position: "relative",
          left: "auto",
          top: "auto",
          transform: "translateX(0)",
          marginBottom: "2rem",
          zIndex: 0,
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            scrub: 0.8,
          },
        }).to(".card-animation-item", {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.3,
          duration: 1.5,
          ease: "back.out(1.7)",
        });
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="relative w-full min-h-screen p-4 sm:p-8 overflow-hidden bg-gradient-to-b from-white to-[#1E90FF]"
    >
      {/* Container Utama */}
      <div className="grid items-start justify-items-center relative">
        {/* Judul Utama */}
        <h1
          className="scroll-animated-h1 font-sans 
                     col-start-1 row-start-1 z-10 text-center 
                     whitespace-normal sm:whitespace-nowrap
                     text-2xl sm:text-3xl md:text-6xl lg:text-7xl 
                     font-extrabold text-transparent bg-clip-text 
                     bg-[#4facfe] tracking-wide sm:tracking-wider 
                     drop-shadow-[0_0_20px_rgba(97,167,255,0.8)]"
        >
          KONSULTASI CFD
        </h1>

        {/* Gambar Utama */}
        <img
          src="/img/konsultasi.png"
          alt="Simulasi CFD"
          className="scroll-animated-img col-start-1 row-start-1 z-10 w-64 sm:w-80 md:w-96 lg:w-[450px] mx-auto"
        />
      </div>

      {/* Teks + Button */}
      <div className="scroll-animated-text flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4 relative z-0 mt-8 sm:mt-12 md:mt-20 mb-8 sm:mb-12">
        <p className="font-sans font-bold text-lg sm:text-xl md:text-3xl text-white drop-shadow-lg text-center md:text-left">
          Jasa simulasi CFD meliputi :
        </p>
        <a
          className="bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-gray-600 px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow-md hover:bg-white transition inline-flex items-center gap-1 sm:gap-2"
        >
          Learn More <span>→</span>
        </a>
      </div>

      {/* Cards */}
      <div
        className="cards-container relative w-full 
                   h-auto md:h-[300px] 
                   flex flex-col md:flex-row 
                   justify-center items-center 
                   z-0 mt-16 sm:mt-20 md:mt-32 gap-4 sm:gap-6 md:gap-8 pb-12 sm:pb-16"
      >
        {/* Card kiri */}
        <div className="card-animation-item card-left w-64 sm:w-72 md:w-72 h-36 sm:h-40 md:h-40 drop-shadow-2xl relative">
          <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-3 sm:p-4 flex items-center justify-between">
            <div className="font-sans text-white text-lg sm:text-xl md:text-xl font-bold text-center drop-shadow-lg">
              <p>INDUSTRI</p>
              <p>MARITIM</p>
            </div>
            <img src="/img/maritim.png" alt="Industri Maritim" className="w-24 sm:w-32 h-20 sm:h-24 -translate-y-1" />
          </div>
          <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white/50 backdrop-blur-lg z-0"></div>
        </div>

        {/* Card tengah */}
        <div className="card-animation-item card-center w-64 sm:w-72 md:w-72 h-36 sm:h-40 md:h-40 drop-shadow-2xl relative">
          <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-3 sm:p-4 flex items-center justify-between">
            <div className="font-sans text-white text-lg sm:text-xl md:text-xl font-bold text-center drop-shadow-lg">
              <p>INDUSTRI</p>
              <p>DIRGANTARA</p>
            </div>
            <img src="/img/dirgantara.png" alt="Industri Dirgantara" className="w-24 sm:w-32 h-20 sm:h-24 -translate-y-1" />
          </div>
          <div className="absolute -bottom-3 right-6 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white/50 backdrop-blur-lg z-0"></div>
        </div>

        {/* Card kanan */}
        <div className="card-animation-item card-right w-64 sm:w-72 md:w-72 h-36 sm:h-40 md:h-40 drop-shadow-2xl relative">
          <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-3 sm:p-4 flex items-center justify-between">
            <div className="font-sans text-white text-lg sm:text-xl md:text-xl font-bold text-center drop-shadow-lg">
              <p>INDUSTRI</p>
              <p>ENERGI</p>
            </div>
            <img src="/img/energi.png" alt="Industri Energi" className="w-24 sm:w-32 h-20 sm:h-24" />
          </div>
          <div className="absolute -bottom-3 right-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white/50 backdrop-blur-lg z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default KonsultasiCFD;