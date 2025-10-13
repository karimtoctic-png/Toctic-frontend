// app.js - fonctions de base pour TocTic

// Exemple simple pour les boutons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.actions button');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Fonctionnalité à venir ✨');
    });
  });
});
