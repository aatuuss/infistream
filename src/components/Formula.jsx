import React, { useEffect } from "react";
import { FileText } from "lucide-react";

export default function Formula() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          } else {
            entry.target.classList.remove("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative isolate bg-[#1E90FF] text-white overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white" />

      <div className="relative z-10 grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2 container mx-auto px-6 lg:px-12">
        {/* Left content */}
        <div className="space-y-6">
          <h1 className="animate-on-scroll opacity-0 text-2xl font-extrabold font-sans leading-tight sm:text-5xl tracking-tight">
            <span className="block">THIS IS</span>
            <span className="block">INFISTREAM</span>
          </h1>

          <p className="animate-on-scroll opacity-0 delay-1 max-w-md font-sans text-white/80">
            Infistream merupakan media literasi CFD (Computational Fluid
            Dynamics), yang menyajikan informasi literasi seputar CFD kepada
            para user dari segmen industri dan akademik berdasarkan pengalaman
            dari pakar CFD sejak tahun 2019 guna meningkatkan pemahaman user
            terhadap penggunaan CFD baik dari praktek, numerik maupun fisika.
          </p>

          <div className="animate-on-scroll opacity-0 delay-2 flex items-center gap-4 pt-2">
            <a
              href="https://infistream.id/wp-content/uploads/2024/07/Infimech-2024-Google-Spreadsheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white shadow-lg ring-1 ring-white/40 transition-all hover:bg-white/20 hover:scale-105 hover:shadow-xl"
            >
              <FileText className="h-5 w-5 text-white" />
              <span>Project List (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right visual composition */}
        <div className="relative mx-auto w-full max-w-xl flex justify-center">
          {/* === Efek belakang mobil (SELALU AKTIF) === */}
          <div className="pointer-events-none absolute left-[200px] top-60 z-0 h-60 w-[600px] overflow-hidden">
            {/* Grid */}
            <div
              className="absolute inset-0 rotate-[-40deg] opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.35) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage:
                  "linear-gradient(to top, transparent 0%, white 30%, white 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, white 30%, white 100%)",
              }}
            />

            {/* Streaks berjalan terus */}
            <div className="absolute left-0 right-0 top-6 h-1.5 rotate-[-12deg] bg-gradient-to-r from-cyan-300 via-cyan-200/70 to-transparent animate-[move_3s_linear_infinite]" />
            <div
              className="absolute left-0 right-0 top-16 h-1.5 rotate-[-12deg] bg-gradient-to-r from-cyan-400 via-cyan-200/70 to-transparent animate-[move_3s_linear_infinite]"
              style={{ animationDelay: "0.6s" }}
            />
            <div
              className="absolute left-0 right-0 top-28 h-2 rotate-[-12deg] bg-gradient-to-r from-cyan-200 via-cyan-100/70 to-transparent animate-[move_3s_linear_infinite]"
              style={{ animationDelay: "1.2s" }}
            />
          </div>

          {/* Mobil (animasi scroll masuk) */}
          <div className="animate-on-scroll opacity-0 delay-3 relative z-10">
            {/* Bayangan elips */}
            <div className="absolute bottom-4 w-[100%] h-8 bg-black/40 blur-2xl rounded-full" />

            <img
              src="img/f2.png"
              alt="F1"
              className="relative z-10 w-[400px] h-[400px] md:w-[600px] md:h-[400px] translate-y-10 md:translate-y-48 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-on-scroll { transition: all 0.5s ease; }
        .animate-on-scroll.animate-visible { opacity: 1 !important; }

        h1.animate-visible { animation: fade-up 0.8s ease-out forwards; }
        p.animate-visible { animation: fade-up 0.9s ease-out forwards; }
        .delay-1.animate-visible { animation-delay: 0.3s; }
        .delay-2.animate-visible { animation: zoom-in 0.9s ease-out forwards; animation-delay: 0.6s; }
        .delay-3.animate-visible { animation: slide-in-right 1s ease-out forwards; animation-delay: 0.8s; }

        @keyframes move {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
