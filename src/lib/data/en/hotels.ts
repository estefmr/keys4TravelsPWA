import type { HotelTranslation } from "@/lib/types";

/**
 * Hoteles en inglés, por slug. El original está en ../hotels.ts. Los
 * nombres de la galería van en el mismo orden que su `gallery`.
 */
export const hotelsEn: Record<string, HotelTranslation> = {
  "castillo-rojo": {
    address:
      "Av. Constitución 195, corner of Antonia López de Bello, Barrio Bellavista, Santiago",
    summary:
      "A century-old mansion declared a National Monument, restored as a boutique hotel in the heart of Barrio Bellavista.",
    description: [
      "An elegant boutique hotel set in a century-old mansion declared a National Monument, built in 1923 as the residence of the aristocratic Lehuedé family and restored since 2010 while preserving its 1920s Art Nouveau style.",
      "It offers 19 exclusive rooms across Economy, Classic, Premium and Suite categories, from 15 to 37 m², private parking, Egyptian cotton sheets, breakfast included (7:30–10:30), a tea station, an intimate wine bar and a terrace open 24 hours.",
      "Steps away from La Chascona (Pablo Neruda’s house), Patio Bellavista and Cerro San Cristóbal.",
    ],
    galleryLabels: ["The hotel", "Lobby entrance", "Living room and bar", "Room"],
  },

  "casa-solcor": {
    summary: "“Your home in the desert”: a boutique B&B in the heart of the Atacama Desert.",
    description: [
      "A boutique B&B in the heart of the Atacama Desert, described by its owners as “your home in the desert”. The property spans more than 3,300 m² across two houses (Algarrobo and Chañar), with a distinctly family feel.",
      "It has a central courtyard with a lounge area, a swimming pool, two kitchens available 24 hours, a living room and breakfast room (8:00–10:30), three new rooms and a jacuzzi by reservation. Mountain bikes are free of charge, and the team arranges tours to Valle de la Luna, the Géiser del Tatio and the Lagunas Altiplánicas.",
      "15 rooms in three categories: Kala (15 m²), Suite Selti (17 m²) and Suite Ckari (22 m², with a private terrace). All with a safe, private bathroom, air conditioning, USB ports, Bluetooth speaker, minibar and universal sockets.",
    ],
    galleryLabels: [
      "Swimming pool",
      "Sunset",
      "Lounge area",
      "Room 1",
      "Room 2",
      "Kitchen",
      "Bicycles",
    ],
  },

  esencia: {
    summary:
      "A simple yet elegant retreat, tucked away in the narrow streets of Viña del Mar.",
    description: [
      "A simple yet elegant retreat, tucked away in the narrow streets of one of the most famous coastal cities in the world. It is a personal project of its Chilean-Canadian owners, Adri and Cristian, who oversaw every detail of its development.",
      "The rooms are on the second floor of the main residence, with a cozy dining room on the ground floor, plus additional, carefully decorated rooms in a rear wing. All have a desk, bedside tables, private bathroom, TV and a selection of local wines; room service is available for special occasions, subject to availability.",
      "The design blends minimalist aesthetics with Eastern elegance. No on-site parking. 10 minutes from the Casino de Viña del Mar, 15 from the Muelle Vergara and 20 from the Quinta Vergara (home of the Festival de Viña del Mar since 1960).",
    ],
  },

  "cassa-lepage": {
    address: "Pasaje Belgrano, Monserrat (Casco Histórico), Buenos Aires",
    summary:
      "A hotel with its own museum below ground: 300 archaeological pieces found beneath the building, in the heart of the Casco Histórico.",
    description: [
      "The history of the site goes back to 1580, when Juan de Garay distributed land after the second founding of Buenos Aires. The property was the Jardín de la Casa del Obispo in 1756, passed through several owners — among them the merchant Martín de Álzaga — and in 1881 was home to the Primer Círculo de la Prensa. In 1891 a new building was erected on Pasaje Belgrano to launch the national film industry: that building is today the Cassa Lepage Art Hotel, and it was here that Carlos Gardel began his life in the world of culture. In 1932 it was fully renovated and given its Art Deco look.",
      "The entrance is Pasaje Belgrano itself, once a shopping arcade. The lobby displays pieces from the original building, and reinforced glass floors reveal the old ground and the spots where many of the museum’s pieces were found.",
      "Every room has a TV, minibar, private bathroom, amenities, air conditioning, a desk, minimalist décor and excellent soundproofing. Each washbasin is different: they were designed individually, by hand, somewhat reminiscent of Portuguese tiles. Extra beds do not fit in every room, so it is best to say how many people are traveling.",
      "Upstairs is the terrace — with a mural dedicated to Carlos Gardel covering an entire wall — where the breakfast buffet is served until 10:30, and at the very top a native garden with plants endemic to Latin America, a small green lung in the middle of the city.",
      "What makes it unique is its underground museum: during the excavations before the restoration (2005, 2008 and 2009) more than 900 pieces were found — glassware, vessels, plates, bottles, jewelry — and some 300 are on permanent display, dated, some more than two centuries old. Guests have unlimited access; non-guests can visit by appointment on guided tours.",
      "Check-in from 3:00 p.m. and check-out until 11:00 a.m. Not pet friendly. Rates from USD 160 + taxes on its official website (cassalepage.com), with an optional airport transfer.",
    ],
    galleryLabels: [
      "Pasaje Belgrano",
      "Gardel mural",
      "Common areas",
      "Lounge",
      "Room",
      "Room balcony",
      "Extra beds",
      "Jacuzzi tub",
      "Suite bathroom",
      "Washbasin",
      "Excavations",
      "Underground",
      "Museum rooms",
      "Porcelain fragments",
    ],
  },

  "mine-hotel": {
    address: "Gorriti 4770, Palermo Soho, Buenos Aires",
    summary:
      "In the heart of Palermo Soho: 20 rooms, a heated pool and a team that makes you feel at home.",
    description: [
      "In the heart of Palermo Soho we found a boutique hotel full of charm, simple and elegant at the same time, with a warmth that has nothing to envy any hotel in the world. It has a style all its own and a friendly, attentive staff who are genuinely close to their guests.",
      "Beyond its location steps from Palermo’s most bohemian and chic spots, the property is included in the Michelin Guide for its comfortable rooms. It is 20 minutes from Aeroparque and about 45 from Ezeiza: the simplest option is an Uber or taxi from the door of either airport.",
      "There are 20 rooms over 3 floors, in 3 categories that differ mainly in size. Light tones prevail — white and shades of beige — along with high-thread-count sheets and soundproofing that ensures a good night’s rest. Some rooms have a shower and others a tub or jacuzzi; all have a minibar, safe, HD TV, air conditioning, desk and telephone.",
      "For socializing there is a large living room full of books, a small Zen garden with a fountain that is ideal for reading, and the first-floor restaurant where breakfast is served — it seats about 20 — and where you can also have dinner. The jewel for relaxing is outside: a heated pool, best from December to March, with its whole area designed for spending the afternoon or celebrating something.",
      "The hotel team has put together its own guide to bars, restaurants and nightlife in Palermo, with the distance to each place; ask for it at reception if they don’t offer it first. They also provide round-trip airport transfers.",
      "Check-in from 2:00 p.m. and check-out until 11:00 a.m.",
    ],
    galleryLabels: [
      "Bar and restaurant",
      "TV and reading",
      "Business center",
      "Inner courtyard",
      "Common areas",
      "Breakfast restaurant",
      "Lounge area",
      "Bathroom",
      "Jacuzzi tub",
    ],
  },
};
