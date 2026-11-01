const joueurs = [
  {
    prenom: "Erling",
    nom: "Haaland",
    numero: 9,
    club: "Manchester City",
    sigle: "MCI",
    championnat: "Premier League",
    pays: "Norvège",
    poste: "Attaquant",
    buts: 376,
    passes: 64,
    matchs: 420,
    naissance: "21 juillet 2000",
    couleur: "#009dff",
    image: "https://www.leparisien.fr/resizer/mi2M8jbyHFgqPGzYt0UEiVzvOh4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/AMSMNKB6NFDU7KJAK5VTMXS2KA.jpg",
    description: "Erling Haaland est un attaquant puissant et redoutable devant le but. Sa vitesse, son placement et sa capacité à conclure les occasions en font un joueur offensif particulièrement dangereux."
  },
  {
    prenom: "Kylian",
    nom: "Mbappé",
    numero: 10,
    club: "Real Madrid",
    sigle: "RMA",
    championnat: "La Liga",
    pays: "France",
    poste: "Attaquant",
    buts: 444,
    passes: 148,
    matchs: 571,
    naissance: "20 décembre 1998",
    couleur: "#f0ae16",
    image: "https://img.lemde.fr/2026/10/25/0/0/2641/1761/664/0/75/0/038d67b_ftp-1-8sas6b1bffiv-afp-d4e98xx.jpg",
    description: "Kylian Mbappé est connu pour ses accélérations, ses dribbles et ses appels en profondeur. Il peut faire la différence grâce à sa vitesse et sa capacité à marquer."
  },
  {
    prenom: "Lamine",
    nom: "Yamal",
    numero: 10,
    club: "FC Barcelone",
    sigle: "FCB",
    championnat: "La Liga",
    pays: "Espagne",
    poste: "Milieu offensif",
    buts: 71,
    passes: 66,
    matchs: 206,
    naissance: "13 juillet 2007",
    couleur: "#f00055",
    image: "https://img.20mn.fr/r5fKo_35Q_axBZ5qt_CYyik/1444x920_261027-londres-27-octobre-2026-xinhua-le-joueur-du-fc-barcelone-lamine-yamal-arrive-sur-le-tapis-rouge-avant-la-ceremonie-de-remise-du-ballon-d-or-de-football-2026-a-londres-en-grande-bretagne-le-26-octobre-2026-xinhua-li-ying-li-ying-chine-nouvelle-xxjp-bee000034-20261027-pepfn0a001-credit-chine-nouvelle-sipa-2610270719",
    description: "Lamine Yamal est un joueur offensif créatif. Sa technique, son dribble et sa vision du jeu lui permettent de créer des occasions et de déstabiliser les défenses."
  },
  {
    prenom: "Harry",
    nom: "Kane",
    numero: 9,
    club: "Bayern Munich",
    sigle: "FCB",
    championnat: "Bundesliga",
    pays: "Angleterre",
    poste: "Attaquant",
    buts: 500,
    passes: 106,
    matchs: 669,
    naissance: "28 juillet 1993",
    couleur: "#ed1239",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harry_Kane_2023.jpg",
    description: "Harry Kane est un buteur complet qui sait marquer, jouer en remise et participer à la construction des attaques. Son sens du placement est l'une de ses grandes qualités."
  },
  {
    prenom: "Ousmane",
    nom: "Dembélé",
    numero: 10,
    club: "Paris Saint-Germain",
    sigle: "PSG",
    championnat: "Ligue 1",
    pays: "France",
    poste: "Ailier",
    buts: 135,
    passes: 110,  
    matchs: 452,
    naissance: "15 mai 1997",
    couleur: "#008dff",
    image: "https://assets-fr.imgfoot.com/media/cache/642x382/dembele-65051c6910035.jpg",
    description: "Ousmane Dembélé est un ailier rapide et technique. Son dribble, ses changements de direction et sa capacité à utiliser les deux pieds lui permettent de créer des différences."
  },
  {
    prenom: "Michael",
    nom: "Olise",
    numero: 17,
    club: "Bayern Munich",
    sigle: "FCB",
    championnat: "Bundesliga",
    pays: "France",
    poste: "Ailier",
    buts: 83,
    passes: 97,
    matchs: 307,
    naissance: "12 décembre 2001",
    couleur: "#f00055",
    image: "https://focus.telerama.fr/2026/07/03/0/0/3000/2000/1200/0/60/0/677ae43_upload-1-vyavt9531jrz-063-2284163690.jpg",
    description: "Michael Olise est apprécié pour sa créativité, sa qualité de passe et sa technique. Il peut éliminer un adversaire et créer des occasions depuis les côtés."
  },
  {
    prenom: "Adrien",
    nom: "Rabiot",
    numero: 25,
    club: "AC Milan",
    sigle: "ACM",
    championnat: "Serie A",
    pays: "France",
    poste: "Milieu de terrain",
    buts: 72,
    passes: 45,
    matchs: 568,
    naissance: "3 avril 1995",
    couleur: "#00b9ee",
    image: "https://www.lequipe.fr/_medias/img-photo-jpg/adrien-rabiot-s-etait-blesse-avec-l-equipe-de-france-p-lahalle-l-equipe/1500000002312092/58:167,1683:1251-828-552-75/c25a1.jpg",
    description: "Adrien Rabiot est un milieu de terrain capable de récupérer le ballon, de progresser vers l'avant et d'aider son équipe dans les phases offensives."
  },
  {
    prenom: "Mohamed",
    nom: "Salah",
    numero: 11,
    club: "Liverpool",
    sigle: "LFC",
    championnat: "Premier League",
    pays: "Égypte",
    poste: "Ailier",
    buts: 327,
    passes: 157,
    matchs: 598,
    naissance: "15 juin 1992",
    couleur: "#f00055",
    image: "https://www.lequipe.fr/_medias/img-photo-jpg/mohamed-salah-lors-du-match-de-la-phase-de-ligue-contre-le-real-madrid-1-0-a-anfield-le-4-novembre-d/1500000002440839/0:0,2000:1333-828-552-75/8e133.jpg",
    description: "Mohamed Salah est un attaquant réputé pour sa vitesse, ses appels et sa capacité à marquer depuis le côté droit. Il peut également créer des occasions pour ses coéquipiers."
  }
];

const conteneur = document.getElementById("players");
const modal = document.getElementById("playerModal");
const modalDetails = document.getElementById("modalDetails");
const boutonFermer = document.getElementById("closeModal");

function afficherJoueurs() {
  conteneur.innerHTML = joueurs.map((joueur, index) => `
    <article class="player-card"
      style="--accent: ${joueur.couleur}; animation-delay: ${index * 0.08}s">

      <div class="player-photo">
        <span class="shirt-number">${joueur.numero}</span>

        <div class="player-initials">
          ${joueur.prenom[0]}${joueur.nom[0]}
        </div>

        <img
          src="${joueur.image}"
          alt="${joueur.prenom} ${joueur.nom}"
          loading="${index < 4 ? "eager" : "lazy"}"
          onerror="this.remove()"
        >
      </div>

      <div class="player-content">
        <div class="player-club">
          <span class="club-mark">${joueur.sigle}</span>

          <div class="club-details">
            <span>${joueur.club}</span>
            <span class="club-league">${joueur.championnat}</span>
          </div>
        </div>

        <span class="player-firstname">${joueur.prenom}</span>
        <h2>${joueur.nom}</h2>

        <span class="player-position">${joueur.poste}</span>

        <div class="player-stats">
          <div class="stat">
            <span class="stat-label">Buts</span>
            <span class="stat-value">${joueur.buts}</span>
          </div>

          <div class="stat">
            <span class="stat-label">Passes</span>
            <span class="stat-value">${joueur.passes}</span>
          </div>

          <div class="stat">
            <span class="stat-label">Matchs</span>
            <span class="stat-value">${joueur.matchs}</span>
          </div>
        </div>

        <button class="player-button" data-index="${index}">
          Voir la fiche →
        </button>
      </div>
    </article>
  `).join("");

  conteneur.querySelectorAll(".player-button").forEach(bouton => {
    bouton.addEventListener("click", () => {
      afficherDetails(joueurs[Number(bouton.dataset.index)]);
    });
  });
}

function afficherDetails(joueur) {
  modalDetails.innerHTML = `
    <p class="section-label">FOOTZONE • PROFIL JOUEUR</p>

    <h2>${joueur.prenom} ${joueur.nom}</h2>

    <p class="modal-subtitle">
      ${joueur.club} · ${joueur.poste}
    </p>

    <p class="modal-description">${joueur.description}</p>

    <div class="details-list">
      <div class="detail-item">
        <span>Club</span>
        <strong>${joueur.club}</strong>
      </div>

      <div class="detail-item">
        <span>Championnat</span>
        <strong>${joueur.championnat}</strong>
      </div>

      <div class="detail-item">
        <span>Nationalité</span>
        <strong>${joueur.pays}</strong>
      </div>

      <div class="detail-item">
        <span>Naissance</span>
        <strong>${joueur.naissance}</strong>
      </div>

      <div class="detail-item">
        <span>Numéro</span>
        <strong>${joueur.numero}</strong>
      </div>

      <div class="detail-item">
        <span>Poste</span>
        <strong>${joueur.poste}</strong>
      </div>
    </div>

    <div class="player-stats modal-stats">
      <div class="stat">
        <span class="stat-label">Buts</span>
        <span class="stat-value">${joueur.buts}</span>
      </div>

      <div class="stat">
        <span class="stat-label">Passes</span>
        <span class="stat-value">${joueur.passes}</span>
      </div>

      <div class="stat">
        <span class="stat-label">Matchs</span>
        <span class="stat-value">${joueur.matchs}</span>
      </div>
    </div>
  `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function fermerDetails() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

boutonFermer.addEventListener("click", fermerDetails);

modal.addEventListener("click", evenement => {
  if (evenement.target === modal) {
    fermerDetails();
  }
});

document.addEventListener("keydown", evenement => {
  if (evenement.key === "Escape") {
    fermerDetails();
  }
});

afficherJoueurs();
