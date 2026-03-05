const fs = require('fs');
const filepath = 'c:\\Users\\circe\\.gemini\\antigravity\\playground\\vector-plasma\\index.html';
let html = fs.readFileSync(filepath, 'utf8');

// --- 1. Text Replacements ---
// Update accroche Vente
const oldAccroche = "Remplissez ce formulaire pour recevoir une offre d'achat de votre véhicule ou organiser un\r\n                    dépôt-vente sous 24h. L'estimation est gratuite, simple et sans aucun engagement.";
const oldAccrocheAlt = "Remplissez ce formulaire pour recevoir une offre d'achat de votre véhicule ou organiser un\n                    dépôt-vente sous 24h. L'estimation est gratuite, simple et sans aucun engagement.";

const newAccroche = "Remplissez ce formulaire pour confier la vente de votre véhicule ou organiser un dépôt-vente sous 24h. L'estimation est gratuite, simple et sans aucun engagement.";

if (html.includes(oldAccroche)) {
    html = html.replace(oldAccroche, newAccroche);
} else if (html.includes(oldAccrocheAlt)) {
    html = html.replace(oldAccrocheAlt, newAccroche);
} else {
    // regex fallback
    html = html.replace(/Remplissez ce formulaire pour recevoir une offre d'achat de votre véhicule ou organiser un\s*dépôt-vente sous 24h\. L'estimation est gratuite, simple et sans aucun engagement\./, newAccroche);
}

// Update titre Equipe
html = html.replace(
    /<h2>L'Expertise <span class="highlight-text">Passion<\/span><\/h2>/,
    "<h2>Qui <span class=\"highlight-text\">sommes-nous ?</span></h2>"
);

// --- 2. Reordering Sections ---
const markers = {
    'ACHAT': '<!-- SECTION ACHAT -->',
    'VENTE': '<!-- SECTION VENTE -->',
    'REVIEWS': '<section class="reviews-section"',
    'STOCK': '<!-- SECTION STOCK -->',
    'EQUIPE': '<!-- SECTION EQUIPE -->',
    'CONTACT': '<!-- Section Contact Direct'
};

let positions = Object.keys(markers).map(key => ({
    name: key,
    idx: html.indexOf(markers[key])
})).filter(p => p.idx !== -1);

positions.sort((a, b) => a.idx - b.idx);

let blocks = {};
for (let i = 0; i < positions.length - 1; i++) {
    blocks[positions[i].name] = html.substring(positions[i].idx, positions[i + 1].idx);
}

// We need to verify we got everything correctly.
if (Object.keys(blocks).length === 5) {
    const startHtml = html.substring(0, positions[0].idx);
    const endHtml = html.substring(positions[positions.length - 1].idx);

    // New Order:
    // EQUIPE (Qui sommes-nous) -> ACHAT -> VENTE -> STOCK -> REVIEWS
    const newHtml = startHtml +
        blocks['EQUIPE'] +
        blocks['ACHAT'] +
        blocks['VENTE'] +
        blocks['STOCK'] +
        blocks['REVIEWS'] +
        endHtml;

    fs.writeFileSync(filepath, newHtml, 'utf8');
    console.log("Sections reordered and text updated successfully!");
} else {
    console.log("Error: Could not find all sections.", positions);
}
