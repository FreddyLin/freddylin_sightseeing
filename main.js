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
        geo: [47.556245, 7.591869],
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
        geo: [47.55, 7.59]
    },
];

// Beispieldaten für Sehenswürdigkeiten bleiben gleich...



// Add to your document.addEventListener('DOMContentLoaded', ...)
document.addEventListener('DOMContentLoaded', async () => {
    // Load saved progress
    

    const isFirstVisit = localStorage.getItem('firstVisit') !== 'false';
    const savedLanguage = localStorage.getItem('selectedLanguage');
    // let currentLanguage = savedLanguage || 'de';

    loadProgress();

    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.innerHTML = splashScreenHTML;
    document.body.appendChild(splashScreen);

    
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



    if (isFirstVisit) {
        // Show language selection overlay
        document.getElementById('language-selection-screen').classList.remove('hidden');
        
        const languageButtons = document.querySelectorAll('.language-buttons button');
        languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Get the text content and normalize it
                const selectedLang = normalizeLanguage(e.target.textContent);
                currentLanguage = selectedLang;
                
                console.log('Language selected:', selectedLang);
            
                // Mark as not first visit anymore
                localStorage.setItem('firstVisit', 'false');
                localStorage.setItem('selectedLanguage', selectedLang);
            
                // Hide language selection overlay
                document.getElementById('language-selection-screen').classList.add('hidden');
            
                // Show welcome screen with selected language
                showWelcomeScreen(selectedLang);
            });
        });
    } else {
        // Use saved language
        currentLanguage = normalizeLanguage(savedLanguage) || 'de';
        loadLocations();

        // Hide overlay screens
        const overlayScreens = document.querySelectorAll('.overlay-screen');
        overlayScreens.forEach(screen => screen.classList.add('hidden'));
    }

});

let currentLanguage = 'de';
let showingSplashScreen = true;

locations.forEach((location, index) => {
    location.unlocked = index === 0; // Only first location is unlocked initially
    location.completed = false; // Track if user has visited the location
});


// Add a function to handle language selection
function handleLanguageSelection(lang) {
    currentLanguage = lang;
    localStorage.setItem('languageSelected', 'true');
    localStorage.setItem('selectedLanguage', lang);
    
    

}

const welcomeContent = {
    de: {
        title: 'Willkommen zur Basel Stadtführung',
        description: 'Entdecken Sie die schönsten Sehenswürdigkeiten von Basel. Diese interaktive Tour führt Sie zu historischen Orten und bietet spannende Einblicke in die Stadt.',
        buttonText: 'Tour starten'
    },
    en: {
        title: 'Welcome to Basel City Tour',
        description: 'Discover the most beautiful attractions of Basel. This interactive tour will guide you to historical locations and provide exciting insights into the city.',
        buttonText: 'Start Tour'
    },
    fr: {
        title: 'Bienvenue à la visite de Bâle',
        description: 'Découvrez les plus belles attractions de Bâle. Cette visite interactive vous guidera vers des lieux historiques et vous offrira des perspectives passionnantes sur la ville.',
        buttonText: 'Commencer la visite'
    }
};

// Helper function to normalize language codes
function normalizeLanguage(lang) {
    // Convert to lowercase and handle full text to language code
    const langMap = {
        'deutsch': 'de',
        'english': 'en',
        'français': 'fr',
        'francais': 'fr',
        'de': 'de',
        'en': 'en',
        'fr': 'fr'
    };
    return langMap[lang.toLowerCase()] || 'de'; // Default to German if unknown
}

// Updated welcome screen function
function showWelcomeScreen(lang) {
    const welcomeScreen = document.getElementById('welcome-screen');
    if (!welcomeScreen) {
        console.error('Welcome screen element not found');
        return;
    }

    // Normalize the language code
    const normalizedLang = normalizeLanguage(lang);
    console.log('Showing welcome screen with language:', normalizedLang);

    // Get the content for the selected language
    const content = welcomeContent[normalizedLang];

    if (!content) {
        console.error('No content found for language:', normalizedLang);
        content = welcomeContent.de; // Fallback to German
    }

    // Set welcome screen content
    welcomeScreen.innerHTML = `
        <div class="welcome-content">
            <h1>${content.title}</h1>
            <p>${content.description}</p>
            <button id="start-tour-btn">${content.buttonText}</button>
        </div>
    `;

    // Show welcome screen
    welcomeScreen.classList.remove('hidden');

    const startButton = document.getElementById('start-tour-btn');
    if (startButton) {
        startButton.addEventListener('click', () => {
            welcomeScreen.classList.add('hidden');
            loadLocations();
        });
    }
}



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


// Function to save progress to localStorage
function saveProgress() {
    const progress = locations.map(loc => ({
        id: loc.id,
        unlocked: loc.unlocked,
        completed: loc.completed
    }));
    localStorage.setItem('locationProgress', JSON.stringify(progress));
}

// Function to load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('locationProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        progress.forEach(saved => {
            const location = locations.find(loc => loc.id === saved.id);
            if (location) {
                location.unlocked = saved.unlocked;
                location.completed = saved.completed;
            }
        });
    }
}


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

// Update the toggleLanguageMenu function
function toggleLanguageMenu(event) {
    if (event) {
        event.stopPropagation();
    }
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


// Modal

const modalContent = {
    de: {
        message: 'Schließen Sie den vorherigen Ort ab, um diesen freizuschalten!',
        button: 'Verstanden'
    },
    en: {
        message: 'Complete the previous location to unlock this one!',
        button: 'Got it'
    },
    fr: {
        message: 'Terminez l\'emplacement précédent pour débloquer celui-ci!',
        button: 'Compris'
    }
};

// Function to show the modal
function showLockedLocationModal() {
    const modal = document.getElementById('locked-location-modal');
    const message = document.getElementById('locked-message');
    const closeBtn = document.getElementById('modal-close-btn');
    
    // Set content based on current language
    message.textContent = modalContent[currentLanguage].message;
    closeBtn.textContent = modalContent[currentLanguage].button;
    
    // Show modal
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

// Function to hide the modal
function hideLockedLocationModal() {
    const modal = document.getElementById('locked-location-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Setup modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('locked-location-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    closeBtn.addEventListener('click', hideLockedLocationModal);
    modalCloseBtn.addEventListener('click', hideLockedLocationModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideLockedLocationModal();
        }
    });
});

// At the top of your main.js file, add these modal strings
const completedModalContent = {
    de: {
        title: 'Ort abgeschlossen!',
        message: 'Gut gemacht! Der nächste Ort wurde freigeschaltet.',
        button: 'Weiter'
    },
    en: {
        title: 'Location Completed!',
        message: 'Well done! The next location has been unlocked.',
        button: 'Continue'
    },
    fr: {
        title: 'Lieu terminé !',
        message: 'Bien joué ! Le prochain lieu a été débloqué.',
        button: 'Continuer'
    }
};

// In the arrivedBtn click handler, replace the alert with:
function showCompletedLocationModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="close-modal">×</span>
            </div>
            <div class="modal-body">
                <div class="unlock-icon">🎉</div>
                <h2>${completedModalContent[currentLanguage].title}</h2>
                <p>${completedModalContent[currentLanguage].message}</p>
            </div>
            <div class="modal-footer">
                <button id="modal-close-btn">${completedModalContent[currentLanguage].button}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('show'), 10);

    // Setup event listeners
    const closeBtn = modal.querySelector('.close-modal');
    const modalCloseBtn = modal.querySelector('#modal-close-btn');

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }

    closeBtn.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Unten: Alle Sehenswürdigkeiten auf einer Seite
// Update createLocationCard function
function createLocationCard(location) {
    const card = document.createElement('div');
    card.className = `location-card ${!location.unlocked ? 'locked' : ''}`;
    card.dataset.id = location.id;
    
    const lockOverlay = !location.unlocked ? '<div class="lock-overlay">🔒</div>' : '';
    
    card.innerHTML = `
        ${lockOverlay}
        <img src="${location.images[0]}" alt="${location.name[currentLanguage]}">
        <div class="content">
            <h2>${location.name[currentLanguage]}</h2>
            <p>${location.city[currentLanguage]}</p>
        </div>
        <div class="card-footer">
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (!location.unlocked) {
            showLockedLocationModal();
            return;
        }
        if (!e.target.classList.contains('checkmark-icon')) {
            showLocationDetails(location);
        }
    });

    return card;
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
            // Directly hide the menu instead of toggling
            const menu = document.getElementById('language-menu');
            menu.classList.add('hidden');
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
        <p style="margin: 0; padding: 0;"><strong>${location.openinghours[currentLanguage]}</p></strong><p>${location.openingDesc[currentLanguage]}</p>
        <div id="map" style="height: 300px;"></div>

        <div class="action-buttons">
            <button id="find-way-btn" class="action-button">Find the way</button>
            ${!location.completed ? `<button id="arrived-btn" class="action-button">I have arrived</button>` : ''}
        </div>
        
        <div id="map" style="height: 300px;"></div>
        
    `;
    detailsContainer.classList.remove('hidden');

    document.getElementById('back-button').addEventListener('click', hideLocationDetails);
    setupCarousel();

    // Initialize map
    const map = L.map('map').setView(location.geo, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(location.geo).addTo(map).bindPopup(location.name[currentLanguage]).openPopup();

    // Setup event listeners
    document.getElementById('back-button').addEventListener('click', hideLocationDetails);
    document.getElementById('find-way-btn').addEventListener('click', () => {
        // Open Google Maps with directions
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const destinationLat = location.geo[0];
                const destinationLng = location.geo[1];
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}`;
                window.open(mapsUrl, '_blank');
            });
        } else {
            alert('Geolocation is not supported by your browser');
        }
    });

    const arrivedBtn = document.getElementById('arrived-btn');
    if (arrivedBtn) {
        arrivedBtn.addEventListener('click', () => {
            // Mark current location as completed
            location.completed = true;
            
            // Find and unlock next location
            const currentIndex = locations.findIndex(loc => loc.id === location.id);
            if (currentIndex < locations.length - 1) {
                locations[currentIndex + 1].unlocked = true;
            }
            
            // Save progress
            saveProgress();

            // Show completion modal
            showCompletedLocationModal();
            
            // Refresh the view
            hideLocationDetails();
            loadLocations();
            
        });
    }

    setupCarousel();
}

// ... (rest of the code remains unchanged)


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
