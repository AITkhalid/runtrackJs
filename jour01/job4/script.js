// Déclaration de la fonction bisextile
function bisextile(annee) {
    // Vérification si l'année est divisible par 4
    if (annee % 4 === 0) {
        // Si l'année est divisible par 100 et non divisible par 400, ce n'est pas une année bissextile
        if (annee % 100 === 0 && annee % 400 !== 0) {
            return false;
        } else {
            // Sinon, c'est une année bissextile
            return true;
        }
    } else {
        return false;
    }
}



