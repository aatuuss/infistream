import React, { useEffect, useRef, useState } from "react";

export default function OpenFoam() {
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
    <section className="mx-auto max-w-full relative -mt-12">
      <div className="relative overflow-hidden rounded-none bg-gradient-to-b from-[#1E90FF] from-5% to-white to-100% px-6 sm:px-10 py-10">

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Blok Kiri */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              showLeft ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-white/60">
              INFISTREAM
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              OpenFOAM
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-800">
              Portofolio Simulasi CFD yang pernah kita kerjakan sejak 2019, kami
              mengambil beberapa proyek dari berbagai sektor akademik dan
              industri, seperti Energi, Migas, HVAC, dan Manufaktur.
            </p>

            {/* Button Learn More */}
            <a
              href="https://infistream.id/training-cfd/"
              className="mt-6 inline-flex justify-center items-center py-3 px-5 text-base font-medium 
                         text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 
                         focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Learn More
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
            </a>
          </div>

          {/* Blok Kanan */}
          <div
            ref={rightRef}
            className={`relative mx-auto w-full transition-all duration-1000 ${
              showRight ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />

            <div className="relative flex items-end justify-center gap-6 md:justify-end">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg shrink-0 rounded-2xl p-4 ring-black/5">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="/img/foam.png"
                    alt="OpenFOAM"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-orange-700 ring-1 ring-black/5">
                    NEW
                  </div>
                  <div className="absolute bottom-3 right-3 h-12 w-12 rounded-full bg-white/70 text-center text-xl leading-[48px]">
                    🌀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}