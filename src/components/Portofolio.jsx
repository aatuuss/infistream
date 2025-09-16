export default function Portofolio() {
  return (
    <section className="mx-auto max-w-full px-0 py-0 relative -mt-30">
      <div className="relative overflow-hidden rounded-none bg-gradient-to-b from-[#1E90FF] via-[#ffffff] to-white p-6 sm:p-10 min-h-screen">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-white/60">
              INFISTREAM
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              PORTOFOLIO
              <br />
              {/* INFISTREAM */}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              Berikut ini adalah Portofolio Simulasi CFD yang pernah kita kerjakan sejak 2019, kami mengambil beberapa proyek yang telah kita tangani dari berbagai segment akademik dan industri, serta berbagai sektor industri baik dari Energi, Migas, HVAC dan Manufaktur.
            </p>
            {/* <div className="mt-8">
  <a
    href=""
    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
  >
    Learn More
  </a>
</div> */}
          </div>

          <div className="relative mx-auto w-full">
            
            <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />

            <div className="relative flex items-end justify-center gap-6 md:justify-end">
              <div className="w-56 shrink-0 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
  <div
    className="relative mb-4 h-32 w-full overflow-hidden rounded-xl bg-cover bg-center"
    style={{ backgroundImage: "url('/img/meeting.png')" }}
  >
    <div className="absolute right-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-orange-700 ring-1 ring-black/5">
      NEW
    </div>
    <div className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white/70 text-center text-lg leading-10">🌀</div>
  </div>

  {/* <div className="space-y-1">
    <p className="text-sm font-semibold text-slate-900">Pond's Serum boost</p>
    <p className="text-sm text-slate-500">$59.99</p>
  </div> */}


</div>

                            <div className="w-full flex-1 overflow-hidden rounded-none sm:rounded-3xl bg-slate-900 text-white shadow-2xl ring-1 ring-black/5">
  {/* Header */}
  <div className="flex items-center justify-between px-4 py-3 text-sm">
    <div className="font-semibold">ReelUp</div>
    <div className="flex items-center gap-2">
      <span className="rounded-md bg-red-500 px-2 py-0.5 text-[10px] font-bold">LIVE</span>
      <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px]">3.5k</span>
    </div>
  </div>

    {/* Video / Gambar */}
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] bg-[url('img/portofolio2.jpg')] bg-cover bg-center">
      
    </div>

    {/* Footer */}
    <div className="border-t border-white/10 bg-slate-900/60 px-4 py-3">
      <div className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white/90">Chat</div>
    </div>
</div>
            </div>

            <div className="absolute -left-5 top-16 flex -space-x-3">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-[#0303ed]" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-[#a6daf5]" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-[#0303ed]" />
            </div>

            {/* <div className="absolute -right-2 bottom-8 w-40 rounded-xl bg-white p-4 text-slate-900 shadow-xl ring-1 ring-black/5">
              <div className="text-[10px] font-semibold text-slate-500">UP 12</div>
              <div className="mt-1 text-2xl font-extrabold">32%</div>
              <div className="text-xs text-slate-500">Uplift Conversions</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
