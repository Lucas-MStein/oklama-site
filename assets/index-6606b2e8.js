(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function c(){const n=document.getElementById("content"),o="/TEN_BAD_BITCHES_v3_Master.wav";n.innerHTML=`
    <audio controls autoplay>
      <source src="${o}" type="audio/wav">
      Dein Browser unterstützt kein Audio.
    </audio>
  `}function d(){const n=document.getElementById("content");n.innerHTML=`
    <div class="bg-white text-black p-6 rounded shadow-lg text-left text-sm leading-relaxed font-serif italic max-h-96 overflow-y-auto">
      <p class="mb-4">Lieber Hörer, liebe Hörerin,</p>
      <p class="mb-4">Manchmal sagt Stille mehr als jeder Ton. Dieses Projekt war eine Reise — ein Innehalten inmitten des Lärms, ein Nachdenken über Erinnerung, Rhythmus und Bedeutung.</p>
      <p class="mb-4">Es gibt keine Trackliste, keine Promotion, kein Ziel — nur Ausdruck. Danke, dass du diesen stillen Raum betreten hast.</p>
      <p>Frieden und Klarheit,<br /><strong>The Question</strong></p>
    </div>
  `}window.showAudio=c;window.showLetter=d;document.addEventListener("click",n=>{const o=n.target.closest(".folder"),r=n.target.closest("#content");!o&&!r&&(document.getElementById("content").innerHTML="")});
