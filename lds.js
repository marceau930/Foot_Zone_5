const equipes = [
  ["Paris-SG","PSG",3,3,0,0,14,5,9,9],
  ["Aston Villa","AVL",3,3,0,0,12,3,9,9],
  ["Liverpool","LIV",3,3,0,0,12,7,5,9],
  ["Real Madrid","RMA",3,3,0,0,10,5,5,9],
  ["Betis","BET",3,3,0,0,7,4,3,9],
  ["Stuttgart","VFB",3,2,1,0,7,2,5,7],
  ["Arsenal","ARS",3,2,1,0,6,2,4,7],
  ["Barcelone","BAR",3,2,0,1,11,6,5,6],
  ["Côme","COM",3,2,0,1,10,5,5,6],
  ["Manchester City","MCI",3,2,0,1,9,5,4,6],
  ["Club Brugge","BRU",3,2,0,1,9,6,3,6],
  ["Sporting","SCP",3,2,0,1,7,4,3,6],
  ["Dortmund","BVB",3,2,0,1,5,4,1,6],
  ["Bayern","BAY",3,1,2,0,10,5,5,5],
  ["Roma","ROM",3,1,1,1,8,5,3,4],
  ["Atlético Madrid","ATM",3,1,1,1,4,3,1,4],
  ["Chakhtior Donetsk","SHK",3,1,1,1,4,3,1,4],
  ["PSV Eindhoven","PSV",3,1,1,1,2,2,0,4],
  ["Villarreal","VIL",3,1,0,2,8,8,0,3],
  ["Inter","INT",3,1,0,2,5,6,-1,3],
  ["Man Utd","MUN",3,1,0,2,5,6,-1,3],
  ["Naples","NAP",3,1,0,2,5,7,-2,3],
  ["Galatasaray","GAL",3,1,0,2,6,9,-3,3],
  ["LASK","ASK",3,1,0,2,6,9,-3,3],
  ["Sabah Football Club","SAB",3,1,0,2,3,6,-3,3],
  ["Feyenoord","FEY",3,1,0,2,4,8,-4,3],
  ["Lens","LEN",3,1,0,2,3,7,-4,3],
  ["Bodø/Glimt","BOD",3,1,0,2,4,9,-5,3],
  ["RB Leipzig","RBL",3,1,0,2,3,8,-5,3],
  ["AEK Athènes","AEK",3,1,0,2,3,8,-5,3],
  ["Fenerbahçe","FEN",3,0,2,1,3,9,-6,2],
  ["Slavia Prague","SLA",3,0,1,2,4,7,-3,1],
  ["Viking","VIK",3,0,1,2,5,9,-4,1],
  ["Porto","FCP",3,0,0,3,2,6,-4,0],
  ["Lille","LIL",3,0,0,3,4,10,-6,0],
  ["Slovan Bratislava","SLO",3,0,0,3,1,13,-12,0]
];

const journees = {
  1: [
    ["AEK Athènes","LASK","1 – 0","Terminé · 8 septembre 2026 · AEK Arena"],
    ["Club Bruges","Aston Villa","2 – 3","Terminé · 8 septembre 2026 · Jan Breydel Stadium"],
    ["Borussia Dortmund","Villarreal","3 – 2","Terminé · 8 septembre 2026 · Signal Iduna Park"],
    ["FC Porto","Manchester City","0 – 2","Terminé · 8 septembre 2026 · Estádio do Dragão"],
    ["Lille","Betis Séville","2 – 3","Terminé · 8 septembre 2026 · Stade Pierre-Mauroy"],
    ["Real Madrid","Inter Milan","2 – 1","Terminé · 8 septembre 2026 · Santiago Bernabéu"],
    ["FC Barcelone","Feyenoord","5 – 1","Terminé · 9 septembre 2026 · Spotify Camp Nou"],
    ["VfB Stuttgart","Viking Stavanger","3 – 1","Terminé · 9 septembre 2026 · MHPArena"],
    ["Liverpool","Atlético de Madrid","2 – 1","Terminé · 9 septembre 2026 · Anfield"],
    ["Paris-SG","Slovan Bratislava","6 – 1","Terminé · 9 septembre 2026 · Parc des Princes"],
    ["Sporting Portugal","Galatasaray","3 – 1","Terminé · 9 septembre 2026 · Estádio José Alvalade"],
    ["Naples","Arsenal","0 – 1","Terminé · 9 septembre 2026 · Stadio Diego Armando Maradona"],
    ["Fenerbahçe","AS Rome","1 – 1","Terminé · 10 septembre 2026 · Şükrü Saracoğlu"],
    ["PSV Eindhoven","Chakhtar Donetsk","1 – 1","Terminé · 10 septembre 2026 · Philips Stadion"],
    ["Côme","RB Leipzig","4 – 1","Terminé · 10 septembre 2026 · Stadio Giuseppe Sinigaglia"],
    ["Bayern Munich","Bodø/Glimt","5 – 0","Terminé · 10 septembre 2026 · Allianz Arena"],
    ["Manchester United","Sabah FC","4 – 0","Terminé · 10 septembre 2026 · Old Trafford"],
    ["Slavia Prague","Lens","2 – 3","Terminé · 10 septembre 2026 · Fortuna Arena"]
  ],

  2: [
    ["Lens","Sporting Portugal","0 – 2","Terminé · 13 octobre 2026 · Stade Bollaert-Delelis"],
    ["Sabah FC","Slavia Prague","2 – 0","Terminé · 13 octobre 2026 · Baku Olympic Stadium"],
    ["Arsenal","Lille","3 – 0","Terminé · 13 octobre 2026 · Emirates Stadium"],
    ["Atlético de Madrid","Manchester United","2 – 0","Terminé · 13 octobre 2026 · Riyadh Air Metropolitano"],
    ["Inter Milan","Club Bruges","3 – 4","Terminé · 13 octobre 2026 · San Siro"],
    ["Galatasaray","FC Barcelone","1 – 4","Terminé · 13 octobre 2026 · RAMS Park"],
    ["RB Leipzig","PSV Eindhoven","1 – 0","Terminé · 13 octobre 2026 · Red Bull Arena"],
    ["Viking Stavanger","Bayern Munich","3 – 3","Terminé · 13 octobre 2026 · Lyse Arena"],
    ["Villarreal","Naples","3 – 1","Terminé · 13 octobre 2026 · Estadio de la Cerámica"],
    ["Feyenoord Rotterdam","Côme","3 – 2","Terminé · 14 octobre 2026 · De Kuip"],
    ["LASK","Liverpool","3 – 6","Terminé · 14 octobre 2026 · Raiffeisen Arena"],
    ["AS Rome","Real Madrid","3 – 4","Terminé · 14 octobre 2026 · Stadio Olimpico"],
    ["Aston Villa","Fenerbahçe","6 – 0","Terminé · 14 octobre 2026 · Villa Park"],
    ["Chakhtar Donetsk","AEK Athènes","3 – 1","Terminé · 14 octobre 2026 · Stamford Bridge"],
    ["Bodø/Glimt","Borussia Dortmund","1 – 0","Terminé · 14 octobre 2026 · Aspmyra Stadion"],
    ["Manchester City","Paris-SG","2 – 4","Terminé · 14 octobre 2026 · Etihad Stadium"],
    ["Betis Séville","FC Porto","3 – 2","Terminé · 14 octobre 2026 · Estadio La Cartuja"],
    ["Slovan Bratislava","VfB Stuttgart","0 – 3","Terminé · 14 octobre 2026 · Tehelné pole"]
  ],

  3: [
    ["Fenerbahçe","Slavia Prague","2 – 2","Terminé · 20 octobre 2026 · Şükrü Saracoğlu Stadium"],
    ["Sabah FC","Borussia Dortmund","1 – 2","Terminé · 20 octobre 2026 · Baku Olympic Stadium"],
    ["AS Rome","Slovan Bratislava","4 – 0","Terminé · 20 octobre 2026 · Stadio Olimpico"],
    ["FC Porto","PSV Eindhoven","0 – 1","Terminé · 20 octobre 2026 · Estádio do Dragão"],
    ["Liverpool","Villarreal","4 – 3","Terminé · 20 octobre 2026 · Anfield"],
    ["Manchester City","AEK Athènes","5 – 1","Terminé · 20 octobre 2026 · Etihad Stadium"],
    ["Paris-SG","FC Barcelone","4 – 2","Terminé · 20 octobre 2026 · Parc des Princes"],
    ["Naples","Bodø/Glimt","4 – 3","Terminé · 20 octobre 2026 · Stadio Diego Armando Maradona"],
    ["VfB Stuttgart","Atlético de Madrid","1 – 1","Terminé · 20 octobre 2026 · MHPArena"],
    ["Côme","Manchester United","4 – 1","Terminé · 21 octobre 2026 · Stadio Giuseppe Sinigaglia"],
    ["Lille","Galatasaray","2 – 4","Terminé · 21 octobre 2026 · Decathlon Arena – Stade Pierre-Mauroy"],
    ["Aston Villa","Viking Stavanger","3 – 1","Terminé · 21 octobre 2026 · Villa Park"],
    ["Club Bruges","Lens","3 – 0","Terminé · 21 octobre 2026 · Jan Breydelstadion"],
    ["Bayern Munich","Arsenal","2 – 2","Terminé · 21 octobre 2026 · Allianz Arena"],
    ["Inter Milan","Chakhtar Donetsk","1 – 0","Terminé · 21 octobre 2026 · Stadio Giuseppe Meazza (San Siro)"],
    ["Real Madrid","RB Leipzig","4 – 1","Terminé · 21 octobre 2026 · Santiago Bernabéu"],
    ["Betis Séville","Feyenoord Rotterdam","1 – 0","Terminé · 21 octobre 2026 · Estadio La Cartuja"],
    ["Sporting Portugal","LASK","2 – 3","Terminé · 21 octobre 2026 · Estádio José Alvalade"]
  ],
  4: [
    ["Shakhtar Donetsk","Sporting Portugal","","À venir · 3 novembre 2026 · 18h45 · Stamford Bridge"],
    ["Galatasaray","VfB Stuttgart","","À venir · 3 novembre 2026 · 18h45 · Rams Park"],
    ["Atlético de Madrid","Bayern Munich","","À venir · 3 novembre 2026 · 21h00 · Metropolitano"],
    ["FC Barcelone","Aston Villa","","À venir · 3 novembre 2026 · 21h00 · Spotify Camp Nou"],
    ["Feyenoord Rotterdam","Inter Milan","","À venir · 3 novembre 2026 · 21h00 · De Kuip"],
    ["Bodø/Glimt","Lille","","À venir · 3 novembre 2026 · 21h00 · Aspmyra Stadion"],
    ["LASK","Slovan Bratislava","","À venir · 3 novembre 2026 · 21h00 · Raiffeisen Arena"],
    ["Manchester United","AS Rome","","À venir · 3 novembre 2026 · 21h00 · Old Trafford"],
    ["Villarreal","Paris-SG","","À venir · 3 novembre 2026 · 21h00 · Estadio de la Cerámica"],
    ["AEK Athènes","Real Madrid","","À venir · 4 novembre 2026 · 18h45 · OPAP Arena"],
    ["Fenerbahçe","Liverpool","","À venir · 4 novembre 2026 · 18h45 · Şükrü Saracoğlu"],
    ["Borussia Dortmund","Betis Séville","","À venir · 4 novembre 2026 · 21h00 · Signal Iduna Park"],
    ["FC Porto","Naples","","À venir · 4 novembre 2026 · 21h00 · Estádio do Dragão"],
    ["PSV Eindhoven","Club Bruges","","À venir · 4 novembre 2026 · 21h00 · Philips Stadion"],
    ["RB Leipzig","Manchester City","","À venir · 4 novembre 2026 · 21h00 · Red Bull Arena"],
    ["Lens","Côme","","À venir · 4 novembre 2026 · 21h00 · Stade Bollaert-Delelis"],
    ["Slavia Prague","Arsenal","","À venir · 4 novembre 2026 · 21h00 · Fortuna Arena"],
    ["Viking Stavanger","Sabah FC","","À venir · 4 novembre 2026 · 21h00 · Lyse Arena"]
  ],
  5: [
    ["Bodø/Glimt","LASK","","À venir · 24 novembre 2026 · 18h45 · Aspmyra Stadion"],
    ["Galatasaray","Aston Villa","","À venir · 24 novembre 2026 · 18h45 · Rams Park"],
    ["Arsenal","Borussia Dortmund","","À venir · 24 novembre 2026 · 21h00 · Emirates Stadium"],
    ["Côme","AEK Athènes","","À venir · 24 novembre 2026 · 21h00 · Stadio Giuseppe Sinigaglia"],
    ["Feyenoord Rotterdam","FC Porto","","À venir · 24 novembre 2026 · 21h00 · De Kuip"],
    ["Manchester City","Naples","","À venir · 24 novembre 2026 · 21h00 · Etihad Stadium"],
    ["RB Leipzig","Lens","","À venir · 24 novembre 2026 · 21h00 · Red Bull Arena"],
    ["Real Madrid","PSV Eindhoven","","À venir · 24 novembre 2026 · 21h00 · Santiago Bernabéu"],
    ["Slovan Bratislava","Betis Séville","","À venir · 24 novembre 2026 · 21h00 · Tehelné pole"],
    ["Sabah FC","FC Barcelone","","À venir · 25 novembre 2026 · 18h45 · Bank Respublika Arena"],
    ["Slavia Prague","Villarreal","","À venir · 25 novembre 2026 · 18h45 · Fortuna Arena"],
    ["Atlético de Madrid","Viking Stavanger","","À venir · 25 novembre 2026 · 21h00 · Metropolitano"],
    ["Club Bruges","Liverpool","","À venir · 25 novembre 2026 · 21h00 · Jan Breydel Stadium"],
    ["Inter Milan","VfB Stuttgart","","À venir · 25 novembre 2026 · 21h00 · San Siro"],
    ["Shakhtar Donetsk","Fenerbahçe","","À venir · 25 novembre 2026 · 21h00 · Stamford Bridge"],
    ["Lille","Bayern Munich","","À venir · 25 novembre 2026 · 21h00 · Decathlon Arena"],
    ["Paris-SG","AS Rome","","À venir · 25 novembre 2026 · 21h00 · Parc des Princes"],
    ["Sporting Portugal","Manchester United","","À venir · 25 novembre 2026 · 21h00 · Estádio José Alvalade"]
],
  6: [
    ["Viking Stavanger","Feyenoord Rotterdam","","À venir · 8 décembre 2026 · 18h45 · Lyse Arena"],
    ["Villarreal","Sabah FC","","À venir · 8 décembre 2026 · 18h45 · Estadio de la Cerámica"],
    ["AEK Athènes","Galatasaray","","À venir · 8 décembre 2026 · 21h00 · OPAP Arena"],
    ["AS Rome","Sporting Portugal","","À venir · 8 décembre 2026 · 21h00 · Stadio Olimpico"],
    ["Aston Villa","Paris-SG","","À venir · 8 décembre 2026 · 21h00 · Villa Park"],
    ["FC Barcelone","Manchester City","","À venir · 8 décembre 2026 · 21h00 · Spotify Camp Nou"],
    ["Bayern Munich","Slavia Prague","","À venir · 8 décembre 2026 · 21h00 · Allianz Arena"],
    ["Manchester United","RB Leipzig","","À venir · 8 décembre 2026 · 21h00 · Old Trafford"],
    ["Naples","Club Bruges","","À venir · 8 décembre 2026 · 21h00 · Stadio Diego Armando Maradona"],
    ["Betis Séville","Côme","","À venir · 9 décembre 2026 · 18h45 · Estadio La Cartuja"],
    ["Slovan Bratislava","Shakhtar Donetsk","","À venir · 9 décembre 2026 · 18h45 · Tehelné pole"],
    ["Arsenal","Real Madrid","","À venir · 9 décembre 2026 · 21h00 · Emirates Stadium"],
    ["Borussia Dortmund","Inter Milan","","À venir · 9 décembre 2026 · 21h00 · Signal Iduna Park"],
    ["LASK","Fenerbahçe","","À venir · 9 décembre 2026 · 21h00 · Raiffeisen Arena"],
    ["Liverpool","FC Porto","","À venir · 9 décembre 2026 · 21h00 · Anfield"],
    ["Lens","Bodø/Glimt","","À venir · 9 décembre 2026 · 21h00 · Stade Bollaert-Delelis"],
    ["PSV Eindhoven","Atlético de Madrid","","À venir · 9 décembre 2026 · 21h00 · Philips Stadion"],
    ["VfB Stuttgart","Lille","","À venir · 9 décembre 2026 · 21h00 · MHPArena"]
],
  7: [
    ["Bodø/Glimt","Atlético de Madrid","","À venir · 19 janvier 2027 · 18h45 · Aspmyra Stadion"],
    ["Galatasaray","Feyenoord Rotterdam","","À venir · 19 janvier 2027 · 18h45 · Rams Park"],
    ["AEK Athènes","AS Rome","","À venir · 19 janvier 2027 · 21h00 · OPAP Arena"],
    ["Aston Villa","Borussia Dortmund","","À venir · 19 janvier 2027 · 21h00 · Villa Park"],
    ["Inter Milan","Liverpool","","À venir · 19 janvier 2027 · 21h00 · San Siro"],
    ["FC Porto","Slavia Prague","","À venir · 19 janvier 2027 · 21h00 · Estádio do Dragão"],
    ["Lille","Slovan Bratislava","","À venir · 19 janvier 2027 · 21h00 · Decathlon Arena"],
    ["Real Madrid","LASK","","À venir · 19 janvier 2027 · 21h00 · Santiago Bernabéu"],
    ["VfB Stuttgart","Club Bruges","","À venir · 19 janvier 2027 · 21h00 · MHPArena"],
    ["Fenerbahçe","Villarreal","","À venir · 20 janvier 2027 · 18h45 · Şükrü Saracoğlu"],
    ["Sabah FC","Naples","","À venir · 20 janvier 2027 · 18h45 · Bank Respublika Arena"],
    ["Côme","Paris-SG","","À venir · 20 janvier 2027 · 21h00 · Stadio Giuseppe Sinigaglia"],
    ["Manchester United","Bayern Munich","","À venir · 20 janvier 2027 · 21h00 · Old Trafford"],
    ["RB Leipzig","Shakhtar Donetsk","","À venir · 20 janvier 2027 · 21h00 · Red Bull Arena"],
    ["Lens","Manchester City","","À venir · 20 janvier 2027 · 21h00 · Stade Bollaert-Delelis"],
    ["Betis Séville","Arsenal","","À venir · 20 janvier 2027 · 21h00 · Estadio La Cartuja"],
    ["Sporting Portugal","FC Barcelone","","À venir · 20 janvier 2027 · 21h00 · Estádio José Alvalade"],
    ["Viking Stavanger","PSV Eindhoven","","À venir · 20 janvier 2027 · 21h00 · Lyse Arena"]
],
  8: [
    ["Arsenal","Sabah FC","","À venir · 27 janvier 2027 · 21h00 · Emirates Stadium"],
    ["AS Rome","Lille","","À venir · 27 janvier 2027 · 21h00 · Stadio Olimpico"],
    ["Atlético de Madrid","Fenerbahçe","","À venir · 27 janvier 2027 · 21h00 · Metropolitano"],
    ["Borussia Dortmund","AEK Athènes","","À venir · 27 janvier 2027 · 21h00 · Signal Iduna Park"],
    ["Club Bruges","Bodø/Glimt","","À venir · 27 janvier 2027 · 21h00 · Jan Breydel Stadium"],
    ["Bayern Munich","Betis Séville","","À venir · 27 janvier 2027 · 21h00 · Allianz Arena"],
    ["FC Barcelone","Côme","","À venir · 27 janvier 2027 · 21h00 · Spotify Camp Nou"],
    ["Shakhtar Donetsk","Real Madrid","","À venir · 27 janvier 2027 · 21h00 · Stamford Bridge"],
    ["Feyenoord Rotterdam","RB Leipzig","","À venir · 27 janvier 2027 · 21h00 · De Kuip"],
    ["LASK","FC Porto","","À venir · 27 janvier 2027 · 21h00 · Raiffeisen Arena"],
    ["Liverpool","Lens","","À venir · 27 janvier 2027 · 21h00 · Anfield"],
    ["Manchester City","Sporting Portugal","","À venir · 27 janvier 2027 · 21h00 · Etihad Stadium"],
    ["Paris-SG","Galatasaray","","À venir · 27 janvier 2027 · 21h00 · Parc des Princes"],
    ["PSV Eindhoven","VfB Stuttgart","","À venir · 27 janvier 2027 · 21h00 · Philips Stadion"],
    ["Slavia Prague","Aston Villa","","À venir · 27 janvier 2027 · 21h00 · Fortuna Arena"],
    ["Naples","Viking Stavanger","","À venir · 27 janvier 2027 · 21h00 · Stadio Diego Armando Maradona"],
    ["Villarreal","Manchester United","","À venir · 27 janvier 2027 · 21h00 · Estadio de la Cerámica"],
    ["Slovan Bratislava","Inter Milan","","À venir · 27 janvier 2027 · 21h00 · Tehelné pole"]
]
};

function calculerClassement() {
  return equipes.map(e => {
    const [nom, sigle, j, v, n, d, bp, bc, diff, pts] = e;

    return { nom, sigle, j, v, n, d, bp, bc, diff, pts };
  }).sort((a, b) =>
    b.pts - a.pts ||
    b.diff - a.diff ||
    b.bp - a.bp ||
    a.nom.localeCompare(b.nom)
  );
}

function afficherClassement() {
  const classement = calculerClassement();
  const tableau = document.getElementById("classement");

  if (!tableau) return;

  tableau.innerHTML = classement.map((e, i) => {
    const position = i + 1;
    const classe = position <= 8
      ? "direct"
      : position <= 24
        ? "barrage"
        : "elimine";

    return `
      <tr class="${classe}">
        <td class="position">${position}</td>
        <td class="club-cell">
          <span class="club-emoji">⚽</span>${e.nom}
        </td>
        <td>${e.j}</td>
        <td>${e.v}</td>
        <td>${e.n}</td>
        <td>${e.d}</td>
        <td>${e.bp}</td>
        <td>${e.bc}</td>
        <td>${e.diff > 0 ? "+" : ""}${e.diff}</td>
        <td class="points">${e.pts}</td>
        <td><div class="form">—</div></td>
      </tr>
    `;
  }).join("");
}

function afficherBoutons() {
  const conteneur = document.getElementById("boutonsJournees");
  if (!conteneur) return;

  conteneur.innerHTML = Object.keys(journees).map(j => `
    <button class="tab-button ${j === "1" ? "active" : ""}" data-journee="${j}">
      Journée ${j}
    </button>
  `).join("");

  conteneur.querySelectorAll("button").forEach(bouton => {
    bouton.addEventListener("click", () => {
      conteneur.querySelectorAll("button").forEach(b =>
        b.classList.remove("active")
      );

      bouton.classList.add("active");
      afficherMatchs(Number(bouton.dataset.journee));
    });
  });
}

function afficherMatchs(journee) {
  const conteneur = document.getElementById("matchs");
  const titre = document.getElementById("journeeActuelle");

  if (!conteneur) return;

  const matchs = journees[journee] || [];

  if (titre) titre.textContent = journee;


  conteneur.innerHTML = matchs.map(match => {
    const [domicile, exterieur, score, date, lieu] = match;

    return `
      <article class="fixture">
        <div class="fixture-top">
          <span>Ligue des champions</span>
          <span>Journée ${journee}</span>
        </div>

        <div class="fixture-teams">
          <span class="fixture-team">${domicile}</span>
          <strong class="fixture-score">${score || "VS"}</strong>
          <span class="fixture-team">${exterieur}</span>
        </div>

        <div class="fixture-status">${date || "À venir"}</div>
      </article>
    `;
  }).join("");
}

function afficherStatistiques() {
  const matchs = Object.values(journees).flat();

  const matchsTermines = matchs.filter(m =>
    typeof m[2] === "string" &&
    /^\d+\s*[–-]\s*\d+$/.test(m[2].trim())
  );

  const totalButs = matchsTermines.reduce((total, match) => {
    const scores = match[2].split(/[–-]/).map(n => Number(n.trim()));
    return total + scores[0] + scores[1];
  }, 0);

  const equipesElement = document.getElementById("totalEquipes");
  const matchsElement = document.getElementById("totalMatchs");
  const butsElement = document.getElementById("totalButs");

  if (equipesElement) equipesElement.textContent = equipes.length;
  if (matchsElement) matchsElement.textContent = matchsTermines.length;
  if (butsElement) butsElement.textContent = totalButs;
}

const menuToggle = document.getElementById("menuToggle");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.querySelector(".nav")?.classList.toggle("open");
  });
}

afficherClassement();
afficherBoutons();
afficherMatchs(1);
afficherStatistiques();

