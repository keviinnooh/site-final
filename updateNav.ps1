$dir = 'c:\Users\circe\.gemini\antigravity\playground\vector-plasma'
$files = @('index.html', 'faq.html', 'legal.html', 'cgv.html', 'stock.html', 'equipe.html', 'detail.html', 'reprise.html')

Function Get-NavLinks {
    param([string]$active, [string]$prefix)
    
    $act = @{}
    foreach($name in @('accueil','services','equipe','achat','vente','stock','avis','contact')) {
        $act[$name] = if ($active -eq $name) { ' class="active"' } else { '' }
    }

    return @"
        <div class="nav-links">
            <a href="$prefix#accueil"$($act['accueil'])>Accueil</a>
            <a href="$prefix#services"$($act['services'])>Services</a>
            <a href="$prefix#equipe"$($act['equipe'])>Qui sommes-nous</a>
            <a href="$prefix#achat"$($act['achat'])>Achat</a>
            <a href="$prefix#vente"$($act['vente'])>Vente</a>
            <a href="$prefix#stock"$($act['stock'])>Notre Stock</a>
            <a href="$prefix#avis"$($act['avis'])>Avis</a>
            <a href="$prefix#contact"$($act['contact'])>Contact</a>
            <a href="https://wa.me/33761636206" class="btn-contact"><i class="fa-brands fa-whatsapp"></i> 07 61 63 62 06</a>
        </div>
"@
}

$newContactHtml = @"
<!-- Section Contact Direct avec formulaire -->
    <section id="contact" style="background-color: var(--bg-card); padding: 4rem 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <div class="contact-info" style="margin: 0 auto; max-width: 1000px; text-align: center;">
                <h2>Nous <span class="highlight-text">Contacter</span></h2>
                <p style="margin-bottom: 3rem; color: var(--text-secondary);">Une question rapide ? Passez par WhatsApp, Email, ou laissez-nous un message.</p>

                <div class="contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                    <!-- WhatsApp -->
                    <div class="info-item" style="height: 100%; display: flex; flex-direction: column; text-align: center; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 15px;">
                        <i class="fa-brands fa-whatsapp" style="font-size: 2.5rem; color: #25D366; background: none; padding: 0; margin-bottom: 1.5rem;"></i>
                        <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem; color: white;">WhatsApp</h4>
                        <p style="margin-top: auto; width: 100%;"><a href="https://wa.me/33761636206" class="btn-primary" style="display: inline-block; padding: 0.8rem 1.5rem; margin-top: 1rem; border-radius: 50px; background: #25D366; color: white !important; border: none; font-size: 0.9rem;">Ouvrir WhatsApp</a></p>
                    </div>

                    <!-- Email -->
                    <div class="info-item" style="height: 100%; display: flex; flex-direction: column; text-align: center; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 15px;">
                        <i class="fa-solid fa-envelope" style="font-size: 2.5rem; color: var(--accent); background: none; padding: 0; margin-bottom: 1.5rem;"></i>
                        <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem; color: white;">Email</h4>
                        <p style="margin-top: auto; width: 100%;"><a href="mailto:nlautomobile@gmail.com" style="color: white; text-decoration: underline; display: inline-block; padding-top: 1rem;">nlautomobile@gmail.com</a></p>
                    </div>

                    <!-- Localisation -->
                    <div class="info-item" style="height: 100%; display: flex; flex-direction: column; text-align: center; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 15px;">
                        <i class="fa-solid fa-location-dot" style="font-size: 2.5rem; color: white; background: none; padding: 0; margin-bottom: 1.5rem;"></i>
                        <h4 style="margin-bottom: 0.5rem; font-size: 1.2rem; color: white;">Localisation</h4>
                        <p style="color: #ccc; margin-top: auto; display: inline-block; padding-top: 1rem;">Versailles, France 🇫🇷</p>
                    </div>
                </div>

                <!-- Form -->
                <div class="form-container" style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px; padding: 3rem; text-align: center; max-width: 800px; margin: 0 auto;">
                    <h3 style="font-size: 1.8rem; margin-bottom: 2rem; color: white;">Envoyez un message</h3>
                    <form action="https://formspree.io/f/mbddgzrj" method="POST" style="text-align: left;">
                        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                            <input type="text" name="nom" class="form-control" placeholder="Votre Nom" required style="flex: 1; min-width: 250px; padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 10px;">
                            <input type="email" name="email" class="form-control" placeholder="Votre Email" required style="flex: 1; min-width: 250px; padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 10px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 1.5rem;">
                            <input type="tel" name="telephone" class="form-control" placeholder="Votre Téléphone" style="width: 100%; padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 10px;">
                        </div>
                        <div class="form-group" style="margin-bottom: 1.5rem;">
                            <textarea name="message" class="form-control" placeholder="Votre projet ou question..." rows="5" required style="width: 100%; padding: 1rem; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 10px; resize: vertical;"></textarea>
                        </div>
                        <button type="submit" class="btn-primary" style="width: 100%; border: none; padding: 1.2rem; font-size: 1.1rem; cursor: pointer; border-radius: 10px;">
                            <i class="fa-solid fa-paper-plane" style="margin-right: 10px;"></i> Envoyer le message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
"@

foreach ($name in $files) {
    $fPath = Join-Path $dir $name
    if (-not (Test-Path $fPath)) { continue }

    $content = [System.IO.File]::ReadAllText($fPath)
    
    $active = ''
    $prefix = 'index.html'

    if ($name -eq 'index.html') { $active = 'accueil'; $prefix = '' }
    elseif ($name -eq 'faq.html') { $active = 'faq' }
    elseif ($name -eq 'legal.html') { $active = 'legal' }
    elseif ($name -eq 'cgv.html') { $active = 'cgv' }
    elseif ($name -eq 'stock.html') { $active = 'stock' }
    elseif ($name -eq 'equipe.html') { $active = 'equipe' }
    elseif ($name -eq 'reprise.html') { $active = 'vente' }

    # Replace navlinks using Regex to be safe with newlines
    $content = $content -replace '(?s)<div class="nav-links">.*?</div>', (Get-NavLinks $active $prefix)

    if ($name -eq 'index.html') {
        # Contact Replacement
        $cStart = $content.IndexOf('<!-- Section Contact Direct (Séparée avec fond différent) -->')
        if ($cStart -eq -1) {
            $cStart = $content.IndexOf('<!-- Section Contact Direct avec formulaire -->')
        }

        if ($cStart -ne -1) {
            $cEnd = $content.IndexOf('</section>', $cStart) + 10
            $content = $content.Substring(0, $cStart) + $newContactHtml + $content.Substring($cEnd)
        }

        # ID="avis" on reviews-section
        $content = $content.Replace('<section class="reviews-section"', '<section id="avis" class="reviews-section"')
    }

    [System.IO.File]::WriteAllText($fPath, $content)
}

Write-Output "Done JS/PS rewrite"
