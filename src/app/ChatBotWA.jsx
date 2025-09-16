import React, { useState } from "react";

const ChatBotWA = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! 👋 Ada yang bisa kami bantu?" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    const phoneNumber = "6282334497604"; 
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      input
    )}`;
    window.open(waUrl, "_blank");

    setInput("");
  };

  return (
    <div>
      {/* Floating Button (Logo WhatsApp) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* Logo WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
          >
            <path d="M16 .7C7.5.7.6 7.5.6 16c0 2.8.7 5.4 2 7.7L0 32l8.5-2.2c2.2 1.2 4.7 1.9 7.5 1.9 8.5 0 15.3-6.9 15.3-15.3S24.5.7 16 .7zm0 27.8c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-5 .9 1-4.9-.3-.5C3.5 19.5 3 17.8 3 16 3 9.1 9.1 3 16 3s13 6.1 13 13-6.1 12.5-13 12.5zm7.3-9.3c-.4-.2-2.2-1.1-2.6-1.2s-.6-.2-.9.2c-.3.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1s-1.8-.7-3.4-2.1c-1.3-1.1-2.1-2.4-2.4-2.8-.2-.4 0-.6.2-.8s.4-.5.6-.7c.2-.2.3-.4.5-.7.2-.2.1-.5 0-.7-.1-.2-.9-2.1-1.3-2.9-.3-.8-.7-.7-.9-.7h-.8c-.2 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 3.9c.2.2 2.7 4.1 6.6 5.7.9.4 1.6.6 2.2.8.9.3 1.7.3 2.3.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.2-.2-.5-.4-.9-.6z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 300,
            height: 400,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            fontFamily: "Arial, sans-serif",
            zIndex: 1000,
            animation: "fadeIn 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#25D366",
              color: "white",
              padding: "12px 15px",
              fontWeight: "bold",
              fontSize: 16,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Chat WhatsApp
            <button
              onClick={() => setIsOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                color: "white",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
              background: "#f0f2f5",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  margin: "6px 0",
                  padding: "8px 12px",
                  borderRadius: 15,
                  maxWidth: "75%",
                  clear: "both",
                  background: msg.sender === "user" ? "#25D366" : "#e4e6eb",
                  color: msg.sender === "user" ? "white" : "black",
                  float: msg.sender === "user" ? "right" : "left",
                  textAlign: msg.sender === "user" ? "right" : "left",
                  fontSize: 14,
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #ddd",
              padding: 8,
              background: "#fff",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              style={{
                flex: 1,
                padding: "8px 10px",
                borderRadius: 15,
                border: "1px solid #ccc",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: 8,
                padding: "8px 12px",
                border: "none",
                borderRadius: 15,
                background: "#25D366",
                color: "white",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Animasi sederhana */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ChatBotWA;
