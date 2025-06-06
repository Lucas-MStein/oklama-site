function showAudio() {
  const wrapper = document.getElementById("content-wrapper");

  // Verhindere Duplikate
  if (document.getElementById("audio-player")) return;

  const audio = document.createElement("div");
  audio.id = "audio-player";
  audio.className = "w-full";
  audio.innerHTML = `
    <audio controls autoplay class="w-full">
      <source src="/your-audio.wav" type="audio/wav">
      Dein Browser unterstützt kein Audio.
    </audio>
  `;
  wrapper.appendChild(audio);
}

function showLetter() {
  const wrapper = document.getElementById("content-wrapper");

  // Verhindere Duplikate
  if (document.getElementById("letter-box")) return;

  const letter = document.createElement("div");
  letter.id = "letter-box";
  letter.className = "bg-white text-black p-6 rounded shadow-lg text-left text-sm leading-relaxed font-serif italic max-h-96 overflow-y-auto w-full";
  letter.innerHTML = `
    <p class="mb-4">Lieber Hörer, liebe Hörerin,</p>
    <p class="mb-4">Manchmal sagt Stille mehr als jeder Ton. Dieses Projekt war eine Reise — ein Innehalten inmitten des Lärms, ein Nachdenken über Erinnerung, Rhythmus und Bedeutung.</p>
    <p class="mb-4">Es gibt keine Trackliste, keine Promotion, kein Ziel — nur Ausdruck. Danke, dass du diesen stillen Raum betreten hast.</p>
    <p>Frieden und Klarheit,<br /><strong>Dein Name</strong></p>
  `;
  wrapper.appendChild(letter);
}

// Funktionen im globalen Scope verfügbar machen
window.showAudio = showAudio;
window.showLetter = showLetter;

// Klicken außerhalb von Ordnern oder Content → alles schließen
document.addEventListener("click", (event) => {
  const isFolder = event.target.closest(".folder");
  const isContent = event.target.closest("#content-wrapper");
  if (!isFolder && !isContent) {
    document.getElementById("content-wrapper").innerHTML = "";
  }
});