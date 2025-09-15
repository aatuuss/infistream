"use client"

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateButtons, setAnimateButtons] = useState(false);
  const [animateProjectList, setAnimateProjectList] = useState(false);
  const [animateBottomSection, setAnimateBottomSection] = useState(false);
  const [animateInfoSection, setAnimateInfoSection] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const projectListRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const infoSectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observers = [];

    const createObserver = (ref, setter, threshold = 0.5) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setter(entry.isIntersecting);
          });
        },
        { threshold }
      );
      observer.observe(ref.current);
      observers.push(observer);
    };

    createObserver(titleRef, setAnimateTitle, 0.5);
    createObserver(buttonsRef, setAnimateButtons, 0.2);
    createObserver(projectListRef, setAnimateProjectList, 0.5);
    createObserver(bottomSectionRef, setAnimateBottomSection, 0.3);
    createObserver(infoSectionRef, setAnimateInfoSection, 0.5);
    createObserver(imageRef, setAnimateImage, 0.5);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div
      className="min-h-screen mt-16 overflow-x-hidden 
                 bg-gradient-to-b from-[#1E90FF] via-[#a7daf5] to-white"
    >
      {/* Header */}
      <div className="relative px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1
              ref={titleRef}
              className={`text-6xl md:text-7xl font-extrabold text-transparent 
              bg-clip-text bg-gradient-to-r from-white to-[#4facfe] 
              tracking-wider transition-all duration-1000 ease-out ${
                animateTitle
                  ? "scale-110 opacity-100 drop-shadow-[0_0_25px_rgba(97,167,255,0.8)]"
                  : "scale-95 opacity-0"
              }`}
              style={{
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              INFISTREAM
            </h1>

            <h2
              className={`text-xl md:text-2xl tracking-[0.3em] mt-4 
              transition-all duration-1000 ease-out delay-300 ${
                animateTitle
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#FFFFFF",
                textShadow: "0 0 10px rgba(97,167,255,0.5)",
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
<div className="relative w-[26rem] lg:w-[32rem] h-auto max-w-full">
  <img
    src="img/f1.png"
    alt="F1 CFD Visualization"
    className="w-full max-w-full h-auto object-contain relative z-10"
  />
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
            height: "1px",
            left: "0",
            position: "absolute",
            backgroundColor: "#FFD700",
            boxShadow: "0 0 10px rgba(255,215,0,0.9)",
            animation: `streakFlash 1s ease-in-out ${delay}s infinite`,
          }}
        ></div>
      );
    })}
  </div>
              <style jsx>{`
                @keyframes streakFlash {
                  0% { opacity: 0; transform: translateX(0px) translateY(0px) scaleX(0.3); }
                  40% { opacity: 1; transform: translateX(100px) translateY(10px) scaleX(1); }
                  100% { opacity: 0; transform: translateX(300px) translateY(-20px) scaleX(0.5); }
                }
              `}</style>
            </div>

            {/* Navigation Buttons */}
            <div ref={buttonsRef} className="grid grid-cols-2 gap-4 w-99 r#C0E4FBelative">
              {["OPENFOAM","SUMBER LITERASI","KONSULTASI","","MATERI SIMULASI","PORTOFOLIO"].map((btn, idx) => (
                btn ? (
                  <button
                    key={idx}
                    className={`px-8 py-2 rounded-md bg-[#C0E4FB] text-[#1E90FF] font-bold font-sans transition duration-200 
    hover:bg-transparent hover:text-white border-2 border-transparent hover:border-[#61A7FF] text-sm 
    ${animateButtons ? '' : 'opacity-0 translate-y-5'}`}
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
              className={`text-3xl font-bold font-sans text-black ${
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
            className={`text-black leading-relaxed font-sans text-base ${
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
        className={`text-blue-500 font-bold font-sans text-2xl inline-block ${
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