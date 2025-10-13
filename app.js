// app.js - Fonctions principales de TocTic

// Quand la page est chargée
document.addEventListener("DOMContentLoaded", function() {

  // Boutons actions sur la page d'accueil
  const discoverBtn = document.querySelector(".actions button:nth-child(1)");
  const loginBtn = document.querySelector(".actions button:nth-child(2)");

  // Redirections ou alertes
  discoverBtn.addEventListener("click", function() {
    // Pour l'instant redirige vers register.html
    window.location.href = "register.html";
  });

  loginBtn.addEventListener("click", function() {
    // Pour l'instant redirige vers register.html
    window.location.href = "register.html";
  });

  console.log("TocTic ready 🚀");
});
