// Fonction pour trier un tableau de nombres
function tri(numbers, order) {
    // Vérification du paramètre "order"
    if (order === "asc") {
        // Tri dans l'ordre ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Tri dans l'ordre décroissant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        // Si le paramètre "order" n'est ni "asc" ni "desc", retourner un message d'erreur
        return "Veuillez fournir 'asc' pour un tri ascendant ou 'desc' pour un tri descendant.";
    }

    // Retourner le tableau trié
    return numbers;
}

// Exemples d'utilisation de la fonction tri
console.log(tri([3, 1, 5, 2, 4], "asc")); // Output: [1, 2, 3, 4, 5] (tri ascendant)
console.log(tri([3, 1, 5, 2, 4], "desc")); // Output: [5, 4, 3, 2, 1] (tri descendant)
console.log(tri([3, 1, 5, 2, 4], "invalid")); // Output: "Veuillez fournir 'asc' pour un tri ascendant ou 'desc' pour un tri descendant."
