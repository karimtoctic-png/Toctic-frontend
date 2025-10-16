// --- Sécurité Administrateur TocTic ---

document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Identifiants temporaires (à modifier plus tard)
  if (username === "admin" && password === "TocTic2025!") {
    alert("✅ Connexion réussie !");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("❌ Identifiants incorrects !");
  }
});
