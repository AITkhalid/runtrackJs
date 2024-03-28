// Fonction pour mettre à jour la couleur du footer en fonction du pourcentage de scrolling
function updateFooterColor() {
    var scrollPercent = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;

    // La couleur du footer varie de rouge (0%) à vert (100%)
    var redValue = 255 - (scrollPercent * 255 / 100);
    var greenValue = scrollPercent * 255 / 100;

    // Appliquer la nouvelle couleur au footer
    var footer = document.getElementById("footer");
    footer.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", 0)";
}

// Ajouter un gestionnaire d'événement pour le défilement de la page
window.addEventListener("scroll", updateFooterColor);

// Appeler la fonction pour mettre à jour la couleur du footer au chargement de la page
updateFooterColor();

