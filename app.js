// app.js – scripts principaux du site TocTic

// Affiche un message dans la console
console.log("Bienvenue sur TocTic ! 🎵🎬");

// Gestion des boutons
document.addEventListener("DOMContentLoaded", () => {
  const boutons = document.querySelectorAll("button");

  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Fonctionnalité à venir ✨");
    });
  });
});
