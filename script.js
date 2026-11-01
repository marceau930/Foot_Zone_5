const leagues = {
  liga: {
    name: "La Liga",
    country: "Espagne",
    flag: "🇪🇸",
    short: "LIGA",
    teams: [
      ["FC Barcelone", 10, 9, 0, 1, 40, 11, 29, 27],
      ["Atlético Madrid", 10, 8, 1, 1, 20, 8, 12, 25],
      ["Real Madrid", 10, 8, 0, 2, 25, 10, 15, 24],
      ["Betis", 10, 6, 2, 2, 16, 14, 2, 12],
      ["Real Sociedad", 10, 6, 1, 3, 19, 18, 1, 19]
    ],
    matches: [
      ["FC Barcelone", "Real Madrid", "1 – 2", "Terminé · 25 octobre 2026"],
      ["Valence", "Villarreal", "1 – 2", "Terminé · 24 octobre 2026"],
      ["Athletic Bilbao", "Getafe", "4 – 0", "Terminé · 25 octobre 2026"],
      ["Real Sociedad", "Levante", "2 – 1", "Terminé · 25 octobre 2026"]
    ],
    scorers: [
      ["Raphinha", "FC Barcelone", 13],
      ["Kylian Mbappé", "Real Madrid", 11],
      ["LamineYamal", "FC Barcelone", 8],
      ["Yassir Zabiri", "Santander", 8],
      ["Ante Budimir ", "Ossasuna", 7]
    ],
    assists: [
      ["Franscisco Javier Hezrnandez Coarasa", "Espanyol", 6],
      ["Lamine Yamal", "FC Barcelone", 6],
      ["Alberto Moleiro", "Villareal", 4],
      ["Anthony Gordon", "FC Barcelone", 4],
      ["Mariano", "Deportivo Alvés", 4]
    ],
    cards: [
      ["FC Barcelone", 1, 0],
      ["Levante", 2, 0],
      ["Real Madrid", 4, 0],
      ["Elche", 4, 0],
      ["Betis Séville", 5, 0]
    ]
  },
  bundesliga: {
    name: "Bundesliga",
    country: "Allemagne",
    flag: "🇩🇪",
    short: "BUNDESLIGA",
    teams: [
      ["Bayern Munich", 7, 5, 2, 0, 25, 6, 19, 17],
      ["Dortmund", 7, 5, 2, 0, 12, 4, 8, 17],
      ["Fribourg", 7, 4, 1, 2, 16, 9, 7, 13],
      ["Leverkusen", 7, 4, 1, 2, 16, 12, 4, 13],
      ["RB Leipzig", 7, 4, 0, 3, 20, 11, 9, 12]
    ],
    matches: [
      ["Fribourg", "Bayern Munich", "1 – 3", "Terminé · 25 octobre 2026"],
      ["Hoffenheim", "Bayer Leverkusen", "3 – 0", "Terminé · 25 octobre 2026"],
      ["RB Leipzig", "Elversberg", "4 – 0", "Terminé · 24 octobre 2026"],
      ["Borussia Dortmund", "Eintracht Francfort", "1 – 0", "Terminé · 24 octobre 2026"]
    ],
    scorers: [
      ["Niclas  Fulkrug", "Werder", 8],
      ["Michael Olise", "Bayern Munich", 6],
      ["Patrick Schick", "Borussia Dortmund", 6],
      ["Philipe Tietz", "RB Leipzig", 5],
      ["Younes Ebnoutalib", "Eintracht Francfort", 5]
    ],
    assists: [
      ["Antonia Nusa", "RB Leipzig ", 5],
      ["Marco Grull", "XWerder", 5],
      ["Fabian Rieder", "Augsbourg", 4],
      ["Harry Kane", "Bayern Munich", 4],
      ["Sheraldo Becker", "Mainz 05", 4]
    ],
    cards: [
      ["Bayern Munich", 5, 0],
      ["RB Leipzig", 6, 0],
      ["VfB Stuttgart", 6, 0],
      ["Werder Brême", 7, 0],
      ["Bayer Leverkusen", 8, 0]
    ]
  },
  seria: {
    name: "Serie A",
    country: "Italie",
    flag: "🇮🇹",
    short: "SERIE A",
    teams: [
      ["Lazio Rome", 1, 25, 9, 8, 1, 0, 22, 7, 15],
      ["Inter Milan", 1, 22, 8, 7, 1, 0, 23, 10, 13],
      ["AS Rome", 21, 9, 6, 3, 0, 23, 8, 15],
      ["Côme", 20, 9, 6, 2, 1, 17, 8, 9],
      ["AC Milan", 18, 8, 5, 3, 0, 16, 7, 9]
    ],
    matches: [
      ["Naples", "AS Roma", "3 – 3", "Terminé · 24 octobre 2026"],
      ["Inter Milan", "Fiorentina", "2 – 1", "Terminé · 25 octobre 2026"],
      ["Atalanta", "Frosinone", "4 – 4", "Terminé · 25 octobre 2026"],
      ["Juventus", "Lecce", "2 – 0", "Terminé · 25 octobre 2026"]
    ],
    scorers: [
      ["Gustavo Varela", "Monza", 7],
      ["M Donyell Malen", "AS Rome", 7],
      ["Antonio Raimondo", "Frosinone", 7],
      ["Nikola Krstovic", "Atlanta Bergame", 6],
      ["Marcus Thuram", "Inter Milan", 5]
    ],
    assists: [
      ["Mattia Zaccagni", "Lazio Rome", 5],
      ["Paulo Dybala", "AS Rome", 4],
      ["Andy Diouf", "Inter Milan", 4],
      ["Adrien Rabiot", "AC Milan", 3],
      ["Juan Miranda", "Bologne", 3]
    ],
    cards: [
      ["Naples", 6, 0],
      ["Torino", 6, 0],
      ["Côme", 9, 0],
      ["Juventus Turin", 9, 0],
      ["Cagliari", 9, 0]
    ]
  },
  premier: {
    name: "Premier League",
    country: "Angleterre",
    flag: "🏴",
    short: "PREMIER LEAGUE",
    teams: [
      ["Manchester City", 21, 8, 7, 0, 1, 20, 9, 11],
      ["Arsenal", 21, 8, 7, 0, 1, 13, 5, 8],
      ["Brighton", 16, 8, 5, 1, 2, 23, 7, 16],
      ["Liverpool", 15, 8, 4, 3, 1, 11, 8, 3],
      ["Chelsea", 13, 8, 4, 1, 3, 17, 15, 2]
    ],
    matches: [
      ["Aston Villa", "Manchester City", "2 – 1", "Terminé · 24 octobre 2026"],
      ["Arsenal", "Everton", "2 – 0", "Terminé · 24 octobre 2026"],
      ["Chelsea", "Tottenham", "0 – 2", "Terminé · 24 octobre 2026"],
      ["Liverpool", "Brighton", "2 – 0", "Terminé · 25 octobre 2026"]
    ],
    scorers: [
      ["Erling Haaland", "Manchester City", 9],
      ["Alexander Isak", "Liverpool", 6],
      ["Joao Pedro", "Chelsea", 5],
      ["Marcus Tavernier", "Bournemouth", 5],
      ["Nicolas Jackson", "Aston Villa", 4]
    ],
    assists: [
      ["Declan Rice", "Arsenal", 4],
      ["Evanilson", "Bournemouth", 4],
      ["Pascal Gross", "Brighton", 4],
      ["Ben White", "Arsenal", 3],
      ["John McGinn", "Aston Villa", 3]
    ],
    cards: [
      ["Arsenal", 9, 0],
      ["Manchester United", 12, 0],
      ["Everton", 12, 0],
      ["Chelsea", 13, 0],
      ["Leeds", 13, 0]
    ]
  },
  ligue1: {
    name: "Ligue 1",
    country: "France",
    flag: "🇫🇷",
    short: "LIGUE 1",
    teams: [
      ["Paris-SG", 17, 8, 5, 2, 1, 16, 9, 7],
      ["Rennes", 16, 8, 5, 1, 2, 18, 14, 4],
      ["Lille", 15, 8, 4, 3, 1, 11, 6, 5],
      ["Monaco", 15, 8, 4, 3, 1, 11, 7, 4],
      ["Lyon", 14, 8, 4, 2, 2, 13, 7, 6]
    ],
    matches: [
      ["Lens", "Paris FC", "2 – 1", "Terminé · 24 octobre 2026"],
      ["Monaco", "Lille", "1 – 1", "Terminé · 25 octobre 2026"],
      ["Marseille", "Le Havre", "4 – 3", "Terminé · 25 octobre 2026"],
      ["Rennes", "Strasbourg", "3 – 0", "Terminé · 25 octobre 2026"]
    ],
    scorers: [
      ["Estéban Lepaul", "Rennes", 7],
      ["Lassine Sinayoko", "Paris FC", 6],
      ["Cameron Archer", "Auxerre", 5],
      ["Amine Gouiri", "OM", 5],
      ["Casper Tengstedt", "Toulouse", 5]
    ],
    assists: [
      ["Florian Thauvin", "Lens", 8],
      ["Cristian Casseres", "Toulouse", 5],
      ["Lassine Sinayoko", "Paris FC", 4],
      ["Danny Namaso", "Auxerre", 3],
      ["Panos Katserisg", "Lorient", 3]
    ],
    cards: [
      ["Paris-SG", 7, 0],
      ["Lorient", 8, 0],
      ["Brest", 9, 0],
      ["Lille", 9, 0],
      ["Toulouse", 11, 0]
    ]
  }
};

const pageKey = location.pathname.split("/").pop().replace(".html", "");
const league = leagues[pageKey];

function formHTML(values) {
  return `<div class="form">${values.map(v => `<span class="${v.toLowerCase()}">${v}</span>`).join("")}</div>`;
}

function standingsHTML(teams, key) {
  let headers;
  let rows;

  if (key === "liga") {
    headers = ["#", "Club", "J", "V", "N", "D", "BP", "BC", "Diff.", "Pts"];
    rows = teams.map((t, i) => [i + 1, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]);
  } else if (key === "bundesliga") {
    headers = ["#", "Club", "J", "V", "N", "D", "BP", "BC", "Diff.", "Pts"];
    rows = teams.map((t, i) => [i + 1, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]);
  } else if (key === "seria") {
    headers = ["#", "Club", "Donnée 1", "Donnée 2", "Donnée 3", "Donnée 4", "Donnée 5", "Donnée 6", "Donnée 7", "Donnée 8", "Donnée 9"];
    rows = teams.map((t, i) => [i + 1, ...t]);
  } else if (key === "premier" || key === "ligue1") {
    headers = ["#", "Club", "Pts", "J", "V", "N", "D", "BP", "BC", "Diff."];
    rows = teams.map((t, i) => [i + 1, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]);
  }

  return `<div class="table-wrap"><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((cell, i) => `<td class="${i === 0 ? "position" : ""}">${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function simpleTable(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row, i) => `<tr>${row.map((cell, j) => `<td>${j === 0 ? `<span class="position">${String(i + 1).padStart(2, "0")}</span> ` : ""}${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function matchesHTML(matches) {
  return `<div class="match-cards">${matches.map((m, i) => `<article class="fixture"><div class="fixture-top"><span>${m[3]}</span><span class="fake-label">DONNÉES FOURNIES</span></div><div class="fixture-teams"><span class="fixture-team">${m[0]}</span><strong class="fixture-score">${m[2]}</strong><span class="fixture-team">${m[1]}</span></div></article>`).join("")}</div>`;
}

function renderLeague() {
  if (!league) return;

  const header = document.querySelector("#league-header");
  const stats = document.querySelector("#league-stats");
  const tabs = document.querySelector("#league-tabs");
  const panel = document.querySelector("#league-data");

  if (!header || !stats || !tabs || !panel) return;

  document.title = `${league.name} — FootZone`;

  header.innerHTML = `<section class="page-hero"><div><span class="eyebrow">${league.short}</span><h1>${league.name}</h1><p>Résultats, classement et statistiques des joueurs.</p></div><div class="page-flag">${league.flag}</div></section>`;

  stats.innerHTML = `<div class="stat-card"><span>Clubs affichés</span><strong>${league.teams.length}</strong></div><div class="stat-card"><span>Matchs affichés</span><strong>${league.matches.length}</strong></div><div class="stat-card"><span>Meilleur buteur affiché</span><strong>${league.scorers[0][2]}</strong><small>${league.scorers[0][0]}</small></div><div class="stat-card"><span>Meilleur passeur affiché</span><strong>${Math.max(...league.assists.map(x => x[2]))}</strong><small>${league.assists.find(x => x[2] === Math.max(...league.assists.map(y => y[2])))[0]}</small></div>`;

  const sections = {
    classement: {
      title: "Classement",
      desc: "Statistiques du championnat.",
      content: standingsHTML(league.teams, pageKey)
    },
    matchs: {
      title: "Matchs et résultats",
      desc: "Résultats et dates des matchs.",
      content: matchesHTML(league.matches)
    },
    buteurs: {
      title: "Meilleurs buteurs",
      desc: "Nombre de buts par joueur.",
      content: simpleTable(["Joueur", "Club", "Buts"], league.scorers.map(x => [x[0], x[1], `<strong>${x[2]}</strong>`]))
    },
    passeurs: {
      title: "Meilleurs passeurs",
      desc: "Nombre de passes décisives par joueur.",
      content: simpleTable(["Joueur", "Club", "Passes décisives"], league.assists.map(x => [x[0], x[1], `<strong>${x[2]}</strong>`]))
    },
    cartons: {
      title: "Discipline et cartons",
      desc: "Nombre de cartons indiqués dans tes données.",
      content: simpleTable(["Club", "Cartons jaunes", "Cartons rouges"], league.cards.map(x => [x[0], x[1], `<strong>${x[2]}</strong>`]))
    }
  };

  tabs.innerHTML = Object.entries(sections).map(([key, section], i) => `<button class="tab-button ${i === 0 ? "active" : ""}" data-tab="${key}">${section.title}</button>`).join("");

  function showSection(key) {
    const section = sections[key];
    if (!section) return;

    panel.innerHTML = `<h2>${section.title}</h2><p class="subheading">${section.desc}</p>${section.content}`;

    tabs.querySelectorAll("button").forEach(button => {
      button.classList.toggle("active", button.dataset.tab === key);
    });
  }

  tabs.onclick = event => {
    const button = event.target.closest("[data-tab]");
    if (button) showSection(button.dataset.tab);
  };

  showSection("classement");
}




const articles = {
  1: {
    category: "LIGUE DES CHAMPIONS",
    title: "PSG-Barça : Paris remporte un choc spectaculaire sur le score de 4-2",
    date: "20 octobre 2026",
    image: "https://assets-fr.imgfoot.com/media/cache/642x382/psg-fcb-6ad728d8e370c.jpg",
    intro: "Le Paris Saint-Germain a remporté une grande victoire face au FC Barcelone au Parc des Princes. Dans un match intense, les Parisiens ont inscrit quatre buts et fait la différence en fin de rencontre.",
    paragraphs: [
      "Le PSG et le FC Barcelone se retrouvaient le 20 octobre 2026 pour une affiche très attendue de la Ligue des champions. Les deux équipes voulaient poursuivre leur bon début de compétition et prendre un avantage important dans la phase de ligue.",
      "Désiré Doué a ouvert le score à la 38e minute pour les Parisiens. Mais le Barça n'a pas tardé à réagir après la pause : Xavi Espart a égalisé à la 55e minute. Le match était alors totalement relancé.",
      "Lucas Hernández a ensuite redonné l'avantage au PSG à la 72e minute. Sept minutes plus tard, Lamine Yamal a répondu en égalisant pour Barcelone. À 2-2, tout restait possible et la fin de rencontre s'annonçait particulièrement tendue.",
      "Paris a finalement accéléré dans les dernières minutes. Vitinha a inscrit le troisième but à la 81e minute, avant que Fabián Ruiz ne marque à la 86e minute sur une action initiée par Achraf Hakimi.",
      "Le score final est de 4-2 pour le PSG. Désiré Doué a été désigné homme du match. Cette victoire permet aux Parisiens de conserver leur dynamique positive dans la compétition européenne.",
      "Ce résultat montre l'importance de l'efficacité dans les grands rendez-vous. Malgré deux égalisations du Barça, Paris a su trouver les solutions pour reprendre l'avantage. Les supporters parisiens peuvent retenir la réaction collective de leur équipe dans les dernières minutes.",
      "Pour Barcelone, cette défaite rappelle qu'il faut rester concentré jusqu'au coup de sifflet final. Le club catalan a montré de belles choses offensivement, mais il n'a pas réussi à contenir les dernières offensives parisiennes."
    ]
  },

  2: {
    category: "POLÉMIQUE",
    title: "Mbappé et la Chine : pourquoi une plaisanterie sur un dictateur provoque une polémique",
    date: "27 octobre 2026",
    image: "https://tourisme-chine.com/wp-content/uploads/2026/10/6404.png",
    intro: "Kylian Mbappé se retrouve au centre d'une polémique après la diffusion d'une vidéo dans laquelle il évoque un mème le comparant à un dirigeant chinois. La séquence a entraîné des réactions et des conséquences pour certains de ses partenariats commerciaux.",
    paragraphs: [
      "Kylian Mbappé est habitué à attirer l'attention pour ses performances sur le terrain. Mais, fin octobre 2026, l'actualité autour de l'attaquant du Real Madrid concerne une controverse liée à une vidéo tournée plusieurs mois auparavant.",
      "Dans cette séquence, le joueur est interrogé sur des images humoristiques qui circulent sur Internet et le représentent sous les traits d'un dictateur. Il réagit sur le ton de la plaisanterie en évoquant notamment une parodie le comparant à un dirigeant chinois. La vidéo a ensuite été remise en circulation sur les réseaux sociaux.",
      "Les réactions ont été particulièrement fortes en Chine, où les références à Mao Zedong, fondateur de la République populaire de Chine, sont un sujet très sensible. Des internautes ont critiqué les propos attribués au joueur et l'affaire a rapidement pris une dimension internationale.",
      "Plusieurs partenaires commerciaux chinois ont annoncé la fin de leurs collaborations avec Mbappé. Cette décision montre que les déclarations publiques des sportifs peuvent avoir des conséquences qui dépassent largement le monde du football.",
      "Le contexte est important : la séquence avait été tournée avant que la polémique ne devienne aussi importante. Sa rediffusion a provoqué une nouvelle vague de réactions et relancé le débat sur les limites de l'humour lorsqu'il touche à l'histoire et aux symboles politiques d'un pays.",
      "Cette affaire soulève une question plus large : les sportifs doivent-ils faire particulièrement attention à leurs déclarations publiques ? Les joueurs sont suivis par des millions de personnes et leurs paroles peuvent être interprétées différemment selon les cultures.",
      "Pour Mbappé, l'enjeu sera désormais de gérer les conséquences médiatiques et commerciales de cette controverse. Cet épisode rappelle qu'à l'ère des réseaux sociaux, une courte séquence peut rapidement devenir un sujet d'actualité mondial."
    ]
  },

  3: {
    category: "BALLON D'OR",
    title: "Harry Kane remporte le Ballon d'Or 2026 devant Mbappé et Yamal",
    date: "26 octobre 2026",
    image: "https://ichef.bbci.co.uk/ace/standard/948/cpsprodpb/4b57/live/ae4df5d0-d1fa-11f1-8c9f-8d21fef6ffad.jpg",
    intro: "Harry Kane a remporté le Ballon d'Or masculin 2026. L'attaquant anglais du Bayern Munich est récompensé après une saison exceptionnelle marquée par de nombreux buts et des trophées collectifs.",
    paragraphs: [
      "La cérémonie du Ballon d'Or 2026 a consacré Harry Kane. L'attaquant du Bayern Munich a été récompensé le 26 octobre à Londres, terminant devant Kylian Mbappé et Lamine Yamal dans le classement masculin.",
      "Cette récompense représente un moment important dans la carrière de Kane. Longtemps reconnu pour son efficacité devant le but, l'international anglais ajoute enfin le plus prestigieux trophée individuel du football à son palmarès.",
      "Sa saison 2025-2026 a été particulièrement productive. Selon l'UEFA, il a inscrit 73 buts toutes compétitions confondues avec son club et sa sélection. Il a également contribué aux succès du Bayern Munich, qui a conservé son titre de champion d'Allemagne.",
      "Kane a aussi brillé en Ligue des champions, où il a marqué 14 buts au cours de la campagne européenne du Bayern. Ses performances régulières ont pesé dans le choix des votants, qui prennent en compte les statistiques individuelles et les résultats collectifs.",
      "Kylian Mbappé et Lamine Yamal figuraient parmi les principaux concurrents pour cette récompense. Le Français a continué à impressionner par son nombre de buts, tandis que le jeune Barcelonais a confirmé son importance dans le jeu de son équipe.",
      "Le résultat relance le débat sur les critères du Ballon d'Or. Certains observateurs accordent une grande importance aux statistiques personnelles, tandis que d'autres privilégient les titres remportés et l'influence du joueur dans les grands matchs.",
      "Avec ce trophée, Harry Kane rejoint une liste prestigieuse de joueurs récompensés pour leur saison. Cette victoire est également historique pour l'Angleterre : il devient le premier Anglais à remporter le Ballon d'Or masculin depuis 2001."
    ]
  },

  4: {
    category: "COUPE DE FRANCE",
    title: "Coupe de France : les tirages au sort lancent une nouvelle étape de la compétition",
    date: "20 octobre 2026",
    image: "https://lfpl.fff.fr/wp-content/uploads/sites/20/2026/10/CDF-7E-TOUR-UNE-611.jpg",
    intro: "La Coupe de France 2026-2027 poursuit son parcours avec les derniers tours régionaux. Les tirages au sort permettent aux clubs amateurs de connaître leurs adversaires et de continuer à rêver d'une aventure nationale.",
    paragraphs: [
      "La Coupe de France reste l'une des compétitions les plus particulières du football français. Chaque saison, des centaines de clubs, des équipes amateurs aux formations professionnelles, participent à un parcours où chaque rencontre peut réserver une surprise.",
      "En octobre 2026, la compétition approche du terme de ses tours régionaux. Le sixième tour constitue une étape importante pour les équipes encore en lice, qui espèrent se qualifier pour la suite de l'aventure.",
      "Les tirages au sort sont des moments très attendus par les clubs. Ils permettent aux joueurs, aux entraîneurs et aux supporters de connaître le prochain adversaire et de préparer un match qui peut devenir l'un des plus importants de leur saison.",
      "L'un des grands intérêts de la Coupe de France est la possibilité de voir des équipes de niveaux différents se rencontrer. Pour un club amateur, recevoir une formation plus connue peut représenter une occasion exceptionnelle de faire parler de lui.",
      "Mais la compétition ne se résume pas aux grandes affiches. Les déplacements, les terrains parfois difficiles et la pression d'un match à élimination directe peuvent compliquer la tâche des favoris. Une équipe qui reste solidaire et efficace peut créer la surprise.",
      "La route est encore longue avant les tours nationaux et les grandes affiches avec les clubs professionnels. Les équipes doivent d'abord franchir les étapes successives pour espérer rejoindre les formations de Ligue 1.",
      "Les prochains tirages seront donc déterminants pour la suite de cette édition. Pour les petits clubs, l'objectif est simple : continuer à gagner et prolonger le rêve d'une qualification historique."
    ]
  },

  5: {
    category: "LIGUE DES CHAMPIONS",
    title: "Ligue des champions : les prochaines rencontres qui peuvent bouleverser le classement",
    date: "28 octobre 2026",
    image: "https://thumb.canalplus.pro/http/unsafe/752x0/smart/creativemedia-image.canalplus.pro/content/0001/67/23dde299c3b0bead54e9a19c540be9b91734c9b3.jpeg",
    intro: "La phase de ligue de la Ligue des champions continue en novembre avec plusieurs affiches importantes. Le PSG, Barcelone, Liverpool, le Real Madrid et les autres grands clubs européens vont tenter de se rapprocher de la qualification.",
    paragraphs: [
      "Après trois journées, la course à la qualification est déjà lancée en Ligue des champions. Certaines équipes ont pris un excellent départ, tandis que d'autres doivent rapidement gagner des points pour ne pas se retrouver en difficulté.",
      "La quatrième journée est prévue les 3 et 4 novembre 2026. Le Paris Saint-Germain doit notamment se déplacer à Villarreal le 3 novembre. Ce déplacement représentera un nouveau test pour les Parisiens après leur victoire face au FC Barcelone.",
      "Le même soir, Barcelone recevra Aston Villa. Les Catalans voudront réagir après leur défaite à Paris et retrouver de la confiance devant leurs supporters. Cette rencontre pourrait compter dans la lutte pour une place parmi les équipes qualifiées.",
      "Le Real Madrid se déplacera sur la pelouse de l'AEK Athènes le 4 novembre, tandis que Liverpool jouera contre Fenerbahçe. Manchester City affrontera Leipzig et Arsenal se déplacera à Slavia Prague. Ces matchs pourraient modifier la hiérarchie de la phase de ligue.",
      "La cinquième journée aura lieu les 24 et 25 novembre. Parmi les rencontres prévues, le PSG recevra la Roma le 25 novembre, alors que le Real Madrid accueillera le PSV Eindhoven la veille. Barcelone se déplacera de son côté à Sabah.",
      "Le nouveau format de la compétition rend chaque point important. Les équipes doivent terminer suffisamment haut dans le classement pour obtenir une qualification directe ou poursuivre leur parcours par les barrages. Une série de bons résultats peut donc changer rapidement la situation.",
      "Les supporters peuvent s'attendre à plusieurs semaines décisives. Entre les déplacements difficiles, les blessures et la gestion de l'effectif, les entraîneurs devront trouver le bon équilibre pour rester compétitifs en championnat et en Europe."
    ]
  },

  6: {
    category: "DÉBAT",
    title: "Lamine Yamal contre Mbappé : qui domine vraiment le football aujourd'hui ?",
    date: "27 octobre 2026",
    image: "https://s.yimg.com/lo/mysterio/api/035f0858bbfec0281cb0ef2c1a083fb15701c3c5c257769aec16b25ad25a3a2c/lightyear_networkapi/resizefill_w976%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Ffr%2Fgoal_fr_797%2F3116c4fd003f7505d0866e0a3a7c4ceb.jpg",
    intro: "Lamine Yamal et Kylian Mbappé sont au centre des discussions entre supporters. L'un impressionne par sa créativité et sa capacité à éliminer ses adversaires, tandis que l'autre est connu pour sa vitesse et son efficacité devant le but.",
    paragraphs: [
      "Le débat entre Lamine Yamal et Kylian Mbappé anime les discussions des amateurs de football. Les deux joueurs possèdent des qualités différentes et occupent une place importante dans leurs équipes respectives, Barcelone pour Yamal et le Real Madrid pour Mbappé.",
      "Lamine Yamal s'est fait remarquer par sa technique, sa vision du jeu et sa capacité à créer des occasions. Malgré son jeune âge, il prend souvent des responsabilités dans les moments importants. Il peut éliminer un défenseur, créer un décalage ou offrir une passe décisive.",
      "Kylian Mbappé possède un profil différent. Sa vitesse, ses appels en profondeur et son efficacité dans la surface font de lui une menace constante pour les défenses adverses. Il est également capable de faire la différence dans les grands rendez-vous grâce à son expérience au plus haut niveau.",
      "Les statistiques sont un élément utile pour comparer les deux joueurs, mais elles ne racontent pas toute l'histoire. Le nombre de buts et de passes décisives doit être mis en relation avec le temps de jeu, le poste occupé, les adversaires affrontés et le rôle de chacun dans son équipe.",
      "Le Ballon d'Or 2026 a également alimenté les discussions. Harry Kane a remporté le trophée devant Mbappé et Yamal. Ce résultat rappelle qu'une saison se juge sur plusieurs critères et que le talent individuel ne garantit pas automatiquement une récompense.",
      "La comparaison dépend aussi de ce que l'on attend d'un joueur. Un supporter qui privilégie les dribbles et la créativité pourra préférer le style de Yamal. Un autre qui valorise la vitesse, les appels et la finition pourra mettre en avant Mbappé.",
      "Il n'existe donc pas une seule réponse définitive à ce débat. Les deux joueurs ont encore de nombreuses saisons devant eux pour progresser et construire leur palmarès. Le plus intéressant sera de voir comment leurs performances évoluent et comment ils se répondent lors de leurs prochaines confrontations."
    ]
  }
};



function renderArticle() {
  const zoneArticle = document.getElementById("article-content");
  if (!zoneArticle) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const article = articles[id];

  if (!article) {
    zoneArticle.innerHTML = `<h1>Article introuvable</h1><p>Choisis un article depuis la page d'actualités.</p><a href="1.html" class="back-button">Retour aux actualités</a>`;
    return;
  }

  document.title = `${article.title} - FootZone`;

  zoneArticle.innerHTML = `
    <span class="article-category">${article.category}</span>
    <h1>${article.title}</h1>
    <p class="article-date">${article.date}</p>
    <img class="article-cover" src="${article.image}" alt="${article.title}">
    <p class="article-intro">${article.intro}</p>
    ${article.paragraphs.map(paragraphe => `<p class="article-paragraph">${paragraphe}</p>`).join("")}
    <a href="index.html" class="back-button">← Retour aux actualités</a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            const ouvert = nav.classList.toggle("active");
            menuButton.textContent = ouvert ? "✕" : "☰";
        });
    }

    renderLeague();
    renderArticle();
});
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
