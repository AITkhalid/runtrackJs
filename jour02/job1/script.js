// Fonction pour récupérer et afficher la citation dans la console
function citation() {
    var citationElement = document.getElementById("citation");
    if (citationElement) {
        console.log(citationElement.textContent);
    } else {
        console.log("L'élément avec l'id 'citation' n'existe pas.");
    }
}

// Ajout d'un gestionnaire d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", citation);
