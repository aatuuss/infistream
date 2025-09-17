import React, { useMemo, useState } from "react";

const WA_SVG = (
  <svg viewBox="0 0 32 32" aria-hidden className="h-7 w-7 fill-white">
    <path d="M19.11 17.74c-.3-.16-1.77-.87-2.04-.97-.27-.1-.47-.16-.67.16-.2.32-.77.97-.95 1.17-.18.2-.35.22-.65.08-.3-.14-1.25-.46-2.38-1.47-.88-.78-1.48-1.73-1.66-2.02-.17-.3-.02-.46.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.16-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.36z" />
    <path d="M26.6 5.38C23.8 2.57 20.09 1 16.13 1 8.37 1 2.02 7.35 2.02 15.11c0 2.47.64 4.89 1.87 7.02l-1.98 7.25 7.42-1.95c2.08 1.13 4.43 1.72 6.8 1.72h.01c7.76 0 14.11-6.35 14.11-14.11 0-3.77-1.47-7.32-4.25-10.11zM16.14 27.4h-.01c-2.12 0-4.19-.57-5.98-1.64l-.43-.26-4.4 1.15 1.18-4.3-.28-.44c-1.17-1.87-1.79-4.02-1.79-6.2C4.42 8.48 9.48 3.42 16.14 3.42c3.18 0 6.17 1.24 8.42 3.48 2.25 2.25 3.49 5.24 3.49 8.41 0 6.66-5.42 12.09-11.91 12.09z" />
  </svg>
);

export default function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "6281333546332"; // nomor tujuan (tanpa +)

  const quickReplies = useMemo(
    () => [
      { label: "Konsultasi CFD", text: "Halo, saya ingin konsultasi terkait CFD." },
    //   { label: "Pelatihan CFD", text: "Halo, saya tertarik mengikuti pelatihan CFD." },
      { label: "Penawaran", text: "Bisakah kirimkan penawaran untuk layanan CFD?" },
      { label: "Jadwalkan", text: "Saya ingin menjadwalkan meeting/Zoom untuk diskusi." },
    ],
    []
  );

  const openWA = (text) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendMessage = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    openWA(trimmed);
    setMessage("");
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[100]">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {!isOpen && (
          <button
            aria-label="Buka chat WhatsApp"
            onClick={() => setIsOpen(true)}
            className="group relative grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 shadow-xl ring-1 ring-black/5 transition-transform hover:scale-110 focus:scale-105 focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-20" />
            {WA_SVG}
            <span className="absolute -z-10 h-[120%] w-[120%] animate-pulse-slow rounded-full bg-emerald-500/20 blur-xl" />
          </button>
        )}

        {isOpen && (
          <div className="animate-slideUp w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-start gap-3 bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-white">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20">
                <span className="text-sm font-bold">IFM</span>
              </div>
              <div className="flex-1 pt-0.5">
                <p className="text-sm font-semibold">Infistream Canter</p>
              </div>
              <button
                aria-label="Tutup chat"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex max-h-[360px] flex-col gap-3 overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-4">
              <div className="w-fit max-w-[80%] rounded-2xl bg-white px-4 py-2 text-sm text-slate-700 shadow">
                Hai 👋, selamat datang di layanan <strong>CFD Consultation</strong>. Ada yang bisa kami bantu hari ini?
              </div>

              <div className="mt-1 flex flex-wrap gap-2">
                {quickReplies.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => openWA(q.text)}
                    className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-50"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 border-t bg-white p-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ketik pesan..."
                className="flex-1 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm outline-none ring-emerald-400 placeholder:text-slate-400 focus:ring-2"
                aria-label="Pesan WhatsApp"
              />
              <button
                onClick={sendMessage}
                aria-label="Kirim pesan"
                className="rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:from-green-600 hover:to-emerald-700"
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-slideUp { animation: slideUp .35s ease both; }
        @keyframes pulse-slow { 0%,100%{opacity:.25; transform:scale(1)} 50%{opacity:.6; transform:scale(1.07)} }
        .animate-pulse-slow { animation: pulse-slow 2.4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
