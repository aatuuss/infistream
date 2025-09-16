import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Simulasi = () => {
  const componentRef = useRef();
  const cardsContainerRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animasi Judul (scroll trigger)
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
            toggleActions: "play reverse play reverse",
            once: false,
          },
        }
      );

      // Animasi garis bawah judul
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
            toggleActions: "play reverse play reverse",
            once: false,
          },
        }
      );

      // Animasi untuk kartu
      gsap.fromTo(
        ".card-animation-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
        }
      );

      // Scroll otomatis halus (tetap jalan)
      if (cardsContainerRef.current) {
        const container = cardsContainerRef.current;
        const scrollWidth = container.scrollWidth / 2;

        gsap.to(container, {
          scrollLeft: scrollWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            gsap.set(container, { scrollLeft: 0 });
          },
        });
      }
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      img: "/img/meeting.png",
      title: "Offline Kelas Simulasi CFD",
      desc: `Kelas belajar Simulasi CFD offline disediakan bagi user yang membutuhkan pembelajaran tatap muka, dengan beberapa kelas dan sesi sesuai permintaan.`,
    },
    {
      img: "/img/numerik.jpg",
      title: "Numerik CFD",
      desc: "Merupakan penjelasan terkait matematika lanjut pada bidang engineering dengan menggunakan konsep matematika dasar.",
    },
    {
      img: "/img/fisika.jpg",
      title: "Fisika Fluida",
      desc: "Merupakan konsep secara teoritis terkait fenomena yang terjadi pada suatu kejadian meliputi fenomena aliran panas, aliran fluida dan reaksi kimia",
    },
    {
      img: "/img/opensource.jpeg",
      title: "Open Source CFD",
      desc: "Open Source adalah perangkat lunak dengan kode sumber bebas untuk digunakan, diubah, dan dibagikan.",
    },
    {
      img: "/img/openfoam.png",
      title: "OpenFOAM CFD",
      desc: "Software OpenSource gratis yang berfungsi sebagai framework/toolbox untuk mengembangkan solver FVM pada kasus mekanik, khususnya dinamika fluida dan perpindahan panas.",
    },
  ];

  return (
    <div ref={componentRef} className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <img
        src="/img/line.png"
        alt="Background garis"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Judul */}
      <div className="px-4 mb-10">
        <h6 className="font-extrabold text-2xl md:text-3xl uppercase tracking-wider text-left text-black simulasi-title">
          MATERI BELAJAR SIMULASI
        </h6>
        <div className="mt-2 h-1 w-48 bg-[#61a7ff] simulasi-underline"></div>
      </div>

      {/* Cards dengan duplikasi untuk loop mulus */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 flex gap-4 px-4 overflow-x-auto hide-scrollbar"
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="card-animation-item flex flex-col flex-shrink-0 w-60 bg-white border border-gray-200 rounded-lg transform transition duration-10"
          >
            <img
              className="w-full h-40 object-cover rounded-t-lg"
              src={card.img}
              alt={card.title}
            />
            <div className="p-3 flex flex-col flex-grow">
              <h5 className="mb-2 text-lg font-bold text-center tracking-tight text-black">
                {card.title}
              </h5>
              <p className="mb-3 text-xs text-center font-normal text-black">
                {card.desc}
              </p>
              <div className="flex justify-center mt-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-between px-3 py-1.5 text-xs font-medium text-[#61A7FF] bg-transparent shadow-2xl rounded-full hover:bg-blue-900/30 transition"
                >
                  Read More
                  <span className="ml-2 flex items-center justify-center w-5 h-5 bg-[#61A7FF] text-white rounded-full">
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Simulasi;
