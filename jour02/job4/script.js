// Sélection du textarea
var textarea = document.getElementById("keylogger");

// Ajout d'un gestionnaire d'événement pour les touches pressées
document.addEventListener("keydown", function(event) {
    // Récupération de la touche pressée
    var keyPressed = event.key;

    // Si la touche est une lettre de a à z
    if (/^[a-zA-Z]$/.test(keyPressed)) {
        // Si le focus est dans le textarea, ajouter la lettre deux fois
        if (document.activeElement === textarea) {
            textarea.value += keyPressed ;
        } else {
            // Sinon, ajouter la lettre une seule fois
            textarea.value += keyPressed;
        }
    }
});
