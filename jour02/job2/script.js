// Fonction pour gérer l'apparition / disparition de l'article
function showhide() {
    var articleElement = document.getElementById("article");

    // Vérifie si l'article existe déjà
    if (articleElement) {
        // Si l'article existe, le supprime
        articleElement.parentNode.removeChild(articleElement);
    } else {
        // Sinon, crée un nouvel article et l'ajoute au corps du document
        var newArticle = document.createElement("article");
        newArticle.id = "article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}
