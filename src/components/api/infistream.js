// src/components/api/infistream.js
export async function searchInfistream(q) {
  try {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://infistream.id/"
    )}`;
    const res = await fetch(url);
    const data = await res.json();

    const html = data.contents;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // 🔹 Ambil artikel
    const articleLinks = [
      ...doc.querySelectorAll("h2.entry-title a"),
      ...doc.querySelectorAll(".entry-title a"),
      ...doc.querySelectorAll(".elementor-post__title a"),
      ...doc.querySelectorAll("article h2 a"),
      ...doc.querySelectorAll("h3.jeg_post_title a"),
    ];

    const articles = articleLinks.map((a) => ({
      title: a.textContent.trim(),
      url: a.href,
      snippet: a.textContent.trim(),
    }));

    // 🔹 Normalisasi query (hilangkan tanda tanya, lower-case)
    const cleanQ = q.toLowerCase().replace(/[?!.]/g, "");
    const results = articles.filter((a) =>
      a.title.toLowerCase().includes(cleanQ)
    );

    if (results.length) {
      // 🔹 Balasan natural
      return {
        reply:
          `Saya menemukan beberapa artikel yang relevan di Infistream:\n\n` +
          results
            .slice(0, 3)
            .map(
              (r, i) =>
                `${i + 1}. **${r.title}**\n   Baca di sini: ${r.url}`
            )
            .join("\n\n"),
      };
    }

    // 🔹 Jika tidak ada hasil
    return {
      reply: `Saya belum menemukan artikel langsung untuk pertanyaan **"${q}"**. 
Namun kamu bisa coba menjelajahi halaman utama Infistream di sini: https://infistream.id/ 😉`,
    };
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return {
      reply:
        "⚠️ Maaf, saya mengalami kendala teknis saat mengakses Infistream. Coba lagi sebentar ya.",
    };
  }
}
