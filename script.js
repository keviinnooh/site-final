const cars = [
    {
        id: 0,
        brand: "Tesla",
        model: "Model Y",
        trim: "Performance",
        year: 2023,
        price: "44 900 €",
        hp: "534 ch",
        fuel: "Électrique",
        images: ["tesla_showroom.jpg", "tesla_showroom.jpg", "tesla_showroom.jpg"],
        km: "15 000 km",
        gearbox: "Automatique",
        color: "Noir Uni",
        category: "SUV",
        desc: "Le SUV électrique de référence. Version Performance offrant des accélérations foudroyantes (0-100 km/h en 3,7s). Équipé de l'Autopilot amélioré et d'un intérieur premium noir minimaliste. Une expérience de conduite technologique et silencieuse.",
        options: [
            "Autopilot Amélioré", "Jantes Übertoken 21\"", "Intérieur Premium Noir", "Pompe à chaleur", "Toit panoramique", "Audio Premium"
        ]
    },
    {
        id: 1,
        brand: "Renault",
        model: "Clio IV",
        trim: "Intens 1.5 dCi",
        year: 2018,
        price: "8 900 €",
        hp: "90 ch",
        fuel: "Diesel",
        images: ["clio_front.png", "clio_rear.png", "clio_int.png"],
        km: "85 000 km",
        gearbox: "Manuelle",
        color: "Rouge Flamme",
        category: "Citadines",
        desc: "Citadine polyvalente par excellence. Finition Intens haut de gamme avec GPS R-Link et aides au stationnement. Moteur diesel dCi 90 réputé pour sa fiabilité et sa très faible consommation (4L/100km). Idéale jeunes conducteurs ou trajets quotidiens.",
        options: [
            "GPS R-Link", "Climatisation Automatique", "Régulateur de vitesse", "Jantes Alu 16\"", "Radars de recul", "Bluetooth"
        ]
    },
    {
        id: 2,
        brand: "Volkswagen",
        model: "Golf VII",
        trim: "Carat TDI",
        year: 2017,
        price: "15 900 €",
        hp: "150 ch",
        fuel: "Diesel",
        images: ["golf_front.png", "golf_rear.png", "golf_int.png"],
        km: "92 000 km",
        gearbox: "Automatique DSG7",
        color: "Blanc Pur",
        category: "Citadines",
        desc: "La référence des compactes allemandes. Finition Carat luxe avec toit ouvrant et virtual cockpit. Confort royal sur autoroute grâce à la boîte DSG7 et son insonorisation soignée. Véhicule suivi et entretenu, prêt à partir.",
        options: [
            "Toit Ouvrant", "Active Info Display", "Carplay / Android Auto", "Caméra de recul", "Sièges chauffants", "ACC (Régulateur adaptatif)"
        ]
    },
    {
        id: 3,
        brand: "Mercedes-AMG",
        model: "A45 S",
        trim: "4MATIC+",
        year: 2020,
        price: "48 900 €",
        hp: "421 ch",
        fuel: "Essence",
        images: ["mercedes_front.png", "mercedes_rear.png", "mercedes_int.png"],
        km: "38 000 km",
        gearbox: "Automatique 8G-DCT",
        color: "Gris Montagne Magno",
        category: "Sportives",
        desc: "Un véritable missile sol-sol. Le 4 cylindres le plus puissant du monde avec 421ch. Mode Drift, sonorité envoûtante et finition AMG au sommet. État clinique, jamais de circuit, temps de chauffe respectés. Une collector en puissance.",
        options: [
            "Pack Aéro AMG", "Sièges Performance", "Son Burmester", "Toit Panoramique", "Affichage Tête Haute", "Mode Drift"
        ]
    },
    {
        id: 4,
        brand: "Audi",
        model: "RS3 Sportback",
        trim: "S-Line Quattro",
        year: 2019,
        price: "47 500 €",
        hp: "400 ch",
        fuel: "Essence",
        images: ["rs3_front.png", "rs3_rear.png", "rs3_int.png"],
        km: "42 500 km",
        gearbox: "Automatique S-Tronic",
        color: "Gris Nardo",
        category: "Sportives",
        desc: "Le légendaire 5 cylindres 2.5 TFSI. Une mélodie unique et des performances de supercar dans une compacte. Configuration full black avec échappement sport RS. Historique limpide Audi. La reine des 'Hatchback'.",
        options: [
            "Toit ouvrant panoramique", "Échappement Sport RS", "Virtual Cockpit", "Bang & Olufsen", "Jantes Rotor 19\"", "Sièges chauffants"
        ]
    },
    {
        id: 5,
        brand: "Audi",
        model: "Q3",
        trim: "35 TDI S-Line",
        year: 2021,
        price: "42 000 €",
        hp: "150 ch",
        fuel: "Diesel",
        images: ["q3_front.png", "q3_front.png", "rs3_int.png"],
        km: "28 000 km",
        gearbox: "Automatique S-Tronic",
        color: "Blanc Ibis",
        category: "SUV",
        desc: "SUV Premium polyvalent. Look sportif S-Line avec calandre noire et jantes 19 pouces. Habitacle spacieux et technologique (Virtual Cockpit, Apple CarPlay). Idéal pour la famille avec son coffre généreux et son confort de roulement.",
        options: [
            "Pack S-Line Int/Ext", "Hayon électrique", "Smartphone Interface", "Audi Drive Select", "Phares LED Matrix", "Virtual Cockpit plus"
        ]
    },
    {
        id: 6,
        brand: "Yamaha",
        model: "Ténéré 700",
        trim: "Rally Edition",
        year: 2023,
        price: "8 900 €",
        hp: "74 ch",
        fuel: "Essence",
        images: ["tenere_blue_factory.png", "tenere_blue_factory.png", "tenere_blue_factory.png"],
        km: "10 000 km",
        gearbox: "Manuelle",
        color: "Icon Blue",
        category: "Motos",
        desc: "L'esprit Rallye pur. La Ténéré 700 est la référence du Trail Aventure mid-size. Moteur CP2 coupleux et fiable, suspensions à grand débattement, protection moteur renforcée. Prête pour le désert ou le quotidien.",
        options: [
            "Sabot moteur alu", "Silencieux Akrapovic", "Selle Rallye", "Clignotants LED", "Protections de réservoir", "ABS Déconnectable"
        ]
    },
    {
        id: 7,
        brand: "Yamaha",
        model: "TMAX 560",
        trim: "Tech MAX",
        year: 2024,
        price: "10 900 €",
        hp: "47 ch",
        fuel: "Essence",
        images: ["tmax_560_versa_front.png", "tmax_560_versa_front.png", "tmax_560_versa_front.png"],
        km: "15 000 km",
        gearbox: "Automatique",
        color: "Gris Nardo",
        category: "Motos",
        desc: "Le Roi des Maxi-Scooters. Version Tech MAX toutes options : Bulle électrique, régulateur de vitesse, poignées chauffantes, écran TFT connecté. Performance sportive et confort absolu pour la ville et l'autoroute.",
        options: [
            "Bulle électrique", "Poignées & Selle chauffantes", "Régulateur de vitesse", "Écran TFT 7 pouces", "Démarrage sans clé", "Dosseret passager"
        ]
    }
];

function renderCars(filter = 'Tout') {
    const carsGrid = document.getElementById('carsGrid');
    if (!carsGrid) return;

    carsGrid.innerHTML = '';

    const filteredCars = filter === 'Tout' ? cars : cars.filter(car => car.category === filter);

    filteredCars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="car-image-container">
                <span class="car-tag">Dispo</span>
                <img src="${car.images[0]}" alt="${car.brand} ${car.model}" class="car-image">
            </div>
            <div class="car-details">
                <div class="car-title">${car.brand} ${car.model} <span style="font-weight:300; font-size: 0.9rem; color: #a3a3a3; display:block;">${car.trim}</span></div>
                <div class="car-specs">
                    <span><i class="fa-solid fa-calendar"></i> Année : ${car.year}</span>
                    <span><i class="fa-solid fa-gauge-high"></i> Puis : ${car.hp}</span>
                    <span><i class="fa-solid fa-road"></i> KM : ${car.km}</span>
                </div>
                <div class="car-footer">
                    <span class="car-price">${car.price}</span>
                    <a href="detail.html?id=${car.id}" class="btn-car">
                        Voir Fiche <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
        carsGrid.appendChild(card);
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length === 0) return;

    const savedFilter = localStorage.getItem('selectedFilter') || 'Tout';

    filterBtns.forEach(btn => {
        if (btn.textContent.trim() === savedFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const newValue = btn.textContent.trim();
            localStorage.setItem('selectedFilter', newValue);
            renderCars(newValue);
        });
    });

    renderCars(savedFilter);
}

function loadDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = parseInt(urlParams.get('id'));

    const car = cars.find(c => c.id === carId);

    if (!car) {
        document.querySelector('.detail-header').innerHTML = '<h1>Véhicule introuvable</h1><a href="stock.html" class="btn-primary">Retour au stock</a>';
        return;
    }

    document.title = `${car.brand} ${car.model} | Les Secrets de l'Automobile`;
    document.getElementById('detailImage').src = car.images[0];
    document.getElementById('detailImageSide1').src = car.images[1] || car.images[0];
    document.getElementById('detailImageSide2').src = car.images[2] || car.images[0];

    document.getElementById('detailTitle').innerHTML = `${car.brand} ${car.model} <span class="highlight-text">${car.trim}</span>`;
    document.getElementById('detailSubtitle').textContent = `${car.hp} • ${car.year} • ${car.km} • Garantie 3 mois`;

    const descEl = document.getElementById('detailDesc');
    if (descEl) descEl.textContent = car.desc;

    document.getElementById('specYear').textContent = car.year;
    document.getElementById('specKm').textContent = car.km;
    document.getElementById('specHp').textContent = car.hp;
    document.getElementById('specGear').textContent = car.gearbox;
    document.getElementById('specFuel').textContent = car.fuel;
    document.getElementById('specColor').textContent = car.color;

    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    car.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerHTML = `✅ ${opt}`;
        optionsList.appendChild(li);
    });

    document.getElementById('detailPrice').textContent = car.price;

    const waBtn = document.getElementById('whatsappDetailBtn');
    if (waBtn) {
        waBtn.href = `https://wa.me/33761636206?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20la%20${car.brand}%20${car.model}%20(${car.price})`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carsGrid')) {
        initFilters();
    }

    if (document.getElementById('detailTitle')) {
        loadDetail();
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile Menu
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Bloquer le scroll du fond sans position:fixed pour ne pas perdre la position
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

            // Toggle icône burger ↔ croix
            const icon = burger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Fermer le menu en cliquant sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Fermer le menu
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
                const icon = burger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');

                // Si c'est un lien ancre (#section), scroller vers la bonne section
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        setTimeout(() => {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }, 50);
                    }
                }
            });
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    const ans = q.nextElementSibling;
                    if (ans) ans.style.maxHeight = null;
                }
            });

            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // FAQ Tabs
    const faqTabBtns = document.querySelectorAll('.faq-tab-btn');
    const faqTabContents = document.querySelectorAll('.faq-tab-content');

    if (faqTabBtns.length > 0) {
        faqTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                faqTabBtns.forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'transparent';
                    b.style.color = 'white';
                    b.style.border = '1px solid var(--accent)';
                });
                faqTabContents.forEach(c => c.style.display = 'none');

                btn.classList.add('active');
                btn.style.background = 'var(--accent)';
                btn.style.color = 'black';
                btn.style.border = 'none';

                const tabId = btn.getAttribute('data-tab');
                document.getElementById('tab-' + tabId).style.display = 'block';
            });
        });
    }
});

