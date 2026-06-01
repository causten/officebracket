const REPO_OWNER = "causten";
const REPO_NAME = "officebracket";
const API_BASE = "https://api.github.com";

const groups = {
    A: [
        { name: "Mexico", code: "mx" },
        { name: "South Africa", code: "za" },
        { name: "Korea Republic", code: "kr" },
        { name: "Czechia", code: "cz" }
    ],
    B: [
        { name: "Canada", code: "ca" },
        { name: "Switzerland", code: "ch" },
        { name: "Qatar", code: "qa" },
        { name: "Bosnia and Herzegovina", code: "ba" }
    ],
    C: [
        { name: "Brazil", code: "br" },
        { name: "Morocco", code: "ma" },
        { name: "Haiti", code: "ht" },
        { name: "Scotland", code: "gb-sct" }
    ],
    D: [
        { name: "United States", code: "us" },
        { name: "Paraguay", code: "py" },
        { name: "Australia", code: "au" },
        { name: "Türkiye", code: "tr" }
    ],
    E: [
        { name: "Germany", code: "de" },
        { name: "Curaçao", code: "cw" },
        { name: "Côte d'Ivoire", code: "ci" },
        { name: "Ecuador", code: "ec" }
    ],
    F: [
        { name: "Netherlands", code: "nl" },
        { name: "Japan", code: "jp" },
        { name: "Tunisia", code: "tn" },
        { name: "Sweden", code: "se" }
    ],
    G: [
        { name: "Belgium", code: "be" },
        { name: "Egypt", code: "eg" },
        { name: "Iran", code: "ir" },
        { name: "New Zealand", code: "nz" }
    ],
    H: [
        { name: "Spain", code: "es" },
        { name: "Cabo Verde", code: "cv" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "Uruguay", code: "uy" }
    ],
    I: [
        { name: "France", code: "fr" },
        { name: "Senegal", code: "sn" },
        { name: "Norway", code: "no" },
        { name: "Iraq", code: "iq" }
    ],
    J: [
        { name: "Argentina", code: "ar" },
        { name: "Algeria", code: "dz" },
        { name: "Austria", code: "at" },
        { name: "Jordan", code: "jo" }
    ],
    K: [
        { name: "Portugal", code: "pt" },
        { name: "Uzbekistan", code: "uz" },
        { name: "Colombia", code: "co" },
        { name: "DR Congo", code: "cd" }
    ],
    L: [
        { name: "England", code: "gb-eng" },
        { name: "Croatia", code: "hr" },
        { name: "Ghana", code: "gh" },
        { name: "Panama", code: "pa" }
    ]
};

function getFlagUrl(code) {
    const special = {
        "gb-eng": "https://flagcdn.com/w80/gb-eng.png",
        "gb-sct": "https://flagcdn.com/w80/gb-sct.png"
    };
    if (special[code]) return special[code];
    return `https://flagcdn.com/w80/${code}.png`;
}

function getTeamByName(name) {
    for (const key of Object.keys(groups)) {
        const team = groups[key].find(t => t.name === name);
        if (team) return team;
    }
    return null;
}
