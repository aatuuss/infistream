import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Konsultasi Offline',
    subtitle: 'Konsultasi Offline Fleksibel',
  },
  {
    title: 'Konsultasi Online',
    subtitle: 'Solusi Online Fleksibel Praktis',
  },
  {
    title: 'Site Visit',
    subtitle: 'Solusi Tepat di Lapangan',
  },
];

const Layanan = () => {
    // Refs untuk elemen yang akan dianimasikan
    const containerRef = useRef(null);
    const textSectionRef = useRef(null);
    const cardSectionRef = useRef(null);
    const serviceItemsRef = useRef([]); // Untuk menyimpan ref dari setiap item layanan

    useEffect(() => {
        // Menggunakan gsap.context untuk mengelola animasi secara lokal
        let ctx = gsap.context(() => {

            // Animasi untuk teks di sisi kiri
            gsap.from(textSectionRef.current.children, {
                opacity: 0,
                y: 50, // Muncul dari bawah
                stagger: 0.2, // Setiap elemen anak akan muncul berurutan
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 80%",
                    toggleActions: "restart none none none", // <--- PERUBAHAN DI SINI
                    once: false, // <--- Pastikan ini true jika Anda hanya ingin sekali saat pertama kali di-scroll ke bawah
                    // markers: true,
                }
            });

            // Animasi untuk kartu layanan di sisi kanan
            gsap.from(cardSectionRef.current, {
                opacity: 0,
                x: 100, // Muncul dari kanan
                scale: 0.9, // Sedikit membesar
                duration: 1,
                ease: "back.out(1.2)", // Efek pegas saat muncul
                scrollTrigger: {
                    trigger: cardSectionRef.current,
                    start: "top 80%",
                    toggleActions: "restart none none none", // <--- PERUBAHAN DI SINI
                    once: false, // <--- Pastikan ini true jika Anda hanya ingin sekali saat pertama kali di-scroll ke bawah
                    // markers: true,
                }
            });

            // Animasi untuk setiap item layanan di dalam kartu (muncul setelah kartu)
            gsap.from(serviceItemsRef.current, {
                opacity: 0,
                y: 20, // Muncul sedikit dari bawah
                stagger: 0.1, // Setiap item muncul berurutan
                duration: 0.5,
                ease: "power2.out",
                delay: 0.3, // Sedikit delay setelah kartu utama muncul
                scrollTrigger: {
                    trigger: cardSectionRef.current, // Trigger yang sama dengan kartu utama
                    start: "top 75%",
                    toggleActions: "restart none none none", // <--- PERUBAHAN DI SINI
                    once: false, // <--- Pastikan ini true jika Anda hanya ingin sekali saat pertama kali di-scroll ke bawah
                    // markers: true,
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
    <>

      <div
        ref={containerRef}
        className="relative w-full min-h-screen p-8
                       bg-gradient-to-b from-[#BBE2FB] to-white
                       flex items-center justify-center">

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-4xl w-full">

          {/* Bagian Teks */}
          <div
            ref={textSectionRef}
            className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-right">
            <h2 className="text-3xl md:text-2xl font-bold text-black">
              Layanan Konsultasi Kami
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Kami menyediakan layanan konsultasi fleksibel,
              baik offline maupun online, serta siap
              melakukan kunjungan lapangan sesuai
              kebutuhan user.
            </p>
          </div>

          {/* Bagian Kartu Layanan */}
          <div
            ref={cardSectionRef}
            className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xs aspect-square flex flex-col justify-center">
              <div className="flex flex-col gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    ref={el => serviceItemsRef.current[index] = el}
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {service.subtitle}
                    </p>
                    {index < services.length - 1 && (
                      <hr className="mt-6 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Layanan;