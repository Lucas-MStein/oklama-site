function showAudio() {
  const content = document.getElementById("content");
  const audioPath = `${import.meta.env.BASE_URL}TEN_BAD_BITCHES.wav`;

  content.innerHTML = `
    <audio controls autoplay>
      <source src="${audioPath}" type="audio/wav">
      Dein Browser unterstützt kein Audio.
    </audio>
  `;
}

function showLetter() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="bg-white text-black p-6 rounded shadow-lg text-left text-sm leading-relaxed font-serif italic max-h-96 overflow-y-auto">
      <p class="mb-4">Lieber Hörer, liebe Hörerin,</p>
      <p class="mb-4">Manchmal sagt Stille mehr als jeder Ton. Dieses Projekt war eine Reise — ein Innehalten inmitten des Lärms, ein Nachdenken über Erinnerung, Rhythmus und Bedeutung.</p>
      <p class="mb-4">Es gibt keine Trackliste, keine Promotion, kein Ziel — nur Ausdruck. Danke, dass du diesen stillen Raum betreten hast.</p>
      <p>Frieden und Klarheit,<br /><strong>LMS</strong></p>
    </div>
  `;
}

// Globale Verfügbarkeit für onclick im HTML
window.showAudio = showAudio;
window.showLetter = showLetter;

// Klick auf leere Fläche → Inhalte ausblenden
document.addEventListener("click", (event) => {
  const isFolder = event.target.closest(".folder");
  const isContent = event.target.closest("#content");
  if (!isFolder && !isContent) {
    document.getElementById("content").innerHTML = "";
  }
});