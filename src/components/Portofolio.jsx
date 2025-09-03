import React, { useRef, useEffect, useState } from "react";

const Portofolio = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const overlayRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      // === Title ===
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }

      // === Card ===
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setCardVisible(rect.top < windowHeight * 0.8 && rect.bottom > 0);
      }

      // === Overlay Images ===
      const newVisibility = overlayRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        return rect.top < windowHeight * 0.85 && rect.bottom > 0;
      });
      setOverlayVisible(newVisibility);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayImages = [
    "/img/kapal.png",
    "/img/mixer1.png",
    "/img/pesawat.png",
    "/img/bangunan.png",
  ];

  const overlayPositions = [
    { top: 20, left: 80, rotate: 0 },
    { top: 180, left: 40, rotate: 0 },
    { top: 20, left: 450, rotate: 0 },
    { top: 160, left: 470, rotate: 0 },
    { top: 10, left: 300, rotate: 0 },
    { top: 340, left: 320, rotate: 5 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Container setengah lingkaran */}
      <div className="relative flex flex-col items-center">
        <div className="w-[750px] h-[375px] bg-[#C0E4FB] rounded-t-full shadow-lg flex flex-col items-center z-0 relative">
          {/* Judul */}
          <div className="-mt-16">
            <h1
              ref={titleRef}
              className={`text-7xl font-extrabold font-[Poppins] text-center transition-all duration-1000 ease-out will-change-transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-90"
              }`}
              style={{
                color: "#C0E4FB",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}
            >
              PORTOFOLIO
            </h1>
            <p
              className="text-2xl font-[Poppins] text-left ml-8 transition-all duration-1000 ease-out"
              style={{
                color: "#FFFFFF",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                letterSpacing: "10px",
              }}
            >
              <span className="font-bold">INFISTREAM</span>
            </p>
          </div>
        </div>

        {/* Laptop + overlay */}
        <div className="relative w-[820px] h-[450px] -mt-88 z-10 ml-16">
          <img
            src="img/image.png"
            alt="Laptop Illustration"
            className="absolute w-full h-full object-contain z-10"
          />
          {overlayImages.map((img, index) => (
            <img
              key={index}
              ref={(el) => (overlayRefs.current[index] = el)}
              src={img}
              alt={`Overlay ${index + 1}`}
              className={`absolute w-[180px] h-[130px] object-cover transition-all duration-1000 ease-out ${
                overlayVisible[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-90"
              }`}
              style={{
                top: overlayPositions[index].top,
                left: overlayPositions[index].left,
                zIndex: 20 + index,
                transform: `rotate(${overlayPositions[index].rotate}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        className={`w-[85%] max-w-[1000px] p-9 text-center relative rounded-[30px] -mt-29 transition-all duration-1000 ease-out ${
          cardVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-20 scale-95"
        }`}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Kami telah berpengalaman sejak 2019
        </h2>
        <p className="text-left text-black leading-relaxed">
          Berikut ini adalah Portofolio Simulasi CFD yang pernah kita kerjakan
          sejak 2019. Kami mengambil beberapa proyek yang telah kita tangani
          dari berbagai segment akademik dan industri, serta berbagai sektor
          industri baik dari Energi, Migas, HVAC dan Manufaktur.
        </p>
        <p className="text-left text-black">
          Berikut ini adalah beberapa cuplikan informasi terkait simulasi CFD
          yang pernah kita tangani
        </p>
      </div>
    </div>
  );
};

export default Portofolio;
