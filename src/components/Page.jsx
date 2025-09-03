import React, { useEffect, useRef } from "react";

// Fungsi kecil untuk menggabungkan className
const cn = (...classes) => classes.filter(Boolean).join(" ");

// OrbitingCircles component
const OrbitingCircles = ({
  children,
  radius = 100,
  duration = 20,
  delay = 0,
  reverse = false,
  className,
  showPath = true,
  pathClassName,
}) => {
  const circleRef = useRef(null);
  useEffect(() => {
    let frame;
    const start = performance.now();
    const animate = (time) => {
      const elapsed = (time - start + delay * 1000) / 1000;
      const deg = (elapsed / duration) * 360 * (reverse ? -1 : 1);
      if (circleRef.current) {
        circleRef.current.style.transform = `rotate(${deg}deg) translateX(${radius}px) rotate(${-deg}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [radius, duration, delay, reverse]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      {showPath && (
        <div
          className={cn(
            "absolute rounded-full border border-dashed border-gray-600",
            pathClassName
          )}
          style={{
            width: radius * 2,
            height: radius * 2,
            zIndex: -1,
          }}
        ></div>
      )}
      <div
        ref={circleRef}
        className={cn("absolute flex items-center justify-center", className)}
        style={{ transformOrigin: "center" }}
      >
        {children}
      </div>
    </div>
  );
};

const Page = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col w-screen min-h-screen items-center justify-start overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(to bottom, #BBE2FB 0%, #FFFFFF 100%)",
      }}
    >
      {/* Orbit + Mobil F1 Container */}
<div className="relative w-[500px] h-[500px] flex items-center justify-center mt-20">
  {/* Mobil F1 sebagai pusat */}
<div className="relative w-[20rem] lg:w-[24rem] h-auto mt-10 flex justify-center items-center overflow-visible">
  {/* Efek speed streak */}
  <div className="absolute inset-0 flex items-center justify-end w-[300px] h-[120px] pointer-events-none z-10">
    {[...Array(25)].map((_, i) => {
      const width = 40 + Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 0.8;
      return (
        <div
          key={i}
          style={{
            top: `${top}%`,
            width: `${width}px`,
            height: "2px",
            left: "0",
            position: "absolute",
            backgroundColor: "#FFD700",
            boxShadow: "0 0 12px rgba(255,215,0,0.9)",
            animation: `streakFlash 1.2s ease-in-out ${delay}s infinite`,
          }}
        ></div>
      );
    })}
  </div>

  {/* Gambar mobil */}
  <img
    src="img/f1.png"
    alt="F1 CFD Visualization"
    className="relative z-20 w-full h-auto object-contain"
  />

  <style jsx>{`
    @keyframes streakFlash {
                  0% { opacity: 0; transform: translateX(0px) translateY(0px) scaleX(0.3); }
                  40% { opacity: 1; transform: translateX(290px) translateY(px) scaleX(1); }
                  100% { opacity: 0; transform: translateX(400px) translateY(-80px) scaleX(0.5); }
                }
  `}</style>
</div>

  {/* Inner Circles */}
  <OrbitingCircles
    className="h-[70px] w-[70px] border-none bg-transparent"
    duration={20}
    radius={140}
    pathClassName="border-gray-700"
  >
    <img src="img/advanceCFD.png" alt="advanceCFD" className="w-full h-full object-contain" />
  </OrbitingCircles>

  <OrbitingCircles
    className="h-[50px] w-[50px] border-none bg-transparent"
    duration={20}
    radius={140}
    delay={-10}
    pathClassName="border-gray-700"
  >
    <img src="img/mathematics.png" alt="mathematics" className="w-full h-full object-contain" />
  </OrbitingCircles>

  {/* Outer Circles */}
  <OrbitingCircles
    className="h-[50px] w-[50px] border-none bg-transparent"
    radius={200}
    duration={20}
    reverse
    pathClassName="border-gray-500"
  >
    <img src="img/numerik.png" alt="numerik" className="w-full h-full object-contain" />
  </OrbitingCircles>

  <OrbitingCircles
    className="h-[70px] w-[70px] border-none bg-transparent"
    radius={200}
    duration={20}
    delay={-10}
    reverse
    pathClassName="border-gray-500"
  >
    <img src="img/cfd.png" alt="catatanCFD" className="w-full h-full object-contain" />
  </OrbitingCircles>
</div>

      {/* Bottom Section */}
      <div className="px-8 pb-16 mt-2 w-full">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-lg p-8 max-w-5xl mx-auto"
            style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="relative mb-4">
                  <h2 className="text-3xl font-bold text-black">THIS IS INFISTREAM</h2>
                  <div
                    className="absolute top-full mt-1 h-0.5 bg-blue-500"
                    style={{ width: "6.5rem" }}
                  ></div>
                </div>
                <p className="text-black leading-relaxed text-base">
                  Infistream merupakan media literasi CFD (Computational Fluid Dynamics), yang menyajikan informasi
                  literasi seputar CFD kepada para user dari segmen industri dan akademik berdasarkan pengalaman dari
                  pakar CFD sejak tahun 2019 guna meningkatkan pemahaman user terhadap penggunaan CFD baik dari praktek,
                  numerik maupun fisika
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="img/infistream.png"
                  alt="Racing Vehicle"
                  className="w-full max-w-[200px] h-auto object-contain hover:scale-110 transition-all duration-500"
                  style={{ animation: "slideIn 3s ease-in-out infinite alternate" }}
                />
                <style jsx>{`
                  @keyframes slideIn {
                    0% {
                      transform: translateX(0px);
                    }
                    100% {
                      transform: translateX(1px);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://infistream.id/wp-content/uploads/2024/07/Infimech-2024-Google-Spreadsheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold text-2xl hover:underline"
            >
              &gt;&gt; PROJECT LIST
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
