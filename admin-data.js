// === Gestion des données dynamiques TocTic Admin ===

// Données administratives simulées
const adminStats = {
  utilisateursActifs: 3204,
  abonnementsVIP: 412,
  revenusTotaux: 12487,
  comptesSupprimes: 58,
  revenusHebdo: [1200, 1500, 1800, 1700, 2100, 2500, 2900]
};

// Fonction d’affichage console (suivi technique)
function afficherInfosAdmin() {
  console.log("=== Tableau de Bord Admin TocTic ===");
  console.log("Utilisateurs actifs :", adminStats.utilisateursActifs);
  console.log("Abonnements VIP :", adminStats.abonnementsVIP);
  console.log("Revenus totaux :", adminStats.revenusTotaux + " €");
  console.log("Comptes supprimés :", adminStats.comptesSupprimes);
}

// Liaison automatique avec le tableau admin-dashboard.html
document.addEventListener("DOMContentLoaded", () => {
  const actif = document.getElementById("activeUsers");
  const vip = document.getElementById("vipCount");
  const revenus = document.getElementById("revenusTotal");

  if (actif && vip && revenus) {
    actif.textContent = adminStats.utilisateursActifs;
    vip.textContent = adminStats.abonnementsVIP;
    revenus.textContent = adminStats.revenusTotaux + " €";
  }

  afficherInfosAdmin();
});
