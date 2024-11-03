const citations = [
    {
      citation:
        "La science n'est pas seulement une discipline de vérité, mais une méthode de découverte.",
      auteur: "Carl Sagan",
      couleur: "#FFDDC1",
    },
    {
      citation:
        "Tout ce que nous voyons ou semblons n'est qu'un rêve dans un rêve.",
      auteur: "Edgar Allan Poe",
      couleur: "#FFABAB",
    },
    {
      citation: "La science est l'art de poser des questions.",
      auteur: "Jean-Pierre Changeux",
      couleur: "#FFC3A0",
    },
    {
      citation:
        "Les grands esprits ont toujours rencontré une opposition violente des esprits médiocres.",
      auteur: "Albert Einstein",
      couleur: "#FF677D",
    },
    {
      citation:
        "La logique vous mènera d'un point A à un point B. L'imagination vous mènera partout.",
      auteur: "Albert Einstein",
      couleur: "#D4A5A5",
    },
    {
      citation:
        "La science est une façon de penser beaucoup plus qu'un corps de connaissances.",
      auteur: "Carl Sagan",
      couleur: "#392F5A",
    },
    {
      citation:
        "La seule façon de faire un excellent travail est d’aimer ce que vous faites.",
      auteur: "Steve Jobs",
      couleur: "#F9FBCB",
    },
    {
      citation:
        "Tout ce qui est réel est rationnel, et tout ce qui est rationnel est réel.",
      auteur: "Georg Wilhelm Friedrich Hegel",
      couleur: "#A0E7E5",
    },
    {
      citation: "La science avance par erreurs et essais.",
      auteur: "Blaise Pascal",
      couleur: "#B9FBC0",
    },
    {
      citation:
        "Le vrai signe de l'intelligence n'est pas la connaissance mais l'imagination.",
      auteur: "Albert Einstein",
      couleur: "#FF9A8B",
    },
    {
      citation: "La mesure de l'intelligence est la capacité à changer.",
      auteur: "Albert Einstein",
      couleur: "#D5AAFF",
    },
    {
      citation: "Rien ne se perd, rien ne se crée, tout se transforme.",
      auteur: "Antoine Lavoisier",
      couleur: "#F0E3FF",
    },
    {
      citation:
        "La science est le meilleur outil que l'humanité ait jamais créé.",
      auteur: "Stephen Hawking",
      couleur: "#FF6F61",
    },
    {
      citation: "La curiosité est le moteur de toute découverte scientifique.",
      auteur: "Marie Curie",
      couleur: "#A6E1FA",
    },
    {
      citation:
        "La science est un effort collectif, et nous ne pouvons pas réussir seuls.",
      auteur: "Neil deGrasse Tyson",
      couleur: "#FFD700",
    },
    {
      citation:
        "La science sans religion est boiteuse, la religion sans science est aveugle.",
      auteur: "Albert Einstein",
      couleur: "#FFB6C1",
    },
    {
      citation: "La meilleure façon de prédire l'avenir est de l'inventer.",
      auteur: "Alan Kay",
      couleur: "#E6E6FA",
    },
    {
      citation:
        "La découverte scientifique implique souvent un changement de perspective.",
      auteur: "Inconnu",
      couleur: "#FFF5BA",
    },
    {
      citation: "Le plus grand risque est de ne prendre aucun risque.",
      auteur: "Mark Zuckerberg",
      couleur: "#FFE6E6",
    },
    {
      citation: "Le bonheur est une direction, pas une destination.",
      auteur: "Inconnu",
      couleur: "#D2B48C",
    },
  ];
  
  const citationDiv = document.getElementsByClassName("citation")[0];
  
  function displayCitation() {
    const index = Math.floor(Math.random() * citations.length);
    const citation = citations[index];
  
    citationDiv.style.backgroundColor = citation.couleur; // 
    citationDiv.innerHTML = `<h2>${citation.citation}</h2><p>${citation.auteur}</p>`;
  }
  
window.addEventListener("DOMContentLoaded", displayCitation)
  document.querySelector(".random").addEventListener("click", displayCitation )