// Récupération de la référence vers le bouton et le paragraphe du compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur de clics
var count = 0;

// Fonction pour incrémenter le compteur et mettre à jour le texte
function addOne() {
    count++;
    compteur.textContent = count;
}

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener("click", addOne);
