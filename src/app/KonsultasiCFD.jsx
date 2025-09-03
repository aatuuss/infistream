import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "./TextType";

gsap.registerPlugin(ScrollTrigger);

const KonsultasiCFD = () => {
  const componentRef = useRef(); // Buat ref untuk komponen

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animasi untuk h1
      gsap.fromTo(
        ".scroll-animated-h1",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".scroll-animated-h1",
            start: "top 90%",
            toggleActions: "restart none none none", // <--- PERUBAHAN DI SINI
            once: false,
          },
        }
      );

      // Animasi untuk gambar utama
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
            toggleActions: "restart none none none", // <--- PERUBAHAN DI SINI
            once: false,
          },
        }
      );

      // Animasi untuk semua card
      gsap.utils.toArray(".card-animation-item").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "restart none none none", // <--- PERUBAHAN DI SINI
              once: false,
            },
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="relative w-full min-h-screen p-8 overflow-hidden bg-gradient-to-b from-white to-[#BBE2FB] z-10">
      <div className="grid align-items-center justify-items-center">
        <h1 className="col-start-1 row-start-1 z-10 text-center text-5xl md:text-7xl font-black uppercase text-[#C0E4FB] scroll-animated-h1">
          <span className="drop-shadow-lg">Konsultasi</span>{" "}
          <span className="drop-shadow-lg">CFD</span>
        </h1>
        <img
          src="/img/konsultasi.png"
          alt="Simulasi CFD"
          className="col-start-1 row-start-1 z-20 w-full max-w-lg mx-auto translate-y-32 scroll-animated-img"
        />
      </div>

      <div className="flex items-center gap-16"> {/* Ini mungkin perlu disesuaikan untuk layout responsif */}
        {/* ---- KOLOM KIRI ---- */}
        <div className="flex flex-col items-center gap-8">
          {/* Card 1 */}
          <div className="relative w-96 h-40 drop-shadow-2xl card-animation-item">
            <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-4 flex items-center justify-between">
              <div className="text-white text-2xl font-bold text-center drop-shadow-lg">
                <p>INDUSTRI</p>
                <p>MARITIM</p>
              </div>
              <img
                src="/img/maritim.png"
                alt="Industri Maritim"
                className="w-60 h-40 -translate-y-4"
              />
            </div>
            <div className="absolute bottom-[-17px] right-4 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[20px] border-t-white/40 backdrop-blur-2xl
              border-r-[10px] border-r-transparent
              translate-y-1 drop-shadow-2xl"></div>
          </div>

          {/* Teks + tombol */}
            <div className="flex items-center gap-10 py-2">
            <p className="font-bold text-2xl text-black">
              <TextType
                text={[
                  "Jasa simulasi CFD meliputi :"
                ]}
                typingSpeed={70}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
              />
            </p>
            <a
              href="#"
              className="bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-600 px-4 py-2 rounded-full shadow-md hover:bg-white transition flex items-center gap-2"
            >
              Learn More <span>→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative w-96 h-40 drop-shadow-2xl card-animation-item">
            <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-4 flex items-center justify-between">
              <div className="text-white text-2xl font-bold text-center drop-shadow-lg">
                <p>INDUSTRI</p>
                <p>DIRGANTARA</p>
              </div>
              <img
                src="/img/dirgantara.png"
                alt="Industri dirgantara"
                className="w-40 h-24 -translate-y-4"
              />
            </div>
            <div className="absolute bottom-[-17px] right-4 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[20px] border-t-white/40 backdrop-blur-2xl
              border-r-[10px] border-r-transparent
              translate-y-1 drop-shadow-2xl"></div>
          </div>
        </div>

        {/* ---- KOLOM KANAN ---- */}
        <div>
          {/* Card 3 */}
          <div className="relative w-96 h-40 drop-shadow-2xl card-animation-item">
            <div className="relative z-10 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl p-4 flex items-center justify-between">
              <div className="text-white text-2xl font-bold text-center drop-shadow-lg">
                <p>INDUSTRI</p>
                <p>ENERGI</p>
              </div>
              <img
                src="/img/energi.png"
                alt="Industri Energi"
                className="w-60 h-40"
              />
            </div>
            <div className="absolute bottom-[-17px] right-4 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[20px] border-t-white/40 backdrop-blur-2xl
              border-r-[10px] border-r-transparent
              translate-y-1 drop-shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonsultasiCFD;