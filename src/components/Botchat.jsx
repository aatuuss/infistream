import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";

export default function Botchat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState([]);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Halo! Selamat datang di customer service infistream 👋.",
    },
  ]);
  const [breadcrumb, setBreadcrumb] = useState([]);

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSelect = (item) => {
  // tampilkan input user
  setMessages((prev) => [
    ...prev,
    { from: "user", text: item.text || item.label },
  ]);

  setTimeout(() => {
    if (item.reply) {
      setMessages((prev) => [...prev, { from: "bot", text: item.reply }]);
    }

    // kalau ada children → tampilkan submenu
    if (item.children || item.materi) {
      setBreadcrumb((prev) => [...prev, currentMenu]);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Silakan pilih materi berikut:" },
      ]);

      setTimeout(() => {
        // kalau ada children & materi → gabung
        const nextMenu = [
          ...(item.children || []),
          ...(item.materi || []),
        ];
        setCurrentMenu(nextMenu);
      }, 400);
    } else {
      setCurrentMenu([]);
    }
  }, 200);
};


  const goBack = () => {
    const prev = [...breadcrumb];
    const last = prev.pop();
    setBreadcrumb(prev);
    setCurrentMenu(last || getMainMenu());
  };

  // menu utama
  const getMainMenu = () => {
    return [
      {
        label: "Beranda",
        children: [
          { label: "Infistream", ...data.Beranda },
        ],
      },
      { label: "Sumber_Literasi", children: data.Sumber_Literasi },
      { label: "OpenFoam", children: data.OpenFoam },
      { label: "Project_list", children: data.Project_list },
      { label: "Konsultasi", children: data.Konsultasi },
    ];
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setCurrentMenu(getMainMenu());
          }}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-xl shadow-fuchsia-300/30 hover:shadow-fuchsia-400/40 hover:scale-105 active:scale-95 transition transform flex items-center justify-center"
          aria-label="Buka chat"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(92vw,380px)] h-[min(74vh,640px)]">
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-2xl dark:bg-black/60 dark:border-white/10">
            {/* Header */}
            <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/60 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white grid place-items-center shadow">
                  <span className="text-xs font-bold">IF</span>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">
                    Infistream CFD Bot
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Online • cepat & responsif
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-fuchsia-50 dark:hover:bg-white/10 rounded-full p-2 transition"
                aria-label="Tutup chat"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat body */}
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              aria-live="polite"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.from === "bot"
                      ? "flex items-end gap-2"
                      : "flex items-end justify-end gap-2"
                  }
                >
                  {m.from === "bot" && (
                    <div className="h-7 w-7 shrink-0 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white grid place-items-center text-[10px] font-bold">
                      IF
                    </div>
                  )}
                  <div
                    className={
                      m.from === "bot"
                        ? "max-w-[78%] rounded-2xl rounded-tl-sm bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white px-3 py-2 shadow"
                        : "max-w-[78%] rounded-2xl rounded-tr-sm bg-white text-slate-800 px-3 py-2 border border-slate-200 shadow-sm"
                    }
                  >
                    {m.text}
                  </div>
                  {m.from === "user" && (
                    <div className="h-7 w-7 shrink-0 rounded-lg bg-slate-200 text-slate-700 grid place-items-center text-[10px] font-bold">
                      ME
                    </div>
                  )}
                </div>
              ))}

              {currentMenu.length > 0 && (
                <div className="mt-2">
                  <MenuCard items={currentMenu} onSelect={handleSelect} />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/60 dark:border-white/10 flex items-center justify-between gap-2">
              {breadcrumb.length > 0 && (
                <button
                  onClick={goBack}
                  className="text-[13px] font-medium text-fuchsia-700 hover:text-fuchsia-800 hover:bg-fuchsia-50 dark:hover:bg-white/10 rounded-full px-3 py-1 transition"
                >
                  ← Kembali
                </button>
              )}
              <div className="ml-auto text-xs text-muted-foreground">
                Powered by Infistream
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MenuCard({ items, onSelect }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-fuchsia-200/70 bg-white/60 backdrop-blur-md">
      <div className="px-4 py-3 border-b border-fuchsia-200/60">
        <p className="text-sm font-semibold text-slate-900">
          Halo! Pilih kategori yang ingin kamu tanyakan.
        </p>
      </div>
      <div className="py-1">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(item)}
            className="w-full text-left px-4 py-3 text-[15px] font-medium text-fuchsia-700 hover:bg-fuchsia-50 focus:outline-none"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
