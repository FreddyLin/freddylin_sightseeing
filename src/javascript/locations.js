// Beispieldaten für Sehenswürdigkeiten (mit mehreren Bildern)
export const locations = [
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
            '../images/muenster1.jpeg',
            '../images/muenster2.jpg',
            '../images/muenster3.jpg'
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
            de: '../audio/muenster-german.mp3',
            en: '../audio/muenster-english.mp3',
            fr: '../audio/muenster-french.mp3'
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
            '../images/rathaus1.jpg',
            '../images/rathaus2.jpg',
            '../images/rathaus3.webp'
        ],
        geo: [47.55, 7.59],
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
            de: '../audio/muenster-english.mp3',
            en: '../audio/muenster-english.mp3',
            fr: '../audio/muenster-english.mp3'
        }
    }
];

