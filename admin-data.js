// admin-data.js — Données dynamiques TocTic Admin Dashboard

// Données simulées
const dashboardData = {
  revenusJour: 120.75,
  revenusTotal: 52340.88,
  utilisateursActifs: 2450,
  nouveauxInscrits: 127,
  vip: 68,
  vipPlus: 24,
  comptesSupprimes: 3,
};

// Fonction pour afficher les données dans la console (test)
console.log("📊 Données du tableau de bord TocTic :", dashboardData);

// Fonction de mise à jour du tableau de bord
function updateDashboard() {
  document.getElementById("revenus-jour").textContent = dashboardData.revenusJour.toFixed(2) + " €";
  document.getElementById("revenus-total").textContent = dashboardData.revenusTotal.toFixed(2) + " €";
  document.getElementById("utilisateurs-actifs").textContent = dashboardData.utilisateursActifs;
  document.getElementById("nouveaux-inscrits").textContent = dashboardData.nouveauxInscrits;
  document.getElementById("vip").textContent = dashboardData.vip;
  document.getElementById("vip-plus").textContent = dashboardData.vipPlus;
  document.getElementById("comptes-supprimes").textContent = dashboardData.comptesSupprimes;
}

// Actualiser toutes les 5 secondes
setInterval(() => {
  dashboardData.revenusJour += Math.random() * 5;
  dashboardData.revenusTotal += Math.random() * 100;
  dashboardData.utilisateursActifs += Math.floor(Math.random() * 10);
  updateDashboard();
}, 5000);

// Initialisation au chargement
window.addEventListener("DOMContentLoaded", updateDashboard);
