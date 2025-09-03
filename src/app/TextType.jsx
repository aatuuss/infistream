import React, { useState, useEffect } from "react";

const TextType = ({
  text = [],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text.length) return;

    let timeout;

    if (!isDeleting && displayText.length < text[currentIndex].length) {
      // Ngetik huruf satu per satu
      timeout = setTimeout(() => {
        setDisplayText(text[currentIndex].slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === text[currentIndex].length) {
      // Pause sebentar
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText.length > 0) {
      // Hapus huruf satu per satu
      timeout = setTimeout(() => {
        setDisplayText(text[currentIndex].slice(0, displayText.length - 1));
      }, typingSpeed / 2);
    } else if (isDeleting && displayText.length === 0) {
      // Ganti teks berikutnya
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % text.length);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, typingSpeed, pauseDuration, currentIndex]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="text-blue-500">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
    