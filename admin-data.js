// === Gestion des données administrateur TocTic ===

// Simulation de données utilisateurs
const utilisateurs = [
  { id: 1, nom: "Lina", email: "lina@toctic.live", statut: "VIP+" },
  { id: 2, nom: "Yanis", email: "yanis@toctic.live", statut: "Actif" },
  { id: 3, nom: "Mila", email: "mila@toctic.live", statut: "Banni" },
];

// Simulation des statistiques
const stats = {
  totalUtilisateurs: 3204,
  abonnementsVIP: 412,
  revenusTotaux: "12 487 €",
  comptesSupprimes: 58,
};

// Fonction d'affichage dans la console
function afficherInfosAdmin() {
  console.log("=== Tableau de Bord Admin TocTic ===");
  console.log("Utilisateurs enregistrés :", stats.totalUtilisateurs);
  console.log("Abonnements VIP :", stats.abonnementsVIP);
  console.log("Revenus totaux :", stats.revenusTotaux);
  console.log("Comptes supprimés :", stats.comptesSupprimes);
  console.log("Liste des utilisateurs :", utilisateurs);
}

// Exécution automatique au chargement
afficherInfosAdmin();
