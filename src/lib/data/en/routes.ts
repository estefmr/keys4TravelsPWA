import type { RouteTranslation } from "@/lib/types";

/**
 * Lugares y rutas en inglés, por slug. El original está en ../routes.ts.
 * `photoLabels` y `stops` siguen el mismo orden que allí.
 *
 * Los nombres de los lugares NO se traducen (decisión de la clienta): el
 * título sale siempre del original y, dentro del texto, cada lugar se
 * nombra igual que en español ("the Palacio de La Moneda").
 */
export const routesEn: Record<string, RouteTranslation> = {
  // ─────────────────────────── Santiago de Chile ───────────────────────────
  "barrio-paris-londres": {
    teaser: "Beauty, history and memory in the heart of Santiago.",
    intro: [
      "In the heart of Santiago’s historic center, the Barrio París-Londres is a small corner that seems transported straight from the Latin Quarter of Paris. Built in the 1920s, this two-block cobblestoned enclave combines European façades, wrought-iron balconies and three- and four-story mansions that contrast with the modern skyscrapers just a block away.",
      "But this quarter is more than a pretty postcard: its streets also hold a dark and courageous chapter of Chile’s recent history. During the military dictatorship (1973–1990), the building at Londres 38 was used as a clandestine detention center — a painful episode that is now remembered and honored as a site of memory. Since 2010 it has been open to the public, connecting Chilean and foreign visitors with the country’s real history.",
      "Visiting the Barrio París-Londres goes beyond photography: it means walking through European architectural beauty while understanding Chile’s historical memory. We especially recommend exploring it with a local guide for a deeper, richer experience.",
      "A quarter that blends history and resilience in the very center of Santiago. Will you come and discover it?",
    ],
    photoLabels: ["Antiguo Cuartel Yucatán"],
  },

  "iglesia-de-san-francisco": {
    teaser: "Santiago’s oldest church, witness to five centuries of Chilean history.",
    intro: [
      "On the Alameda Bernardo O’Higgins, the Iglesia de San Francisco is the oldest building in Santiago de Chile. Construction began in 1572 and, ever since, it has survived earthquakes, revolutions and the complete transformation of the city around it, still standing on adobe walls more than 450 years old.",
      "Its current neoclassical tower was rebuilt in 1857 by Fermín Vivaceta after successive earthquakes, and contrasts with the colonial body of the church. Inside, the ceiling of roble pellín oak brought from southern Chile stands out, along with the revered Virgen del Socorro, a small figure that arrived with Pedro de Valdivia in 1540 and accompanied the founding of Santiago in 1541.",
      "The complex is completed by the Museo Colonial de San Francisco, one of the most important in South America, which holds 53 canvases on the life of Saint Francis of Assisi painted in the Viceroyalty of Peru.",
      "Close to the Santa Lucía metro station and the Barrio París-Londres, this church is a must for anyone wishing to connect with Santiago’s real history. Entry to the church is free. Will you come and discover it?",
    ],
    photoLabels: ["17th-century canvases", "Corridors and gardens"],
  },

  "museo-de-la-educacion-gabriela-mistral": {
    teaser: "Educational heritage in the heart of Barrio Yungay.",
    intro: [
      "At the corner of Chacabuco and Compañía de Jesús, in Santiago’s historic Barrio Yungay, stands the Museo de la Educación Gabriela Mistral (MEGM), in the west wing of the former Escuela Normal de Preceptoras, a teacher-training school for women.",
      "Its name pays a double tribute to Gabriela Mistral: as the first Latin American woman to win the Nobel Prize in Literature (1945), and also as a teacher, since it was in this very building that she earned her primary-school teaching license in 1910. Before she was a poet, Mistral was an educator, and that teaching legacy is an essential part of her story.",
      "More than a traditional museum, the MEGM is a living space that reflects on education in Chile through its educational heritage. Every month it welcomes former students of Escuela Normal No. 1, who return to the same classrooms where they trained as teachers, and it works actively on early childhood, gender and local community.",
      "With free admission, the museum has become an open, democratic meeting point in Barrio Yungay, ideal for anyone seeking a different, deeper view of Chilean culture.",
    ],
    photoLabels: ["Former office", "Timeline of Chilean education"],
  },

  "centro-cultural-la-moneda": {
    teaser: "The underground palace of culture in the center of Santiago.",
    intro: [
      "Beneath the Plaza de la Ciudadanía, opposite the Palacio de La Moneda, lies one of Santiago’s most surprising cultural spaces: the Centro Cultural La Moneda. Set in the civic heart of the capital, this underground center was created with a clear goal: to make art accessible to all and to place Chile on the international cultural circuit.",
      "Built between 2004 and 2006 by the firm Undurraga Devés and inaugurated by former president Ricardo Lagos as part of the Bicentennial Project, it impresses with its avant-garde architecture: exposed concrete, glass railings and a spectacular glass roof that floods the whole space with natural light, like a modern cathedral devoted to art.",
      "It is a lively, ever-changing place: rotating exhibitions, contemporary art seminars, reading festivals, children’s activities and events such as the Día de los Patrimonios or the Santiago Wild Festival, dedicated to nature and conservation.",
      "Open Tuesday to Sunday, 10:00 a.m. to 6:30 p.m., with free entry to its exhibitions. Easily reached by metro: get off at La Moneda station (Line 1).",
    ],
    photoLabels: ["Entrance to the cultural center"],
  },

  "museo-ferroviario": {
    teaser: "Steel giants in the Parque Quinta Normal.",
    intro: [
      "In Santiago’s Parque Quinta Normal, surrounded by century-old trees, stands the Museo Ferroviario de Santiago, home to one of the most important collections of steam locomotives in South America: 16 monumental engines that tell the story of the country’s development and unification.",
      "Founded on 19 December 1984, the museum came about thanks to the workers of the now-defunct Maestranza Central de San Bernardo, who preserved these heritage pieces after they were retired from service, saving them from oblivion.",
      "It is a perfect plan for the whole family: children can roam freely among giant locomotives and discover Chile’s history in a fun way, while visitors can board historic carriages, such as a 1923 wooden coach made in Germany. In July 2025 the museum added four carriages from the Ferrocarril de Antofagasta a Bolivia, built in England in the early 20th century.",
      "More than a museum, it is a true time machine that takes you back to the golden age of Chilean railways. An unmissable visit to discover these steel giants that wrote history on rails.",
    ],
    photoLabels: ["Kitson Meyer locomotive", "Type 20 locomotive (1911)"],
  },

  "cerro-santa-lucia": {
    teaser: "The heart where Santiago de Chile was born.",
    intro: [
      "In the very center of Santiago, Cerro Santa Lucía — or Huelén, as the Mapuche called it — is much more than a natural lookout: it is the exact spot where the history of the Chilean capital began. Barely 69 meters high, this hill was considered sacred by the Indigenous peoples, who used it as a place of observation and spiritual connection.",
      "It was here that Pedro de Valdivia decided to found Santiago de Nueva Extremadura on 12 February 1541, after reaching the Valle del Mapocho on Saint Lucy’s Day in 1540. Centuries later, the hill also became a scientific setting: Charles Darwin used it as an observatory in 1834 to study the Andes, and in 1908 Chile’s first seismological station was installed there.",
      "A surprising fact: Cerro Santa Lucía is actually the remnant of a volcano some 15 million years old. Today its paths invite you to explore Castillo Hidalgo, the Fuente de Neptuno, the Capilla Neogótica, the tomb of Benjamín Vicuña Mackenna and beautiful gardens with lanterns and old statues.",
      "Visiting this hill means standing, quite literally, where Santiago was born almost 500 years ago.",
    ],
    photoLabels: [
      "Circular garden (Castillo Hidalgo)",
      "The lookout",
      "Sepulcro de Vicuña Mackenna",
    ],
  },

  "museo-nacional-de-bellas-artes": {
    teaser: "The palace that breathes art in Parque Forestal.",
    intro: [
      "In Santiago’s Parque Forestal stands the Museo Nacional de Bellas Artes (MNBA), the oldest art museum in South America and the first in Latin America, founded on 18 September 1880. Its elegant glass dome and neoclassical façade recall the Parisian boulevards — and that is no coincidence: Chilean architect Emilio Jéquier drew on the Petit Palais in Paris to design this palace, inaugurated in 1910 as part of the Centennial celebrations.",
      "Its glass dome, made in Belgium from 2,400 pieces and a 115-ton structure, lights up a strikingly beautiful central hall. Inside, the museum holds thousands of works — paintings, sculptures, drawings and prints — ranging from colonial religious art to contemporary expression, including great names of Chilean art such as Pedro Lira.",
      "More than a building full of paintings, the MNBA is a mirror of Chilean identity, where art reflects the country’s history, struggles and dreams. After suffering serious damage in the 1985 earthquake, the museum was rebuilt and remains the artistic heart of Chile.",
    ],
    photoLabels: ["The grand hall", "Sculptures (La Quimera)"],
  },

  "pueblito-los-dominicos": {
    teaser: "From old stables to the cradle of Chilean craftsmanship.",
    intro: [
      "In Santiago de Chile, Pueblito Los Dominicos is today one of the places most sought after by foreign visitors, but its story began long before it became a crafts center. These lands were granted in 1544 to Inés de Suárez, the only woman officially recognized as a conquistador in the country, and in 1767 passed to the Dominican Order thanks to a donation from María Antonia de Portusagasti and her husband.",
      "The place also holds a patriotic chapter: during the Chilean War of Independence it was a hideout for the guerrilla leader Manuel Rodríguez and a refuge for other historical figures such as José Manuel Balmaceda.",
      "For almost two centuries its old stables and storerooms stood empty, until in 1978 a group of artisans began selling their work beside the church. That is how, in 1979, today’s Pueblito Los Dominicos was born; it now brings together more than 160 workshops with artisans working live, creating pieces in silver, wood, lapis lazuli, clay and ceramics from all over Chile.",
      "There are no mass-produced souvenirs here: every piece is handmade and tells a real story of Chilean tradition.",
    ],
    photoLabels: ["Entrance to the pueblito", "Fuente del Jardín de los Bonsái"],
  },

  "basilica-de-los-sacramentinos": {
    teaser: "Santiago de Chile’s hidden Sacré-Cœur.",
    intro: [
      "In the barrio San Diego, in central Santiago, rises the Basílica de los Sacramentinos, a church with a 72-meter dome and a secret unique in Chile: it is two churches, one on top of the other.",
      "It all began in 1908, when María Lecaros de Marchant brought the Sacramentine Fathers to Chile and asked for a church inspired by the Basilica of the Sacred Heart in Paris. Architect Ricardo Larraín Bravo brought that French-inspired dream to life in the middle of Santiago.",
      "Its double-church design is what makes it one of a kind: above, the main church; below, a crypt 4 meters underground with marble, precious stones and golden Byzantine mosaics reminiscent of the Roman catacombs. Many visitors say the crypt is even more impressive than the church above.",
      "Declared a national votive church for the centenary of independence and blessed by Pope Pius X in 1910, it serves today as an active parish of the neighborhood.",
      "A piece of Paris built with Chilean devotion: an architectural gem few tourists know and well worth discovering.",
    ],
    photoLabels: ["The nave", "The church from above"],
  },

  "museo-de-la-memoria": {
    teaser: "The chapter of Chile’s history that must never be forgotten.",
    intro: [
      "In Santiago de Chile, the Museo de la Memoria y los Derechos Humanos is devoted to preserving one of the hardest chapters in the country’s recent history: the 17 years of military dictatorship that began with the coup of 11 September 1973, when Salvador Allende’s democratic government was overthrown.",
      "The museum, a modern three-story building of exposed concrete and carefully controlled natural light, was designed to invite reflection rather than spectacle. Its permanent exhibitions follow the period 1973–1990 chronologically: the coup, the detention centers, the resistance, the exile of thousands of Chileans and the return to democracy. Through testimonies, documents, letters and original objects, visitors can understand first-hand the human impact of this period.",
      "It is a leading example of memory tourism and dark tourism: it seeks not sensationalism but education and reflection on the importance of human rights and democracy. Many visitors leave deeply moved.",
      "A profoundly necessary visit to understand contemporary Chile.",
    ],
    photoLabels: ["Stories in photographs", "The known victims", "Newspapers of the time"],
  },

  "templo-bahai": {
    teaser: "The flower of light that crowns Santiago’s foothills.",
    intro: [
      "In the foothills of Santiago de Chile, 1,000 meters above sea level, rises the Templo Bahá'í de Sudamérica, a building shaped like a nine-petaled flower that seems to float above the Andes. The Bahá’í Faith reached Chile in 1919 thanks to the journalist Martha Root, but this temple only began to take shape in 2002, after an international architecture competition, and was inaugurated in October 2016.",
      "Its design — with nine entrances, paths, fountains and arched “sails” — reflects the sacred number of the Bahá’í Faith, a symbol of unity among all religions. By day, light passes through its glass panels, casting patterns on the white marble; by night, the temple glows like a beacon visible for kilometers.",
      "It is a space without rituals or sermons, open to people of all beliefs and backgrounds, ideal for those seeking peace, contemplation and panoramic views of Santiago surrounded by native flora such as quillay and boldo trees.",
      "More than a temple, it is a meeting of faith, architecture and nature that invites personal reflection.",
    ],
    photoLabels: ["Reflecting pool and lookout"],
  },

  "vina-concha-y-toro": {
    teaser: "The legend of the devil who guards Chile’s finest wines.",
    intro: [
      "Just an hour from Santiago de Chile, in the Valle del Maipo, lies Viña Concha y Toro, one of the country’s most iconic wineries, founded in 1883 by Don Melchor Concha y Toro. Its history hides a fascinating legend: tired of having his best wines stolen — made from vines brought from Bordeaux, France — Don Melchor spread the rumor that the Devil lived in his cellars. The superstition worked, the thefts stopped, and years later one of the world’s best-known wine brands was born: Casillero del Diablo.",
      "Located in Pirque, this vineyard is one of the essential visits near Santiago, thanks to the beauty of its underground cellars, Don Melchor’s old summer house and its magnificent gardens. The tour lets you feel the characteristic chill of the cellars, discover the aromas of the finest vintages and learn about Chile’s winemaking history up close.",
      "Because of high demand, we recommend booking your visit in advance through the vineyard’s official website. At the end, you can buy wines at its specialist shop.",
    ],
    photoLabels: ["Entrance to Concha y Toro", "The winery mansion"],
  },

  "catedral-de-santiago": {
    teaser: "Where the city began to write its history.",
    intro: [
      "Have you ever felt that a place holds more secrets than it reveals? Stand in front of the Catedral de Santiago and take a good look at its façade. Behind those walls lie almost five centuries of faith, earthquakes, reconstructions and moments that shaped an entire country.",
      "Its story begins in 1541, when Pedro de Valdivia founded Santiago and set aside this plot facing the square for the first church. Since then, every time a disaster damaged it, the city rebuilt it. That determination makes this site much more than a building: it is a symbol that Santiago always rises again.",
      "The cathedral you see today was built in the late 18th century to a design by Joaquín Toesca, the same architect as the Palacio de La Moneda. Outside it is elegant and restrained. Inside, its columns, gilded altars and a calm rare in the middle of the city will surprise you.",
      "It is the spiritual and ceremonial heart of Chile, a National Monument and a meeting point for the country’s religious, political and cultural life — which is why it is one of the most visited stops in the historic center.",
    ],
    photoLabels: ["The central nave", "Columns and altars"],
    stops: [
      {
        title: "Planning your visit",
        paragraphs: [
          "It faces the Plaza de Armas. Get off at Plaza de Armas metro station (Lines 3 and 5) and you’ll be right there — but we recommend checking the opening hours before you go.",
          "A little tip for the perfect photo: go inside and stand at the back of the central nave to capture a symmetrical image towards the altar — the lines should converge where you are standing, keeping the same distance between the lines and the edge of the frame. Go in the morning, when soft light streams through the windows.",
        ],
      },
    ],
  },

  "museo-de-arte-precolombino": {
    teaser: "A journey through thousands of years of American history.",
    intro: [
      "What if I told you that in the middle of Santiago you can discover thousands of years of American history from before the conquistadors arrived? You step through an old doorway and, suddenly, the noise of the city disappears. Inside await ceramic faces, astonishingly fine textiles, jewelry, masks and objects more than 3,000 years old.",
      "The museum opened in 1981 thanks to the architect Sergio Larraín García-Moreno, who brought together his personal collection and decided to share it with the world. Today it is one of the most important museums of its kind in Latin America. It is housed in the former Real Aduana, an early 19th-century building with a history of its own.",
      "Best of all is the way it tells the story. You don’t just see objects: you understand how the peoples of Mexico, Central America, the Andes and Chile lived, what they believed and how they expressed themselves. Its permanent exhibition, Chile antes de Chile, shows the cultural richness of the peoples who inhabited this land, with mummies, textiles and ceramics that will stay with you.",
      "It is a key stop in the historic center, highly valued by travelers, schools and culture lovers — ideal if you want to understand Chile beyond its landscapes.",
    ],
    photoLabels: ["Inner corridors"],
  },

  "jardin-japones": {
    teaser: "The corner of calm you never expected.",
    intro: [
      "Here water, stones, bridges and flowers invite you to slow down and see things with new eyes.",
      "This garden is also known as the Jardín de la Amistad, and its name tells what it stands for: a cultural bridge between Chile and Japan. It is the largest Japanese garden in the country and one of the most visited spaces in the Parque Metropolitano — a true classic of Cerro San Cristóbal.",
      "Its spirit draws on the Japanese philosophy of silence, contemplation and respect for nature; that is why, as you enter, signs ask you to enjoy the calm. It is a much-loved stop if you are looking for nature and tranquility without leaving the city, and perfect to combine with a visit to the hill, its lookouts and the cable car.",
      "An excellent choice for a restful afternoon after such a ¡bakán! (awesome) trip.",
    ],
    photoLabels: ["The paths", "The stream"],
  },

  // ───────────────────────── San Pedro de Atacama ─────────────────────────
  "geiseres-del-tatio": {
    teaser: "At 4,200 m above sea level, the third-largest geyser field in the world.",
    intro: [
      "This is an essential stop when you visit San Pedro de Atacama — an authentic natural sanctuary that deserves to be explored. Be prepared for the experience: it lies at an imposing altitude of 4,200 meters, where the majesty of nature will take your breath away.",
      "The Géiseres del Tatio form the third-largest geothermal geyser field in the world, surpassed only by Yellowstone National Park (USA) and the Kronotsky Nature Reserve (Russia). We recommend visiting with a specialist guide, whose directions are key to a safe and thoroughly enjoyable experience. You can also go on your own; just leave San Pedro very early (5:00 a.m.). The drive takes an hour.",
      "To understand this place better: a geyser is a natural spring that intermittently and unpredictably ejects gases and water at extremely high temperatures. The phenomenon is caused by volcanic activity, where water comes into contact with magma underground, producing fascinating displays that leave those lucky enough to witness them speechless.",
      "The area is truly impressive, especially early in the morning, when the springs reach their peak boiling point. Temperatures here are often below zero, so it is essential to dress warmly in several layers. The plumes of steam can rise up to 10 meters, a unique natural spectacle.",
    ],
    photoLabels: ["At dawn", "The geothermal field", "The steam", "Height of a geyser", "The waters"],
    stops: [
      {
        title: "Before you go",
        paragraphs: [
          "The water that emerges reaches around 86 °C, hot enough to cause serious injury or even death. A tragic example occurred in 2004, when a visitor, eager to get the “perfect photo”, lost his balance and fell into one of the geysers — one of the most regrettable incidents on record.",
          "Despite the dangers of visiting the Géiseres del Tatio, there are numerous safety measures and plenty of information for visitors, which makes the experience very safe.",
          "The fascination with these places is immense, so it is always essential to follow the instructions of trained staff when visiting this natural setting — we are standing before the majestic force of Mother Earth.",
        ],
        bullets: [
          "Avoid inhaling the gases from the geysers: they contain extremely high levels of bacteria.",
          "Don’t try to touch the water flowing from them, for the same reasons.",
          "Dress warmly in several layers: temperatures are often below zero.",
        ],
      },
    ],
  },

  "lagunas-de-baltinache": {
    teaser: "Seven salt pools on the Llano de la Paciencia, 55 minutes from the village.",
    intro: [
      "The Lagunas de Baltinache are a group of seven pools on the plain known as El Llano de la Paciencia, about 55 minutes by car from the village of San Pedro de Atacama. They are fed by underground water from the Cordillera de la Sal, which surrounds them. You can get there independently or with one of the local tour operators.",
      "Of the seven pools, only one is open to visitors. For conservation reasons, and because of the size of the others, the remaining six have been kept closed. On site, visitors can admire these striking lagoons along a wooden boardwalk for about 30 minutes, followed by a walk across the salt surface itself. It is essential to stay on the marked paths to avoid damaging the delicate ground, formed over thousands of years.",
      "It is said that the salt concentration in these lagoons is even higher than that of the Dead Sea (though I haven’t yet had the chance to visit it). And the contrast between the dazzling white ground and the turquoise water creates a spectacular scene, perfect for photography.",
    ],
    photoLabels: ["The lagoons", "The pool", "Small lagoon", "The trail", "Salt trail"],
    stops: [
      {
        title: "Recommendations",
        paragraphs: [
          "Two more important tips: bring cash. Although connection and payment problems are much less common now, it is always better to be prepared for unexpected failures. Also, the road to the lagoons is well signposted, but some stretches are in very poor condition. If you decide to go on your own, a 4x4 is ideal for comfort. If you choose a tour operator, just relax and enjoy the trip.",
          "Since June 2024, bathing in Baltinache is prohibited, as a conservation measure and because of some visitors’ improper use of chemicals.",
        ],
        bullets: [
          "Don’t try to dive into the icy water.",
          "The walls and bottom of the lagoon have quite sharp formations: be careful where you step and lean.",
          "Avoid drying yourself with a towel when you come out of the water.",
          "If salt water gets into your eyes, avoid rubbing them at all costs: it could make the pain worse.",
          "The salinity of the water can be harmful if you stay in the lagoon for a long time.",
        ],
      },
    ],
  },

  "museo-del-meteorito": {
    teaser: "Chile’s largest collection of meteorites, under a dome.",
    intro: [
      "The Museo del Meteorito houses the largest collection of these fascinating space rocks in all of Chile. Its story began in 1983, when the brothers Edmundo and Rodrigo, natives of Atacama, set out to explore the region’s vast desert. For more than 40 years they devoted themselves to collecting these extraordinary pieces, creating one of the most impressive collections in the country.",
      "The museum is a dome with a single hall, where screens and displayed pieces, together with an audio guide available in several languages, take you through the different sections of the collection. The visit is a journey into the mystery surrounding the oldest fragments of the universe you will ever be able to hold in your hands.",
      "The information on meteorites presented here is abundant and genuinely interesting. First, you will discover how our planet protects us from these space rocks, which enter the Earth’s atmosphere at an astonishing average speed of 137,000 km/h (85,000 mph). There is also a concise explanation of the cráter de Monturaqui, the best-preserved impact structure in South America, discovered in 1962 south of the Salar de Atacama.",
    ],
    photoLabels: ["The entrance", "The hall", "A fragment", "Chondrites", "The galaxy"],
    stops: [
      {
        title: "Planning your visit",
        paragraphs: [
          "The museum is at Calle Tocopilla 201 and is open Tuesday to Sunday, from 5:00 p.m. to 8:00 p.m. Allow about 45 minutes to fully enjoy the visit.",
          "At the end of the visit you can buy meteorite fragments, together with a certificate guaranteeing their authenticity. All the finds on display are certified by NASA, CEREGE at the University of Marseille in France and the University of California, Los Angeles, in the United States.",
        ],
        bullets: [
          "Admission: CLP 6,000 (€6), no booking needed.",
          "Tuesday to Sunday, 5:00–8:00 p.m. Calle Tocopilla 201.",
          "Time needed: 45 minutes.",
          "High season covers the first and last three months of the year: expect more visitors.",
        ],
      },
    ],
  },
};
