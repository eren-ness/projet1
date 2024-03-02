document.getElementById("ordonnance-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    var patient = document.getElementById("patient").value;
    var medicament = document.getElementById("medicament").value;
    var posologie = document.getElementById("posologie").value;
    var instructions = document.getElementById("instructions").value;
    var duree = document.getElementById("duree").value;

    // Afficher les détails de l'ordonnance
    document.getElementById("patient-detail").textContent = patient;
    document.getElementById("medicament-detail").textContent = medicament;
    document.getElementById("posologie-detail").textContent = posologie;
    document.getElementById("instructions-detail").textContent = instructions;
    document.getElementById("duree-detail").textContent = duree;

    // Afficher le bouton pour afficher l'ordonnance
    document.getElementById("show-ordonnance-btn").style.display = "block";
});

document.getElementById("show-ordonnance-btn").addEventListener("click", function() {
    // Afficher l'espace pour afficher l'ordonnance
    document.getElementById("ordonnance-details").style.display = "block";
});
