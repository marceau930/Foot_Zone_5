const competitions = [
    {
        id: "ucl",
        name: "Ligue des champions",
        country: "Europe",
        icon: "⭐",
        category: "europe",
        scope: "Depuis 1955",
        source: "https://www.uefa.com/uefachampionsleague/history/rankings/",
        clubs: [
            {name:"Real Madrid",titles:15,crest:86,last:"2024",years:"1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024"},
            {name:"AC Milan",titles:7,crest:98,last:"2007",years:"1963, 1969, 1989, 1990, 1994, 2003, 2007"},
            {name:"Liverpool",titles:6,crest:64,last:"2019",years:"1977, 1978, 1981, 1984, 2005, 2019"},
        ]
    },
    {
        id: "premier",
        name: "Premier League",
        country: "Angleterre",
        icon: "🏴",
        category: "league",
        scope: "Depuis 1992",
        source: "https://www.premierleague.com/en/stats/records",
        clubs: [
            {name:"Manchester United",titles:13,crest:66,last:"2013"},
            {name:"Manchester City",titles:8,crest:65,last:"2024"},
            {name:"Chelsea",titles:5,crest:61,last:"2017"}
        ]
    },
    {
        id: "liga",
        name: "Liga",
        country: "Espagne",
        icon: "🇪🇸",
        category: "league",
        scope: "Depuis 1929",
        source: "https://www.laliga.com/",
        clubs: [
            {name:"Real Madrid",titles:36,crest:86,last:"2024"},
            {name:"FC Barcelone",titles:29,crest:81,last:"2025"},
            {name:"Atlético Madrid",titles:11,crest:78,last:"2021"}
        ]
    },
    {
        id: "ligue1",
        name: "Ligue 1",
        country: "France",
        icon: "🇫🇷",
        category: "league",
        scope: "Depuis 1932",
        source: "https://ligue1.com/",
        clubs: [
            {name:"Paris Saint-Germain",titles:13,crest:524,last:"2025"},
            {name:"AS Saint-Étienne",titles:10,crest:527,last:"1981"},
            {name:"Olympique de Marseille",titles:9,crest:516,last:"2010"}
        ]
    },
    {
        id: "bundesliga",
        name: "Bundesliga",
        country: "Allemagne",
        icon: "🇩🇪",
        category: "league",
        scope: "Depuis 1963",
        source: "https://www.bundesliga.com/",
        clubs: [
            {name:"Bayern Munich",titles:34,crest:5,last:"2025"},
            {name:"Borussia Dortmund",titles:5,crest:4,last:"2012"},
            {name:"Borussia Mönchengladbach",titles:5,last:"1977"}
        ]
    },
    {
        id: "seriea",
        name: "Serie A",
        country: "Italie",
        icon: "🇮🇹",
        category: "league",
        scope: "Championnat d'Italie",
        source: "https://www.legaseriea.it/",
        clubs: [
            {name:"Juventus",titles:36,crest:109,last:"2020"},
            {name:"Inter Milan",titles:20,crest:108,last:"2024"},
            {name:"AC Milan",titles:19,crest:98,last:"2022"}
        ]
    },
    {
        id: "facup",
        name: "FA Cup",
        country: "Angleterre",
        icon: "🏆",
        category: "cup",
        scope: "Coupe d'Angleterre",
        source: "https://www.thefa.com/competitions/thefacup",
        clubs: [
            {name:"Arsenal",titles:14,crest:57,last:"2020"},
            {name:"Manchester United",titles:13,crest:66,last:"2024"},
            {name:"Chelsea",titles:8,crest:61,last:"2018"},
        ]
    },
    {
        id: "coupeduroi",
        name: "Coupe du Roi",
        country: "Espagne",
        icon: "🇪🇸",
        category: "cup",
        scope: "Copa del Rey",
        source: "https://rfef.es/",
        clubs: [
            {name:"FC Barcelone",titles:32,crest:81,last:"2025"},
            {name:"Athletic Club",titles:24,crest:77,last:"2024"},
            {name:"Real Madrid",titles:20,crest:86,last:"2023"}
        ]
    },
    {
        id: "cdf",
        name: "Coupe de France",
        country: "France",
        icon: "🇫🇷",
        category: "cup",
        scope: "Coupe de France",
        source: "https://www.fff.fr/",
        clubs: [
            {name:"Paris Saint-Germain",titles:16,crest:524,last:"2025"},
            {name:"Olympique de Marseille",titles:10,crest:516,last:"1989"},
            {name:"AS Saint-Étienne",titles:6,crest:527,last:"1977"},
        ]
    },
    {
        id: "dfbpokal",
        name: "DFB-Pokal",
        country: "Allemagne",
        icon: "🇩🇪",
        category: "cup",
        scope: "Coupe d'Allemagne",
        source: "https://www.dfb.de/",
        clubs: [
            {name:"Bayern Munich",titles:20,crest:5,last:"2020"},
            {name:"Werder Brême",titles:6,last:"2009"},
            {name:"Borussia Dortmund",titles:5,crest:4,last:"2021"},
        ]
    },
    {
        id: "coppaitalia",
        name: "Coppa Italia",
        country: "Italie",
        icon: "🇮🇹",
        category: "cup",
        scope: "Coupe d'Italie",
        source: "https://www.legaseriea.it/",
        clubs: [
            {name:"Juventus",titles:15,crest:109,last:"2024"},
            {name:"AS Roma",titles:9,crest:100,last:"2008"},
            {name:"Inter Milan",titles:9,crest:108,last:"2023"}
        ]
    }
];

const grid = document.getElementById("competitionGrid");
const searchInput = document.getElementById("searchInput");
const count = document.getElementById("competitionCount");
const empty = document.getElementById("emptyState");
const modal = document.getElementById("detailDialog");
const modalContent = document.getElementById("modalContent");

let activeFilter = "all";

function getCrest(club) {
    if (club.crest) {
        return `https://crests.football-data.org/${club.crest}.png`;
    }
    return "";
}

function showCompetitions() {
    const search = searchInput.value.toLowerCase().trim();

    const filtered = competitions.filter(comp => {
        const filterOK =
            activeFilter === "all" ||
            comp.category === activeFilter;

        const text = (
            comp.name + " " +
            comp.country + " " +
            comp.clubs.map(c => c.name).join(" ")
        ).toLowerCase();

        return filterOK && text.includes(search);
    });

    grid.innerHTML = filtered.map(comp => {
        const clubs = comp.clubs.slice(0, 6);

        return `
            <article class="competition-card">

                <div class="card-header">
                    <div class="comp-icon">${comp.icon}</div>
                    <div>
                        <h3>${comp.name}</h3>
                        <p>${comp.country}</p>
                    </div>
                    <span class="category">${comp.category === "europe" ? "EUROPE" : comp.category === "league" ? "CHAMPIONNAT" : "COUPE"}</span>
                </div>

                <div class="podium">
                    ${clubs.map((club, index) => `
                        <div class="club ${index === 0 ? "first" : ""}">
                            <div class="medal">
                                ${index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏅"}
                            </div>

                            ${club.crest ? `
                                <img
                                    src="${getCrest(club)}"
                                    alt="Écusson ${club.name}"
                                    loading="lazy"
                                    onerror="this.style.display='none'"
                                >
                            ` : ""}

                            <div class="club-name">${club.name}</div>

                            <strong class="titles">${club.titles}</strong>
                            <span class="titles-label">TITRES</span>
                        </div>
                    `).join("")}
                </div>

                <div class="card-footer">
                    <span>${comp.scope}</span>
                    <button class="details-button" data-id="${comp.id}">
                        Détails ↗
                    </button>
                </div>

            </article>
        `;
    }).join("");

    count.textContent = `${filtered.length} compétition${filtered.length > 1 ? "s" : ""}`;
    empty.hidden = filtered.length > 0;
}
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const ouvert = navMenu.classList.toggle("active");
        menuToggle.textContent = ouvert ? "✕" : "☰";
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}
function showDetails(id) {
    const comp = competitions.find(c => c.id === id);
    if (!comp) return;

    modalContent.innerHTML = `
        <p class="eyebrow">${comp.country.toUpperCase()} · PALMARÈS</p>
        <h2>${comp.icon} ${comp.name}</h2>
        <p class="modal-subtitle">${comp.scope}</p>

        ${comp.clubs.map((club, index) => `
            <div class="detail-row">
                <span class="detail-rank">${index + 1}.</span>

                <div>
                    <div class="detail-name">${club.name}</div>
                    <span class="detail-years">
                        ${club.last ? "Dernier titre : " + club.last : ""}
                        ${club.years ? "<br>Années : " + club.years : ""}
                    </span>
                </div>

                <span class="detail-total">${club.titles}</span>
            </div>
        `).join("")}

        <a
            class="source-link"
            href="${comp.source}"
            target="_blank"
            rel="noopener noreferrer"
        >
            Consulter la source du palmarès ↗
        </a>
    `;

    modal.classList.add("show");
}

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter.active").classList.remove("active");
        button.classList.add("active");

        activeFilter = button.dataset.filter;
        showCompetitions();
    });
});

searchInput.addEventListener("input", showCompetitions);

grid.addEventListener("click", event => {
    const button = event.target.closest(".details-button");

    if (button) {
        showDetails(button.dataset.id);
    }
});

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

showCompetitions();
