
const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

btn.addEventListener('click', () => {
  // 1. On bascule la classe sur le body
  document.body.classList.toggle('dark-theme');
  
  // 2. On change l'icône pour le fun
  if (document.body.classList.contains('dark-theme')) {
    icon.textContent = '☀️'; // Soleil pour revenir au mode clair
  } else {
    icon.textContent = '🌙'; // Lune pour passer au mode sombre
  }
});

// 1. On récupère les éléments HTML par leur ID
const bouton = document.getElementById('monBouton');
const message = document.getElementById('messageSurprise');

// 2. On ajoute un "écouteur d'événement" sur le clic
bouton.addEventListener('click', function() {
    // 3. On ajoute la classe "visible" au message
    message.classList.toggle('visible');
    
    // Changer le texte du bouton
    if (message.classList.contains('visible')) {
        bouton.textContent = "Cacher le message";
    } else {
        bouton.textContent = "Clique pour une surprise !";
    }
});