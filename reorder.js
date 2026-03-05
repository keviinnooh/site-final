const fs = require('fs');
const filepath = 'c:\\Users\\circe\\.gemini\\antigravity\\playground\\vector-plasma\\index.html';
let html = fs.readFileSync(filepath, 'utf8');

const avisStart = html.indexOf('<section class="reviews-section"');
const avisEnd = html.indexOf('<!-- Fin Section Avis -->') + '<!-- Fin Section Avis -->'.length;
const avisBlock = html.substring(avisStart, avisEnd);

const achatStart = html.indexOf('<!-- SECTION ACHAT -->');
const achatEnd = html.indexOf('<!-- SECTION VENTE -->');
let achatBlock = html.substring(achatStart, achatEnd);

const venteStart = html.indexOf('<!-- SECTION VENTE -->');
const venteEnd = html.indexOf('<!-- SECTION STOCK -->');
let venteBlock = html.substring(venteStart, venteEnd);

achatBlock = achatBlock.replace('padding: 6rem 0;', 'padding: 6rem 0 2rem 0;');
achatBlock = achatBlock.replace('<div class="section-header" style="margin-bottom: 4rem;">', '<div class="section-header" style="margin-bottom: 1.5rem;">');
achatBlock = achatBlock.replace('<h2><span class="highlight-text">Achat</span></h2>', '<h2 style="font-size: 3.5rem; margin-bottom: 0px;"><span class="highlight-text">Achat</span></h2>');
achatBlock = achatBlock.replace('<h3 style="font-size: 2.2rem; margin-bottom: 2rem; color: white;">', '<h3 style="font-size: 1.8rem; margin-bottom: 2rem; color: white;">');

venteBlock = venteBlock.replace('padding: 6rem 0;', 'padding: 2rem 0 6rem 0;');
venteBlock = venteBlock.replace('<div class="section-header" style="margin-bottom: 4rem;">', '<div class="section-header" style="margin-bottom: 1.5rem;">');
venteBlock = venteBlock.replace('<h2><span class="highlight-text">Vente</span></h2>', '<h2 style="font-size: 3.5rem; margin-bottom: 0px;"><span class="highlight-text">Vente</span></h2>');
venteBlock = venteBlock.replace('<h3 style="font-size: 2.2rem; margin-bottom: 1rem; color: white;">', '<h3 style="font-size: 1.8rem; margin-bottom: 1rem; color: white;">');
venteBlock = venteBlock.replace("offre de reprise ou de dépôt-vente", "offre d'achat de votre véhicule ou organiser un dépôt-vente");

const newContent = achatBlock + venteBlock + '\n    ' + avisBlock + '\n\n    ';
const beforeAvis = html.substring(0, avisStart);
const afterVente = html.substring(venteEnd);

fs.writeFileSync(filepath, beforeAvis + newContent + afterVente);
console.log('File updated successfully.');
