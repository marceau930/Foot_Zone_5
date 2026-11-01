const clubs = [
    { id: "aek", name: "AEK Athènes", short: "AEK", country: "Grèce", flag: "🇬🇷", league: "Super League grecque" },
    { id: "arsenal", name: "Arsenal", short: "ARS", country: "Angleterre", flag: "🏴", league: "Premier League" },
    { id: "roma", name: "AS Roma", short: "ROM", country: "Italie", flag: "🇮🇹", league: "Serie A" },
    { id: "aston-villa", name: "Aston Villa", short: "AVL", country: "Angleterre", flag: "🏴", league: "Premier League" },
    { id: "atletico", name: "Atlético de Madrid", short: "ATM", country: "Espagne", flag: "🇪🇸", league: "La Liga" },
    { id: "bayern", name: "Bayern Munich", short: "BAY", country: "Allemagne", flag: "🇩🇪", league: "Bundesliga" },
    { id: "bodo", name: "Bodø/Glimt", short: "BOD", country: "Norvège", flag: "🇳🇴", league: "Eliteserien" },
    { id: "dortmund", name: "Borussia Dortmund", short: "BVB", country: "Allemagne", flag: "🇩🇪", league: "Bundesliga" },
    { id: "brugge", name: "Club Bruges", short: "BRU", country: "Belgique", flag: "🇧🇪", league: "Pro League" },
    { id: "como", name: "Como", short: "COM", country: "Italie", flag: "🇮🇹", league: "Serie A" },
    { id: "barcelona", name: "FC Barcelone", short: "FCB", country: "Espagne", flag: "🇪🇸", league: "La Liga" },
    { id: "porto", name: "FC Porto", short: "FCP", country: "Portugal", flag: "🇵🇹", league: "Liga Portugal" },
    { id: "feyenoord", name: "Feyenoord", short: "FEY", country: "Pays-Bas", flag: "🇳🇱", league: "Eredivisie" },
    { id: "fenerbahce", name: "Fenerbahçe", short: "FEN", country: "Turquie", flag: "🇹🇷", league: "Süper Lig" },
    { id: "galatasaray", name: "Galatasaray", short: "GAL", country: "Turquie", flag: "🇹🇷", league: "Süper Lig" },
    { id: "inter", name: "Inter Milan", short: "INT", country: "Italie", flag: "🇮🇹", league: "Serie A" },
    { id: "lask", name: "LASK", short: "LASK", country: "Autriche", flag: "🇦🇹", league: "Bundesliga autrichienne" },
    { id: "lille", name: "LOSC Lille", short: "LOSC", country: "France", flag: "🇫🇷", league: "Ligue 1" },
    { id: "liverpool", name: "Liverpool", short: "LIV", country: "Angleterre", flag: "🏴", league: "Premier League" },
    { id: "man-city", name: "Manchester City", short: "MCI", country: "Angleterre", flag: "🏴", league: "Premier League" },
    { id: "man-utd", name: "Manchester United", short: "MUN", country: "Angleterre", flag: "🏴", league: "Premier League" },
    { id: "napoli", name: "Naples", short: "NAP", country: "Italie", flag: "🇮🇹", league: "Serie A" },
    { id: "psg", name: "Paris Saint-Germain", short: "PSG", country: "France", flag: "🇫🇷", league: "Ligue 1" },
    { id: "psv", name: "PSV Eindhoven", short: "PSV", country: "Pays-Bas", flag: "🇳🇱", league: "Eredivisie" },
    { id: "leipzig", name: "RB Leipzig", short: "RBL", country: "Allemagne", flag: "🇩🇪", league: "Bundesliga" },
    { id: "lens", name: "RC Lens", short: "RCL", country: "France", flag: "🇫🇷", league: "Ligue 1" },
    { id: "betis", name: "Real Betis", short: "BET", country: "Espagne", flag: "🇪🇸", league: "La Liga" },
    { id: "real-madrid", name: "Real Madrid", short: "RMA", country: "Espagne", flag: "🇪🇸", league: "La Liga" },
    { id: "sabah", name: "Sabah", short: "SAB", country: "Azerbaïdjan", flag: "🇦🇿", league: "Première Ligue d'Azerbaïdjan" },
    { id: "shakhtar", name: "Shakhtar Donetsk", short: "SHK", country: "Ukraine", flag: "🇺🇦", league: "Premier League ukrainienne" },
    { id: "slavia", name: "Slavia Prague", short: "SLA", country: "Tchéquie", flag: "🇨🇿", league: "Première Ligue tchèque" },
    { id: "slovan", name: "Slovan Bratislava", short: "SLO", country: "Slovaquie", flag: "🇸🇰", league: "Super Liga" },
    { id: "sporting", name: "Sporting CP", short: "SCP", country: "Portugal", flag: "🇵🇹", league: "Liga Portugal" },
    { id: "stuttgart", name: "VfB Stuttgart", short: "VFB", country: "Allemagne", flag: "🇩🇪", league: "Bundesliga" },
    { id: "viking", name: "Viking FK", short: "VIK", country: "Norvège", flag: "🇳🇴", league: "Eliteserien" },
    { id: "villarreal", name: "Villarreal", short: "VIL", country: "Espagne", flag: "🇪🇸", league: "La Liga" }
];

const clubData = {
    psg: {
        city: "Paris",
        stadium: "Parc des Princes",
        founded: "1970",
        coach: "Luis Enrique",
        logo: "🔴🔵",
        stats: { matches: 3, wins: 3, draws: 0, losses: 0, goalsFor: 14, goalsAgainst: 5, points: 9 },
        players: [
            { number: 30, name: "Lucas Chevalier", position: "Gardien", nationality: "France" },
            { number: 39, name: "Matvey Safonov", position: "Gardien", nationality: "Russie" },
            { number: 2, name: "Achraf Hakimi", position: "Défenseur", nationality: "Maroc" },
            { number: 4, name: "Lucas Beraldo", position: "Défenseur", nationality: "Brésil" },
            { number: 5, name: "Marquinhos", position: "Défenseur", nationality: "Brésil" },
            { number: 6, name: "Illia Zabarnyi", position: "Défenseur", nationality: "Ukraine" },
            { number: 21, name: "Lucas Hernández", position: "Défenseur", nationality: "France" },
            { number: 25, name: "Nuno Mendes", position: "Défenseur", nationality: "Portugal" },
            { number: 51, name: "Willian Pacho", position: "Défenseur", nationality: "Équateur" },
            { number: 8, name: "Fabián Ruiz", position: "Milieu", nationality: "Espagne" },
            { number: 17, name: "Vitinha", position: "Milieu", nationality: "Portugal" },
            { number: 24, name: "Senny Mayulu", position: "Milieu", nationality: "France" },
            { number: 33, name: "Warren Zaïre-Emery", position: "Milieu", nationality: "France" },
            { number: 87, name: "João Neves", position: "Milieu", nationality: "Portugal" },
            { number: 7, name: "Khvicha Kvaratskhelia", position: "Attaquant", nationality: "Géorgie" },
            { number: 10, name: "Ousmane Dembélé", position: "Attaquant", nationality: "France" },
            { number: 14, name: "Désiré Doué", position: "Attaquant", nationality: "France" }
        ],
        pastMatches: [
            { date: "9 septembre 2026", home: "PSG", score: "6 - 1", away: "Slovan Bratislava" },
            { date: "14 octobre 2026", home: "Manchester City", score: "2 - 4", away: "PSG" },
            { date: "20 octobre 2026", home: "PSG", score: "4 - 2", away: "FC Barcelone" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Villarreal", score: "À venir", away: "PSG" },
            { date: "25 novembre 2026", home: "PSG", score: "À venir", away: "AS Roma" },
            { date: "8 décembre 2026", home: "Aston Villa", score: "À venir", away: "PSG" },
            { date: "20 janvier 2027", home: "Como", score: "À venir", away: "PSG" },
            { date: "27 janvier 2027", home: "PSG", score: "À venir", away: "Galatasaray" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 2 },
            { name: "Ligue 1", count: 13 },
            { name: "Coupe de France", count: 16 },
            { name: "Coupe de la Ligue", count: 9 },
            { name: "Trophée des champions", count: 14 },
            { name: "Coupe des vainqueurs de coupe", count: 1 }
        ]
    },

    "real-madrid": {
        name: "Real Madrid",
        city: "Madrid",
        stadium: "Santiago Bernabéu",
        founded: "1902",
        coach: "Álvaro Arbeloa",
        logo: "https://logos-marques.com/wp-content/uploads/2020/04/Real-Madrid-logo.png",
        stats: { matches: 3, wins: 3, draws: 0, losses: 0, goalsFor: 10, goalsAgainst: 5, points: 9 },
        players: [
            { number: 1, name: "Thibaut Courtois", position: "Gardien", nationality: "Belgique" },
            { number: 2, name: "Dani Carvajal", position: "Défenseur", nationality: "Espagne" },
            { number: 3, name: "Éder Militão", position: "Défenseur", nationality: "Brésil" },
            { number: 4, name: "David Alaba", position: "Défenseur", nationality: "Autriche" },
            { number: 22, name: "Antonio Rüdiger", position: "Défenseur", nationality: "Allemagne" },
            { number: 23, name: "Ferland Mendy", position: "Défenseur", nationality: "France" },
            { number: 5, name: "Jude Bellingham", position: "Milieu", nationality: "Angleterre" },
            { number: 6, name: "Eduardo Camavinga", position: "Milieu", nationality: "France" },
            { number: 8, name: "Federico Valverde", position: "Milieu", nationality: "Uruguay" },
            { number: 14, name: "Aurélien Tchouaméni", position: "Milieu", nationality: "France" },
            { number: 15, name: "Arda Güler", position: "Milieu", nationality: "Turquie" },
            { number: 7, name: "Vinícius Júnior", position: "Attaquant", nationality: "Brésil" },
            { number: 9, name: "Kylian Mbappé", position: "Attaquant", nationality: "France" },
            { number: 11, name: "Rodrygo", position: "Attaquant", nationality: "Brésil" },
            { number: 16, name: "Endrick", position: "Attaquant", nationality: "Brésil" }
        ],
        pastMatches: [
            { date: "8 septembre 2026", home: "Real Madrid", score: "2 - 1", away: "Inter Milan" },
            { date: "14 octobre 2026", home: "AS Roma", score: "3 - 4", away: "Real Madrid" },
            { date: "21 octobre 2026", home: "Real Madrid", score: "4 - 1", away: "RB Leipzig" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "AEK Athènes", score: "À venir", away: "Real Madrid" },
            { date: "24 novembre 2026", home: "Real Madrid", score: "À venir", away: "PSV Eindhoven" },
            { date: "9 décembre 2026", home: "Arsenal", score: "À venir", away: "Real Madrid" },
            { date: "19 janvier 2027", home: "Real Madrid", score: "À venir", away: "LASK" },
            { date: "27 janvier 2027", home: "Shakhtar Donetsk", score: "À venir", away: "Real Madrid" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 15 },
            { name: "Liga", count: 36 },
            { name: "Coupe du Roi", count: 20 },
            { name: "Supercoupe d'Espagne", count: 13 },
            { name: "Supercoupe de l'UEFA", count: 6 },
            { name: "Coupe du monde des clubs", count: 5 }
        ]
    },

    barcelona: {
        city: "Barcelone",
        stadium: "Spotify Camp Nou",
        founded: "1899",
        coach: "Hansi Flick",
        logo: "🔵🔴",
        stats: { matches: 3, wins: 2, draws: 0, losses: 1, goalsFor: 11, goalsAgainst: 6, points: 6 },
        players: [
            { number: 1, name: "Marc-André ter Stegen", position: "Gardien", nationality: "Allemagne" },
            { number: 13, name: "Joan García", position: "Gardien", nationality: "Espagne" },
            { number: 2, name: "Pau Cubarsí", position: "Défenseur", nationality: "Espagne" },
            { number: 3, name: "Alejandro Balde", position: "Défenseur", nationality: "Espagne" },
            { number: 4, name: "Ronald Araújo", position: "Défenseur", nationality: "Uruguay" },
            { number: 5, name: "Iñigo Martínez", position: "Défenseur", nationality: "Espagne" },
            { number: 23, name: "Jules Koundé", position: "Défenseur", nationality: "France" },
            { number: 6, name: "Gavi", position: "Milieu", nationality: "Espagne" },
            { number: 8, name: "Pedri", position: "Milieu", nationality: "Espagne" },
            { number: 16, name: "Fermín López", position: "Milieu", nationality: "Espagne" },
            { number: 21, name: "Frenkie de Jong", position: "Milieu", nationality: "Pays-Bas" },
            { number: 10, name: "Lamine Yamal", position: "Attaquant", nationality: "Espagne" },
            { number: 7, name: "Ferran Torres", position: "Attaquant", nationality: "Espagne" },
            { number: 9, name: "Robert Lewandowski", position: "Attaquant", nationality: "Pologne" },
            { number: 11, name: "Raphinha", position: "Attaquant", nationality: "Brésil" }
        ],
        pastMatches: [
            { date: "9 septembre 2026", home: "FC Barcelone", score: "5 - 1", away: "Feyenoord" },
            { date: "13 octobre 2026", home: "Galatasaray", score: "1 - 4", away: "FC Barcelone" },
            { date: "20 octobre 2026", home: "PSG", score: "4 - 2", away: "FC Barcelone" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "FC Barcelone", score: "À venir", away: "Aston Villa" },
            { date: "25 novembre 2026", home: "Sabah FC", score: "À venir", away: "FC Barcelone" },
            { date: "8 décembre 2026", home: "FC Barcelone", score: "À venir", away: "Manchester City" },
            { date: "20 janvier 2027", home: "Sporting CP", score: "À venir", away: "FC Barcelone" },
            { date: "27 janvier 2027", home: "FC Barcelone", score: "À venir", away: "Como" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 5 },
            { name: "Liga", count: 28 },
            { name: "Coupe du Roi", count: 32 },
            { name: "Supercoupe d'Espagne", count: 15 },
            { name: "Supercoupe de l'UEFA", count: 5 },
            { name: "Coupe du monde des clubs", count: 3 }
        ]
    },

    liverpool: {
        city: "Liverpool",
        stadium: "Anfield",
        founded: "1892",
        coach: "Andoni Iraola",
        logo: "🔴",
        stats: { matches: 3, wins: 3, draws: 0, losses: 0, goalsFor: 12, goalsAgainst: 7, points: 9 },
        players: [
            { number: 1, name: "Alisson Becker", position: "Gardien", nationality: "Brésil" },
            { number: 25, name: "Giorgi Mamardashvili", position: "Gardien", nationality: "Géorgie" },
            { number: 4, name: "Virgil van Dijk", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 5, name: "Jérémy Jacquet", position: "Défenseur", nationality: "France" },
            { number: 6, name: "Milos Kerkez", position: "Défenseur", nationality: "Hongrie" },
            { number: 12, name: "Conor Bradley", position: "Défenseur", nationality: "Irlande du Nord" },
            { number: 30, name: "Jeremie Frimpong", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 7, name: "Florian Wirtz", position: "Milieu", nationality: "Allemagne" },
            { number: 8, name: "Dominik Szoboszlai", position: "Milieu", nationality: "Hongrie" },
            { number: 10, name: "Alexis Mac Allister", position: "Milieu", nationality: "Argentine" },
            { number: 38, name: "Ryan Gravenberch", position: "Milieu", nationality: "Pays-Bas" },
            { number: 9, name: "Alexander Isak", position: "Attaquant", nationality: "Suède" },
            { number: 18, name: "Cody Gakpo", position: "Attaquant", nationality: "Pays-Bas" },
            { number: 22, name: "Hugo Ekitiké", position: "Attaquant", nationality: "France" },
            { number: 29, name: "Bradley Barcola", position: "Attaquant", nationality: "France" }
        ],
        pastMatches: [
            { date: "9 septembre 2026", home: "Liverpool", score: "2 - 1", away: "Atlético de Madrid" },
            { date: "14 octobre 2026", home: "LASK", score: "3 - 6", away: "Liverpool" },
            { date: "20 octobre 2026", home: "Liverpool", score: "4 - 3", away: "Villarreal" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "Fenerbahçe", score: "À venir", away: "Liverpool" },
            { date: "25 novembre 2026", home: "Club Bruges", score: "À venir", away: "Liverpool" },
            { date: "9 décembre 2026", home: "Liverpool", score: "À venir", away: "FC Porto" },
            { date: "19 janvier 2027", home: "Inter Milan", score: "À venir", away: "Liverpool" },
            { date: "27 janvier 2027", home: "Liverpool", score: "À venir", away: "Lens" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 6 },
            { name: "Championnat d'Angleterre", count: 20 },
            { name: "FA Cup", count: 8 },
            { name: "League Cup", count: 10 },
            { name: "Coupe UEFA", count: 3 },
            { name: "Supercoupe de l'UEFA", count: 4 }
        ]
    },

    arsenal: {
        city: "Londres",
        stadium: "Emirates Stadium",
        founded: "1886",
        coach: "",
        logo: "🔴",
        stats: { matches: 3, wins: 2, draws: 1, losses: 0, goalsFor: 6, goalsAgainst: 3, points: 7 },
        players: [],
        pastMatches: [
            { date: "9 septembre 2026", home: "Naples", score: "0 - 1", away: "Arsenal" },
            { date: "13 octobre 2026", home: "Arsenal", score: "3 - 0", away: "Lille" },
            { date: "21 octobre 2026", home: "Bayern Munich", score: "2 - 2", away: "Arsenal" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "Slavia Prague", score: "À venir", away: "Arsenal" },
            { date: "24 novembre 2026", home: "Arsenal", score: "À venir", away: "Borussia Dortmund" },
            { date: "9 décembre 2026", home: "Arsenal", score: "À venir", away: "Real Madrid" },
            { date: "20 janvier 2027", home: "Real Betis", score: "À venir", away: "Arsenal" },
            { date: "27 janvier 2027", home: "Arsenal", score: "À venir", away: "Sabah FC" }
        ],
        trophies: []
    },

    bayern: {
        city: "Munich",
        stadium: "Allianz Arena",
        founded: "1900",
        coach: "Vincent Kompany",
        logo: "🔴⚪",
        stats: { matches: 3, wins: 1, draws: 2, losses: 0, goalsFor: 10, goalsAgainst: 5, points: 5 },
        players: [
            { number: 1, name: "Manuel Neuer", position: "Gardien", nationality: "Allemagne" },
            { number: 26, name: "Sven Ulreich", position: "Gardien", nationality: "Allemagne" },
            { number: 2, name: "Dayot Upamecano", position: "Défenseur", nationality: "France" },
            { number: 3, name: "Kim Min-jae", position: "Défenseur", nationality: "Corée du Sud" },
            { number: 4, name: "Jonathan Tah", position: "Défenseur", nationality: "Allemagne" },
            { number: 19, name: "Alphonso Davies", position: "Défenseur", nationality: "Canada" },
            { number: 22, name: "Raphaël Guerreiro", position: "Défenseur", nationality: "Portugal" },
            { number: 6, name: "Joshua Kimmich", position: "Milieu", nationality: "Allemagne" },
            { number: 8, name: "Leon Goretzka", position: "Milieu", nationality: "Allemagne" },
            { number: 10, name: "Jamal Musiala", position: "Milieu", nationality: "Allemagne" },
            { number: 17, name: "Michael Olise", position: "Attaquant", nationality: "France" },
            { number: 7, name: "Serge Gnabry", position: "Attaquant", nationality: "Allemagne" },
            { number: 9, name: "Harry Kane", position: "Attaquant", nationality: "Angleterre" },
            { number: 11, name: "Kingsley Coman", position: "Attaquant", nationality: "France" },
            { number: 14, name: "Luis Díaz", position: "Attaquant", nationality: "Colombie" }
        ],
        pastMatches: [
            { date: "10 septembre 2026", home: "Bayern Munich", score: "5 - 0", away: "Bodø/Glimt" },
            { date: "13 octobre 2026", home: "Viking", score: "3 - 3", away: "Bayern Munich" },
            { date: "21 octobre 2026", home: "Bayern Munich", score: "2 - 2", away: "Arsenal" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Atlético de Madrid", score: "À venir", away: "Bayern Munich" },
            { date: "25 novembre 2026", home: "Lille", score: "À venir", away: "Bayern Munich" },
            { date: "8 décembre 2026", home: "Bayern Munich", score: "À venir", away: "Slavia Prague" },
            { date: "20 janvier 2027", home: "Manchester United", score: "À venir", away: "Bayern Munich" },
            { date: "27 janvier 2027", home: "Bayern Munich", score: "À venir", away: "Real Betis" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 6 },
            { name: "Championnat d'Allemagne", count: 34 },
            { name: "Coupe d'Allemagne", count: 20 },
            { name: "Supercoupe de l'UEFA", count: 2 },
            { name: "Coupe du monde des clubs", count: 2 },
            { name: "Coupe intercontinentale", count: 2 }
        ]
    },

    inter: {
        city: "Milan",
        stadium: "Stade Giuseppe-Meazza (San Siro)",
        founded: "1908",
        coach: "Cristian Chivu",
        logo: "🔵⚫",
        stats: { matches: 3, wins: 1, draws: 0, losses: 2, goalsFor: 5, goalsAgainst: 6, points: 3 },
        players: [
            { number: 1, name: "Yann Sommer", position: "Gardien", nationality: "Suisse" },
            { number: 13, name: "Josep Martínez", position: "Gardien", nationality: "Espagne" },
            { number: 2, name: "Denzel Dumfries", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 6, name: "Stefan de Vrij", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 15, name: "Francesco Acerbi", position: "Défenseur", nationality: "Italie" },
            { number: 28, name: "Benjamin Pavard", position: "Défenseur", nationality: "France" },
            { number: 32, name: "Federico Dimarco", position: "Défenseur", nationality: "Italie" },
            { number: 20, name: "Hakan Çalhanoğlu", position: "Milieu", nationality: "Turquie" },
            { number: 22, name: "Henrikh Mkhitaryan", position: "Milieu", nationality: "Arménie" },
            { number: 23, name: "Nicolò Barella", position: "Milieu", nationality: "Italie" },
            { number: 7, name: "Piotr Zieliński", position: "Milieu", nationality: "Pologne" },
            { number: 9, name: "Marcus Thuram", position: "Attaquant", nationality: "France" },
            { number: 10, name: "Lautaro Martínez", position: "Attaquant", nationality: "Argentine" },
            { number: 11, name: "Luis Henrique", position: "Attaquant", nationality: "Brésil" },
            { number: 99, name: "Mehdi Taremi", position: "Attaquant", nationality: "Iran" }
        ],
        pastMatches: [
            { date: "8 septembre 2026", home: "Real Madrid", score: "2 - 1", away: "Inter Milan" },
            { date: "13 octobre 2026", home: "Inter Milan", score: "3 - 4", away: "Club Bruges" },
            { date: "21 octobre 2026", home: "Inter Milan", score: "1 - 0", away: "Shakhtar Donetsk" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Feyenoord", score: "À venir", away: "Inter Milan" },
            { date: "25 novembre 2026", home: "Inter Milan", score: "À venir", away: "Stuttgart" },
            { date: "9 décembre 2026", home: "Borussia Dortmund", score: "À venir", away: "Inter Milan" },
            { date: "19 janvier 2027", home: "Inter Milan", score: "À venir", away: "Liverpool" },
            { date: "27 janvier 2027", home: "Slovan Bratislava", score: "À venir", away: "Inter Milan" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 3 },
            { name: "Championnat d'Italie", count: 20 },
            { name: "Coupe d'Italie", count: 9 },
            { name: "Supercoupe d'Italie", count: 8 },
            { name: "Coupe UEFA", count: 3 },
            { name: "Coupe du monde des clubs", count: 1 }
        ]
    },

        "man-city": {
        city: "Manchester",
        stadium: "Etihad Stadium",
        founded: "1880",
        coach: "Enzo Maresca",
        logo: "🔵",
        stats: { matches: 3, wins: 2, draws: 0, losses: 1, goalsFor: 9, goalsAgainst: 5, points: 6 },
        players: [
            { number: 1, name: "Gianluigi Donnarumma", position: "Gardien", nationality: "Italie" },
            { number: 13, name: "Marcus Bettinelli", position: "Gardien", nationality: "Angleterre" },
            { number: 3, name: "Rúben Dias", position: "Défenseur", nationality: "Portugal" },
            { number: 6, name: "Marc Guéhi", position: "Défenseur", nationality: "Angleterre" },
            { number: 21, name: "Rayan Aït-Nouri", position: "Défenseur", nationality: "Algérie" },
            { number: 22, name: "Vitor Reis", position: "Défenseur", nationality: "Brésil" },
            { number: 24, name: "Joško Gvardiol", position: "Défenseur", nationality: "Croatie" },
            { number: 45, name: "Abdukodir Khusanov", position: "Défenseur", nationality: "Ouzbékistan" },
            { number: 82, name: "Rico Lewis", position: "Défenseur", nationality: "Angleterre" },
            { number: 5, name: "Elliot Anderson", position: "Milieu", nationality: "Angleterre" },
            { number: 8, name: "Mateo Kovačić", position: "Milieu", nationality: "Croatie" },
            { number: 10, name: "Rayan Cherki", position: "Milieu", nationality: "France" },
            { number: 17, name: "Enzo Fernández", position: "Milieu", nationality: "Argentine" },
            { number: 47, name: "Phil Foden", position: "Milieu", nationality: "Angleterre" },
            { number: 7, name: "Iliman Ndiaye", position: "Attaquant", nationality: "Sénégal" },
            { number: 9, name: "Erling Haaland", position: "Attaquant", nationality: "Norvège" },
            { number: 42, name: "Antoine Semenyo", position: "Attaquant", nationality: "Ghana" }
        ],
        pastMatches: [
            { date: "8 septembre 2026", home: "FC Porto", score: "0 - 2", away: "Manchester City" },
            { date: "14 octobre 2026", home: "Manchester City", score: "2 - 4", away: "PSG" },
            { date: "20 octobre 2026", home: "Manchester City", score: "5 - 1", away: "AEK Athènes" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "RB Leipzig", score: "À venir", away: "Manchester City" },
            { date: "24 novembre 2026", home: "Manchester City", score: "À venir", away: "Naples" },
            { date: "8 décembre 2026", home: "FC Barcelone", score: "À venir", away: "Manchester City" },
            { date: "20 janvier 2027", home: "Lens", score: "À venir", away: "Manchester City" },
            { date: "27 janvier 2027", home: "Manchester City", score: "À venir", away: "Sporting CP" }
        ],
        trophies: [
            { name: "Ligue des champions", count: 1 },
            { name: "Championnat d'Angleterre", count: 10 },
            { name: "FA Cup", count: 7 },
            { name: "League Cup", count: 8 },
            { name: "Supercoupe de l'UEFA", count: 1 },
            { name: "Coupe du monde des clubs", count: 1 }
        ]
    },

    lask: {
        city: "Linz",
        stadium: "Raiffeisen Arena",
        founded: "1908",
        coach: "Dietmar Kühbauer",
        logo: "⚫⚪",
        stats: { matches: 3, wins: 1, draws: 0, losses: 2, goalsFor: 6, goalsAgainst: 9, points: 3 },
        players: [
            { number: 1, name: "Lukas Jungwirth", position: "Gardien", nationality: "Autriche" },
            { number: 2, name: "George Bello", position: "Défenseur", nationality: "États-Unis" },
            { number: 4, name: "Xavier Mbuyamba", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 16, name: "Andrés Andrade", position: "Défenseur", nationality: "Panama" },
            { number: 20, name: "Kasper Jørgensen", position: "Défenseur", nationality: "Danemark" },
            { number: 6, name: "Melayro Bogarde", position: "Milieu", nationality: "Pays-Bas" },
            { number: 9, name: "Kryštof Daněk", position: "Milieu", nationality: "Tchéquie" },
            { number: 10, name: "Robert Ljubičić", position: "Milieu", nationality: "Croatie" },
            { number: 18, name: "Alessandro Schöpf", position: "Milieu", nationality: "Autriche" },
            { number: 30, name: "Sascha Horvath", position: "Milieu", nationality: "Autriche" },
            { number: 7, name: "Samuel Adeniran", position: "Attaquant", nationality: "États-Unis" },
            { number: 8, name: "Moses Usor", position: "Attaquant", nationality: "Nigeria" },
            { number: 27, name: "Christoph Lang", position: "Attaquant", nationality: "Autriche" }
        ],
        pastMatches: [
            { date: "8 septembre 2026", home: "AEK Athènes", score: "1 - 0", away: "LASK" },
            { date: "14 octobre 2026", home: "LASK", score: "3 - 6", away: "Liverpool" },
            { date: "21 octobre 2026", home: "Sporting CP", score: "2 - 3", away: "LASK" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "LASK", score: "À venir", away: "Slovan Bratislava" },
            { date: "24 novembre 2026", home: "Bodø/Glimt", score: "À venir", away: "LASK" },
            { date: "9 décembre 2026", home: "LASK", score: "À venir", away: "Fenerbahçe" },
            { date: "19 janvier 2027", home: "Real Madrid", score: "À venir", away: "LASK" },
            { date: "27 janvier 2027", home: "LASK", score: "À venir", away: "FC Porto" }
        ],
        trophies: [
            { name: "Championnat d'Autriche", count: 1 },
            { name: "Coupe d'Autriche", count: 1 }
        ]
    },

    galatasaray: {
        city: "Istanbul",
        stadium: "RAMS Park",
        founded: "1905",
        coach: "Okan Buruk",
        logo: "🟡🔴",
        stats: { matches: 3, wins: 1, draws: 0, losses: 2, goalsFor: 6, goalsAgainst: 9, points: 3 },
        players: [
            { number: 1, name: "Uğurcan Çakır", position: "Gardien", nationality: "Turquie" },
            { number: 19, name: "Günay Güvenç", position: "Gardien", nationality: "Turquie" },
            { number: 6, name: "Davinson Sánchez", position: "Défenseur", nationality: "Colombie" },
            { number: 17, name: "Eren Elmalı", position: "Défenseur", nationality: "Turquie" },
            { number: 23, name: "Kaan Ayhan", position: "Défenseur", nationality: "Turquie" },
            { number: 42, name: "Abdülkerim Bardakcı", position: "Défenseur", nationality: "Turquie" },
            { number: 90, name: "Wilfried Singo", position: "Défenseur", nationality: "Côte d'Ivoire" },
            { number: 8, name: "Gabriel Sara", position: "Milieu", nationality: "Brésil" },
            { number: 20, name: "İlkay Gündoğan", position: "Milieu", nationality: "Allemagne" },
            { number: 34, name: "Lucas Torreira", position: "Milieu", nationality: "Uruguay" },
            { number: 99, name: "Mario Lemina", position: "Milieu", nationality: "Gabon" },
            { number: 10, name: "Leroy Sané", position: "Attaquant", nationality: "Allemagne" },
            { number: 11, name: "Yunus Akgün", position: "Attaquant", nationality: "Turquie" },
            { number: 45, name: "Victor Osimhen", position: "Attaquant", nationality: "Nigeria" },
            { number: 53, name: "Barış Alper Yılmaz", position: "Attaquant", nationality: "Turquie" }
        ],
        pastMatches: [
            { date: "9 septembre 2026", home: "Sporting CP", score: "3 - 1", away: "Galatasaray" },
            { date: "13 octobre 2026", home: "Galatasaray", score: "1 - 4", away: "FC Barcelone" },
            { date: "21 octobre 2026", home: "Lille", score: "2 - 4", away: "Galatasaray" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Galatasaray", score: "À venir", away: "Stuttgart" },
            { date: "24 novembre 2026", home: "Galatasaray", score: "À venir", away: "Aston Villa" },
            { date: "8 décembre 2026", home: "AEK Athènes", score: "À venir", away: "Galatasaray" },
            { date: "19 janvier 2027", home: "Galatasaray", score: "À venir", away: "Feyenoord" },
            { date: "27 janvier 2027", home: "PSG", score: "À venir", away: "Galatasaray" }
        ],
        trophies: [
            { name: "Championnat de Turquie", count: 25 },
            { name: "Coupe de Turquie", count: 19 },
            { name: "Supercoupe de Turquie", count: 17 },
            { name: "Coupe UEFA", count: 1 },
            { name: "Supercoupe de l'UEFA", count: 1 }
        ]
    },

    lille: {
        city: "Lille",
        stadium: "Decathlon Arena - Stade Pierre-Mauroy",
        founded: "1944",
        coach: "Davide Ancelotti",
        logo: "🔴⚪",
        stats: { matches: 3, wins: 0, draws: 0, losses: 3, goalsFor: 4, goalsAgainst: 10, points: 0 },
        players: [
            { number: 1, name: "Berke Özer", position: "Gardien", nationality: "Turquie" },
            { number: 4, name: "Alexsandro", position: "Défenseur", nationality: "Brésil" },
            { number: 2, name: "Aïssa Mandi", position: "Défenseur", nationality: "Algérie" },
            { number: 18, name: "Bafodé Diakité", position: "Défenseur", nationality: "France" },
            { number: 12, name: "Thomas Meunier", position: "Défenseur", nationality: "Belgique" },
            { number: 5, name: "Ngal'ayel Mukau", position: "Milieu", nationality: "République démocratique du Congo" },
            { number: 21, name: "Benjamin André", position: "Milieu", nationality: "France" },
            { number: 8, name: "Hakon Haraldsson", position: "Milieu", nationality: "Islande" },
            { number: 10, name: "Rémy Cabella", position: "Milieu", nationality: "France" },
            { number: 9, name: "Olivier Giroud", position: "Attaquant", nationality: "France" },
            { number: 7, name: "Matias Fernandez-Pardo", position: "Attaquant", nationality: "Belgique" },
            { number: 11, name: "Osame Sahraoui", position: "Attaquant", nationality: "Maroc" },
            { number: 27, name: "Hamed Junior Traorè", position: "Attaquant", nationality: "Côte d'Ivoire" }
        ],
        pastMatches: [
            { date: "8 septembre 2026", home: "Lille", score: "2 - 3", away: "Real Betis" },
            { date: "13 octobre 2026", home: "Arsenal", score: "3 - 0", away: "Lille" },
            { date: "21 octobre 2026", home: "Lille", score: "2 - 4", away: "Galatasaray" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Bodø/Glimt", score: "À venir", away: "Lille" },
            { date: "25 novembre 2026", home: "Lille", score: "À venir", away: "Bayern Munich" },
            { date: "9 décembre 2026", home: "Stuttgart", score: "À venir", away: "Lille" },
            { date: "19 janvier 2027", home: "Lille", score: "À venir", away: "Slovan Bratislava" },
            { date: "27 janvier 2027", home: "AS Roma", score: "À venir", away: "Lille" }
        ],
        trophies: [
            { name: "Championnat de France", count: 4 },
            { name: "Coupe de France", count: 6 },
            { name: "Trophée des champions", count: 1 },
            { name: "Ligue 2", count: 1 }
        ]
    },

    lens: {
        city: "Lens",
        stadium: "Stade Bollaert-Delelis",
        founded: "1906",
        coach: "Yannick Cahuzac",
        logo: "🟡🔴",
        stats: { matches: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 7, points: 3 },
        players: [
            { number: 40, name: "Robin Risser", position: "Gardien", nationality: "France" },
            { number: 2, name: "Ruben Aguilar", position: "Défenseur", nationality: "France" },
            { number: 3, name: "Maik Nawrocki", position: "Défenseur", nationality: "Pologne" },
            { number: 6, name: "Samson Baidoo", position: "Défenseur", nationality: "Autriche" },
            { number: 14, name: "Matthieu Udol", position: "Défenseur", nationality: "France" },
            { number: 24, name: "Jonathan Gradit", position: "Défenseur", nationality: "France" },
            { number: 21, name: "Amadou Haidara", position: "Milieu", nationality: "Mali" },
            { number: 27, name: "Michaël Cuisance", position: "Milieu", nationality: "France" },
            { number: 8, name: "Yacine Titraoui", position: "Milieu", nationality: "Algérie" },
            { number: 10, name: "Florian Thauvin", position: "Attaquant", nationality: "France" },
            { number: 11, name: "Odsonne Édouard", position: "Attaquant", nationality: "France" },
            { number: 7, name: "Florian Sotoca", position: "Attaquant", nationality: "France" },
            { number: 9, name: "Thorgan Hazard", position: "Attaquant", nationality: "Belgique" }
        ],
        pastMatches: [
            { date: "10 septembre 2026", home: "Slavia Prague", score: "2 - 3", away: "Lens" },
            { date: "13 octobre 2026", home: "Lens", score: "0 - 2", away: "Sporting CP" },
            { date: "21 octobre 2026", home: "Club Bruges", score: "3 - 0", away: "Lens" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "Lens", score: "À venir", away: "Como" },
            { date: "24 novembre 2026", home: "RB Leipzig", score: "À venir", away: "Lens" },
            { date: "9 décembre 2026", home: "Lens", score: "À venir", away: "Bodø/Glimt" },
            { date: "20 janvier 2027", home: "Lens", score: "À venir", away: "Manchester City" },
            { date: "27 janvier 2027", home: "Liverpool", score: "À venir", away: "Lens" }
        ],
        trophies: [
            { name: "Championnat de France", count: 1 },
            { name: "Coupe de France", count: 1 },
            { name: "Coupe de la Ligue", count: 1 },
            { name: "Ligue 2", count: 2 }
        ]
    },

    leipzig: {
        city: "Leipzig",
        stadium: "Red Bull Arena",
        founded: "2009",
        coach: "Martín Demichelis",
        logo: "🔴⚪",
        stats: { matches: 3, wins: 1, draws: 0, losses: 2, goalsFor: 3, goalsAgainst: 8, points: 3 },
        players: [
            { number: 26, name: "Maarten Vandevoordt", position: "Gardien", nationality: "Belgique" },
            { number: 1, name: "Örjan Nyland", position: "Gardien", nationality: "Norvège" },
            { number: 4, name: "Willi Orbán", position: "Défenseur", nationality: "Hongrie" },
            { number: 23, name: "Castello Lukeba", position: "Défenseur", nationality: "France" },
            { number: 22, name: "David Raum", position: "Défenseur", nationality: "Allemagne" },
            { number: 17, name: "Ridle Baku", position: "Défenseur", nationality: "Allemagne" },
            { number: 16, name: "Lukas Klostermann", position: "Défenseur", nationality: "Allemagne" },
            { number: 13, name: "Nicolas Seiwald", position: "Milieu", nationality: "Autriche" },
            { number: 14, name: "Christoph Baumgartner", position: "Milieu", nationality: "Autriche" },
            { number: 20, name: "Rocco Reitz", position: "Milieu", nationality: "Allemagne" },
            { number: 21, name: "Neil El Aynaoui", position: "Milieu", nationality: "Maroc" },
            { number: 30, name: "Andrija Maksimović", position: "Milieu", nationality: "Serbie" },
            { number: 9, name: "Attaquant à compléter", position: "Attaquant", nationality: "À compléter" }
        ],
        pastMatches: [
            { date: "10 septembre 2026", home: "Como", score: "4 - 1", away: "RB Leipzig" },
            { date: "13 octobre 2026", home: "RB Leipzig", score: "1 - 0", away: "PSV Eindhoven" },
            { date: "21 octobre 2026", home: "Real Madrid", score: "4 - 1", away: "RB Leipzig" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "RB Leipzig", score: "À venir", away: "Manchester City" },
            { date: "24 novembre 2026", home: "RB Leipzig", score: "À venir", away: "Lens" },
            { date: "8 décembre 2026", home: "Manchester United", score: "À venir", away: "RB Leipzig" },
            { date: "20 janvier 2027", home: "RB Leipzig", score: "À venir", away: "Shakhtar Donetsk" },
            { date: "27 janvier 2027", home: "Feyenoord", score: "À venir", away: "RB Leipzig" }
        ],
        trophies: [
            { name: "Coupe d'Allemagne", count: 2 },
            { name: "Supercoupe d'Allemagne", count: 1 },
            { name: "Championnat de 2. Bundesliga", count: 1 }
        ]
    },

    feyenoord: {
        city: "Rotterdam",
        stadium: "De Kuip",
        founded: "1908",
        coach: "Giovanni van Bronckhorst",
        logo: "🔴⚪",
        stats: { matches: 3, wins: 1, draws: 0, losses: 2, goalsFor: 4, goalsAgainst: 8, points: 3 },
        players: [
            { number: 1, name: "Tjark Ernst", position: "Gardien", nationality: "Allemagne" },
            { number: 2, name: "Bart Nieuwkoop", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 3, name: "Thomas Beelen", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 4, name: "Tsuyoshi Watanabe", position: "Défenseur", nationality: "Japon" },
            { number: 5, name: "Gijs Smal", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 15, name: "Jordan Bos", position: "Défenseur", nationality: "Australie" },
            { number: 7, name: "Jakub Moder", position: "Milieu", nationality: "Pologne" },
            { number: 8, name: "Gjivai Zechiël", position: "Milieu", nationality: "Pays-Bas" },
            { number: 10, name: "Luciano Valente", position: "Milieu", nationality: "Pays-Bas" },
            { number: 14, name: "Sem Steijn", position: "Milieu", nationality: "Pays-Bas" },
            { number: 11, name: "Gonçalo Borges", position: "Attaquant", nationality: "Portugal" },
            { number: 17, name: "Reiss Nelson", position: "Attaquant", nationality: "Angleterre" },
            { number: 19, name: "Nacho Ferri", position: "Attaquant", nationality: "Espagne" },
            { number: 23, name: "Anis Hadj Moussa", position: "Attaquant", nationality: "Algérie" },
            { number: 27, name: "Gaoussou Diarra", position: "Attaquant", nationality: "Mali" }
        ],
        pastMatches: [
            { date: "9 septembre 2026", home: "FC Barcelone", score: "5 - 1", away: "Feyenoord" },
            { date: "14 octobre 2026", home: "Feyenoord", score: "3 - 2", away: "Como" },
            { date: "21 octobre 2026", home: "Real Betis", score: "1 - 0", away: "Feyenoord" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Feyenoord", score: "À venir", away: "Inter Milan" },
            { date: "24 novembre 2026", home: "Feyenoord", score: "À venir", away: "FC Porto" },
            { date: "8 décembre 2026", home: "Viking", score: "À venir", away: "Feyenoord" },
            { date: "19 janvier 2027", home: "Galatasaray", score: "À venir", away: "Feyenoord" },
            { date: "27 janvier 2027", home: "Feyenoord", score: "À venir", away: "RB Leipzig" }
        ],
        trophies: [
            { name: "Championnat des Pays-Bas", count: 16 },
            { name: "Coupe des Pays-Bas", count: 14 },
            { name: "Supercoupe des Pays-Bas", count: 5 },
            { name: "Coupe UEFA", count: 2 },
            { name: "Coupe des clubs champions", count: 1 }
        ]
    },
        fenerbahce: {
        city: "Istanbul",
        stadium: "Stade Şükrü Saracoğlu",
        founded: "1907",
        coach: "İsmail Kartal",
        logo: "🟡🔵",
        stats: { matches: 3, wins: 2, draws: 1, losses: 0, goalsFor: 6, goalsAgainst: 3, points: 7 },
        players: [
            { number: 13, name: "Tarık Çetin", position: "Gardien", nationality: "Turquie" },
            { number: 31, name: "Ederson", position: "Gardien", nationality: "Brésil" },
            { number: 14, name: "Yiğit Efe Demir", position: "Défenseur", nationality: "Turquie" },
            { number: 15, name: "Nathan Aké", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 18, name: "Mert Müldür", position: "Défenseur", nationality: "Turquie" },
            { number: 21, name: "Kojo Peprah Oppong", position: "Défenseur", nationality: "Ghana" },
            { number: 27, name: "Nélson Semedo", position: "Défenseur", nationality: "Portugal" },
            { number: 37, name: "Milan Škriniar", position: "Défenseur", nationality: "Slovaquie" },
            { number: 3, name: "Archie Brown", position: "Milieu", nationality: "Angleterre" },
            { number: 6, name: "Mattéo Guendouzi", position: "Milieu", nationality: "France" },
            { number: 17, name: "İrfan Can Kahveci", position: "Milieu", nationality: "Turquie" },
            { number: 91, name: "N'Golo Kanté", position: "Milieu", nationality: "France" },
            { number: 7, name: "Kerem Aktürkoğlu", position: "Attaquant", nationality: "Turquie" },
            { number: 9, name: "Romelu Lukaku", position: "Attaquant", nationality: "Belgique" },
            { number: 10, name: "Marco Asensio", position: "Attaquant", nationality: "Espagne" },
            { number: 11, name: "Mason Greenwood", position: "Attaquant", nationality: "Angleterre" },
            { number: 19, name: "Vedat Muriqi", position: "Attaquant", nationality: "Kosovo" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Fenerbahçe", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Fenerbahçe" },
            { date: "Octobre 2026", home: "Fenerbahçe", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Fenerbahçe", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Fenerbahçe" },
            { date: "Décembre 2026", home: "Fenerbahçe", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat de Turquie", count: 19 },
            { name: "Coupe de Turquie", count: 7 },
            { name: "Supercoupe de Turquie", count: 9 }
        ]
    },

    como: {
        city: "Côme",
        stadium: "Stadio Giuseppe Sinigaglia",
        founded: "1907",
        coach: "Cesc Fàbregas",
        logo: "🔵⚪",
        stats: {
            matches: 3,
            wins: 1,
            draws: 1,
            losses: 1,
            goalsFor: 5,
            goalsAgainst: 5,
            points: 4
        },
        players: [
            { number: 1, name: "Jean Butez", position: "Gardien", nationality: "France" },
            { number: 2, name: "Ivan Smolčić", position: "Défenseur", nationality: "Croatie" },
            { number: 5, name: "Edoardo Goldaniga", position: "Défenseur", nationality: "Italie" },
            { number: 14, name: "Jacobo Ramón", position: "Défenseur", nationality: "Espagne" },
            { number: 3, name: "Álex Valle", position: "Défenseur", nationality: "Espagne" },
            { number: 31, name: "Mergim Vojvoda", position: "Défenseur", nationality: "Kosovo" },
            { number: 23, name: "Maxence Caqueret", position: "Milieu", nationality: "France" },
            { number: 6, name: "Máximo Perrone", position: "Milieu", nationality: "Argentine" },
            { number: 33, name: "Lucas Da Cunha", position: "Milieu", nationality: "France" },
            { number: 10, name: "Nico Paz", position: "Milieu", nationality: "Argentine" },
            { number: 20, name: "Martin Baturina", position: "Milieu", nationality: "Croatie" },
            { number: 11, name: "Anastasios Douvikas", position: "Attaquant", nationality: "Grèce" },
            { number: 38, name: "Assane Diao", position: "Attaquant", nationality: "Sénégal" },
            { number: 7, name: "Álvaro Morata", position: "Attaquant", nationality: "Espagne" },
            { number: 17, name: "Jesús Rodríguez", position: "Attaquant", nationality: "Espagne" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Como", score: "4 - 1", away: "RB Leipzig" },
            { date: "Octobre 2026", home: "Como", score: "0 - 0", away: "Roma" },
            { date: "Octobre 2026", home: "Feyenoord", score: "3 - 2", away: "Como" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Como", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Como" },
            { date: "Décembre 2026", home: "Como", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat de Serie B", count: 1 },
            { name: "Championnat de Serie C", count: 3 }
        ]
    },
        brugge: {
        city: "Bruges",
        stadium: "Jan Breydelstadion",
        founded: "1891",
        coach: "Ivan Leko",
        logo: "🔵⚫",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 6,
            goalsAgainst: 4,
            points: 6
        },
        players: [
            { number: 1, name: "Yann Sommer", position: "Gardien", nationality: "Suisse" },
            { number: 29, name: "Nordin Jackers", position: "Gardien", nationality: "Belgique" },
            { number: 3, name: "Lee Han-beom", position: "Défenseur", nationality: "Corée du Sud" },
            { number: 4, name: "Joel Ordóñez", position: "Défenseur", nationality: "Équateur" },
            { number: 32, name: "Matteo Dams", position: "Défenseur", nationality: "Belgique" },
            { number: 44, name: "Brandon Mechele", position: "Défenseur", nationality: "Belgique" },
            { number: 64, name: "Kyriani Sabbe", position: "Défenseur", nationality: "Belgique" },
            { number: 8, name: "Freddie Potts", position: "Milieu", nationality: "Angleterre" },
            { number: 10, name: "Hugo Vetlesen", position: "Milieu", nationality: "Norvège" },
            { number: 20, name: "Hans Vanaken", position: "Milieu", nationality: "Belgique" },
            { number: 80, name: "Félix Lemaréchal", position: "Milieu", nationality: "France" },
            { number: 7, name: "Nicolò Tresoldi", position: "Attaquant", nationality: "Allemagne" },
            { number: 9, name: "Carlos Forbs", position: "Attaquant", nationality: "Portugal" },
            { number: 17, name: "Romeo Vermant", position: "Attaquant", nationality: "Belgique" },
            { number: 67, name: "Mamadou Diakhon", position: "Attaquant", nationality: "France" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Club Brugge", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Club Brugge" },
            { date: "Octobre 2026", home: "Club Brugge", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Club Brugge", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Club Brugge" },
            { date: "Décembre 2026", home: "Club Brugge", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat de Belgique", count: 19 },
            { name: "Coupe de Belgique", count: 12 },
            { name: "Supercoupe de Belgique", count: 18 }
        ]
    },
        dortmund: {
        city: "Dortmund",
        stadium: "Signal Iduna Park",
        founded: "1909",
        coach: "Niko Kovač",
        logo: "🟡⚫",
        stats: {
            matches: 3,
            wins: 2,
            draws: 1,
            losses: 0,
            goalsFor: 7,
            goalsAgainst: 3,
            points: 7
        },
        players: [
            { number: 1, name: "Gregor Kobel", position: "Gardien", nationality: "Suisse" },
            { number: 30, name: "Patrick Drewes", position: "Gardien", nationality: "Allemagne" },
            { number: 3, name: "Waldemar Anton", position: "Défenseur", nationality: "Allemagne" },
            { number: 4, name: "Nico Schlotterbeck", position: "Défenseur", nationality: "Allemagne" },
            { number: 5, name: "Ramy Bensebaini", position: "Défenseur", nationality: "Algérie" },
            { number: 24, name: "Daniel Svensson", position: "Défenseur", nationality: "Suède" },
            { number: 26, name: "Julian Ryerson", position: "Défenseur", nationality: "Norvège" },
            { number: 7, name: "Jobe Bellingham", position: "Milieu", nationality: "Angleterre" },
            { number: 8, name: "Felix Nmecha", position: "Milieu", nationality: "Allemagne" },
            { number: 17, name: "Carney Chukwuemeka", position: "Milieu", nationality: "Angleterre" },
            { number: 20, name: "Marcel Sabitzer", position: "Milieu", nationality: "Autriche" },
            { number: 25, name: "Joey Veerman", position: "Milieu", nationality: "Pays-Bas" },
            { number: 9, name: "Serhou Guirassy", position: "Attaquant", nationality: "Guinée" },
            { number: 14, name: "Maximilian Beier", position: "Attaquant", nationality: "Allemagne" },
            { number: 21, name: "Fábio Silva", position: "Attaquant", nationality: "Portugal" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Borussia Dortmund", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Borussia Dortmund" },
            { date: "Octobre 2026", home: "Borussia Dortmund", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Borussia Dortmund", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Borussia Dortmund" },
            { date: "Décembre 2026", home: "Borussia Dortmund", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Allemagne", count: 8 },
            { name: "Coupe d'Allemagne", count: 5 },
            { name: "Supercoupe d'Allemagne", count: 6 },
            { name: "Ligue des champions", count: 1 },
            { name: "Coupe des vainqueurs de coupe", count: 1 },
            { name: "Coupe intercontinentale", count: 1 }
        ]
    },
        bodo: {
        city: "Bodø",
        stadium: "Aspmyra Stadion",
        founded: "1916",
        coach: "Kjetil Knutsen",
        logo: "🟡⚫",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 7,
            goalsAgainst: 5,
            points: 6
        },
        players: [
            { number: 12, name: "Nikita Haikin", position: "Gardien", nationality: "Russie" },
            { number: 1, name: "Julian Faye Lund", position: "Gardien", nationality: "Norvège" },
            { number: 2, name: "Villads Nielsen", position: "Défenseur", nationality: "Danemark" },
            { number: 4, name: "Odin Bjørtuft", position: "Défenseur", nationality: "Norvège" },
            { number: 5, name: "Haitam Aleesami", position: "Défenseur", nationality: "Norvège" },
            { number: 6, name: "Jostein Gundersen", position: "Défenseur", nationality: "Norvège" },
            { number: 15, name: "Fredrik Bjørkan", position: "Défenseur", nationality: "Norvège" },
            { number: 7, name: "Patrick Berg", position: "Milieu", nationality: "Norvège" },
            { number: 8, name: "Sondre Auklend", position: "Milieu", nationality: "Norvège" },
            { number: 14, name: "Ulrik Saltnes", position: "Milieu", nationality: "Norvège" },
            { number: 19, name: "Sondre Brunstad Fet", position: "Milieu", nationality: "Norvège" },
            { number: 26, name: "Håkon Evjen", position: "Milieu", nationality: "Norvège" },
            { number: 9, name: "Andreas Helmersen", position: "Attaquant", nationality: "Norvège" },
            { number: 10, name: "Jens Petter Hauge", position: "Attaquant", nationality: "Norvège" },
            { number: 11, name: "Ole Didrik Blomberg", position: "Attaquant", nationality: "Norvège" },
            { number: 17, name: "Ola Brynhildsen", position: "Attaquant", nationality: "Norvège" },
            { number: 22, name: "Joel Mvuka", position: "Attaquant", nationality: "Norvège" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Bodø/Glimt", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Bodø/Glimt" },
            { date: "Octobre 2026", home: "Bodø/Glimt", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Bodø/Glimt", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Bodø/Glimt" },
            { date: "Décembre 2026", home: "Bodø/Glimt", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat de Norvège", count: 4 },
            { name: "Coupe de Norvège", count: 2 },
            { name: "Supercoupe de Norvège", count: 1 }
        ]
    },

    aek: {
        city: "Athènes",
        stadium: "OPAP Arena",
        founded: "1924",
        coach: "Marko Nikolić",
        logo: "🟡⚫",
        stats: {
            matches: 3,
            wins: 2,
            draws: 1,
            losses: 0,
            goalsFor: 6,
            goalsAgainst: 3,
            points: 7
        },
        players: [
            { number: 1, name: "Thomas Strakosha", position: "Gardien", nationality: "Albanie" },
            { number: 91, name: "Alberto Brignoli", position: "Gardien", nationality: "Italie" },
            { number: 2, name: "Harold Moukoudi", position: "Défenseur", nationality: "Cameroun" },
            { number: 3, name: "Stavros Pilios", position: "Défenseur", nationality: "Grèce" },
            { number: 12, name: "Lazaros Rota", position: "Défenseur", nationality: "Grèce" },
            { number: 21, name: "Domagoj Vida", position: "Défenseur", nationality: "Croatie" },
            { number: 44, name: "Filipe Relvas", position: "Défenseur", nationality: "Portugal" },
            { number: 6, name: "Kaan Kairinen", position: "Milieu", nationality: "Finlande" },
            { number: 8, name: "Mijat Gaćinović", position: "Milieu", nationality: "Serbie" },
            { number: 14, name: "Lovro Majer", position: "Milieu", nationality: "Croatie" },
            { number: 18, name: "Răzvan Marin", position: "Milieu", nationality: "Roumanie" },
            { number: 20, name: "Petros Mantalos", position: "Milieu", nationality: "Grèce" },
            { number: 9, name: "Luka Jović", position: "Attaquant", nationality: "Serbie" },
            { number: 10, name: "Oleksandr Zubkov", position: "Attaquant", nationality: "Ukraine" },
            { number: 19, name: "Barnabás Varga", position: "Attaquant", nationality: "Hongrie" },
            { number: 90, name: "Zini", position: "Attaquant", nationality: "Angola" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "AEK Athènes", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "AEK Athènes" },
            { date: "Octobre 2026", home: "AEK Athènes", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "AEK Athènes", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "AEK Athènes" },
            { date: "Décembre 2026", home: "AEK Athènes", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat de Grèce", count: 14 },
            { name: "Coupe de Grèce", count: 16 },
            { name: "Supercoupe de Grèce", count: 3 }
        ]
    },

    atletico: {
        city: "Madrid",
        stadium: "Riyadh Air Metropolitano",
        founded: "1903",
        coach: "Diego Simeone",
        logo: "🔴⚪",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 6,
            goalsAgainst: 4,
            points: 6
        },
        players: [
            { number: 1, name: "Juan Musso", position: "Gardien", nationality: "Argentine" },
            { number: 13, name: "Jan Oblak", position: "Gardien", nationality: "Slovénie" },
            { number: 17, name: "Dávid Hancko", position: "Défenseur", nationality: "Slovaquie" },
            { number: 18, name: "Marc Pubill", position: "Défenseur", nationality: "Espagne" },
            { number: 21, name: "Cristian Romero", position: "Défenseur", nationality: "Argentine" },
            { number: 22, name: "Alejandro Grimaldo", position: "Défenseur", nationality: "Espagne" },
            { number: 24, name: "Robin Le Normand", position: "Défenseur", nationality: "Espagne" },
            { number: 3, name: "Obed Vargas", position: "Milieu", nationality: "Mexique" },
            { number: 5, name: "Johnny Cardoso", position: "Milieu", nationality: "États-Unis" },
            { number: 6, name: "Koke", position: "Milieu", nationality: "Espagne" },
            { number: 7, name: "Kang-in Lee", position: "Milieu", nationality: "Corée du Sud" },
            { number: 8, name: "Pablo Barrios", position: "Milieu", nationality: "Espagne" },
            { number: 14, name: "Marcos Llorente", position: "Milieu", nationality: "Espagne" },
            { number: 9, name: "Alexander Sørloth", position: "Attaquant", nationality: "Norvège" },
            { number: 11, name: "Ademola Lookman", position: "Attaquant", nationality: "Nigeria" },
            { number: 15, name: "Jonathan David", position: "Attaquant", nationality: "Canada" },
            { number: 19, name: "Julián Álvarez", position: "Attaquant", nationality: "Argentine" },
            { number: 20, name: "Giuliano Simeone", position: "Attaquant", nationality: "Argentine" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Atlético de Madrid", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Atlético de Madrid" },
            { date: "Octobre 2026", home: "Atlético de Madrid", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Atlético de Madrid", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Atlético de Madrid" },
            { date: "Décembre 2026", home: "Atlético de Madrid", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Espagne", count: 11 },
            { name: "Coupe du Roi", count: 10 },
            { name: "Ligue Europa", count: 3 },
            { name: "Supercoupe de l'UEFA", count: 3 },
            { name: "Coupe intercontinentale", count: 1 }
        ]
    },
    "aston-villa": {
        city: "Birmingham",
        stadium: "Villa Park",
        founded: "1874",
        coach: "Unai Emery",
        logo: "🟣🔵",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 6,
            goalsAgainst: 4,
            points: 6
        },
        players: [
            { number: 23, name: "Emiliano Martínez", position: "Gardien", nationality: "Argentine" },
            { number: 40, name: "Marco Bizot", position: "Gardien", nationality: "Pays-Bas" },
            { number: 2, name: "Matty Cash", position: "Défenseur", nationality: "Pologne" },
            { number: 4, name: "Ezri Konsa", position: "Défenseur", nationality: "Angleterre" },
            { number: 5, name: "Tyrone Mings", position: "Défenseur", nationality: "Angleterre" },
            { number: 12, name: "Lucas Digne", position: "Défenseur", nationality: "France" },
            { number: 14, name: "Pau Torres", position: "Défenseur", nationality: "Espagne" },
            { number: 22, name: "Ian Maatsen", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 6, name: "Ross Barkley", position: "Milieu", nationality: "Angleterre" },
            { number: 8, name: "Youri Tielemans", position: "Milieu", nationality: "Belgique" },
            { number: 24, name: "Amadou Onana", position: "Milieu", nationality: "Belgique" },
            { number: 27, name: "Morgan Rogers", position: "Milieu", nationality: "Angleterre" },
            { number: 7, name: "John McGinn", position: "Milieu", nationality: "Écosse" },
            { number: 9, name: "Tammy Abraham", position: "Attaquant", nationality: "Angleterre" },
            { number: 11, name: "Ollie Watkins", position: "Attaquant", nationality: "Angleterre" },
            { number: 17, name: "Donyell Malen", position: "Attaquant", nationality: "Pays-Bas" },
            { number: 19, name: "Jadon Sancho", position: "Attaquant", nationality: "Angleterre" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Aston Villa", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Aston Villa" },
            { date: "Octobre 2026", home: "Aston Villa", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Aston Villa", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Aston Villa" },
            { date: "Décembre 2026", home: "Aston Villa", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Angleterre", count: 7 },
            { name: "FA Cup", count: 7 },
            { name: "League Cup", count: 5 },
            { name: "Ligue des champions", count: 1 },
            { name: "Supercoupe de l'UEFA", count: 1 },
            { name: "Coupe Intertoto", count: 2 }
        ]
    },

    "man-utd": {
        city: "Manchester",
        stadium: "Old Trafford",
        founded: "1878",
        coach: "Michael Carrick",
        logo: "🔴⚪",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 6,
            goalsAgainst: 4,
            points: 6
        },
        players: [
            { number: 1, name: "Senne Lammens", position: "Gardien", nationality: "Belgique" },
            { number: 12, name: "Karl Darlow", position: "Gardien", nationality: "Pays de Galles" },
            { number: 2, name: "Diogo Dalot", position: "Défenseur", nationality: "Portugal" },
            { number: 3, name: "Noussair Mazraoui", position: "Défenseur", nationality: "Maroc" },
            { number: 4, name: "Matthijs de Ligt", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 5, name: "Harry Maguire", position: "Défenseur", nationality: "Angleterre" },
            { number: 6, name: "Lisandro Martínez", position: "Défenseur", nationality: "Argentine" },
            { number: 15, name: "Leny Yoro", position: "Défenseur", nationality: "France" },
            { number: 8, name: "Bruno Fernandes", position: "Milieu", nationality: "Portugal" },
            { number: 16, name: "Amad Diallo", position: "Milieu", nationality: "Côte d'Ivoire" },
            { number: 18, name: "Youri Tielemans", position: "Milieu", nationality: "Belgique" },
            { number: 25, name: "Manuel Ugarte", position: "Milieu", nationality: "Uruguay" },
            { number: 7, name: "Mason Mount", position: "Milieu", nationality: "Angleterre" },
            { number: 9, name: "Rasmus Højlund", position: "Attaquant", nationality: "Danemark" },
            { number: 10, name: "Matheus Cunha", position: "Attaquant", nationality: "Brésil" },
            { number: 19, name: "Bryan Mbeumo", position: "Attaquant", nationality: "Cameroun" },
            { number: 30, name: "Benjamin Šeško", position: "Attaquant", nationality: "Slovénie" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Manchester United", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Manchester United" },
            { date: "Octobre 2026", home: "Manchester United", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Manchester United", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Manchester United" },
            { date: "Décembre 2026", home: "Manchester United", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Angleterre", count: 20 },
            { name: "FA Cup", count: 13 },
            { name: "League Cup", count: 6 },
            { name: "Ligue des champions", count: 3 },
            { name: "Ligue Europa", count: 1 },
            { name: "Coupe des vainqueurs de coupe", count: 1 },
            { name: "Coupe du monde des clubs", count: 1 }
        ]
    },

    napoli: {
        city: "Naples",
        stadium: "Stadio Diego Armando Maradona",
        founded: "1926",
        coach: "Massimiliano Allegri",
        logo: "🔵⚪",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 5,
            goalsAgainst: 3,
            points: 6
        },
        players: [
            { number: 1, name: "Alex Meret", position: "Gardien", nationality: "Italie" },
            { number: 32, name: "Vanja Milinković-Savić", position: "Gardien", nationality: "Serbie" },
            { number: 13, name: "Amir Rrahmani", position: "Défenseur", nationality: "Kosovo" },
            { number: 16, name: "Rafa Marín", position: "Défenseur", nationality: "Espagne" },
            { number: 17, name: "Mathías Olivera", position: "Défenseur", nationality: "Uruguay" },
            { number: 22, name: "Giovanni Di Lorenzo", position: "Défenseur", nationality: "Italie" },
            { number: 31, name: "Sam Beukema", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 37, name: "Leonardo Spinazzola", position: "Défenseur", nationality: "Italie" },
            { number: 6, name: "Billy Gilmour", position: "Milieu", nationality: "Écosse" },
            { number: 8, name: "Scott McTominay", position: "Milieu", nationality: "Écosse" },
            { number: 11, name: "Kevin De Bruyne", position: "Milieu", nationality: "Belgique" },
            { number: 68, name: "Stanislav Lobotka", position: "Milieu", nationality: "Slovaquie" },
            { number: 99, name: "Frank Anguissa", position: "Milieu", nationality: "Cameroun" },
            { number: 7, name: "David Neres", position: "Attaquant", nationality: "Brésil" },
            { number: 19, name: "Rasmus Højlund", position: "Attaquant", nationality: "Danemark" },
            { number: 21, name: "Matteo Politano", position: "Attaquant", nationality: "Italie" },
            { number: 70, name: "Noa Lang", position: "Attaquant", nationality: "Pays-Bas" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Napoli", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Napoli" },
            { date: "Octobre 2026", home: "Napoli", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Porto", score: "À venir", away: "Napoli" },
            { date: "Novembre 2026", home: "Napoli", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Décembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Napoli" }
        ],
        trophies: [
            { name: "Championnat d'Italie", count: 4 },
            { name: "Coupe d'Italie", count: 6 },
            { name: "Supercoupe d'Italie", count: 3 },
            { name: "Coupe UEFA", count: 1 }
        ]
    },
        porto: {
        city: "Porto",
        stadium: "Estádio do Dragão",
        founded: "1893",
        coach: "Francesco Farioli",
        logo: "🔵⚪",
        stats: {
            matches: 3,
            wins: 0,
            draws: 0,
            losses: 3,
            goalsFor: 2,
            goalsAgainst: 6,
            points: 0
        },
        players: [
            { number: 99, name: "Diogo Costa", position: "Gardien", nationality: "Portugal" },
            { number: 1, name: "Cláudio Ramos", position: "Gardien", nationality: "Portugal" },
            { number: 3, name: "Thiago Silva", position: "Défenseur", nationality: "Brésil" },
            { number: 4, name: "Jakub Kiwior", position: "Défenseur", nationality: "Pologne" },
            { number: 5, name: "Jan Bednarek", position: "Défenseur", nationality: "Pologne" },
            { number: 12, name: "Zaidu Sanusi", position: "Défenseur", nationality: "Nigeria" },
            { number: 20, name: "Alberto Costa", position: "Défenseur", nationality: "Portugal" },
            { number: 23, name: "João Mário", position: "Défenseur", nationality: "Portugal" },
            { number: 6, name: "Pablo Rosario", position: "Milieu", nationality: "République dominicaine" },
            { number: 8, name: "Marko Grujić", position: "Milieu", nationality: "Serbie" },
            { number: 10, name: "Gabri Veiga", position: "Milieu", nationality: "Espagne" },
            { number: 22, name: "Alan Varela", position: "Milieu", nationality: "Argentine" },
            { number: 7, name: "William Gomes", position: "Attaquant", nationality: "Brésil" },
            { number: 9, name: "Samu Omorodion", position: "Attaquant", nationality: "Espagne" },
            { number: 11, name: "Pepê", position: "Attaquant", nationality: "Brésil" },
            { number: 17, name: "Gabriel Veiga", position: "Milieu", nationality: "Espagne" },
            { number: 27, name: "Deniz Gül", position: "Attaquant", nationality: "Turquie" }
        ],
        pastMatches: [
            { date: "8 septembre 2026", home: "Porto", score: "0 - 2", away: "Manchester City" },
            { date: "14 octobre 2026", home: "Real Betis", score: "3 - 2", away: "Porto" },
            { date: "20 octobre 2026", home: "Porto", score: "0 - 1", away: "PSV Eindhoven" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "Porto", score: "À venir", away: "Napoli" },
            { date: "24 novembre 2026", home: "Feyenoord", score: "À venir", away: "Porto" },
            { date: "Janvier 2027", home: "Porto", score: "À venir", away: "Slavia Prague" }
        ],
        trophies: [
            { name: "Championnat du Portugal", count: 30 },
            { name: "Coupe du Portugal", count: 20 },
            { name: "Supercoupe du Portugal", count: 24 },
            { name: "Ligue des champions", count: 2 },
            { name: "Ligue Europa", count: 2 },
            { name: "Coupe intercontinentale", count: 2 }
        ]
    },

    psv: {
        city: "Eindhoven",
        stadium: "Philips Stadion",
        founded: "1913",
        coach: "Peter Bosz",
        logo: "🔴⚪",
        stats: {
            matches: 2,
            wins: 1,
            draws: 1,
            losses: 0,
            goalsFor: 3,
            goalsAgainst: 2,
            points: 4
        },
        players: [
            { number: 1, name: "Matej Kovář", position: "Gardien", nationality: "Tchéquie" },
            { number: 16, name: "Joël Drommel", position: "Gardien", nationality: "Pays-Bas" },
            { number: 2, name: "Sergiño Dest", position: "Défenseur", nationality: "États-Unis" },
            { number: 3, name: "Yarek Gasiorowski", position: "Défenseur", nationality: "Espagne" },
            { number: 4, name: "Armando Obispo", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 5, name: "Anass Salah-Eddine", position: "Défenseur", nationality: "Maroc" },
            { number: 8, name: "Jerdy Schouten", position: "Milieu", nationality: "Pays-Bas" },
            { number: 10, name: "Guus Til", position: "Milieu", nationality: "Pays-Bas" },
            { number: 17, name: "Mauro Júnior", position: "Milieu", nationality: "Brésil" },
            { number: 22, name: "Johan Bakayoko", position: "Attaquant", nationality: "Belgique" },
            { number: 23, name: "Joey Veerman", position: "Milieu", nationality: "Pays-Bas" },
            { number: 27, name: "Hirving Lozano", position: "Attaquant", nationality: "Mexique" },
            { number: 7, name: "Malik Tillman", position: "Milieu", nationality: "États-Unis" },
            { number: 9, name: "Ricardo Pepi", position: "Attaquant", nationality: "États-Unis" },
            { number: 11, name: "Noa Lang", position: "Attaquant", nationality: "Pays-Bas" },
            { number: 14, name: "Couhaib Driouech", position: "Attaquant", nationality: "Maroc" },
            { number: 20, name: "Ivan Perišić", position: "Attaquant", nationality: "Croatie" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "PSV Eindhoven", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "13 octobre 2026", home: "RB Leipzig", score: "1 - 0", away: "PSV Eindhoven" },
            { date: "20 octobre 2026", home: "Porto", score: "0 - 1", away: "PSV Eindhoven" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "PSV Eindhoven", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "PSV Eindhoven" },
            { date: "Décembre 2026", home: "PSV Eindhoven", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat des Pays-Bas", count: 26 },
            { name: "Coupe des Pays-Bas", count: 11 },
            { name: "Supercoupe des Pays-Bas", count: 15 },
            { name: "Coupe UEFA", count: 1 },
            { name: "Coupe des clubs champions", count: 1 }
        ]
    },

    betis: {
        city: "Séville",
        stadium: "Estadio Benito Villamarín",
        founded: "1907",
        coach: "Manuel Pellegrini",
        logo: "🟢⚪",
        stats: {
            matches: 3,
            wins: 2,
            draws: 1,
            losses: 0,
            goalsFor: 6,
            goalsAgainst: 3,
            points: 7
        },
        players: [
            { number: 1, name: "Álvaro Vallés", position: "Gardien", nationality: "Espagne" },
            { number: 13, name: "Diego Conde", position: "Gardien", nationality: "Espagne" },
            { number: 2, name: "Héctor Bellerín", position: "Défenseur", nationality: "Espagne" },
            { number: 3, name: "Diego Llorente", position: "Défenseur", nationality: "Espagne" },
            { number: 4, name: "Natan", position: "Défenseur", nationality: "Brésil" },
            { number: 5, name: "Marc Bartra", position: "Défenseur", nationality: "Espagne" },
            { number: 11, name: "Fran García", position: "Défenseur", nationality: "Espagne" },
            { number: 16, name: "Valentín Gómez", position: "Défenseur", nationality: "Argentine" },
            { number: 6, name: "Facundo Bernal", position: "Milieu", nationality: "Uruguay" },
            { number: 8, name: "Pablo Fornals", position: "Milieu", nationality: "Espagne" },
            { number: 18, name: "Nelson Deossa", position: "Milieu", nationality: "Colombie" },
            { number: 20, name: "Giovani Lo Celso", position: "Milieu", nationality: "Argentine" },
            { number: 22, name: "Isco", position: "Milieu", nationality: "Espagne" },
            { number: 7, name: "Antony", position: "Attaquant", nationality: "Brésil" },
            { number: 9, name: "Cucho Hernández", position: "Attaquant", nationality: "Colombie" },
            { number: 10, name: "Abde Ezzalzouli", position: "Attaquant", nationality: "Maroc" },
            { number: 19, name: "Troy Parrott", position: "Attaquant", nationality: "Irlande" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Real Betis", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Real Betis" },
            { date: "Octobre 2026", home: "Real Betis", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Real Betis", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Real Betis" },
            { date: "Décembre 2026", home: "Real Betis", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Coupe du Roi", count: 3 },
            { name: "Championnat de deuxième division", count: 7 }
        ]
    },
        roma: {
        city: "Rome",
        stadium: "Stadio Olimpico",
        founded: "1927",
        coach: "Gian Piero Gasperini",
        logo: "🟡🔴",
        stats: {
            matches: 3,
            wins: 2,
            draws: 1,
            losses: 0,
            goalsFor: 5,
            goalsAgainst: 2,
            points: 7
        },
        players: [
            { number: 95, name: "Pierluigi Gollini", position: "Gardien", nationality: "Italie" },
            { number: 2, name: "Devyne Rensch", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 3, name: "Konstantinos Koulierakis", position: "Défenseur", nationality: "Grèce" },
            { number: 5, name: "Evan Ndicka", position: "Défenseur", nationality: "Côte d'Ivoire" },
            { number: 20, name: "Nahuel Molina", position: "Défenseur", nationality: "Argentine" },
            { number: 22, name: "Mario Hermoso", position: "Défenseur", nationality: "Espagne" },
            { number: 23, name: "Gianluca Mancini", position: "Défenseur", nationality: "Italie" },
            { number: 43, name: "Wesley França", position: "Défenseur", nationality: "Brésil" },
            { number: 4, name: "Bryan Cristante", position: "Milieu", nationality: "Italie" },
            { number: 7, name: "Lorenzo Pellegrini", position: "Milieu", nationality: "Italie" },
            { number: 15, name: "Marten de Roon", position: "Milieu", nationality: "Pays-Bas" },
            { number: 17, name: "Manu Koné", position: "Milieu", nationality: "France" },
            { number: 61, name: "Niccolò Pisilli", position: "Milieu", nationality: "Italie" },
            { number: 9, name: "Santiago Castro", position: "Attaquant", nationality: "Argentine" },
            { number: 14, name: "Donyell Malen", position: "Attaquant", nationality: "Pays-Bas" },
            { number: 18, name: "Matías Soulé", position: "Attaquant", nationality: "Argentine" },
            { number: 21, name: "Paulo Dybala", position: "Attaquant", nationality: "Argentine" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "AS Roma", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "AS Roma" },
            { date: "Octobre 2026", home: "AS Roma", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "AS Roma", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "AS Roma" },
            { date: "Décembre 2026", home: "AS Roma", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Italie", count: 3 },
            { name: "Coupe d'Italie", count: 9 },
            { name: "Ligue Europa Conférence", count: 1 },
            { name: "Supercoupe d'Italie", count: 2 }
        ]
    },

    sabah: {
        city: "Bakou",
        stadium: "Bank Respublika Arena",
        founded: "2017",
        coach: "Valdas Dambrauskas",
        logo: "🔵⚪",
        stats: {
            matches: 3,
            wins: 1,
            draws: 1,
            losses: 1,
            goalsFor: 4,
            goalsAgainst: 4,
            points: 4
        },
        players: [
            { number: 1, name: "Yusif Imanov", position: "Gardien", nationality: "Azerbaïdjan" },
            { number: 4, name: "Joy-Lance Mickels", position: "Défenseur", nationality: "Allemagne" },
            { number: 5, name: "Amin Seydiyev", position: "Défenseur", nationality: "Azerbaïdjan" },
            { number: 13, name: "Elvin Jafarguliyev", position: "Défenseur", nationality: "Azerbaïdjan" },
            { number: 17, name: "Hojjat Haghverdi", position: "Défenseur", nationality: "Iran" },
            { number: 6, name: "Jesse Sekidika", position: "Milieu", nationality: "Nigeria" },
            { number: 8, name: "Jesse Joronen", position: "Milieu", nationality: "Finlande" },
            { number: 10, name: "Christian", position: "Milieu", nationality: "Brésil" },
            { number: 14, name: "Elvin Badalov", position: "Milieu", nationality: "Azerbaïdjan" },
            { number: 20, name: "Aleksey Isayev", position: "Milieu", nationality: "Azerbaïdjan" },
            { number: 7, name: "Joy-Lance Mickels", position: "Attaquant", nationality: "Allemagne" },
            { number: 9, name: "Kaheem Parris", position: "Attaquant", nationality: "Jamaïque" },
            { number: 11, name: "Nariman Akhundzade", position: "Attaquant", nationality: "Azerbaïdjan" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Sabah FK", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Sabah FK" },
            { date: "Octobre 2026", home: "Sabah FK", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Sabah FK", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Sabah FK" },
            { date: "Décembre 2026", home: "Sabah FK", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Azerbaïdjan", count: 0 },
            { name: "Coupe d'Azerbaïdjan", count: 0 }
        ]
    },

    shakhtar: {
        city: "Donetsk",
        stadium: "Stade temporaire en compétition européenne",
        founded: "1936",
        coach: "Arda Turan",
        logo: "🟠⚫",
        stats: {
            matches: 3,
            wins: 2,
            draws: 0,
            losses: 1,
            goalsFor: 6,
            goalsAgainst: 4,
            points: 6
        },
        players: [
            { number: 31, name: "Dmytro Riznyk", position: "Gardien", nationality: "Ukraine" },
            { number: 23, name: "Kiril Fesiun", position: "Gardien", nationality: "Ukraine" },
            { number: 4, name: "Marlon Santos", position: "Défenseur", nationality: "Brésil" },
            { number: 5, name: "Valeriy Bondar", position: "Défenseur", nationality: "Ukraine" },
            { number: 13, name: "Pedro Henrique", position: "Défenseur", nationality: "Brésil" },
            { number: 16, name: "Irakli Azarov", position: "Défenseur", nationality: "Géorgie" },
            { number: 17, name: "Vinícius Tobias", position: "Défenseur", nationality: "Brésil" },
            { number: 20, name: "Oleksandr Karavaiev", position: "Défenseur", nationality: "Ukraine" },
            { number: 22, name: "Mykola Matviyenko", position: "Défenseur", nationality: "Ukraine" },
            { number: 6, name: "Marlon Gomes", position: "Milieu", nationality: "Brésil" },
            { number: 8, name: "Dmytro Kryskiv", position: "Milieu", nationality: "Ukraine" },
            { number: 10, name: "Pedrinho", position: "Milieu", nationality: "Brésil" },
            { number: 14, name: "Isaque", position: "Milieu", nationality: "Brésil" },
            { number: 24, name: "Viktor Tsukanov", position: "Milieu", nationality: "Ukraine" },
            { number: 30, name: "Alisson Santana", position: "Attaquant", nationality: "Brésil" },
            { number: 9, name: "Kauã Elias", position: "Attaquant", nationality: "Brésil" },
            { number: 49, name: "Luca Meirelles", position: "Attaquant", nationality: "Brésil" }
        ],
        pastMatches: [
            { date: "Septembre 2026", home: "Shakhtar Donetsk", score: "À vérifier", away: "Adversaire à confirmer" },
            { date: "Octobre 2026", home: "Adversaire à confirmer", score: "À vérifier", away: "Shakhtar Donetsk" },
            { date: "Octobre 2026", home: "Shakhtar Donetsk", score: "À vérifier", away: "Adversaire à confirmer" }
        ],
        upcomingMatches: [
            { date: "Novembre 2026", home: "Shakhtar Donetsk", score: "À venir", away: "Adversaire à confirmer" },
            { date: "Novembre 2026", home: "Adversaire à confirmer", score: "À venir", away: "Shakhtar Donetsk" },
            { date: "Décembre 2026", home: "Shakhtar Donetsk", score: "À venir", away: "Adversaire à confirmer" }
        ],
        trophies: [
            { name: "Championnat d'Ukraine", count: 15 },
            { name: "Coupe d'Ukraine", count: 14 },
            { name: "Supercoupe d'Ukraine", count: 9 },
            { name: "Coupe UEFA", count: 1 }
        ]
    },
            slavia: {
        city: "Prague, République tchèque",
        stadium: "Fortuna Arena",
        founded: 1892,
        coach: "Jindřich Trpišovský",
        logo: "",
        stats: {
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        },
        players: [
            { number: 1, name: "Ondřej Kolář", position: "Gardien", nationality: "Tchéquie" },
            { number: 3, name: "Tomáš Holeš", position: "Défenseur", nationality: "Tchéquie" },
            { number: 4, name: "David Zima", position: "Défenseur", nationality: "Tchéquie" },
            { number: 5, name: "Igoh Ogbu", position: "Défenseur", nationality: "Nigeria" },
            { number: 17, name: "Lukáš Provod", position: "Milieu", nationality: "Tchéquie" },
            { number: 23, name: "Michal Sadílek", position: "Milieu", nationality: "Tchéquie" },
            { number: 13, name: "Mojmír Chytil", position: "Attaquant", nationality: "Tchéquie" },
            { number: 25, name: "Tomáš Chorý", position: "Attaquant", nationality: "Tchéquie" }
        ],
        pastMatches: [
            { date: "24 octobre 2026", home: "Slavia Prague", score: "1 - 1", away: "Mladá Boleslav" },
            { date: "27 octobre 2026", home: "Slavia Prague", score: "4 - 0", away: "Zbrojovka Brno" },
            { date: "31 octobre 2026", home: "Jablonec", score: "0 - 5", away: "Slavia Prague" }
        ],
        upcomingMatches: [
            { date: "4 novembre 2026", home: "Slavia Prague", score: "À venir", away: "Arsenal" },
            { date: "8 novembre 2026", home: "Slavia Prague", score: "À venir", away: "Artis Brno" },
            { date: "21 novembre 2026", home: "Sigma Olomouc", score: "À venir", away: "Slavia Prague" }
        ],
        trophies: [
            { name: "Championnat de Tchéquie", count: 7 },
            { name: "Coupe de Tchéquie", count: 7 }
        ]
    },
        villarreal: {
        city: "Villarreal, Espagne",
        stadium: "Estadio de la Cerámica",
        founded: 1923,
        coach: "Iñigo Pérez",
        logo: "",
        stats: {
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        },
        players: [
            { number: 1, name: "Luiz Júnior", position: "Gardien", nationality: "Brésil" },
            { number: 2, name: "Logan Costa", position: "Défenseur", nationality: "Cap-Vert" },
            { number: 8, name: "Juan Foyth", position: "Défenseur", nationality: "Argentine" },
            { number: 12, name: "Renato Veiga", position: "Défenseur", nationality: "Portugal" },
            { number: 20, name: "Carlos Romero", position: "Défenseur", nationality: "Espagne" },
            { number: 10, name: "Alberto Moleiro", position: "Milieu", nationality: "Espagne" },
            { number: 14, name: "Santi Comesaña", position: "Milieu", nationality: "Espagne" },
            { number: 18, name: "Pape Gueye", position: "Milieu", nationality: "Sénégal" },
            { number: 7, name: "Gerard Moreno", position: "Attaquant", nationality: "Espagne" },
            { number: 9, name: "Georges Mikautadze", position: "Attaquant", nationality: "Géorgie" },
            { number: 19, name: "Nicolas Pépé", position: "Attaquant", nationality: "Côte d’Ivoire" },
            { number: 22, name: "Ayoze Pérez", position: "Attaquant", nationality: "Espagne" }
        ],
        pastMatches: [
            { date: "24 octobre 2026", home: "Valence", score: "1 - 2", away: "Villarreal" },
            { date: "27 octobre 2026", home: "Manacor", score: "0 - 5", away: "Villarreal" },
            { date: "30 octobre 2026", home: "Villarreal", score: "0 - 1", away: "Espanyol" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Villarreal", score: "À venir", away: "Paris Saint-Germain" },
            { date: "8 novembre 2026", home: "Villarreal", score: "À venir", away: "Getafe" },
            { date: "22 novembre 2026", home: "FC Barcelone", score: "À venir", away: "Villarreal" }
        ],
        trophies: [
            { name: "Ligue Europa", count: 1 },
            { name: "Supercoupe de l'UEFA", count: 1 },
            { name: "Coupe Intertoto", count: 2 }
        ]
    },
        slovan: {
        name: "Slovan Bratislava",
        city: "Bratislava",
        stadium: "Tehelné pole",
        founded: "1919",
        coach: "Yaya Touré",
        logo: "⚪🔵",
        stats: {
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        },
        players: [
            { number: 1, name: "Aleksandar Popović", position: "Gardien", nationality: "Serbie" },
            { number: 32, name: "Dávid Balog", position: "Gardien", nationality: "Slovaquie" },
            { number: 44, name: "Matúš Macík", position: "Gardien", nationality: "Slovaquie" },
            { number: 71, name: "Dominik Takáč", position: "Gardien", nationality: "Slovaquie" },
            { number: 2, name: "Samuel Kozlovský", position: "Défenseur", nationality: "Slovaquie" },
            { number: 6, name: "Kevin Wimmer", position: "Défenseur", nationality: "Autriche" },
            { number: 12, name: "Kenan Bajrić", position: "Défenseur", nationality: "Slovénie" },
            { number: 15, name: "Svetozar Marković", position: "Défenseur", nationality: "Serbie" },
            { number: 28, name: "César Blackman", position: "Défenseur", nationality: "Panama" },
            { number: 49, name: "Sahmkou Camara", position: "Défenseur", nationality: "Guinée" },
            { number: 57, name: "Sandro Cruz", position: "Défenseur", nationality: "Angola" },
            { number: 3, name: "Peter Pokorný", position: "Milieu", nationality: "Slovaquie" },
            { number: 5, name: "Rahim Ibrahim", position: "Milieu", nationality: "Ghana" },
            { number: 8, name: "Artur Gajdoš", position: "Milieu", nationality: "Slovaquie" },
            { number: 11, name: "Tigran Barseghyan", position: "Milieu", nationality: "Arménie" },
            { number: 20, name: "Alen Mustafić", position: "Milieu", nationality: "Bosnie-Herzégovine" },
            { number: 70, name: "Cristian Martínez", position: "Milieu", nationality: "Panama" },
            { number: 77, name: "Danylo Ihnatenko", position: "Milieu", nationality: "Ukraine" },
            { number: 88, name: "Daiki Matsuoka", position: "Milieu", nationality: "Japon" },
            { number: 10, name: "Nino Marcelli", position: "Attaquant", nationality: "Slovaquie" },
            { number: 13, name: "Roman Čerepkai", position: "Attaquant", nationality: "Slovaquie" },
            { number: 14, name: "Alasana Yirajang", position: "Attaquant", nationality: "Gambie" },
            { number: 21, name: "Suleiman Camara", position: "Attaquant", nationality: "Gambie" },
            { number: 99, name: "Andraž Šporar", position: "Attaquant", nationality: "Slovénie" }
        ],
        pastMatches: [
            { date: "24 octobre 2026", home: "Slovan Bratislava", score: "2 - 2", away: "Dukla Banská Bystrica" },
            { date: "28 octobre 2026", home: "Trenčín", score: "0 - 2", away: "Slovan Bratislava" },
            { date: "31 octobre 2026", home: "Podbrezová", score: "1 - 2", away: "Slovan Bratislava" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "LASK", score: "À venir", away: "Slovan Bratislava" },
            { date: "7 novembre 2026", home: "Slovan Bratislava", score: "À venir", away: "Trenčín" },
            { date: "21 novembre 2026", home: "Ružomberok", score: "À venir", away: "Slovan Bratislava" }
        ],
        trophies: [
            { name: "Championnat de Slovaquie", count: 24 },
            { name: "Coupe de Slovaquie", count: 17 },
            { name: "Coupe des vainqueurs de coupe", count: 1 }
        ]
    },
        sporting: {
        city: "Lisbonne, Portugal",
        stadium: "Estádio José Alvalade",
        founded: 1906,
        coach: "Rui Borges",
        logo: "",
        stats: {
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        },
        players: [
            { number: 1, name: "Rui Silva", position: "Gardien", nationality: "Portugal" },
            { number: 6, name: "Zeno Debast", position: "Défenseur", nationality: "Belgique" },
            { number: 25, name: "Gonçalo Inácio", position: "Défenseur", nationality: "Portugal" },
            { number: 22, name: "Iván Fresneda", position: "Défenseur", nationality: "Espagne" },
            { number: 72, name: "Eduardo Quaresma", position: "Défenseur", nationality: "Portugal" },
            { number: 17, name: "Rodrigo Zalazar", position: "Milieu", nationality: "Uruguay" },
            { number: 20, name: "Maximiliano Araújo", position: "Milieu", nationality: "Uruguay" },
            { number: 21, name: "Pedro Lima", position: "Milieu", nationality: "Brésil" },
            { number: 7, name: "Fotis Ioannidis", position: "Attaquant", nationality: "Grèce" },
            { number: 10, name: "Geny Catamo", position: "Attaquant", nationality: "Mozambique" },
            { number: 31, name: "Luis Guilherme", position: "Attaquant", nationality: "Brésil" },
            { number: 97, name: "Luis Suárez", position: "Attaquant", nationality: "Colombie" }
        ],
        pastMatches: [
            { date: "21 octobre 2026", home: "Sporting CP", score: "2 - 1", away: "LASK" },
            { date: "25 octobre 2026", home: "Sporting CP", score: "2 - 2", away: "Santa Clara" },
            { date: "31 octobre 2026", home: "Casa Pia", score: "1 - 1", away: "Sporting CP" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Shakhtar Donetsk", score: "À venir", away: "Sporting CP" },
            { date: "7 novembre 2026", home: "Sporting CP", score: "À venir", away: "União de Leiria" },
            { date: "21 novembre 2026", home: "Oriental", score: "À venir", away: "Sporting CP" }
        ],
        trophies: [
            { name: "Championnat du Portugal", count: 21 },
            { name: "Coupe du Portugal", count: 18 },
            { name: "Coupe des vainqueurs de coupe", count: 1 }
        ]
    },
        stuttgart: {
        city: "Stuttgart, Allemagne",
        stadium: "MHPArena",
        founded: 1893,
        coach: "Sebastian Hoeneß",
        logo: "",
        stats: {
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            points: 0
        },
        players: [
            { number: 1, name: "Fabian Bredlow", position: "Gardien", nationality: "Allemagne" },
            { number: 2, name: "Ameen Al-Dakhil", position: "Défenseur", nationality: "Belgique" },
            { number: 3, name: "Ramon Hendriks", position: "Défenseur", nationality: "Pays-Bas" },
            { number: 7, name: "Maximilian Mittelstädt", position: "Défenseur", nationality: "Allemagne" },
            { number: 24, name: "Jeff Chabot", position: "Défenseur", nationality: "Allemagne" },
            { number: 6, name: "Angelo Stiller", position: "Milieu", nationality: "Allemagne" },
            { number: 11, name: "Bilal El Khannouss", position: "Milieu", nationality: "Maroc" },
            { number: 16, name: "Atakan Karazor", position: "Milieu", nationality: "Allemagne" },
            { number: 8, name: "Tiago Tomás", position: "Attaquant", nationality: "Portugal" },
            { number: 9, name: "Ermedin Demirović", position: "Attaquant", nationality: "Bosnie-Herzégovine" },
            { number: 18, name: "Jamie Leweling", position: "Attaquant", nationality: "Allemagne" },
            { number: 26, name: "Deniz Undav", position: "Attaquant", nationality: "Allemagne" }
        ],
        pastMatches: [
            { date: "23 octobre 2026", home: "Stuttgart", score: "2 - 3", away: "Borussia Mönchengladbach" },
            { date: "28 octobre 2026", home: "Paderborn", score: "0 - 1", away: "Stuttgart" },
            { date: "31 octobre 2026", home: "Bayer Leverkusen", score: "2 - 4", away: "Stuttgart" }
        ],
        upcomingMatches: [
            { date: "3 novembre 2026", home: "Galatasaray", score: "À venir", away: "Stuttgart" },
            { date: "7 novembre 2026", home: "Stuttgart", score: "À venir", away: "Werder Brême" },
            { date: "21 novembre 2026", home: "Schalke 04", score: "À venir", away: "Stuttgart" }
        ],
        trophies: [
            { name: "Championnat d'Allemagne", count: 5 },
            { name: "Coupe d'Allemagne", count: 4 },
            { name: "Supercoupe d'Allemagne", count: 1 }
        ]
    }
};
const emptyClubData = {
    city: "",
    stadium: "",
    founded: "",
    coach: "",
    logo: "⚽",
    stats: null,
    players: [],
    pastMatches: [],
    upcomingMatches: [],
    trophies: []
};

const $ = id => document.getElementById(id);

const clubSelector = document.createElement("select");
clubSelector.id = "clubSelector";
clubSelector.setAttribute("aria-label", "Choisir un club");

clubSelector.innerHTML = clubs
    .map(club => `<option value="${club.id}">${club.name}</option>`)
    .join("");

clubSelector.style.cssText = [
    "display:block",
    "width:min(100%,360px)",
    "margin-top:18px",
    "padding:12px 14px",
    "background:#0b192b",
    "color:#f4f7ff",
    "border:1px solid #2861a0",
    "border-radius:9px",
    "font:inherit",
    "font-size:13px"
].join(";");

const heroContent = document.querySelector(".hero-content");

if (heroContent) {
    const selectorLabel = document.createElement("label");
    selectorLabel.htmlFor = "clubSelector";
    selectorLabel.textContent = "Choisir un club";
    selectorLabel.style.cssText =
        "display:block;margin-top:20px;color:#9db2d0;font-size:12px;font-weight:700";

    heroContent.appendChild(selectorLabel);
    heroContent.appendChild(clubSelector);
}

function setText(id, value, fallback = "À compléter") {
    const element = $(id);

    if (element) {
        element.textContent =
            value !== undefined && value !== null && value !== ""
                ? value
                : fallback;
    }
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

const FAVORITES_STORAGE_KEY = "footzone_player_favorites";

function getPlayerFavorites() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    } catch {
        return [];
    }
}

function savePlayerFavorites(favorites) {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}

function playerFavoriteId(player, clubId) {
    return `${clubId}::${player.number ?? ""}::${player.name || ""}`;
}

function isPlayerFavorite(player, clubId) {
    const id = playerFavoriteId(player, clubId);
    return getPlayerFavorites().some(favorite => favorite.id === id);
}

function togglePlayerFavorite(player, clubId) {
    const favorites = getPlayerFavorites();
    const id = playerFavoriteId(player, clubId);
    const index = favorites.findIndex(favorite => favorite.id === id);

    if (index >= 0) {
        favorites.splice(index, 1);
    } else {
        const club = clubs.find(item => item.id === clubId);
        favorites.push({
            id,
            clubId,
            clubName: club ? club.name : clubId,
            name: player.name || "Joueur",
            number: player.number ?? "—",
            position: player.position || "Poste non renseigné",
            nationality: player.nationality || ""
        });
    }

    savePlayerFavorites(favorites);
}


function renderPlayers(players) {
    const table = $("playersTable");
    if (!table) return;

    const search = $("playerSearch");
    const query = search ? search.value.trim().toLowerCase() : "";
    const clubId = clubSelector.value;

    const filtered = players.filter(player =>
        [player.name, player.position, player.nationality]
            .join(" ")
            .toLowerCase()
            .includes(query)
    );

    if (filtered.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="5">
                    ${players.length === 0
                        ? "L'effectif de ce club doit être ajouté dans club.js."
                        : "Aucun joueur ne correspond à ta recherche."}
                </td>
            </tr>
        `;
    } else {
        table.innerHTML = filtered.map(player => {
            const favori = isPlayerFavorite(player, clubId);

            return `
                <tr>
                    <td>${escapeHTML(player.number ?? "—")}</td>
                    <td>
                        ${escapeHTML(player.name || "À compléter")}
                        <button
                            type="button"
                            class="favorite-star"
                            data-favorite-player="${escapeHTML(player.name || "")}"
                            data-favorite-number="${escapeHTML(player.number ?? "")}"
                            aria-label="${favori ? "Retirer des favoris" : "Ajouter aux favoris"}"
                            title="${favori ? "Retirer des favoris" : "Ajouter aux favoris"}"
                            style="background:none;border:none;cursor:pointer;font-size:20px;color:${favori ? "#ffc83d" : "#8b9bb4"};margin-left:8px">
                            ${favori ? "★" : "☆"}
                        </button>
                    </td>
                    <td>${escapeHTML(player.position || "À compléter")}</td>
                    <td>${escapeHTML(player.nationality || "À compléter")}</td>
                </tr>
            `;
        }).join("");
    }

    setText("rosterCount", `${players.length} joueur(s) renseigné(s)`);
    setText(
        "rosterNote",
        players.length
            ? "Les données de l'effectif sont celles renseignées dans club.js."
            : "Ajoute les joueurs dans la propriété players du club concerné."
    );
}

document.addEventListener("click", function(event) {
    const button = event.target.closest("[data-favorite-player]");
    if (!button) return;

    const clubId = clubSelector.value;
    const player = (clubData[clubId]?.players || []).find(player =>
        (player.name || "") === button.dataset.favoritePlayer &&
        String(player.number ?? "") === button.dataset.favoriteNumber
    );

    if (!player) return;

    togglePlayerFavorite(player, clubId);

    const data = clubData[clubId] || emptyClubData;
    renderPlayers(data.players || []);
});


function renderMatches(elementId, matches) {
    const container = $(elementId);
    if (!container) return;

    if (!matches || matches.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                Aucun match renseigné pour le moment.
                Ajoute les rencontres dans club.js.
            </div>
        `;
        return;
    }

    container.innerHTML = matches.map(match => `
        <article class="match-card">
            <div class="match-date">${escapeHTML(match.date || "Date à confirmer")}</div>
            <div class="match-teams">
                <span>${escapeHTML(match.home || "Équipe à définir")}</span>
                <strong class="match-score">${escapeHTML(match.score || "VS")}</strong>
                <span>${escapeHTML(match.away || "Équipe à définir")}</span>
            </div>
        </article>
    `).join("");
}

function renderTrophies(trophies) {
    const container = $("trophyGrid");
    if (!container) return;

    if (!trophies || trophies.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                Le palmarès doit être complété dans club.js.
                Tu peux ajouter le nom du trophée et le nombre de titres.
            </div>
        `;
        return;
    }

    container.innerHTML = trophies.map(trophy => `
        <article class="trophy-card">
            <span class="trophy-icon">🏆</span>
            <strong>${escapeHTML(trophy.name || "Trophée")}</strong>
            <small>${escapeHTML(trophy.count ?? 1)} titre(s)</small>
        </article>
    `).join("");
}

function renderStats(stats) {
    const valid = stats && typeof stats === "object";

    const matches = valid ? stats.matches : null;
    const wins = valid ? stats.wins : null;
    const draws = valid ? stats.draws : null;
    const losses = valid ? stats.losses : null;
    const goalsFor = valid ? stats.goalsFor : null;
    const goalsAgainst = valid ? stats.goalsAgainst : null;
    const points = valid ? stats.points : null;

    setText("statMatches", matches, "—");
    setText("statWins", wins, "—");
    setText("statGoals", goalsFor, "—");
    setText("statPoints", points, "—");

    setText("detailWins", wins, "—");
    setText("detailDraws", draws, "—");
    setText("detailLosses", losses, "—");
    setText("detailGoalsFor", goalsFor, "—");
    setText("detailGoalsAgainst", goalsAgainst, "—");

    const goalDiff =
        typeof goalsFor === "number" && typeof goalsAgainst === "number"
            ? goalsFor - goalsAgainst
            : null;

    setText(
        "detailGoalDiff",
        goalDiff === null ? "—" : goalDiff > 0 ? `+${goalDiff}` : goalDiff,
        "—"
    );
}

function renderClub(clubId) {
    const club = clubs.find(item => item.id === clubId) || clubs[0];

    const data = {
        ...emptyClubData,
        ...(clubData[club.id] || {})
    };

    document.title = `${club.name} - FootZone`;

    setText("clubName", club.name);
    const logo = document.getElementById("clubLogo");
    logo.src = club.logo;
    logo.alt = "Logo " + club.name;
    logo.style.display = "block";
    setText("clubCountry", `${club.flag} ${club.country}`);
    setText("clubSubtitle", `${club.league} · Saison 2026-2027`);
    setText("clubLeague", club.league);
    setText("clubShort", club.short);
    setText("clubCity", data.city);
    setText("clubStadium", data.stadium);
    setText("clubCoach", data.coach);
    setText("clubFounded", data.founded);
    setText("clubLogo", data.logo || "⚽");

    renderStats(data.stats);
    renderPlayers(data.players || []);
    renderMatches("pastMatches", data.pastMatches || []);
    renderMatches("upcomingMatches", data.upcomingMatches || []);
    renderTrophies(data.trophies || []);
    afficherComposition(club.id);

    clubSelector.value = club.id;

    const url = new URL(window.location.href);
    url.searchParams.set("club", club.id);
    window.history.replaceState({}, "", url);
}

clubSelector.addEventListener("change", () => {
    renderClub(clubSelector.value);
});

const playerSearch = $("playerSearch");

if (playerSearch) {
    playerSearch.addEventListener("input", () => {
        const selected = clubs.find(club => club.id === clubSelector.value);
        const data = selected
            ? clubData[selected.id] || emptyClubData
            : emptyClubData;

        renderPlayers(data.players || []);
    });
}

const params = new URLSearchParams(window.location.search);
const requestedClub = params.get("club");

const initialClub = clubs.some(club => club.id === requestedClub)
    ? requestedClub
    : "psg";

renderClub(initialClub);


function afficherComposition(clubId) {
    const club = clubData[clubId] || {};
    const joueurs = club.players || [];

    const terrain = document.getElementById("compositionPlayers");
    const remplacants = document.getElementById("compositionSubstitutes");
    const select = document.getElementById("formationSelect");
    const note = document.getElementById("compositionNote");

    if (!terrain || !remplacants || !select) return;

    const formations = {
        "4-3-3": [
            [50, 90], [15, 72], [38, 75], [62, 75], [85, 72], [25, 53], [50, 60], [75, 53], [20, 30], [50, 25], [80, 30]
        ],
        "4-2-3-1": [
            [50, 90], [15, 72], [38, 75], [62, 75], [85, 72], [38, 59], [62, 59], [20, 40], [50, 35], [80, 40], [50, 20]
        ],
        "4-4-2": [
            [50, 90], [15, 72], [38, 75], [62, 75], [85, 72], [15, 52], [38, 55], [62, 55], [85, 52], [35, 28], [65, 28]
        ],
        "3-5-2": [
            [50, 90], [25, 74], [50, 77], [75, 74], [12, 52], [32, 58], [50, 52], [68, 58], [88, 52], [35, 28], [65, 28]
        ]
    };

    function afficherJoueur(joueur, index, position) {
        const nom = joueur
            ? escapeHTML(joueur.name || "Joueur")
            : "À compléter";

        const numero = joueur
            ? escapeHTML(joueur.number ?? "—")
            : "—";

        return `
            <div class="pitch-player"
                style="left:${position[0]}%;top:${position[1]}%">
                <div class="player-shirt">${numero}</div>
                <span class="player-name">${nom}</span>
            </div>
        `;
    }

    function actualiser() {
        const positions = formations[select.value] || formations["4-3-3"];
        const titulaires = joueurs.slice(0, 11);
        const banc = joueurs.slice(11);

        terrain.innerHTML = positions.map((position, index) =>
            afficherJoueur(titulaires[index], index, position)
        ).join("");

        remplacants.innerHTML = banc.length
            ? banc.map(joueur => `
                <div class="substitute-item">
                    <strong>${escapeHTML(joueur.number ?? "—")}</strong>
                    <span>${escapeHTML(joueur.name || "Joueur")}</span>
                    <small>${escapeHTML(joueur.position || "Poste non renseigné")}</small>
                </div>
            `).join("")
            : "<p>Les remplaçants ne sont pas encore renseignés.</p>";

        if (note) {
            note.textContent = joueurs.length < 11
                ? `Il manque des joueurs : ${joueurs.length} renseigné(s) sur 11 titulaires.`
                : "Composition indicative : les 11 premiers joueurs de l'effectif sont affichés.";
        }
    }

    select.removeEventListener("change", select._compositionChange);

    select._compositionChange = actualiser;
    select.addEventListener("change", actualiser);

    actualiser();
}



