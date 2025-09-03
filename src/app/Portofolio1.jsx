import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portofolio1 = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animasi Judul
    gsap.fromTo(titleRef.current.children, 
      { opacity: 0, y: -50, stagger: 0.2 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );

    // Animasi Kartu saat Scroll
    cardRefs.current.forEach((card, index) => {
      // Animasi utama untuk kontainer kartu
      gsap.fromTo(card, 
        { 
          opacity: 0.2, // Mulai sedikit transparan
          y: 100,      // Mulai dari bawah
          scale: 0.95  // Mulai sedikit lebih kecil
        },
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
            // markers: true,
          }
        }
      );

      // Animasi terpisah untuk gambar di dalam kartu
      const imageElement = card.querySelector('img');
      if (imageElement) {
        gsap.fromTo(imageElement,
          { y: index % 2 === 0 ? 50 : -50, rotation: index % 2 === 0 ? -5 : 5 },
          { 
            y: 0, 
            rotation: 0, 
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card, // Pemicu tetap kartu, tapi animasi gambar sedikit berbeda
              start: "top 80%",
              end: "bottom 30%",
              scrub: 1,
              // markers: true,
            }
          }
        );
      }

      // ** Animasi untuk Teks di dalam Kartu **
      const textElements = card.querySelectorAll('h3, p, a'); // Menargetkan h3, p, dan link katalog
      gsap.fromTo(textElements,
        { opacity: 0, y: 30 }, // Mulai dari bawah dengan opasitas 0
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, // Teks muncul satu per satu dengan sedikit jeda
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%", // Sedikit setelah kartu itu sendiri mulai muncul
            end: "bottom 40%",
            toggleActions: "play none none reverse",
            // markers: true,
          }
        }
      );
    });

    // ** Animasi Judul - Sekarang dengan ScrollTrigger **
if (titleRef.current) { // Pastikan ref sudah terpasang
  gsap.fromTo(titleRef.current.children, 
    { opacity: 0, y: -50, stagger: 0.1 }, 
    { 
      opacity: 1, 
      y: 0, 
      stagger: 0.1, 
      duration: 0.8, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current, // Pemicu adalah elemen judul utama
        start: "top 75%",         // Animasi mulai saat bagian atas judul masuk 75% dari viewport
        end: "bottom center",     // Animasi selesai saat bagian bawah judul berada di tengah viewport
        toggleActions: "play reverse play reverse", // Ini yang membuat animasi dimainkan saat masuk, dan dibalik saat keluar
        // markers: true, // Aktifkan ini untuk debugging
      }
    }
  );
}

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen p-8 lg:p-16 flex flex-col items-center justify-center gap-24 overflow-hidden">
      
       {/* Judul Utama */}
      <h1 
        ref={titleRef}
        className="text-center text-5xl md:text-7xl font-black uppercase text-[#C0E4FB]"
        style={{ textShadow: '0px 0px 10px white, 0px 0px 15px white' }}
      >
           <span className="drop-shadow-lg inline-block mr-4">PROYEK</span>{' '}
           <span className="drop-shadow-lg inline-block mr-4">SIMULASI</span>
           <span className="drop-shadow-lg inline-block mr-4">CFD</span>
           <span className="drop-shadow-lg inline-block mr-4">:</span>
      </h1>

      {/* Kontainer untuk Kartu 1 (Gambar di Kiri) */}
      <div ref={addToCardRefs} className="relative w-full max-w-5xl pl-32 lg:pl-48">
        <div className="absolute z-10 top-1/2 -translate-y-1/2 left-0 -translate-x-36">
          <img 
            src="/img/maritim.png"
            alt="Simulasi Kebisingan Kapal"
            className="drop-shadow-2xl max-w-lg"
          />
          <a href="#" className="flex items-center gap-2 mt-4 text-sky-500 hover:underline translate-x-36">
            <span className="font-bold text-lg">&gt;</span> katalog
          </a>
        </div>
        <div className="bg-[#BBE2FB] rounded-2xl p-8 shadow-lg w-full">
            <h3 className="text-xl font-bold text-black">
              Simulasi Kebisingan pada Desain Kapal
            </h3>
            <p className="text-black mt-4 text-sm leading-relaxed">
              Analisis kebisingan dengan CFD membantu memahami penyebaran suara dan getaran dari ruang mesin hingga deck kapal. Simulasi ini memodelkan aliran udara, turbulensi, resonansi struktur, serta interaksi mesin dengan elemen kapal. Hasilnya digunakan untuk mengidentifikasi area bising dan merancang strategi mitigasi seperti peredam suara dan isolasi akustik.
            </p>
            <p className="text-black mt-6 text-sm font-semibold">
              PT. PAL – PPNS (Surabaya)
            </p>
        </div>
      </div>

      {/* Kontainer untuk Kartu 2 (Gambar di Kanan) */}
      <div ref={addToCardRefs} className="relative w-full max-w-5xl pr-32 lg:pr-48">
        <div className="absolute z-10 top-1/2 -translate-y-1/2 right-0 -translate-x-1">
          <img 
            src="/img/mixer.png" 
            alt="Simulasi Homogenisasi Mixer"
            className="drop-shadow-2xl max-w-sm" /> 
          <a href="#" className="flex items-center justify-end gap-2 mt-4 text-sky-500 hover:underline -translate-y-5">
            <span className="font-bold text-lg">&gt;</span> katalog
          </a>
        </div>
        <div className="bg-[#BBE2FB] rounded-2xl p-8 shadow-lg w-full">
            <h3 className="text-xl font-bold text-black mb-4">
              Simulasi Homogenisasi Mixer
            </h3>
            <p className="text-black mt-4 text-sm leading-relaxed ">
              Analisis CFD pada mixing chamber membantu mengevaluasi efisiensi pencampuran dan mengoptimalkan desain mixer secara virtual sebelum penerapan nyata.
            </p>
            <p className="text-black mt-6 text-sm font-semibold ">
              PT. KRAFT Indonesia
            </p>
        </div>
      </div>

      {/* Kontainer untuk Kartu 3 (Gambar di Kiri) */}
      <div ref={addToCardRefs} className="relative w-full max-w-5xl pl-32 lg:pl-48">
        <div className="absolute z-10 top-1/2 -translate-y-1/2 left-0 -translate-x-36">
          <img 
            src="/img/dirgantara.png"
            alt="Simulasi Kebisingan Kapal"
            className="drop-shadow-2xl max-w-lg"
          />
          <a href="#" className="flex items-center gap-2 mt-4 text-sky-500 hover:underline translate-x-36">
            <span className="font-bold text-lg">&gt;</span> katalog
          </a>
        </div>
        <div className="bg-[#BBE2FB] rounded-2xl p-8 shadow-lg w-full">
            <h3 className="text-xl font-bold text-black">
           Simulasi Aerodinamika Pesawat f-16
            </h3>
            <p className="text-black mt-4 text-sm leading-relaxed">Analisis CFD pada F-16 mengevaluasi Cl dan Cd untuk mengoptimalkan desain, meningkatkan efisiensi, stabilitas, serta kemampuan manuver pesawat.
            </p>
            <p className="text-black mt-6 text-sm font-semibold">
              Angkatan Udara Republik Indonesia
            </p>
        </div>
      </div>

      {/* Kontainer untuk Kartu 4 (Gambar di Kanan) */}
      <div ref={addToCardRefs} className="relative w-full max-w-5xl pr-32 lg:pr-48">
        <div className="absolute z-10 top-1/2 -translate-y-1/2 right-0 translate-x-24">
          <img 
            src="/img/bangunan.png" 
            alt="Simulasi Homogenisasi Mixer"
            className="drop-shadow-2xl max-w-sm" /> 
          <a href="#" className="flex items-center justify-end gap-2 mt-4 text-sky-500 hover:underline -translate-y-10 -translate-x-10">
            <span className="font-bold text-lg">&gt;</span> katalog
          </a>
        </div>
        <div className="bg-[#BBE2FB] rounded-2xl p-8 shadow-lg w-full">
            <h3 className="text-xl font-bold text-black mb-4">
              Simulasi Performa Bangunan
            </h3>
            <p className="text-black mt-4 text-sm leading-relaxed ">Analisis CFD pada HVAC mengoptimalkan aliran udara, suhu, dan kualitas udara guna meningkatkan kenyamanan, efisiensi energi, dan kesehatan ruangan.
            </p>
            <p className="text-black mt-6 text-sm font-semibold ">
              PT. Simtex Mechatroinc Indotama
            </p>
        </div>
      </div>
    </div>
  );
};

export default Portofolio1;