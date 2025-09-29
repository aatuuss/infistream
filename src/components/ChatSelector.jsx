import React, { useState } from "react";
import Botchat from "./Botchat";
import WhatsAppBot from "../app/ChatBotWA";

export default function ChatSelector() {
  const [openBot, setOpenBot] = useState(false);
  const [openWA, setOpenWA] = useState(false);
  const [expand, setExpand] = useState(false);

  const isChatOpen = openBot || openWA;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {openBot && (
        <div className="relative">
          <Botchat embedded open={openBot} onClose={() => setOpenBot(false)} />
          <button
            onClick={() => setOpenBot(false)}
            className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white shadow text-slate-700 hover:bg-slate-100"
            aria-label="Tutup Botchat"
          >
            ✕
          </button>
        </div>
      )}

      {openWA && (
        <div className="relative">
          <WhatsAppBot />
          <button
            onClick={() => setOpenWA(false)}
            className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white shadow text-slate-700 hover:bg-slate-100"
            aria-label="Tutup WhatsApp"
          >
            ✕
          </button>
        </div>
      )}

      {!isChatOpen && (
        <div className="relative">
          <button
            onClick={() => setExpand((v) => !v)}
            className="h-16 w-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-xl shadow-fuchsia-300/30 hover:shadow-fuchsia-400/40 hover:scale-110 active:scale-95 transition grid place-items-center text-2xl"
            aria-label="Buka menu chat"
          >
            {expand ? "−" : "+"}
          </button>

          {expand && (
            <div className="absolute bottom-20 right-0 flex flex-col gap-3">
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs rounded-full bg-fuchsia-100 text-fuchsia-700 px-2 py-1">Botchat</span>
                <button
                  onClick={() => {
                    setOpenBot(true);
                    setExpand(false);
                  }}
                  className="h-12 w-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-md hover:scale-110 active:scale-95 transition grid place-items-center"
                  aria-label="Buka Botchat"
                >
                  🤖
                </button>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-2 py-1">WhatsApp</span>
                <button
                  onClick={() => {
                    setOpenWA(true);
                    setExpand(false);
                  }}
                  className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md hover:scale-110 active:scale-95 transition grid place-items-center"
                  aria-label="Buka WhatsApp"
                >
                  💬
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
