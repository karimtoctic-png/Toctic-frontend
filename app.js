// --- TocTic App.js ---
// Petit script pour ajouter de la vie à ton site TocTic

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  });

  console.log("TocTic est prêt ! Libère ton talent 🎵");
});
