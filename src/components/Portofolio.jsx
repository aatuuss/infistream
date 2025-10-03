import React from "react";

export default function Portofolio() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-5">
      {/* Big blue arc at the bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[380px] rounded-t-[380px] bg-[#1E90FF]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight text-black">
            PORTOFOLIO
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Kami membantu mewujudkan konsep menjadi produk menakjubkan melalui
            visual dan pengalaman yang konsisten di semua perangkat.
          </p>
        </div>

        {/* Cards - scroll horizontal di mobile, grid di desktop */}
        <div className="mt-10 sm:mt-14 flex gap-5 sm:gap-6 items-end overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-3 sm:overflow-visible">
          {/* Left card */}
          <Card
            img="img/in.jpg"
            label="product"
            className="min-w-[80%] sm:min-w-0 sm:translate-y-4 sm:-mr-4"
          />

          {/* Center card */}
          <Card
            img="img/portofolio2.jpg"
            label="fashion"
            className="min-w-[80%] sm:min-w-0 sm:-translate-y-3 sm:scale-105 z-10"
            highlight
          />

          {/* Right card */}
          <Card
            img="img/meeting.png"
            label="landscape"
            className="min-w-[80%] sm:min-w-0 sm:translate-y-6 sm:-ml-4"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ img, label, className = "", highlight = false }) {
  return (
    <div
      className={[
        "relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5 transition-transform",
        className,
      ].join(" ")}
    >
      <div className="relative w-full aspect-[4/5]">
        <img
          src={img}
          alt={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* 🔴 Label dihapus agar tidak tampil di depan gambar */}

        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}

