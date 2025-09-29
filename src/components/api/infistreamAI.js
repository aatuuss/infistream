// src/api/infistreamAI.js

export async function askAI(question) {
  try {
    const res = await fetch(
      `http://localhost:4000/api/search?q=${encodeURIComponent(question)}`
    );

    if (!res.ok) {
      throw new Error("Gagal mengambil data dari API server");
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      return "⚠️ Maaf, saya tidak menemukan informasi terkait di Infistream.";
    }

    // Format hasil jawaban chatbot
    return data
      .map(
        (item, i) =>
          `${i + 1}. **${item.title}**\n${item.excerpt}\n🔗 ${item.link}`
      )
      .join("\n\n");
  } catch (err) {
    console.error("Error fetch:", err);
    return "⚠️ Terjadi kesalahan saat menghubungkan ke server Infistream.";
  }
}
