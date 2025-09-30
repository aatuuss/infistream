import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Simulasi1 = () => {
  const componentRef = useRef();
  const cardsContainerRef = useRef();
  const cardsWrapperRef = useRef();
  const scrollRef = useRef({ stop: false });
  const [activeIndex, setActiveIndex] = useState(null);

  const cardsData = [
    {
      img: "/img/meeting.png",
      title: "Offline Kelas Simulasi CFD",
      desc: `Kelas belajar Simulasi CFD offline disediakan bagi user yang membutuhkan pembelajaran tatap muka.`,
    },
    {
      img: "/img/numerik.jpg",
      title: "Numerik CFD",
      desc: "Penjelasan terkait matematika lanjut pada bidang engineering dengan konsep matematika dasar.",
    },
    {
      img: "/img/fisika.jpg",
      title: "Fisika Fluida",
      desc: "Konsep teoritis fenomena fluida: aliran panas, aliran fluida, hingga reaksi kimia.",
    },
    {
      img: "/img/opensource.jpeg",
      title: "Open Source CFD",
      desc: "Perangkat lunak bebas dengan kode sumber terbuka untuk diubah dan dibagikan.",
    },
    {
      img: "/img/openfoam.png",
      title: "OpenFOAM CFD",
      desc: "Framework open source untuk solver FVM pada kasus mekanik fluida dan perpindahan panas.",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animasi judul
      gsap.fromTo(
        ".simulasi-title",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".simulasi-title",
            start: "top 90%",
            toggleActions: "restart none restart none", // 🔥 animasi ulang saat scroll dari atas/bawah
          },
        }
      );

      // Animasi underline
      gsap.fromTo(
        ".simulasi-underline",
        { opacity: 0, width: 0 },
        {
          opacity: 1,
          width: "12rem",
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".simulasi-underline",
            start: "top 95%",
            toggleActions: "restart none restart none", // 🔥
          },
        }
      );

      // Animasi cards
      gsap.fromTo(
        cardsWrapperRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "restart none restart none", // 🔥
          },
        }
      );

      // Auto scroll horizontal tanpa jeda
if (cardsWrapperRef.current) {
  const wrapper = cardsWrapperRef.current;
  let currentTranslateX = 0;
  const speed = 1; // bisa atur lebih lambat/cepat
  const cardWidth = wrapper.children[0]?.offsetWidth || 0;
  const gap = 24;
  const singleSetWidth = cardsData.length * (cardWidth + gap);

  function autoScrollTranslate() {
    if (!scrollRef.current.stop) {
      currentTranslateX -= speed;

      // kalau sudah lewat setengah panjang total clone → reset biar seamless
      if (Math.abs(currentTranslateX) >= singleSetWidth * 2) {
        currentTranslateX = 0;
      }

      gsap.set(wrapper, { x: currentTranslateX });
    }
    requestAnimationFrame(autoScrollTranslate);
  }

  autoScrollTranslate();
}
    }, componentRef);

    // IntersectionObserver untuk activeIndex
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.originalIndex));
        });
      },
      { root: cardsContainerRef.current, rootMargin: "0px -64px 0px -64px", threshold: 0.6 }
    );

    const timeoutId = setTimeout(() => {
      if (cardsWrapperRef.current) {
        const cards = cardsWrapperRef.current.querySelectorAll(".card-animation-item[data-original-index]");
        cards.forEach((card) => observer.observe(card));
      }
    }, 100);

    return () => {
      ctx.revert();
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [cardsData.length]);

  const handleMouseEnter = (e) => {
    scrollRef.current.stop = true;
    gsap.to(e.currentTarget, {
      scale: 1.1,
      y: -10,
      boxShadow: "0px 20px 40px rgba(97, 167, 255, 0.5)",
      zIndex: 9999,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e) => {
    scrollRef.current.stop = false;
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      zIndex: e.currentTarget.dataset.originalIndex === String(activeIndex) ? 999 : 10,
      duration: 0.4,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <div ref={componentRef} className="relative pt-0 pb-8 overflow-hidden font-sans">
      {/* Background */}
      <img src="/img/line.png" alt="Background garis" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

      {/* Judul */}
      <div className="px-4 mb-4 relative z-10">
        <h6 className="simulasi-title font-extrabold text-2xl md:text-3xl uppercase tracking-wider text-left text-black">
          MATERI BELAJAR SIMULASI
        </h6>
        <div className="mt-2 h-1 w-48 bg-[#61a7ff] simulasi-underline"></div>
      </div>

      {/* Cards */}
      <div className="relative z-10">
        <div ref={cardsContainerRef} className="relative px-8">
          <div ref={cardsWrapperRef} className="flex gap-6 w-max relative">
            {[...cardsData, ...cardsData, ...cardsData].map((card, index) => {
              const originalIndex = index % cardsData.length;
              const isActive = originalIndex === activeIndex;

              return (
                <div
  key={index}
  data-index={index}
  data-original-index={originalIndex}
  className={`card-animation-item flex flex-col md:flex-row flex-shrink-0
    w-72 md:w-[34rem] lg:w-[40rem] h-auto md:h-48 lg:h-52 bg-white border border-gray-200
    rounded-2xl overflow-hidden font-sans
    ${isActive ? "scale-105 z-[999]" : "scale-100 z-10"}
    relative`}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  style={{ zIndex: isActive ? 999 : 10 }}
>
  {/* Gambar */}
  <div className="w-full md:w-auto h-32 md:h-full">
    <img
      className="w-full h-full object-cover"
      src={card.img}
      alt={card.title}
    />
  </div>

  {/* Konten */}
  <div className="p-3 md:p-4 flex flex-col justify-center items-start flex-grow text-left font-sans">
    <h5 className="mb-1 text-sm md:text-lg font-bold tracking-tight text-black">
      {card.title}
    </h5>
    <p className="mb-2 text-xs md:text-sm text-black leading-snug">
      {card.desc}
    </p>
    <a
      href="#"
      className="inline-flex items-center justify-between px-2.5 py-1 text-xs md:text-sm font-medium text-[#61A7FF] bg-transparent rounded-full hover:bg-blue-900/30 transition"
    >
      Read More
      <span className="ml-2 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-[#61A7FF] text-white rounded-full">
        <svg
          className="w-3 h-3 md:w-3.5 md:h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
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