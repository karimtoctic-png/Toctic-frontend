
// === Gestion des données administrateur TocTic ===

// Simulation de base de données
const utilisateurs = [
  { id: 1, nom: "Lina", email: "lina@toctic.live", statut: "VIP+" },
  { id: 2, nom: "Yanis", email: "yanis@toctic.live", statut: "Actif" },
  { id: 3, nom: "Mila", email: "mila@toctic.live", statut: "Banni" },
  { id: 4, nom: "Karim", email: "karim@toctic.live", statut: "Admin" },
];

// Statistiques du site
const stats = {
  totalUtilisateurs: 3204,
  abonnementsVIP: 412,
  revenusTotaux: "12 487 €",
  comptesSupprimes: 58,
};

// Fonction principale d'affichage
function afficherInfosAdmin() {
  console.log("=== Tableau de Bord Admin TocTic ===");
  console.log("Utilisateurs enregistrés :", stats.totalUtilisateurs);
  console.log("Abonnements VIP :", stats.abonnementsVIP);
  console.log("Revenus totaux :", stats.revenusTotaux);
  console.log("Comptes supprimés :", stats.comptesSupprimes);
  console.log("—— Liste des utilisateurs ——");
  utilisateurs.forEach(u => {
    console.log(`${u.id}. ${u.nom} — ${u.email} — ${u.statut}`);
  });
}

// Exécution automatique au chargement
afficherInfosAdmin();
