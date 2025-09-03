"use client"

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateButtons, setAnimateButtons] = useState(false);
  const [animateProjectList, setAnimateProjectList] = useState(false);
  const [animateBottomSection, setAnimateBottomSection] = useState(false); // State for bottom section
  const [animateInfoSection, setAnimateInfoSection] = useState(false); // New state for Info section
  const [animateImage, setAnimateImage] = useState(false); // New state for image animation

  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const projectListRef = useRef(null);
  const bottomSectionRef = useRef(null); // Ref for bottom section
  const infoSectionRef = useRef(null); // New ref for Info section
  const imageRef = useRef(null); // New ref for image

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateTitle(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    const buttonsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateButtons(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
      }
    );

    const projectListObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateProjectList(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    const bottomSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateBottomSection(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    const infoSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateInfoSection(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the info section is visible
      }
    );

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateImage(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the image is visible
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }
    if (buttonsRef.current) {
      buttonsObserver.observe(buttonsRef.current);
    }
    if (projectListRef.current) {
      projectListObserver.observe(projectListRef.current);
    }
    if (bottomSectionRef.current) {
      bottomSectionObserver.observe(bottomSectionRef.current);
    }
    if (infoSectionRef.current) {
      infoSectionObserver.observe(infoSectionRef.current);
    }
    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    // Clean up the observers when the component unmounts
    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (buttonsRef.current) {
        buttonsObserver.unobserve(buttonsRef.current);
      }
      if (projectListRef.current) {
        projectListObserver.unobserve(projectListRef.current);
      }
      if (bottomSectionRef.current) {
        bottomSectionObserver.unobserve(bottomSectionRef.current);
      }
      if (infoSectionRef.current) {
        infoSectionObserver.unobserve(infoSectionRef.current);
      }
      if (imageRef.current) {
        imageObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen mt-10"
      style={{
        background: "linear-gradient(to bottom, #BBE2FB 0%, #FFFFFF 100%)",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div className="relative px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1
              ref={titleRef}
              className={`text-6xl md:text-7xl font-extrabold font-[Poppins] text-transparent bg-clip-text bg-[#61A7FF] tracking-wider transition-all duration-1000 ease-out ${
                animateTitle ? "scale-105 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{
                textShadow: "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6)",
              }}
            >
              INFIMECH
            </h1>

            <h2
              className={`text-3xl md:text-4xl font-[Poppins] font-light tracking-widest mt-2 transition-all duration-1000 ease-out delay-300 ${
                animateTitle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                color: '#FFFFFF',
                textShadow: '0 0 8px rgba(107,114,128,0.3)',
              }}
            >
              TECHNOLOGY
            </h2>
          </div>

          {/* Main Content */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* SVG Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style jsx>{`
                .animate-line {
                  stroke-dasharray: 12;
                  stroke-dashoffset: 12;
                  animation: dashMove 1s linear infinite;
                }

                @keyframes dashMove {
                  0% { stroke-dashoffset: 12; }
                  100% { stroke-dashoffset: 0; }
                }

                @keyframes buttonFadeIn {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes buttonEntry {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                /* New keyframes for section entry animation */
                @keyframes sectionFadeInUp {
                  0% { opacity: 0; transform: translateY(50px); }
                  100% { opacity: 1; transform: translateY(0); }
                }

                /* New keyframes for text entry */
                @keyframes textSlideInUp {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }

                /* New keyframes for image animation */
                @keyframes imageZoomIn {
                  0% { opacity: 0; transform: scale(0.8); }
                  100% { opacity: 1; transform: scale(1); }
                }
              `}</style>

              {/* Lines */}
              <line x1="320" y1="250" x2="520" y2="250" stroke="#475569" strokeWidth="3" strokeDasharray="10,5" opacity="0.9" className="animate-line" />
              <line x1="520" y1="100" x2="520" y2="840" stroke="#475569" strokeWidth="3" strokeDasharray="10,5" opacity="0.9" />
              <line x1="520" y1="150" x2="580" y2="150" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.8" className="animate-line" />
              <line x1="520" y1="150" x2="670" y2="150" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.8" className="animate-line" />
              <line x1="520" y1="250" x2="670" y2="250" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.8" className="animate-line" />
              <line x1="520" y1="250" x2="670" y2="250" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" className="animate-line" />
              <line x1="520" y1="370" x2="670" y2="370" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.8" className="animate-line" />
              <line x1="520" y1="370" x2="670" y2="370" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" opacity="0.8" className="animate-line" />

              {/* Junction points */}
              <circle cx="380" cy="250" r="5" fill="#1e293b" opacity="0.9" />
              <circle cx="520" cy="250" r="6" fill="#1e293b" opacity="0.9" />
              <circle cx="520" cy="150" r="4" fill="#475569" opacity="0.8" />
              <circle cx="520" cy="250" r="4" fill="#475569" opacity="0.8" />
              <circle cx="520" cy="370" r="4" fill="#475569" opacity="0.8" />

              {/* End points */}
              <circle cx="580" cy="150" r="4" fill="#2563eb" opacity="0.9" />

              <circle cx="580" cy="250" r="4" fill="#2563eb" opacity="0.9" />

              <circle cx="580" cy="370" r="4" fill="#2563eb" opacity="0.9" />

            </svg>

            {/* Mobil */}
            <div className="relative w-[26rem] lg:w-[32rem] h-auto">
              <img src="img/f1.png" alt="F1 CFD Visualization" className="w-full h-auto object-contain relative z-10" />

              {/* Speed streak */}
              <div className="absolute bottom-1/2 right-0 w-64 h-32 pointer-events-none z-0">
                {[...Array(35)].map((_, i) => {
                  const width = 30 + Math.random() * 80;
                  const top = Math.random() * 100;
                  const delay = Math.random() * 0.5;
                  return (
                    <div
                      key={i}
                      style={{
                        top: `${top}%`,
                        width: `${width}px`,
                        height: '1px',
                        left: '0',
                        position: 'absolute',
                        backgroundColor: '#FFD700',
                        boxShadow: '0 0 10px rgba(255,215,0,0.9)',
                        animation: `streakFlash 1s ease-in-out ${delay}s infinite`,
                      }}
                    ></div>
                  );
                })}
              </div>

              <style jsx>{`
                @keyframes streakFlash {
                  0% { opacity: 0; transform: translateX(0px) translateY(0px) scaleX(0.3); }
                  40% { opacity: 1; transform: translateX(70px) translateY(-9px) scaleX(1); }
                  100% { opacity: 0; transform: translateX(400px) translateY(-20px) scaleX(0.5); }
                }
              `}</style>
            </div>

            {/* Navigation Buttons */}
            <div ref={buttonsRef} className="grid grid-cols-2 gap-4 w-99 relative">
              {["OPENFOAM","SUMBER LITERASI","KONSULTASI","","MATERI SIMULASI","PORTOFOLIO"].map((btn, idx) => (
                btn ? (
                  <button
                    key={idx}
                    className={`px-8 py-2 rounded-md bg-[#61A7FF] text-white font-bold transition duration-200 hover:bg-[#d5edfc] hover:text-black border-2 border-transparent hover:border-[#61A7FF] text-sm ${
                      animateButtons ? '' : 'opacity-0 translate-y-5'
                    }`}
                    style={{
                      animation: animateButtons ? `buttonEntry 0.5s ease-out ${idx * 0.1}s forwards` : 'none'
                    }}
                  >
                    {btn}
                  </button>
                ) : <div key={idx}></div>
              ))}
            </div>


          </div>
        </div>
      </div>

     <div className="px-8 pb-16">
  <div
    ref={bottomSectionRef}
    className={`max-w-7xl mx-auto ${
      animateBottomSection ? "animate-sectionFadeInUp" : "opacity-0"
    }`}
  >
    <div
      ref={infoSectionRef}
      className={`rounded-lg p-8 max-w-5xl mx-auto ${
        animateInfoSection ? "animate-sectionFadeInUp" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* TEXT */}
        <div className="lg:col-span-2">
          <div className="relative mb-4">
            <h2
              className={`text-3xl font-bold text-black ${
                animateInfoSection ? "animate-textSlideInUp" : "opacity-0"
              }`}
            >
              THIS IS INFISTREAM
            </h2>
            <div
              className={`absolute top-full mt-1 h-0.5 bg-blue-500 ${
                animateInfoSection ? "animate-underlinePulse" : "opacity-0"
              }`}
              style={{ width: "6.5rem", animationDelay: "0.3s" }}
            ></div>
          </div>
          <p
            className={`text-black leading-relaxed text-base ${
              animateInfoSection ? "animate-textSlideInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Infistream merupakan media literasi CFD (Computational Fluid
            Dynamics), yang menyajikan informasi literasi seputar CFD kepada
            para user dari segmen industri dan akademik berdasarkan pengalaman
            dari pakar CFD sejak tahun 2019 guna meningkatkan pemahaman user
            terhadap penggunaan CFD baik dari praktek, numerik maupun fisika
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            ref={imageRef}
            src="img/infistream.png"
            alt="Racing Vehicle"
            className={`w-full max-w-[200px] h-auto object-contain hover:scale-110 transition-transform duration-700 ${
              animateImage ? "animate-imageBounceIn" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>

    {/* PROJECT LIST BUTTON */}
    <div className="text-center mt-8">
      <a
        ref={projectListRef}
        href="https://infistream.id/wp-content/uploads/2024/07/Infimech-2024-Google-Spreadsheet.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-blue-500 font-bold text-2xl inline-block ${
          animateProjectList ? "" : "opacity-0 translate-y-5"
        } transition-all duration-500 hover:scale-110 hover:text-blue-600`}
        style={{
          animation: animateProjectList
            ? `buttonFadeIn 0.6s ease-out forwards`
            : "none",
        }}
      >
        &gt;&gt; PROJECT LIST
      </a>
    </div>
  </div>

  {/* Extra Animations */}
  <style jsx>{`
    @keyframes underlinePulse {
      0% {
        transform: scaleX(0);
        opacity: 0;
      }
      100% {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    .animate-underlinePulse {
      animation: underlinePulse 0.6s ease-out forwards;
    }

    @keyframes imageBounceIn {
      0% {
        opacity: 0;
        transform: scale(0.8) translateY(30px);
      }
      60% {
        opacity: 1;
        transform: scale(1.05) translateY(-10px);
      }
      100% {
        transform: scale(1) translateY(0);
      }
    }
    .animate-imageBounceIn {
      animation: imageBounceIn 0.8s ease-out forwards;
    }
  `}</style>
</div>

    </div>
  )
}