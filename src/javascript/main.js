// Beispieldaten für Sehenswürdigkeiten (mit mehreren Bildern)
const locations = [
    {
        //Sehenswürdigkeit #1 Bankverein
        id: 1,
        name: {
            de: 'Bankverein',
            en: 'Bank Association Square',
            fr: 'Place de la Banque'
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
            de: 'Der Bankverein in Basel ist ein zentraler Platz mit historischer und wirtschaftlicher Bedeutung. Er befindet sich an der Kreuzung wichtiger Verkehrsachsen und ist ein Dreh- und Angelpunkt des Basler Lebens. Die prächtige Architektur rund um den Platz spiegelt Basels Tradition als Finanz- und Handelszentrum wider. Besonders beeindruckend ist das Gebäude der UBS, das sich hier befindet und ein Beispiel für repräsentative Baukunst der Jahrhundertwende ist. Der Bankverein ist auch ein idealer Ausgangspunkt, um das Stadtzentrum zu erkunden: Die Freie Strasse, Basels wichtigste Einkaufsstrasse, liegt nur wenige Schritte entfernt, und auch kulturelle Highlights wie das Kunstmuseum sind schnell erreichbar.',
            en: 'The Bankverein in Basel is a central square of historical and economic significance. Located at the intersection of major thoroughfares, it serves as a hub of Basle life. The impressive architecture around the square reflects the city\'s heritage as a financial and trading center. Particularly striking is the UBS building, an example of grand turn-of-the-century architecture. The Bankverein is also an excellent starting point for exploring the city center: Freie Strasse, Basel’s main shopping street, is just a short walk away, as are cultural highlights like the Kunstmuseum.',
            fr: 'Le Bankverein à Bâle est une place centrale d\'importance historique et économique. Située au carrefour des grandes artères, elle constitue un point névralgique de la vie bâloise. L’architecture impressionnante qui l’entoure reflète le patrimoine de la ville en tant que centre financier et commercial. Le bâtiment de l\'UBS, exemple marquant de l\'architecture de la fin du XIXe siècle, est particulièrement notable. Le Bankverein est également un excellent point de départ pour explorer le centre-ville : la Freie Strasse, principale rue commerçante de Bâle, est à quelques pas, tout comme des points culturels majeurs tels que le Kunstmuseum.'
        },
        images: [
            '../images/bankverein/bankverein1.jpg',
            '../images/bankverein/bankverein2.jpg',
            '../images/bankverein/bankverein3.jpg'
        ],
        geo: [47.553861, 7.592314],
        openingDesc: {
            de: " ",
            en: " ",
            fr: " "
        },
        openinghours: {
            de: " ",
            en: " ",
            fr: " "
        },
        audioGuide: {
            de: '../audio/bankverein/bankverein-german.mp3',
            en: '../audio/bankverein/bankverein-english.mp3',
            fr: '../audio/bankverein/bankverein-french.mp3'
        }
    },
    {
        //Sehenswürdigkeit #2 Münsterplatz
        id: 2,
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
            de: 'Das Basler Münster ist eines der bekanntesten Wahrzeichen der Stadt Basel. Ursprünglich im 12. Jahrhundert als romanische Kirche erbaut, wurde es nach einem Erdbeben im 14. Jahrhundert im gotischen Stil wiederaufgebaut. Seine rot leuchtenden Sandsteinmauern, die bunt gemusterten Dachziegel und die beiden spitzen Türme machen es zu einem architektonischen Highlight. Von der Pfalz, einer Plattform hinter dem Münster, hat man einen beeindruckenden Blick über den Rhein und die Altstadt. Besonders für junge Erwachsene bietet das Münster spannende Einblicke in Geschichte und Architektur – von den kunstvollen Reliefs an der Fassade bis hin zu den beeindruckenden Glasfenstern. Der Aufstieg auf den Turm lohnt sich, um einen fantastischen Panoramablick auf Basel und das Dreiländereck zu geniessen.',
            en: 'The Basel Minster is one of the city\'s most iconic landmarks. Originally built as a Romanesque church in the 12th century, it was rebuilt in the Gothic style after an earthquake in the 14th century. Its red sandstone walls, colorful patterned roof tiles, and twin spires make it an architectural highlight. From the Pfalz, a terrace behind the Minster, you can enjoy stunning views of the Rhine and the old town. For young adults, the Minster offers fascinating insights into history and architecture—from the intricate reliefs on the facade to the impressive stained glass windows. Climbing the tower is highly recommended for a breathtaking panoramic view of Basel and the tri-border region.',
            fr: 'La cathédrale de Bâle, ou Münster, est l’un des symboles les plus célèbres de la ville. Construite au XIIᵉ siècle dans un style roman, elle fut reconstruite dans un style gothique après un tremblement de terre au XIVᵉ siècle. Ses murs en grès rouge, ses tuiles colorées et ses deux flèches en font un chef-d’œuvre architectural. Depuis la Pfalz, une terrasse située derrière la cathédrale, on peut admirer une vue spectaculaire sur le Rhin et la vieille ville. Pour les jeunes adultes, le Münster est une véritable découverte, avec ses reliefs artistiques, ses vitraux impressionnants et son riche patrimoine. Monter sur la tour est une expérience incontournable pour profiter d’une vue panoramique sur Bâle et la région des trois frontières.'
        },
        images: [
            '../images/muenster/muenster1.jpeg',
            '../images/muenster/muenster2.jpg',
            '../images/muenster/muenster3.jpg'
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
        },
        audioGuide: {
            de: '../audio/muenster/muenster-german.mp3',
            en: '../audio/muenster/muenster-english.mp3',
            fr: '../audio/muenster/muenster-french.mp3'
        }
    },
    {
        //Sehenswürdigkeit #3 Schifflände
        id: 3,
        name: {
            de: 'Schifflände',
            en: 'Schifflände',
            fr: 'Schifflände'
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
            de: 'Die Schifflände in Basel ist ein historischer Ort am Rhein, der früher als Anlegestelle für Schiffe diente. Heute ist sie ein beliebter Treffpunkt und Ausgangspunkt für Spaziergänge entlang des Flusses. Hier spürt man die Verbindung Basels zum Wasser und seiner reichen Handelsgeschichte. Besonders im Sommer ist die Schifflände ein lebendiger Ort, wo Menschen die Sonne geniessen, schwimmen oder einfach die Aussicht auf die Altstadt mit ihren charmanten Häusern geniessen. Die Nähe zur Mittleren Brücke, einer der ältesten Rheinbrücken, macht die Schifflände zu einem perfekten Ort, um die Stadt zu erkunden. Auch die Fähren, die ohne Motor nur von der Strömung angetrieben werden, starten hier – ein unvergessliches Erlebnis.',
            en: 'The Schifflände in Basel is a historic site by the Rhine River that once served as a landing place for ships. Today, it’s a popular meeting spot and starting point for walks along the river. Here, you can feel Basel\'s connection to the water and its rich trading history. Especially in summer, the Schifflände is a lively place where people enjoy the sun, swim, or simply take in the view of the old town with its charming houses. Its proximity to the Middle Bridge, one of the oldest bridges over the Rhine, makes it an ideal spot to explore the city. Ferries powered solely by the river’s current also depart from here – an unforgettable experience.',
            fr: 'La Schifflände à Bâle est un site historique au bord du Rhin, qui servait autrefois de point d’amarrage pour les bateaux. Aujourd’hui, c’est un lieu de rencontre prisé et un point de départ pour des promenades le long du fleuve. On y ressent le lien entre Bâle et l’eau ainsi que sa riche histoire commerciale. En été, la Schifflände est particulièrement animée, avec des gens qui profitent du soleil, nagent ou admirent simplement la vue sur la vieille ville et ses charmantes maisons. Sa proximité avec le Pont du Milieu, l’un des plus anciens ponts sur le Rhin, en fait un endroit idéal pour explorer la ville. De plus, les ferries, qui se déplacent uniquement grâce au courant, partent d’ici – une expérience inoubliable.'
        },
        images: [
            '../images/schifflande/schifflande1.jpg',
            '../images/schifflande/schifflande2.jpg',
            '../images/schifflande/schifflande3.webp'
        ],
        geo: [47.559697, 7.588640],
        openingDesc: {
            de: "",
            en: "",
            fr: ""
        },
        openinghours: {
            de: "",
            en: "",
            fr: ""
        },
        audioGuide: {
            de: '../audio/schifflande/schifflande-german.mp3',
            en: '../audio/schifflande/schifflande-english.mp3',
            fr: '../audio/schifflande/schifflande-french.mp3'
        }
    },
    // Sehenwürdigkeit #4 Rathaus
    {
        id: 4,
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
            '../images/rathaus/rathaus1.jpg',
            '../images/rathaus/rathaus2.jpg',
            '../images/rathaus/rathaus3.webp'
        ],
        geo: [47.558169, 7.588069],
        openingDesc: {
            de: "",
            en: "",
            fr: ""
        },
        openinghours: {
            de: "",
            en: "",
            fr: ""
        },
        audioGuide: {
            de: '../audio/rathaus/rathaus-german.mp3',
            en: '../audio/rathaus/rathaus-english.mp3',
            fr: '../audio/rathaus/rathaus-french.mp3'
        }
    },
    // Sehenwürdigkeit #5 Barfüsserkirche
    {
        id: 5,
        name: {
            de: 'Barfüsserkirche',
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
            '../images/barfusserkirche/barfusserkirche1.jpg',
            '../images/barfusserkirche/barfusserkirche2.jpg',
            '../images/barfusserkirche/barfusserkirche3.jpg'
        ],
        geo: [47.554701, 7.589965],
        openingDesc: {
            de: "",
            en: "",
            fr: ""
        },
        openinghours: {
            de: "",
            en: "",
            fr: ""
        },
        audioGuide: {
            de: '../audio/barfusserkirche/barfusserkirche-german.mp3',
            en: '../audio/barfusserkirche/barfusserkirche-english.mp3',
            fr: '../audio/barfusserkirche/barfusserkirche-french.mp3'
        }
    },
    // Sehenwürdigkeit #6 Cliquenkeller
    {
        id: 6,
        name: {
            de: 'Cliquenkeller',
            en: 'Clique cellar',
            fr: 'Cave à cliques'
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
            de: 'Der Cliquenkeller der Lälli Clique ist ein verstecktes Juwel in der Basler Altstadt und ein absolutes Muss für Fans der Basler Fasnacht. In einem historischen Gebäude gelegen, spürt man beim Betreten des Kellers sofort die lebendige Tradition und den unverwechselbaren Geist der Fasnacht. Hier treffen sich die Mitglieder der Lälli Clique, um zu proben, das Fasnachtsjahr zu planen oder sich einfach mal wieder zu sehen. Der Keller ist mit alten Instrumenten, historischen Fotografien und Kunstwerken dekoriert, welche die Geschichte und die Kreativität der Clique dokumentieren. Für junge Erwachsene, die mehr über die Basler Kultur erfahren möchten, bietet dieser Ort einen einmaligen Einblick in ein Stück Basler Identität.',
            en: 'The clique cellar of the Lälli Clique is a hidden gem in Basel\'s old town and an absolute must for fans of the Basel carnival. Situated in a historic building, you can immediately sense the lively tradition and unmistakable spirit of the carnival when you enter the cellar. This is where the members of the Lälli Clique meet to rehearse, to plan the carnival year or to see each other again. The cellar is decorated with old instruments, historical photographs and works of art documenting the history and creativity of the clique. For young adults who want to learn more about Basel\'s culture, this place offers a unique insight into a core part of Basel\'s identity.',
            fr: "La cave de la clique Lälli est un joyau caché dans la vieille ville de Bâle et un must absolu pour les fans du carnaval de Bâle. Située dans un bâtiment historique, on ressent immédiatement en entrant dans la cave la tradition vivante et l'esprit inimitable du carnaval. C'est ici que les membres de la Lälli Clique se retrouvent pour répéter, pour planifier l'année de carnaval ou pour se revoir. La cave est décorée de vieux instruments, de photographies historiques et d'œuvres d'art qui documentent l'histoire et la créativité de la clique. Pour les jeunes adultes qui souhaitent en savoir plus sur la culture bâloise, ce lieu offre un aperçu unique d'une pièce maîtresse de l'identité bâloise."
        },
        images: [
            '../images/cliquenkeller/cliquenkeller1.jpg',
            '../images/cliquenkeller/cliquenkeller2.jpg',
            '../images/cliquenkeller/cliquenkeller3.jpg'
        ],
        geo: [47.554694, 7.595769],
        openingDesc: {
            de: "Die Lälli Clique hat die älteste Junge Garde Sektion in Basel-Stadt.",
            en: "The Lälli Clique has the oldest Young Guard (Junge Garde) section in Basel-Stadt.",
            fr: "La Lälli Clique a la plus ancienne section de jeunes gardes (Junge Garde) de Bâle-Ville."
        },
        openinghours: {
            de: "Funfact:",
            en: "Funfact:",
            fr: "Funfact:"
        },
        audioGuide: {
            de: '../audio/cliquekeller/cliquekeller-german.mp3',
            en: '../audio/cliquekeller/cliquekeller-english.mp3',
            fr: '../audio/cliquekeller/cliquekeller-french.mp3'
        }
    }
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
//Coupon modal
const couponModalContent = {
    de: {
        title: 'Glückwunsch!',
        message: 'Hier ist Ihr Rabattcode für ein Gratis Getränk im Lälli Cliquenkeller:',
        code: 'BASEL2024',
        discount: '1 Gratis Getränk',
        button: 'Code kopieren',
        copied: 'Kopiert!',
        closeButton: 'Schliessen'
    },
    en: {
        title: 'Congratulations!',
        message: 'Here is your discount code for a free drink in the Lälli Cliquenkeller:',
        code: 'BASEL2024',
        discount: '1 free drink',
        button: 'Copy code',
        copied: 'Copied!',
        closeButton: 'Close'
    },
    fr: {
        title: 'Félicitations!',
        message: 'Voici votre code de réduction pour une boisson gratuite au Lälli Cliquenkeller:',
        code: 'BASEL2024',
        discount: '1 boisson gratuite',
        button: 'Copier le code',
        copied: 'Copié!',
        closeButton: 'Fermer'
    }
};
const couponButton = {
    de: {
        text: 'Gutschein anzeigen'
    },
    en: {
        text: 'Show Coupon'
    },
    fr: {
        text: 'Afficher le coupon'
    }
};

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

const findTheWay = {
    de: {
      done: 'Zeige mir den Weg'
    },
    en: {
      done: 'Show me the way'
    },
    fr: {
      done: 'Montrez-moi le chemin'
  }
};

const doneButton = {
    de: {
      done: 'Ort abschliessen'
    },
    en: {
      done: 'Complete location'
    },
    fr: {
      done: 'Localisation complète'
  }
};

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

// Helper function to normalize language codes with null check
function normalizeLanguage(lang) {
    // If lang is null or undefined, return default language
    if (!lang) {
        return 'de';
    }

    // Convert to lowercase and handle full text to language code
    const langText = lang.toLowerCase().trim();
    const langMap = {
        'deutsch': 'de',
        'english': 'en',
        'français': 'fr',
        'francais': 'fr',
        'de': 'de',
        'en': 'en',
        'fr': 'fr'
    };
    return langMap[langText] || 'de'; // Default to German if unknown
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
                <img src="../images/thisisbasel.jpg" alt="Girl in a jacket" class="loadingScreenImg">
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
    setupLanguageModal();

    document.addEventListener('click', (event) => {
        const languageMenu = document.getElementById('language-menu');
        const menuButton = document.getElementById('menu-button');
        
        // Only check contains if both elements exist
        if (languageMenu && menuButton) {
            // Close the menu if click is outside the menu and menu button
            if (!languageMenu.contains(event.target) && !menuButton.contains(event.target)) {
                languageMenu.classList.add('hidden');
            }
        }
    });
});

// Update the toggleLanguageMenu function
function toggleLanguageMenu(event) {
    if (event) {
        event.stopPropagation();
    }
    const menu = document.getElementById('language-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
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
        message: 'Schliessen Sie den vorherigen Ort ab, um diesen freizuschalten!',
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

//Show Coupon Modal
// Add this function to show the coupon modal
function showCouponModal() {
    const modal = document.createElement('div');
    modal.className = 'modal coupon-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="close-modal">×</span>
            </div>
            <div class="modal-body">
                <div class="celebration-icon">🎉</div>
                <h2>${couponModalContent[currentLanguage].title}</h2>
                <p>${couponModalContent[currentLanguage].message}</p>
                <div class="coupon-code">
                    <span id="coupon-text">${couponModalContent[currentLanguage].code}</span>
                    <button id="copy-code-btn" class="copy-button">
                        ${couponModalContent[currentLanguage].button}
                    </button>
                </div>
                <p class="discount-text">${couponModalContent[currentLanguage].discount}</p>
            </div>
            <div class="modal-footer">
                <button id="modal-close-btn">${couponModalContent[currentLanguage].closeButton}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('show'), 10);

    // Setup copy button functionality
    const copyBtn = modal.querySelector('#copy-code-btn');
    const couponText = modal.querySelector('#coupon-text');
    
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(couponModalContent[currentLanguage].code).then(() => {
            copyBtn.textContent = couponModalContent[currentLanguage].copied;
            setTimeout(() => {
                copyBtn.textContent = couponModalContent[currentLanguage].button;
            }, 2000);
        });
    });

    // Setup event listeners for closing
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

let currentRoot = null;

function hideLocationDetails() {
    const detailsContainer = document.getElementById('location-details');
    
    // Clean up React root if it exists
    if (currentRoot) {
        currentRoot.unmount();
        currentRoot = null;
    }
    
    detailsContainer.classList.add('hidden');
}

function setupEventListeners() {
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            const modal = document.getElementById('language-modal');
            if (modal) {
                modal.classList.add('show');
            }
        });
    }
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

//die genauen Orte individuell
function showLocationDetails(location) {
    // First clean up any existing root
    if (currentRoot) {
        currentRoot.unmount();
        currentRoot = null;
    }
    const detailsContainer = document.getElementById('location-details');
    detailsContainer.innerHTML = `
        <button id="back-button">← Zurück</button>
        <h1>${location.name[currentLanguage]}</h1>

        <!-- Audio Player Container -->
        <div id="audio-player-container" class="my-4"></div>

        <button id="find-way-btn" class="action-button">${findTheWay[currentLanguage].done}</button>

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
            ${!location.completed ? `<button id="arrived-btn" class="action-button">${doneButton[currentLanguage].done} </button>` : ''}
        </div>

        <!-- Coupon popup container -->
        <div id="coupon-popup-container"></div>
        
        <div id="map" style="height: 300px;"></div>
        
    `;

    // Modify the showLocationDetails function to include the coupon check
    // Add this inside showLocationDetails function, after the detailsContainer.innerHTML part:
    function isLastLocation(location) {
        return location.id === locations[locations.length - 1].id;
    }

    // Initialize React Audio Player component if audio is available
    const audioPlayerContainer = document.getElementById('audio-player-container');
    if (location.audioGuide && location.audioGuide[currentLanguage]) {
        currentRoot = ReactDOM.createRoot(audioPlayerContainer);
        currentRoot.render(
            React.createElement(window.AudioPlayer, {
                audioUrl: location.audioGuide[currentLanguage],
                language: currentLanguage
            })
        );
    }

    // Setup back button with proper cleanup
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        hideLocationDetails();
    });

    detailsContainer.classList.remove('hidden');

    document.getElementById('back-button').addEventListener('click', hideLocationDetails);
    setupCarousel();

    // Initialize map
    const map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add destination marker
    const destinationMarker = L.marker(location.geo)
        .addTo(map)
        .bindPopup(location.name[currentLanguage]);

    // Create a group to hold both markers
    const markersGroup = L.featureGroup([destinationMarker]);

    // Check for geolocation support and add user location
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = [position.coords.latitude, position.coords.longitude];
            
            // Add user location marker with custom icon
            const userMarker = L.marker(userLocation, {
                icon: L.divIcon({
                    html: '📍',
                    iconSize: [50, 50],
                    className: 'user-location-marker'
                })
            }).addTo(map)
              .bindPopup('Your Location');

            // Add user marker to group
            markersGroup.addLayer(userMarker);

            // Fit map to show both markers
            map.fitBounds(markersGroup.getBounds(), {
                padding: [50, 50] // Add some padding around the bounds
            });
        }, 
        (error) => {
            console.error('Error getting location:', error);
            // If can't get user location, just center on destination
            map.setView(location.geo, 14);
        });
    } else {
        // If geolocation not supported, just center on destination
        map.setView(location.geo, 14);
    }

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
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=walking`;
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

    // Check if this is the last location
    if (isLastLocation(location) && !location.couponShown) {
        // Add a slight delay to ensure the location details are fully loaded
        setTimeout(() => {
            showCouponModal();
            location.couponShown = true; // Mark that we've shown the coupon for this location
        }, 500);
    }
}

// ... (rest of the code remains unchanged)

// Add these translations to your existing content objects in main.js
const pageTitle = {
    de: 'Sehenswürdigkeiten',
    en: 'Attractions',
    fr: 'Attractions touristiques'
};

// Andere Funktionen bleiben unverändert

function loadLocations() {
    console.log('Aktuelle Sprache:', currentLanguage); // Teste die aktuelle Sprache

    // Update the page title
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.textContent = pageTitle[currentLanguage];
    }

    const locationsContainer = document.getElementById('locations-container');
    locationsContainer.innerHTML = '';

    locations.forEach(location => {
        const card = createLocationCard(location);
        locationsContainer.appendChild(card);
    });
}


// Update your JavaScript
function setupLanguageModal() {
    const languageModal = document.getElementById('language-modal');
    const closeButton = document.querySelector('.close-language-modal');
    const languageOptions = document.querySelectorAll('.language-option');
    const menuButton = document.getElementById('menu-button');

    // Update the menu button HTML
    menuButton.innerHTML = `
        <svg class="menu-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    function showModal() {
        languageModal.classList.add('show');
        // Mark current language as active
        languageOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === currentLanguage);
        });
    }

    function hideModal() {
        languageModal.classList.remove('show');
    }

    // Setup event listeners
    menuButton.addEventListener('click', showModal);
    closeButton.addEventListener('click', hideModal);

    // Close modal when clicking outside
    languageModal.addEventListener('click', (e) => {
        if (e.target === languageModal) {
            hideModal();
        }
    });

    // Handle language selection - Remove the span update
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = option.dataset.lang;
            
            // Update current language
            currentLanguage = selectedLang;
            localStorage.setItem('selectedLanguage', selectedLang);

            // Update UI
            languageOptions.forEach(opt => {
                opt.classList.toggle('active', opt === option);
            });

            // Reload locations with new language
            loadLocations();

            // Hide modal with slight delay for better UX
            setTimeout(hideModal, 150);
        });
    });
}
