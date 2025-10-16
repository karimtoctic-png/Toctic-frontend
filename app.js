// --- Script principal TocTic ---

// Gestion du formulaire d'inscription
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Inscription réussie sur TocTic !");
  e.target.reset();
});

// Gestion du formulaire de connexion
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🔐 Connexion réussie ! Bienvenue sur TocTic 🎵");
  e.target.reset();
});

// Effet clic sur les boutons
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("mousedown", () => btn.classList.add("clicked"));
  btn.addEventListener("mouseup", () => btn.classList.remove("clicked"));
});
