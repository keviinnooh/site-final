$filepath = 'c:\Users\circe\.gemini\antigravity\playground\vector-plasma\index.html'
$html = [System.IO.File]::ReadAllText($filepath)

# --- 1. Text Replacements ---
$oldAccroche = "recevoir une offre d'achat de votre véhicule ou organiser un
                    dépôt-vente"
$oldAccroche2 = "recevoir une offre d'achat de votre véhicule ou organiser un`r`n                    dépôt-vente"
$newAccroche = "nous confier la vente de votre véhicule ou organiser un dépôt-vente"

$html = $html.Replace($oldAccroche, $newAccroche)
$html = $html.Replace($oldAccroche2, $newAccroche)

# Also regex to be sure
$html = $html -replace "recevoir une offre d'achat de votre véhicule ou organiser un\s+dépôt-vente", $newAccroche

# Update titre Equipe
$html = $html -replace "L'Expertise <span class=`"highlight-text`">Passion</span>", "Qui <span class=`"highlight-text`">sommes-nous ?</span>"

# --- 2. Reordering Sections ---

$achatStart = $html.IndexOf('<!-- SECTION ACHAT -->')
$venteStart = $html.IndexOf('<!-- SECTION VENTE -->')
$reviewsStart = $html.IndexOf('<section class="reviews-section"')
$stockStart = $html.IndexOf('<!-- SECTION STOCK -->')
$equipeStart = $html.IndexOf('<!-- SECTION EQUIPE -->')
$contactStart = $html.IndexOf('<!-- Section Contact Direct')

# Since order is: REVIEWS, ACHAT, VENTE, STOCK, EQUIPE, CONTACT roughly, let's extract by exact positions.

# Let's create an array of objects
$markers = @(
    [PSCustomObject]@{ Name = 'ACHAT'; Idx = $achatStart }
    [PSCustomObject]@{ Name = 'VENTE'; Idx = $venteStart }
    [PSCustomObject]@{ Name = 'REVIEWS'; Idx = $reviewsStart }
    [PSCustomObject]@{ Name = 'STOCK'; Idx = $stockStart }
    [PSCustomObject]@{ Name = 'EQUIPE'; Idx = $equipeStart }
    [PSCustomObject]@{ Name = 'CONTACT'; Idx = $contactStart }
)

$markers = $markers | Where-Object { $_.Idx -ne -1 } | Sort-Object Idx

if ($markers.Count -lt 6) {
    Write-Output "Error finding markers."
    exit 1
}

$blocks = @{}
for ($i = 0; $i -lt ($markers.Count - 1); $i++) {
    $len = $markers[$i+1].Idx - $markers[$i].Idx
    $blocks[$markers[$i].Name] = $html.Substring($markers[$i].Idx, $len)
}

$startHtml = $html.Substring(0, $markers[0].Idx)
$endHtml = $html.Substring($markers[$markers.Count - 1].Idx)

# New Order:
# EQUIPE -> ACHAT -> VENTE -> STOCK -> REVIEWS
$newHtml = $startHtml + 
           $blocks['EQUIPE'] + 
           $blocks['ACHAT'] + 
           $blocks['VENTE'] + 
           $blocks['STOCK'] + 
           $blocks['REVIEWS'] + 
           $endHtml

[System.IO.File]::WriteAllText($filepath, $newHtml)
Write-Output "Sections reordered and text updated successfully!"
