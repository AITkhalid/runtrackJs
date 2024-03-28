function jourTravaille() {
    var date = new Date(document.getElementById('date').value);

    // Liste des jours fériés en 2024
    var joursFeries = [
        new Date(2024, 0, 1),  // Jour de l'An
        new Date(2024, 4, 1),  // Fête du Travail
        new Date(2024, 6, 14), // Fête Nationale
        new Date(2024, 11, 25) // Noël
    ];

    for (var i = 0; i < joursFeries.length; i++) {
        if (date.getDate() === joursFeries[i].getDate() && date.getMonth() === joursFeries[i].getMonth() && date.getFullYear() === joursFeries[i].getFullYear()) {
            console.log(`Le ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} est un jour férié`);
            return;
        }
    }

    // Vérifie si la date est un week-end
    if (date.getDay() === 6 || date.getDay() === 0) {
        console.log(`Non, le ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} est un week-end`);
        return;
    }

    console.log(`Oui, le ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} est un jour travaillé`);
}

// Exemple d'utilisation
jourTravaille(new Date(2024, 0, 1)); // Le 1 1 2024 est un jour férié
jourTravaille(new Date(2024, 0, 6)); // Non, le 6 1 2024 est un week-end
jourTravaille(new Date(2024, 0, 7)); // Oui, le 7 1 2024 est un jour travaillé

