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
  const containerRef = useRef(null);
  const textSectionRef = useRef(null);
  const cardSectionRef = useRef(null);
  const serviceItemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textSectionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
          once: false,
        }
      });

      gsap.from(cardSectionRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardSectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
          once: false,
        }
      });

      gsap.from(serviceItemsRef.current, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: cardSectionRef.current,
          start: "top 75%",
          toggleActions: "restart none none none",
          once: false,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full p-8 mb-30 bg-[#1E90FF] 
                   flex items-start justify-center font-sans"
      >
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 max-w-4xl w-full mx-auto">
          {/* Bagian Teks */}
          <div
            ref={textSectionRef}
            className="flex flex-col gap-6 w-full md:w-1/2 text-center font-sans"
          >
            <h2 className="text-3xl md:text-2xl font-bold text-white font-sans">
              Layanan Konsultasi Kami
            </h2>
            <p className="text-gray-100 leading-relaxed text-base md:text-lg font-sans">
              Kami menyediakan layanan konsultasi fleksibel,
              baik offline maupun online, serta siap
              melakukan kunjungan lapangan sesuai
              kebutuhan user.
            </p>
          </div>

          {/* Bagian Kartu Layanan */}
          <div
            ref={cardSectionRef}
            className="w-full md:w-1/2 flex justify-center font-sans"
          >
            <div
              className="bg-white rounded-2xl p-8 w-full max-w-xs aspect-square flex flex-col justify-start 
                         font-sans shadow-lg shadow-blue-200/60 
                         hover:shadow-2xl hover:shadow-blue-400/70 
                         transition-all duration-500"
            >
              <div className="flex flex-col gap-6 font-sans">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    ref={el => serviceItemsRef.current[index] = el}
                    className="font-sans"
                  >
                    <h3 className="text-xl font-bold text-gray-900 font-sans">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-sans">
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
  );
}

export default Layanan;
