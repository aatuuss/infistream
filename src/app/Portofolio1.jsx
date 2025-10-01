import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portofolio1 = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animasi judul
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 75%",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Animasi kartu
      cardRefs.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.2, y: 100, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 15%",
              scrub: 1.5,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animasi teks dalam kartu
      cardRefs.current.forEach((card) => {
        const textElements = card.querySelectorAll("h3, p, a");
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      let mm = gsap.matchMedia();

      // Desktop layout
      mm.add("(min-width: 1024px)", () => {
        cardRefs.current.forEach((card, index) => {
          const imageContainer = card.querySelector(".image-container");
          const imageElement = card.querySelector("img");

          if (imageContainer && imageElement) {
            gsap.set(imageContainer, {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            });

            if (index % 2 === 0) {
              gsap.set(imageContainer, { left: 0, x: "-6rem" });
            } else {
              gsap.set(imageContainer, { right: 0, x: "-1rem" });
            }

            gsap.fromTo(
              imageElement,
              {
                y: index % 2 === 0 ? 50 : -50,
                rotation: index % 2 === 0 ? -5 : 5,
              },
              {
                y: 0,
                rotation: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  end: "bottom 30%",
                  scrub: 1,
                },
              }
            );
          }
        });
      });

// Mobile layout
mm.add("(max-width: 767px)", () => {
  cardRefs.current.forEach((card) => {
    const imageContainer = card.querySelector(".image-container");
    const imageElement = card.querySelector("img");

    if (imageContainer && imageElement) {
      gsap.set(imageContainer, {
        position: "absolute",
        top: "-8rem",   // posisi gambar agak keluar di atas card
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "auto",
        zIndex: 20,
      });

      gsap.set(imageElement, {
        y: 0,
        rotation: 0,
        width: "12rem",   // lebih kecil agar muat di mobile
        height: "12rem",
      });
    }
  });
});
    }, cardRefs);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
  <div className="w-full min-h-screen p-4 md:p-8 lg:p-16 flex flex-col items-center justify-center gap-20 overflow-hidden font-sans">
    {/* Judul */}
    <div className="gap-7">
      <h1
        ref={titleRef}
        className="text-center text-3xl md:text-5xl lg:text-7xl font-black uppercase text-[#1E90FF] mb-4"
        style={{ textShadow: "0px 0px 10px white, 0px 0px 15px white" }}
      >
        <span className="drop-shadow-lg inline-block mr-2 md:mr-4">PROYEK</span>
        <span className="drop-shadow-lg inline-block mr-2 md:mr-4">SIMULASI</span>
        <span className="drop-shadow-lg inline-block mr-2 md:mr-4">CFD</span>
        <span className="drop-shadow-lg inline-block mr-2 md:mr-4">:</span>
      </h1>

      {/* Card 1 */}
      <div
        ref={addToCardRefs}
        className="relative w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:pl-24"
      >
        <div className="image-container absolute z-10 top-1/2 -translate-y-1/2 left-0 -translate-x-24 flex flex-col items-center">
          <img
            src="/img/maritim.png"
            alt="Simulasi Kebisingan Kapal"
            className="w-64 h-64 object-contain drop-shadow-2xl"
          />
          {/* katalog desktop */}
          <a
            href="https://infistream.id/wp-content/uploads/2024/07/Report-Pemodelan-Suara.pdf"
            className="hidden md:flex items-center gap-2 mt-2 text-sky-500 hover:underline"
          >
            <span className="font-bold text-lg">&gt;</span> katalog
          </a>
        </div>
        <div className="bg-[#61A7FF] rounded-2xl p-8 shadow-lg w-full relative z-0">
          <h3 className="text-xl font-bold text-white">
            Simulasi Kebisingan pada Desain Kapal
          </h3>
          <p className="text-white mt-4 text-sm leading-relaxed">
            Simulasi CFD membantu menganalisis penyebaran kebisingan dari ruang mesin hingga deck kapal sehingga dapat diidentifikasi area bising dan dirancang strategi mitigasi.
          </p>
          <p className="text-white mt-6 text-sm font-semibold">
            PT. PAL – PPNS (Surabaya)
          </p>
        </div>
        {/* katalog mobile */}
        <a
          href="https://infistream.id/wp-content/uploads/2024/07/Report-Pemodelan-Suara.pdf"
          className="flex md:hidden items-center gap-2 mt-3 ml-2 text-sky-700 font-bold underline"
        >
          <span className="font-bold text-lg">&gt;</span> katalog
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div
      ref={addToCardRefs}
      className="relative w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:pr-48"
    >
      <div className="image-container absolute z-10 top-1/2 -translate-y-1/2 right-0 flex flex-col items-center">
        <img
          src="/img/mixer.png"
          alt="Simulasi Homogenisasi Mixer"
          className="w-64 h-64 object-contain drop-shadow-2xl"
        />
        {/* katalog desktop */}
        <a
          href="https://infistream.id/wp-content/uploads/2024/07/1712284803434.pdf"
          className="hidden md:flex items-center gap-2 mt-2 text-sky-500 hover:underline"
        >
          <span className="font-bold text-lg">&gt;</span> katalog
        </a>
      </div>
      <div className="bg-[#61A7FF] rounded-2xl p-8 shadow-lg w-full relative z-0">
        <h3 className="text-xl font-bold text-white mb-4">
          Simulasi Homogenisasi Mixer
        </h3>
        <p className="text-white mt-4 text-sm leading-relaxed">
          Simulasi CFD pada mixing chamber memungkinkan evaluasi efisiensi pencampuran, identifikasi zona stagnan, serta optimasi desain mixer untuk meningkatkan homogenitas dan efisiensi proses.
        </p>
        <p className="text-white mt-6 text-sm font-semibold">
          PT. KRAFT Indonesia
        </p>
      </div>
      {/* katalog mobile */}
      <a
        href="https://infistream.id/wp-content/uploads/2024/07/1712284803434.pdf"
        className="flex md:hidden items-center gap-2 mt-3 ml-2 text-sky-700 font-bold underline"
      >
        <span className="font-bold text-lg">&gt;</span> katalog
      </a>
    </div>

    {/* Card 3 */}
    <div
      ref={addToCardRefs}
      className="relative w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:pl-24"
    >
      <div className="image-container absolute z-10 top-1/2 -translate-y-1/2 left-0 -translate-x-24 flex flex-col items-center">
        <img
          src="/img/dirgantara.png"
          alt="Simulasi Aerodinamika Pesawat f-16"
          className="w-64 h-64 object-contain drop-shadow-2xl"
        />
        {/* katalog desktop */}
        <a
          href="https://infistream.id/wp-content/uploads/2024/07/REPORT-JET-LES-150ms.pdf"
          className="hidden md:flex items-center gap-2 mt-2 text-sky-500 hover:underline"
        >
          <span className="font-bold text-lg">&gt;</span> katalog
        </a>
      </div>
      <div className="bg-[#61A7FF] rounded-2xl pl-16 pr-8 py-8 shadow-lg w-full relative z-0">
        <h3 className="text-xl font-bold text-white">
          Simulasi Aerodinamika Pesawat f-16
        </h3>
        <p className="text-white mt-4 text-sm leading-relaxed">
          Simulasi CFD pada pesawat jet F-16 digunakan untuk mengevaluasi Cl dan Cd, menganalisis distribusi tekanan serta area kritis, dan mengoptimalkan desain guna meningkatkan efisiensi, stabilitas, manuver, dan keselamatan.
        </p>
        <p className="text-white mt-6 text-sm font-semibold">
          Angkatan Udara Republik Indonesia
        </p>
      </div>
      {/* katalog mobile */}
      <a
        href="https://infistream.id/wp-content/uploads/2024/07/REPORT-JET-LES-150ms.pdf"
        className="flex md:hidden items-center gap-2 mt-3 ml-2 text-sky-700 font-bold underline"
      >
        <span className="font-bold text-lg">&gt;</span> katalog
      </a>
    </div>

    {/* Card 4 */}
    <div
      ref={addToCardRefs}
      className="relative w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:pr-48"
    >
      <div className="image-container absolute z-10 top-1/2 -translate-y-1/2 right-0 flex flex-col items-center">
        <img
          src="/img/bangunan.png"
          alt="Simulasi Performa Bangunan"
          className="w-64 h-64 object-contain drop-shadow-2xl"
        />
        {/* katalog desktop */}
        <a
          href="https://infistream.id/wp-content/uploads/2024/07/Report-Progress-Simulasi-CFD.pdf"
          className="hidden md:flex items-center gap-2 mt-2 text-sky-500 hover:underline"
        >
          <span className="font-bold text-lg">&gt;</span> katalog
        </a>
      </div>
      <div className="bg-[#61A7FF] rounded-2xl p-8 shadow-lg w-full relative z-0">
        <h3 className="text-xl font-bold text-white mb-4">
          Simulasi Performa Bangunan
        </h3>
        <p className="text-white mt-4 text-sm leading-relaxed">
          Simulasi CFD pada bangunan dan sistem HVAC digunakan untuk mengevaluasi distribusi udara, suhu, dan kualitas udara guna mengoptimalkan desain, meningkatkan kenyamanan, efisiensi energi, serta menciptakan lingkungan dalam ruangan yang sehat.
        </p>
        <p className="text-white mt-6 text-sm font-semibold">
          PT. Simtex Mechatroinc Indotama
        </p>
      </div>
      {/* katalog mobile */}
      <a
        href="https://infistream.id/wp-content/uploads/2024/07/Report-Progress-Simulasi-CFD.pdf"
        className="flex md:hidden items-center gap-2 mt-3 ml-2 text-sky-700 font-bold underline"
      >
        <span className="font-bold text-lg">&gt;</span> katalog
      </a>
    </div>
  </div>
);
};

export default Portofolio1;
