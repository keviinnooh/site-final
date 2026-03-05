const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\circe\\.gemini\\antigravity\\playground\\vector-plasma';
const files = ['index.html', 'faq.html', 'legal.html', 'cgv.html', 'stock.html', 'equipe.html', 'detail.html', 'reprise.html'];

const newNavLinksStr = (isActive, pagePrefix) => {
    const act = (name) => isActive === name ? ' class="active"' : '';
    return `<div class="nav-links">
            <a href="${pagePrefix}#accueil"${act('accueil')}>Accueil</a>
            <a href="${pagePrefix}#services"${act('services')}>Services</a>
            <a href="${pagePrefix}#equipe"${act('equipe')}>Qui sommes-nous</a>
            <a href="${pagePrefix}#achat"${act('achat')}>Achat</a>
            <a href="${pagePrefix}#vente"${act('vente')}>Vente</a>
            <a href="${pagePrefix}#stock"${act('stock')}>Notre Stock</a>
            <a href="${pagePrefix}#avis"${act('avis')}>Avis</a>
            <a href="${pagePrefix}#contact"${act('contact')}>Contact</a>
            <a href="https://wa.me/33761636206" class="btn-contact"><i class="fa-brands fa-whatsapp"></i> 07 61 63 62 06</a>
        </div>`;
};

const newContactHtml = `<!-- Section Contact Direct avec formulaire -->
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
    </section>`;


// Loop over all files
files.forEach(f => {
    const fPath = path.join(dir, f);
    if (!fs.existsSync(fPath)) return;
    let content = fs.readFileSync(fPath, 'utf8');

    // Determine active section and prefix based on file name
    let active = '';
    let prefix = 'index.html';

    if (f === 'index.html') Object.assign({ active: 'accueil', prefix: '' });
    if (f === 'index.html') { active = 'accueil'; prefix = ''; }
    else if (f === 'faq.html') { active = 'faq'; }
    else if (f === 'legal.html') { active = 'legal'; }
    else if (f === 'cgv.html') { active = 'cgv'; }
    else if (f === 'stock.html') { active = 'stock'; }
    else if (f === 'equipe.html') { active = 'equipe'; }
    else if (f === 'reprise.html') { active = 'vente'; }

    // Regex replace navlinks
    const startNav = content.indexOf('<div class="nav-links">');
    if (startNav !== -1) {
        const endNav = content.indexOf('</div>', startNav) + 6;
        content = content.substring(0, startNav) + newNavLinksStr(active, prefix) + content.substring(endNav);
    }

    if (f === 'index.html') {
        const contactStart1 = content.indexOf('<!-- Section Contact Direct (Séparée avec fond différent) -->');
        const contactStart2 = content.indexOf('<!-- Section Contact Direct avec formulaire -->');
        let cStart = contactStart1 !== -1 ? contactStart1 : contactStart2;

        if (cStart !== -1) {
            const cEnd = content.indexOf('</section>', cStart) + 10;
            content = content.substring(0, cStart) + newContactHtml + content.substring(cEnd);
        }

        // Make sure Avis section has id="avis"
        content = content.replace('<section class="reviews-section"', '<section id="avis" class="reviews-section"');
    }

    fs.writeFileSync(fPath, content, 'utf8');
});

console.log('Update done');
