import os

filepath = r"c:\Users\circe\.gemini\antigravity\playground\vector-plasma\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

avisStartStr = '<section class="reviews-section"'
avisEndStr = '<!-- Fin Section Avis -->'

achatStartStr = '<!-- SECTION ACHAT -->'
achatEndStr = '<!-- SECTION VENTE -->'

venteStartStr = '<!-- SECTION VENTE -->'
venteEndStr = '<!-- SECTION STOCK -->'


avisStart = html.find(avisStartStr)
avisEnd = html.find(avisEndStr) + len(avisEndStr)
avisBlock = html[avisStart:avisEnd]

achatStart = html.find(achatStartStr)
achatEnd = html.find(achatEndStr)
achatBlock = html[achatStart:achatEnd]

venteStart = html.find(venteStartStr)
venteEnd = html.find(venteEndStr)
venteBlock = html[venteStart:venteEnd]

# Styling changes
achatBlock = achatBlock.replace('padding: 6rem 0;', 'padding: 6rem 0 2rem 0;')
achatBlock = achatBlock.replace('<div class="section-header" style="margin-bottom: 4rem;">', '<div class="section-header" style="margin-bottom: 1.5rem;">')
achatBlock = achatBlock.replace('<h2><span class="highlight-text">Achat</span></h2>', '<h2 style="font-size: 3.5rem; margin-bottom: 0px;"><span class="highlight-text">Achat</span></h2>')
achatBlock = achatBlock.replace('<h3 style="font-size: 2.2rem; margin-bottom: 2rem; color: white;">', '<h3 style="font-size: 1.8rem; margin-bottom: 2rem; color: white;">')

venteBlock = venteBlock.replace('padding: 6rem 0;', 'padding: 2rem 0 6rem 0;')
venteBlock = venteBlock.replace('<div class="section-header" style="margin-bottom: 4rem;">', '<div class="section-header" style="margin-bottom: 1.5rem;">')
venteBlock = venteBlock.replace('<h2><span class="highlight-text">Vente</span></h2>', '<h2 style="font-size: 3.5rem; margin-bottom: 0px;"><span class="highlight-text">Vente</span></h2>')
venteBlock = venteBlock.replace('<h3 style="font-size: 2.2rem; margin-bottom: 1rem; color: white;">', '<h3 style="font-size: 1.8rem; margin-bottom: 1rem; color: white;">')

# Text changes
venteBlock = venteBlock.replace("offre de reprise ou de dépôt-vente", "offre d'achat de votre véhicule ou organiser un dépôt-vente")

# Remove from original HTML
beforeAvis = html[:avisStart]
afterVente = html[venteEnd:]

newContent = achatBlock + venteBlock + '\n\n    ' + avisBlock + '\n\n    '

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(beforeAvis + newContent + afterVente)

print("HTML modified successfully.")
