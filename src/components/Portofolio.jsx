import React, { useEffect, useRef, useState } from "react";

export default function Portofolio() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLeft(true);
      setShowRight(true);
    }, 200);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setShowLeft(true);
            if (entry.target === rightRef.current) setShowRight(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-full px-0 py-0 relative -mt-30">
      <div className="relative overflow-hidden rounded-none bg-gradient-to-b from-[#1E90FF] via-[#ffffff] to-white p-4 sm:p-10 min-h-screen">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Blok Kiri */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              showLeft ? "animate-slide-in-left" : "opacity-0"
            } text-center md:text-left`} // 👉 center di mobile, kiri di desktop
          >
            <div className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-white/60">
              INFISTREAM
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              PORTOFOLIO
            </h1>
            <p className="mt-4 max-w-lg mx-auto md:mx-0 text-base leading-7 text-slate-800">
              Berikut ini adalah Portofolio Simulasi CFD yang pernah kita
              kerjakan sejak 2019, kami mengambil beberapa proyek yang telah
              kita tangani dari berbagai segment akademik dan industri, serta
              berbagai sektor industri baik dari Energi, Migas, HVAC dan
              Manufaktur.
            </p>
          </div>

          {/* Blok Kanan */}
          <div
            ref={rightRef}
            className={`relative mx-auto w-full transition-all duration-1000 ${
              showRight ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute -right-10 md:-right-20 bottom-0 h-40 w-40 md:h-80 md:w-80 rounded-full bg-violet-300/30 blur-3xl" />

            <div className="relative flex flex-col items-center md:flex-row md:items-end justify-center gap-4 md:gap-6">
              {/* Card kecil */}
              <div className="w-44 sm:w-56 shrink-0 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <div
                  className="relative mb-4 h-28 sm:h-32 w-full overflow-hidden rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/meeting.png')" }}
                >
                  <div className="absolute right-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-orange-700 ring-1 ring-black/5">
                    NEW
                  </div>
                  <div className="absolute bottom-3 right-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/70 text-center text-lg leading-8 sm:leading-10">
                    🌀
                  </div>
                </div>
              </div>

              {/* Card Video */}
<div className="w-full flex-1 overflow-hidden rounded-lg sm:rounded-3xl bg-slate-900 text-white shadow-2xl ring-1 ring-black/5">
  <div
    className="relative w-full h-56 sm:h-72 md:h-[520px] bg-[url('/img/portofolio2.jpg')] bg-cover bg-center"
  />
</div>

            </div>

            <div className="absolute left-2 md:-left-5 top-10 md:top-16 flex -space-x-2 md:-space-x-3">
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white bg-[#0303ed]" />
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white bg-[#a6daf5]" />
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white bg-[#0303ed]" />
            </div>
          </div>
        </div>
      </div>

      {/* Animasi CSS */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
