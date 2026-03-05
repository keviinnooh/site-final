$html = [System.IO.File]::ReadAllText('c:\Users\circe\.gemini\antigravity\playground\vector-plasma\index.html')
$avisStart = $html.IndexOf('<section class="reviews-section"')
if ($avisStart -gt 0) {
    $avisEndStr = '<!-- Fin Section Avis -->'
    $avisEnd = $html.IndexOf($avisEndStr) + $avisEndStr.Length
    $avisBlock = $html.Substring($avisStart, $avisEnd - $avisStart)

    $htmlWithoutAvis = $html.Substring(0, $avisStart) + $html.Substring($avisEnd)
    $htmlWithAvisMoved = $htmlWithoutAvis.Replace('<!-- SECTION STOCK -->', $avisBlock + "`r`n`r`n    <!-- SECTION STOCK -->")

    [System.IO.File]::WriteAllText('c:\Users\circe\.gemini\antigravity\playground\vector-plasma\index.html', $htmlWithAvisMoved)
    Write-Output "Successfully moved Avis section."
} else {
    Write-Output "Could not find reviews-section."
}
