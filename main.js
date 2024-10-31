// Beispieldaten für Sehenswürdigkeiten (mit mehreren Bildern)
const locations = [
    {
        id: 1,
        name: {
            de: 'Basler Münster',
            en: 'Basel Minster',
            fr: 'Cathédrale de Bâle'
        },
        city: {
            de: 'Basel-Stadt',
            en: 'Basel City',
            fr: 'Bâle-Ville'
        },
        description: {
            de: 'Das Basler Münster ist das Wahrzeichen der Stadt Basel und eine der Hauptsehenswürdigkeiten.',
            en: 'Basel Minster is the landmark of Basel and one of the main attractions.',
            fr: 'La cathédrale de Bâle est l\'emblème de la ville de Bâle et l\'une des principales attractions.'
        },
        longDescription: {
            de: 'Das Basler Münster, erbaut zwischen 1019 und 1500, ist eine der bekanntesten Sehenswürdigkeiten in Basel. Mit seiner markanten rot-gemusterten Dachlandschaft und den beiden 64 Meter hohen Türmen prägt es die Silhouette der Stadt.',
            en: 'Basel Minster, built between 1019 and 1500, is one of the most famous landmarks in Basel. With its distinctive red patterned roof landscape and two 64-meter high towers, it shapes the city\'s skyline.',
            fr: 'La cathédrale de Bâle, construite entre 1019 et 1500, est l\'un des monuments les plus célèbres de Bâle. Avec son paysage de toits rouges distinctifs et ses deux tours de 64 mètres de haut, elle façonne la silhouette de la ville.'
        },
        images: [
            'images/muenster1.jpeg',
            'images/muenster2.jpg',
            'images/muenster3.jpg'
        ],
        weather: 'sunny',
        visited: false,
        besucht: {
            de: "Visited:",
            en: "Visited:",
            fr: "Visited:"
        },
        geo: [47.556245, 7.591869],
        faq: {
            de: [
                {
                    category: "Öffnungszeiten & Eintritt",
                    items: [
                        {
                            question: "Wann ist das Münster geöffnet?",
                            answer: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffent"
                        },
                        {
                            question: "Wie viel kostet der Eintritt?",
                            answer: "Der Eintritt in das Münster ist kostenlos."
                        }

                    ]
                }
            ],
            en: [
                {
                    category: "Öffnungszeiten & Eintritt",
                    items: [
                        {
                            question: "Wann ist das Münster geöffnet?",
                            answer: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffent"
                        },
                        {
                            question: "Wie viel kostet der Eintritt?",
                            answer: "Der Eintritt in das Münster ist kostenlos."
                        }

                    ]
                }
            ],
            fr: [
                {
                    category: "Öffnungszeiten & Eintritt",
                    items: [
                        {
                            question: "Wann ist das Münster geöffnet?",
                            answer: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffent"
                        },
                        {
                            question: "Wie viel kostet der Eintritt?",
                            answer: "Der Eintritt in das Münster ist kostenlos."
                        }

                    ]
                }
            ]
        },
        openingDesc: {
            de: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffnet",
            en: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffnet",
            fr: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffnet"
        },
        openinghours: {
            de: "Öffnungszeiten:",
            en: "Opening hours:",
            fr: "Heures d'ouverture:"
        }
    },
    // Fügen Sie hier weitere Sehenswürdigkeiten hinzu
    {
        id: 2,
        name: {
            de: 'Basler Rathaus',
            en: 'Basel City Hall',
            fr: 'Hôtel de ville de Bâle'
        },
        city: {
            de: 'Basel-Stadt',
            en: 'Basel City',
            fr: 'Bâle-Ville'
        },
        description: {
            de: 'Das Basler Rathaus ist ein beeindruckendes Gebäude im Herzen von Basel, bekannt für seine rote Fassade und kunstvollen Verzierungen.',
            en: 'The Basel Town Hall is an impressive building in the heart of Basel, known for its red facade and ornate decorations.',
            fr: "L'Hôtel de Ville de Bâle est un bâtiment impressionnant au cœur de Bâle, célèbre pour sa façade rouge et ses décorations artistiques."
        },
        longDescription: {
            de: 'Das Basler Rathaus, ein bedeutendes Wahrzeichen der Stadt, befindet sich am Marktplatz und dient seit Jahrhunderten als Sitz der Regierung des Kantons Basel-Stadt. Der Bau des ursprünglichen Rathauses begann im Jahr 1504, kurz nach dem Beitritt Basels zur Schweizer Eidgenossenschaft. Im Jahr 1514 wurde der zentrale Teil mit seinem markanten Turm fertiggestellt. Später, im 17. und 19. Jahrhundert, wurde das Gebäude erweitert, wobei die charakteristische rote Sandsteinfassade und die kunstvollen Malereien hinzugefügt wurden. Die farbenprächtigen Fresken an der Fassade stammen vom Künstler Hans Bock und stellen historische Szenen dar. Das Rathaus vereint gotische und Renaissance-Elemente und spiegelt die politische und kulturelle Bedeutung Basels im Laufe der Jahrhunderte wider.',
            en: 'The Basel Town Hall, a significant landmark of the city, is located on the Marktplatz and has served as the seat of the government of the Canton of Basel-Stadt for centuries. Construction of the original town hall began in 1504, shortly after Basel joined the Swiss Confederation. In 1514, the central part, including its distinctive tower, was completed. Later, in the 17th and 19th centuries, the building was expanded, and its characteristic red sandstone facade and ornate murals were added. The colorful frescoes on the facade, painted by artist Hans Bock, depict historical scenes. The Town Hall combines Gothic and Renaissance elements, reflecting Basel\'s political and cultural significance over the centuries.',
            fr: "L'Hôtel de Ville de Bâle, un monument important de la ville, est situé sur la place du marché et sert depuis des siècles de siège au gouvernement du canton de Bâle-Ville. La construction de l'hôtel de ville original a commencé en 1504, peu après l'adhésion de Bâle à la Confédération suisse. En 1514, la partie centrale, y compris sa tour distinctive, fut achevée. Plus tard, aux 17e et 19e siècles, le bâtiment fut agrandi et sa façade caractéristique en grès rouge ainsi que ses fresques décoratives furent ajoutées. Les fresques colorées de la façade, réalisées par l'artiste Hans Bock, représentent des scènes historiques. L'Hôtel de Ville combine des éléments gothiques et de la Renaissance, reflétant l'importance politique et culturelle de Bâle à travers les siècles."
        },
        images: [
            'images/rathaus1.jpg',
            'images/rathaus2.jpg',
            'images/rathaus3.webp'
        ],
        weather: 'sunny',
        visited: false,
        besucht: {
            de: "Visited:",
            en: "Visited:",
            fr: "Visited:"
        },
        geo: [47.55, 7.59],
        faq: {
            de: [
                {
                    category: "Öffnungszeiten & Eintritt",
                    items: [
                        {
                            question: "Wann ist das Münster geöffnet?",
                            answer: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffent"
                        }

                    ]
                }
            ]
        },
        openingDesc: {
            de: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffnet",
            en: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffnet",
            fr: "Das Münster ist täglich von 10:00 bis 17:00 Uhr geöffnet"
        },
        openinghours: {
            de: "Öffnungszeiten:",
            en: "Opening hours:",
            fr: "Heures d'ouverture:"
        }
    },
];

// Beispieldaten für Sehenswürdigkeiten bleiben gleich...

let currentLanguage = 'de';
let showingSplashScreen = true;





// Splash Screen HTML Template
const splashScreenHTML = `
    <div class="splash-content">
        <div class="splash-logo">
            <svg viewBox="0 0 100 100" width="128" height="128">
                <img src="images/thisisbasel.jpg" alt="Girl in a jacket" class="loadingScreenImg">
            </svg>
        </div>
        <h1 class="splash-title">Basel Sehenswürdigkeiten</h1>
    </div>
`;

// <img src="images/thisisbasel.jpg" alt="Girl in a jacket" style="width:409.2px;height:235px;">
// <circle cx="50" cy="50" r="45" fill="none" stroke="#007AFF" stroke-width="8" />
// <text x="50" y="50" text-anchor="middle" dy=".3em" font-size="24" font-weight="bold">HELLo</text>

// Funktion zum Laden des Besuchsstatus aus der Datenbank
async function loadVisitedStatus() {
    try {
        const response = await fetch('/api/visited');
        const visitedIds = await response.json();
        
        locations.forEach(location => {
            location.visited = visitedIds.includes(location.id);
        });
        
        // Aktualisiere die UI
        loadLocations();
    } catch (error) {
        console.error('Error loading visited status:', error);
    }
}

// Funktion zum Togglen des Besuchsstatus
async function toggleVisited(id) {
    const location = locations.find(loc => loc.id === id);
    if (location) {
        try {
            if (!location.visited) {
                await fetch(`/api/visited/${id}`, { method: 'POST' });
            } else {
                await fetch(`/api/visited/${id}`, { method: 'DELETE' });
            }
            
            location.visited = !location.visited;
            const checkmark = document.querySelector(`.checkmark-icon[data-id="${id}"]`);
            checkmark.textContent = location.visited ? '✅' : '☑️';
        } catch (error) {
            console.error('Error toggling visited status:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    //if (!await checkAuth()) {
      //  return; // Stoppe die Ausführung, wenn nicht authentifiziert
    //}
    // Zeige Splash Screen
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.innerHTML = splashScreenHTML;
    document.body.appendChild(splashScreen);

    // Lade Daten aus der Datenbank
    await loadVisitedStatus();
    
    // Setup Event Listeners
    setupEventListeners();
    
    // Nach 3 Sekunden Splash Screen ausblenden
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.remove();
            showingSplashScreen = false;
        }, 300);
    }, 1500);
});

// Rest des bestehenden Codes bleibt gleich...

// let currentLanguage = 'de';

document.addEventListener('DOMContentLoaded', () => {
    loadLocations();
    setupEventListeners();

    document.addEventListener('click', (event) => {
        const languageMenu = document.getElementById('language-menu');
        const menuButton = document.getElementById('menu-button');
        
        // Close the menu if click is outside the menu and menu button
        if (!languageMenu.contains(event.target) && !menuButton.contains(event.target)) {
            languageMenu.classList.add('hidden');
        }
    });
});

// Modify the toggleLanguageMenu function to stop event propagation
function toggleLanguageMenu(event) {
    event.stopPropagation(); // Prevent the document click handler from immediately closing the menu
    const menu = document.getElementById('language-menu');
    menu.classList.toggle('hidden');
}


function loadLocations() {
    const locationsContainer = document.getElementById('locations-container');
    locationsContainer.innerHTML = '';

    locations.forEach(location => {
        const card = createLocationCard(location);
        locationsContainer.appendChild(card);
    });
}
// Unten: Alle Sehenswürdigkeiten auf einer Seite
function createLocationCard(location) {
    const card = document.createElement('div');
    card.className = 'location-card';
    card.dataset.id = location.id;
    
    card.innerHTML = `
        <img src="${location.images[0]}" alt="${location.name[currentLanguage]}">
        <div class="content">
            <h2>${location.name[currentLanguage]}</h2>
            <p>${location.city[currentLanguage]}</p>
        </div>
        <div class="card-footer">
            <p>${location.besucht[currentLanguage]}</p>
            <span class="checkmark-icon" data-id="${location.id}">${location.visited ? '✅' : '☑️'}</span>
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('checkmark-icon')) {
            showLocationDetails(location);
        }
    });

    const checkmark = card.querySelector('.checkmark-icon');
    checkmark.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleVisited(location.id);
    });

    return card;
}

function getWeatherIcon(weather) {
    const weatherIcons = {
        'sunny': '☀️',
        'cloudy': '☁️',
        'rainy': '🌧️',
    };
    return weatherIcons[weather] || '❓';
}

function toggleVisited(id) {
    const location = locations.find(loc => loc.id === id);
    if (location) {
        location.visited = !location.visited;
        const checkmark = document.querySelector(`.checkmark-icon[data-id="${id}"]`);
        checkmark.textContent = location.visited ? '✅' : '☑️';
    }
}
// Unten: Die einzelnen Orte individuell
function showLocationDetails(location) {
    const detailsContainer = document.getElementById('location-details');
    detailsContainer.innerHTML = `
        <button id="back-button">← Zurück</button>
        <h1>${location.name[currentLanguage]}</h1>
        <div class="image-carousel">
            ${location.images.map((img, index) => `
                <img src="${img}" alt="${location.name[currentLanguage]}" class="carousel-image ${index === 0 ? 'active' : ''}">
            `).join('')}
            <button class="carousel-button prev">❮</button>
            <button class="carousel-button next">❯</button>
        </div>
        <p>${location.longDescription[currentLanguage]}</p>

        

    `;
    detailsContainer.classList.remove('hidden');

    document.getElementById('back-button').addEventListener('click', hideLocationDetails);
    setupCarousel();
}

function setupCarousel() {
    const carousel = document.querySelector('.image-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
}

function hideLocationDetails() {
    document.getElementById('location-details').classList.add('hidden');
}

function setupEventListeners() {
    const menuButton = document.getElementById('menu-button');
    //const searchButton = document.getElementById('search-button');
    const refreshButton = document.getElementById('refresh-button');
    //const attractionsButton = document.getElementById('attractions-button');
    //const mapButton = document.getElementById('map-button');

    menuButton.addEventListener('click', toggleLanguageMenu);
    //searchButton.addEventListener('click', toggleSearch);
    //refreshButton.addEventListener('click', refreshContent);
    //attractionsButton.addEventListener('click', () => toggleActiveButton(attractionsButton));
    //mapButton.addEventListener('click', () => toggleActiveButton(mapButton));

    setupLanguageButtons();
}

function toggleLanguageMenu() {
    const menu = document.getElementById('language-menu');
    menu.classList.toggle('hidden');
}

// Update the language button setup to stop propagation as well
function setupLanguageButtons() {
    const languageButtons = document.querySelectorAll('#language-menu button');
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the document click handler from interfering
            currentLanguage = e.target.dataset.lang;
            loadLocations();
            toggleLanguageMenu(e);
        });
    });
}

// ... (previous code remains unchanged)

function showLocationDetails(location) {
    const detailsContainer = document.getElementById('location-details');
    detailsContainer.innerHTML = `
        <button id="back-button">← Zurück</button>
        <h1>${location.name[currentLanguage]}</h1>
        <div class="image-carousel">
            ${location.images.map((img, index) => `
                <img src="${img}" alt="${location.name[currentLanguage]}" class="carousel-image ${index === 0 ? 'active' : ''}">
            `).join('')}
            <button class="carousel-button prev">❮</button>
            <button class="carousel-button next">❯</button>
        </div>
        <p>${location.longDescription[currentLanguage]}</p>
        <strong>${location.openinghours[currentLanguage]}</strong>${location.openingDesc[currentLanguage]}
        <div id="map" style="height: 300px;"></div>

        <!-- FAQ Section -->
        <div class="faq-section">
            <h2>Häufig gestellte Fragen</h2>
            ${location.faq[currentLanguage].map(category => `
                        ${category.items.map(item => `
                            <div class="faq-item">
                                <button class="question-toggle">
                                    ${item.question}
                                    <span class="toggle-icon">+</span>
                                </button>
                                <div class="answer hidden">
                                    ${item.answer}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div id="map" style="height: 300px;"></div>
        
    `;
    detailsContainer.classList.remove('hidden');

    document.getElementById('back-button').addEventListener('click', hideLocationDetails);
    setupCarousel();
    setupFAQHandlers();

    // Initialize Leaflet map
    const map = L.map('map').setView(location.geo, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for the location
    L.marker(location.geo).addTo(map)
        .bindPopup(location.name[currentLanguage])
        .openPopup();
}

// ... (rest of the code remains unchanged)

function setupFAQHandlers() {
    // Handle category toggles
    document.querySelectorAll('.category-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            const items = e.target.closest('.faq-category').querySelector('.faq-items');
            const icon = e.target.querySelector('.toggle-icon');
            items.classList.toggle('hidden');
            icon.textContent = items.classList.contains('hidden') ? '▼' : '▲';
        });
    });

    // Handle question toggles
    document.querySelectorAll('.question-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            const answer = e.target.closest('.faq-item').querySelector('.answer');
            const icon = e.target.querySelector('.toggle-icon');
            answer.classList.toggle('hidden');
            icon.textContent = answer.classList.contains('hidden') ? '+' : '-';
        });
    });
}

// Andere Funktionen bleiben unverändert

function loadLocations() {
    console.log('Aktuelle Sprache:', currentLanguage); // Teste die aktuelle Sprache
    const locationsContainer = document.getElementById('locations-container');
    locationsContainer.innerHTML = '';

    locations.forEach(location => {
        const card = createLocationCard(location);
        locationsContainer.appendChild(card);
    });
}
