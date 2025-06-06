(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function l(){const n=document.getElementById("content-wrapper");if(document.getElementById("audio-player"))return;const e=document.createElement("div");e.id="audio-player",e.className="w-full",e.innerHTML=`
    <audio controls autoplay class="w-full">
      <source src="/your-audio.wav" type="audio/wav">
      Dein Browser unterstützt kein Audio.
    </audio>
  `,n.appendChild(e)}function d(){const n=document.getElementById("content-wrapper");if(document.getElementById("letter-box"))return;const e=document.createElement("div");e.id="letter-box",e.className="bg-white text-black p-6 rounded shadow-lg text-left text-sm leading-relaxed font-serif italic max-h-96 overflow-y-auto w-full",e.innerHTML=`
    <p class="mb-4">Lieber Hörer, liebe Hörerin,</p>
    <p class="mb-4">Manchmal sagt Stille mehr als jeder Ton. Dieses Projekt war eine Reise — ein Innehalten inmitten des Lärms, ein Nachdenken über Erinnerung, Rhythmus und Bedeutung.</p>
    <p class="mb-4">Es gibt keine Trackliste, keine Promotion, kein Ziel — nur Ausdruck. Danke, dass du diesen stillen Raum betreten hast.</p>
    <p>Frieden und Klarheit,<br /><strong>Dein Name</strong></p>
  `,n.appendChild(e)}window.showAudio=l;window.showLetter=d;document.addEventListener("click",n=>{const e=n.target.closest(".folder"),o=n.target.closest("#content-wrapper");!e&&!o&&(document.getElementById("content-wrapper").innerHTML="")});
