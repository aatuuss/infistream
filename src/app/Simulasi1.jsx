import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Simulasi1 = () => {
  const componentRef = useRef();
  const cardsContainerRef = useRef();
  const cardsWrapperRef = useRef();
  const scrollRef = useRef({ stop: false, isDragging: false });
  const [activeIndex, setActiveIndex] = useState(null);

  const cardsData = [
    { img: "/img/meeting.png", title: "Offline Kelas Simulasi CFD", desc: "Kelas belajar Simulasi CFD offline disediakan bagi user yang membutuhkan pembelajaran tatap muka.", link: "https://infistream.id/training-cfd/" },
    { img: "/img/numerik.jpg", title: "Numerik CFD", desc: "Penjelasan terkait matematika lanjut pada bidang engineering dengan konsep matematika dasar.", link: "https://infistream.id/teori-metode-numerik/" },
    { img: "/img/fisika.jpg", title: "Fisika Fluida", desc: "Konsep teoritis fenomena fluida: aliran panas, aliran fluida, hingga reaksi kimia.", link: "https://infistream.id/mekanika-fluida/" },
    { img: "/img/opensource.jpeg", title: "Open Source CFD", desc: "Perangkat lunak bebas dengan kode sumber terbuka untuk diubah dan dibagikan.", link: "https://infistream.id/catatan-cfd/" },
    { img: "/img/openfoam.png", title: "OpenFOAM CFD", desc: "Framework open source untuk solver FVM pada kasus mekanik fluida dan perpindahan panas.", link: "https://infistream.id/openfoam/" },
    { img: "/img/fluida.jpeg", title: "Mekanika Fluida", desc: "Mekanika fluida mempelajari sifat dan perilaku fluida untuk berbagai aplikasi teknik, industri, energi, teknologi, dan lingkungan.", link: "https://infistream.id/mekanika-fluida/", wide: true },
    { img: "/img/catatan.jpeg", title: "Catatan CFD", desc: "Catatan ini membahas dasar-dasar CFD meliputi dinamika fluida, metode numerik, pemodelan turbulensi, serta penerapannya dengan OpenFOAM untuk mendukung analisis yang efektif.", link: "https://infistream.id/catatan-cfd/", wide: true },
  ];

useEffect(() => {
  if (!cardsWrapperRef.current || !cardsContainerRef.current) return;

  const wrapper = cardsWrapperRef.current;
  const container = cardsContainerRef.current;

  let currentTranslateX = 0;
  const speed = 2;
  const cardWidth = wrapper.children[0]?.offsetWidth || 0;
  const gap = 24;
  const singleSetWidth = cardsData.length * (cardWidth + gap);

  // Auto scroll
  let animationFrame;
  const autoScroll = () => {
    if (!scrollRef.current.stop) {
      currentTranslateX -= speed;
      if (Math.abs(currentTranslateX) >= singleSetWidth * 2) currentTranslateX = 0;
      gsap.set(wrapper, { x: currentTranslateX });
    }
    animationFrame = requestAnimationFrame(autoScroll);
  };
  autoScroll();

  // Drag manual
  let isDragging = false;
  let startX = 0;
  let startTranslateX = 0;

  const onPointerDown = (e) => {
    isDragging = true;
    scrollRef.current.stop = true;
    startX = e.clientX || e.touches[0].clientX;
    startTranslateX = currentTranslateX;
    container.style.cursor = "grabbing";
    e.preventDefault();
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const delta = currentX - startX;
    currentTranslateX = startTranslateX + delta;
    gsap.set(wrapper, { x: currentTranslateX });
  };

  const onPointerUp = () => {
    if (isDragging) {
      isDragging = false;
      scrollRef.current.stop = false;
      container.style.cursor = "grab";
    }
  };

  // Pasang listener ke wrapper supaya drag berfungsi di atas kartu
  wrapper.addEventListener("mousedown", onPointerDown);
  wrapper.addEventListener("touchstart", onPointerDown, { passive: false });
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("touchmove", onPointerMove, { passive: false });
  window.addEventListener("mouseup", onPointerUp);
  window.addEventListener("touchend", onPointerUp);

  wrapper.addEventListener("mouseleave", onPointerUp);

  return () => {
    cancelAnimationFrame(animationFrame);
    wrapper.removeEventListener("mousedown", onPointerDown);
    wrapper.removeEventListener("touchstart", onPointerDown);
    window.removeEventListener("mousemove", onPointerMove);
    window.removeEventListener("touchmove", onPointerMove);
    window.removeEventListener("mouseup", onPointerUp);
    window.removeEventListener("touchend", onPointerUp);
    wrapper.removeEventListener("mouseleave", onPointerUp);
  };
}, [cardsData.length]);



  const handleMouseEnter = (e) => {
    scrollRef.current.stop = true;
    gsap.to(e.currentTarget, { scale: 1.1, y: -10, boxShadow: "0px 20px 40px rgba(97, 167, 255, 0.5)", zIndex: 9999, duration: 0.35, ease: "power3.out", overwrite: "auto" });
  };

  const handleMouseLeave = (e) => {
    scrollRef.current.stop = false;
    gsap.to(e.currentTarget, { scale: 1, y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)", zIndex: e.currentTarget.dataset.originalIndex === String(activeIndex) ? 999 : 10, duration: 0.4, ease: "power3.inOut", overwrite: "auto" });
  };

  return (
    <div ref={componentRef} className="relative pt-0 pb-8 overflow-hidden font-sans">
      <img src="/img/line.png" alt="Background garis" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="px-4 mb-4 relative z-10">
        <h6 className="simulasi-title font-extrabold text-2xl md:text-3xl uppercase tracking-wider text-left text-black">MATERI BELAJAR SIMULASI</h6>
        <div className="mt-2 h-1 w-48 bg-[#61a7ff] simulasi-underline"></div>
      </div>
      <div className="relative z-10">
        <div ref={cardsContainerRef} className="relative px-8 cursor-grab">
          <div ref={cardsWrapperRef} className="flex gap-6 w-max relative">
            {[...cardsData, ...cardsData, ...cardsData].map((card, index) => {
              const originalIndex = index % cardsData.length;
              const isActive = originalIndex === activeIndex;
              return (
                <div key={index} data-index={index} data-original-index={originalIndex} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`card-animation-item flex flex-col md:flex-row flex-shrink-0 w-60 sm:w-64 md:w-[34rem] lg:w-[40rem] h-auto md:h-48 lg:h-52 bg-white border border-gray-200 rounded-2xl overflow-hidden font-sans transition-transform duration-300 ${isActive ? "scale-105 z-[999]" : "scale-100 z-10"}`}>
                  <div className={`h-24 sm:h-28 md:h-full ${card.wide ? "w-full md:w-2/5" : "w-full md:w-1/3"}`}>
                    <img className="w-full h-full object-cover" src={card.img} alt={card.title} />
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 flex flex-col justify-center items-start flex-grow text-left">
                    <h5 className="mb-1 text-xs sm:text-sm md:text-lg font-bold text-black">{card.title}</h5>
                    <p className="mb-2 text-[10px] sm:text-xs md:text-sm text-black leading-snug">{card.desc}</p>
                    <a href={card.link} className="inline-flex items-center justify-between px-2 py-1 text-[10px] sm:text-xs md:text-sm font-medium text-[#61A7FF] rounded-full hover:bg-blue-900/30 transition">
                      Read More
                      <span className="ml-2 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#61A7FF] text-white rounded-full">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulasi1;