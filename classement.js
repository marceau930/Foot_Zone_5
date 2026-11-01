const clubs = [
    {name:"Real Madrid",country:"Espagne",points:980,logo:"https://media.api-sports.io/football/teams/541.png"},
    {name:"Manchester City",country:"Angleterre",points:955,logo:"https://media.api-sports.io/football/teams/50.png"},
    {name:"Bayern Munich",country:"Allemagne",points:940,logo:"https://media.api-sports.io/football/teams/157.png"},
    {name:"FC Barcelone",country:"Espagne",points:925,logo:"https://media.api-sports.io/football/teams/529.png"},
    {name:"Liverpool",country:"Angleterre",points:910,logo:"https://media.api-sports.io/football/teams/40.png"},
    {name:"Arsenal",country:"Angleterre",points:895,logo:"https://media.api-sports.io/football/teams/42.png"},
    {name:"Paris Saint-Germain",country:"France",points:880,logo:"https://media.api-sports.io/football/teams/85.png"},
    {name:"Inter Milan",country:"Italie",points:865,logo:"https://media.api-sports.io/football/teams/505.png"},
    {name:"Atlético Madrid",country:"Espagne",points:850,logo:"https://media.api-sports.io/football/teams/530.png"},
    {name:"Borussia Dortmund",country:"Allemagne",points:835,logo:"https://media.api-sports.io/football/teams/165.png"},
    {name:"Chelsea",country:"Angleterre",points:820,logo:"https://media.api-sports.io/football/teams/49.png"},
    {name:"Juventus",country:"Italie",points:805,logo:"https://media.api-sports.io/football/teams/496.png"},
    {name:"AC Milan",country:"Italie",points:790,logo:"https://media.api-sports.io/football/teams/489.png"},
    {name:"Bayer Leverkusen",country:"Allemagne",points:775,logo:"https://media.api-sports.io/football/teams/168.png"},
    {name:"Tottenham",country:"Angleterre",points:760,logo:"https://media.api-sports.io/football/teams/47.png"},
    {name:"Napoli",country:"Italie",points:745,logo:"https://media.api-sports.io/football/teams/492.png"},
    {name:"Benfica",country:"Portugal",points:730,logo:"https://media.api-sports.io/football/teams/211.png"},
    {name:"Sporting CP",country:"Portugal",points:715,logo:"https://media.api-sports.io/football/teams/228.png"},
    {name:"Ajax",country:"Pays-Bas",points:700,logo:"https://media.api-sports.io/football/teams/194.png"},
    {name:"Porto",country:"Portugal",points:685,logo:"https://media.api-sports.io/football/teams/212.png"},
    {name:"Flamengo",country:"Brésil",points:670,logo:"https://media.api-sports.io/football/teams/127.png"},
    {name:"Palmeiras",country:"Brésil",points:655,logo:"https://media.api-sports.io/football/teams/121.png"},
    {name:"Al Hilal",country:"Arabie saoudite",points:640,logo:"https://media.api-sports.io/football/teams/2932.png"},
    {name:"Boca Juniors",country:"Argentine",points:625,logo:"https://media.api-sports.io/football/teams/451.png"},
    {name:"River Plate",country:"Argentine",points:610,logo:"https://media.api-sports.io/football/teams/435.png"},
    {name:"Celtic",country:"Écosse",points:595,logo:"https://media.api-sports.io/football/teams/247.png"},
    {name:"Feyenoord",country:"Pays-Bas",points:580,logo:"https://media.api-sports.io/football/teams/209.png"},
    {name:"RB Leipzig",country:"Allemagne",points:565,logo:"https://media.api-sports.io/football/teams/173.png"},
    {name:"Atalanta",country:"Italie",points:550,logo:"https://media.api-sports.io/football/teams/499.png"},
    {name:"AS Roma",country:"Italie",points:535,logo:"https://media.api-sports.io/football/teams/497.png"}
];

const podium = document.getElementById("podium");
const table = document.getElementById("rankingTable");
const searchInput = document.getElementById("searchClub");
const countryFilter = document.getElementById("countryFilter");
const sortFilter = document.getElementById("sortFilter");
const emptyMessage = document.getElementById("emptyMessage");
const clubCount = document.getElementById("clubCount");

clubs.sort((a,b) => b.points - a.points);

clubs.forEach((club,index) => {
    club.rank = index + 1;
});

function afficherPodium() {
    const top3 = [clubs[0],clubs[1],clubs[2]];

    podium.innerHTML = top3.map(club => `
        <div class="podium-card">
            <div class="podium-position">${club.rank === 1 ? "🥇 1er" : club.rank === 2 ? "🥈 2e" : "🥉 3e"}</div>
            <img src="${club.logo}" alt="" onerror="this.style.visibility='hidden'">
            <h3>${club.name}</h3>
            <p>${club.country}</p>
            <div class="podium-points">${club.points} pts</div>
        </div>
    `).join("");
}

function remplirPays() {
    const pays = [...new Set(clubs.map(club => club.country))].sort();

    pays.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

function afficherClassement() {
    const recherche = searchInput.value.toLowerCase();
    const pays = countryFilter.value;
    const tri = sortFilter.value;

    let resultat = clubs.filter(club => {
        return club.name.toLowerCase().includes(recherche) &&
        (pays === "all" || club.country === pays);
    });

    if (tri === "points") {
        resultat.sort((a,b) => b.points - a.points);
    } else {
        resultat.sort((a,b) => a.rank - b.rank);
    }

    table.innerHTML = resultat.map(club => `
        <tr>
            <td class="rank-number">#${club.rank}</td>
            <td>
                <div class="club-cell">
                    <img src="${club.logo}" alt="" onerror="this.style.visibility='hidden'">
                    ${club.name}
                </div>
            </td>
            <td class="country-cell">${club.country}</td>
            <td class="points-cell">${club.points} pts</td>
        </tr>
    `).join("");

    clubCount.textContent = `${resultat.length} clubs affichés sur ${clubs.length}`;

    emptyMessage.style.display = resultat.length ? "none" : "block";
}

searchInput.addEventListener("input", afficherClassement);
countryFilter.addEventListener("change", afficherClassement);
sortFilter.addEventListener("change", afficherClassement);

afficherPodium();
remplirPays();
afficherClassement();
