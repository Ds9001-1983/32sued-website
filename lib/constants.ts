export const SITE_NAME = '32Süd';
export const SITE_TAGLINE = 'Restaurant · Café · Bar auf dem Steinmüllergelände';
export const SITE_URL = 'https://32sued.de';

export const COLORS = {
  dark: '#0A0A0A',
  darkSurface: '#161616',
  darkCard: '#1C1C1C',
  darkBorder: '#2A2A2A',
  gold: '#B88739',
  goldLight: '#D4A84B',
  goldDark: '#8B6A2F',
  cream: '#F4F4F4',
  gray: '#9E9E9E',
  grayDark: '#6D6D6D',
  red: '#D30737',
  white: '#FFFFFF',
} as const;

export const CONTACT = {
  name: '32 SÜD · Café · Restaurant · Bar',
  company: 'Messing Gastronomie GmbH',
  street: 'Steinmüllerallee 10',
  city: '51643 Gummersbach',
  phone: '02261-919693',
  phoneIntl: '+492261919693',
  fax: '02261-913689',
  email: 'info@32sued.de',
  facebook: 'https://www.facebook.com/32-Süd-627519617258548/',
  instagram: 'https://www.instagram.com/32sued/',
  companyStreet: 'Industriestraße 6',
  companyCity: '51709 Marienheide',
  representative: 'Dipl.-Kfm. Christoph Bois',
  registry: 'HRB 76207, Registergericht Köln',
} as const;

export const OPENING_HOURS = [
  { day: 'Montag', hours: 'Ruhetag', closed: true },
  { day: 'Dienstag', hours: '11:30 – 14:30 & 17:30 – 21:00', closed: false },
  { day: 'Mittwoch', hours: '11:30 – 14:30 & 17:30 – 21:00', closed: false },
  { day: 'Donnerstag', hours: '11:30 – 14:30 & 17:30 – 21:00', closed: false },
  { day: 'Freitag', hours: '11:30 – 14:30 & 17:30 – 21:00', closed: false },
  { day: 'Samstag', hours: '11:30 – 14:30 & 17:30 – 21:00', closed: false },
  { day: 'Sonntag', hours: '11:30 – 14:30 & 17:30 – 21:00', closed: false },
] as const;

export const NAV_LINKS = [
  { label: 'Startseite', href: '/' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Speisekarte', href: '/speisekarte' },
  { label: 'Catering', href: '/catering' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const HERO_IMAGES = [
  { src: '/images/gallery/interior-1.jpg', alt: 'Restaurant 32Süd Innenraum mit industriellem Charme' },
  { src: '/images/gallery/food-1.jpg', alt: 'Kulinarische Kreation aus der 32Süd Küche' },
  { src: '/images/gallery/event-1.jpg', alt: 'Eventlocation im Steinmüllergelände' },
  { src: '/images/instagram/interior-hall-1.webp', alt: 'Halle 32 Gastronomie' },
] as const;

export const FOOD_IMAGES = [
  { src: '/images/instagram/food-plated-1.jpg', alt: 'Fein angerichtetes Gericht', name: 'Kalbstafelspitz', price: '18,50€' },
  { src: '/images/instagram/food-steak-1.jpg', alt: 'Rumpsteak mit Beilagen', name: 'Rumpsteak', price: '35,00€' },
  { src: '/images/instagram/food-plated-2.jpg', alt: 'Kreative Vorspeise', name: 'Carpaccio', price: '18,50€' },
  { src: '/images/instagram/food-burger-1.jpg', alt: 'Der Burger', name: 'Der Burger', price: '15,00€' },
  { src: '/images/gallery/food-2.jpg', alt: 'Saisonales Gericht', name: 'Caldeirada', price: '17,50€' },
  { src: '/images/gallery/food-3.jpg', alt: 'Dessert Kreation', name: 'Dessert', price: '9,50€' },
] as const;

export const GALLERY_IMAGES = [
  { src: '/images/gallery/interior-1.jpg', alt: 'Industrielles Interieur des Restaurant 32Süd', category: 'interior' },
  { src: '/images/gallery/interior-2.jpg', alt: 'Gastraum mit historischen Stahlträgern', category: 'interior' },
  { src: '/images/gallery/interior-3.jpg', alt: 'Modernes Ambiente in der Fabrikhalle', category: 'interior' },
  { src: '/images/gallery/interior-4.jpg', alt: 'Bar-Bereich des 32Süd', category: 'interior' },
  { src: '/images/instagram/interior-purple-1.jpg', alt: 'Atmosphärische Beleuchtung', category: 'interior' },
  { src: '/images/instagram/interior-bar-2.jpg', alt: 'Bar mit Blick in den Gastraum', category: 'interior' },
  { src: '/images/gallery/food-1.jpg', alt: 'Kulinarische Kreation', category: 'food' },
  { src: '/images/gallery/food-2.jpg', alt: 'Gericht aus der bergischen Küche', category: 'food' },
  { src: '/images/gallery/food-3.jpg', alt: 'Frisch zubereitete Speise', category: 'food' },
  { src: '/images/instagram/food-plated-1.jpg', alt: 'Fein angerichtetes Gericht', category: 'food' },
  { src: '/images/instagram/food-steak-1.jpg', alt: 'Rumpsteak Kreation', category: 'food' },
  { src: '/images/instagram/food-plated-2.jpg', alt: 'Kreative Vorspeise', category: 'food' },
  { src: '/images/gallery/event-1.jpg', alt: 'Eventlocation', category: 'events' },
  { src: '/images/gallery/event-2.jpg', alt: 'Veranstaltung im 32Süd', category: 'events' },
  { src: '/images/gallery/event-3.jpg', alt: 'Event-Atmosphäre', category: 'events' },
  { src: '/images/gallery/event-4.jpg', alt: 'Festliche Veranstaltung', category: 'events' },
  { src: '/images/gallery/event-5.jpg', alt: 'Gesellige Atmosphäre', category: 'events' },
  { src: '/images/gallery/terrace-1.jpg', alt: 'Terrasse auf dem Steinmüllergelände', category: 'interior' },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Michael W.',
    text: 'Ein absolutes Highlight in Gummersbach! Die Kombination aus industriellem Ambiente und feiner Küche ist einzigartig. Das Rumpsteak war perfekt zubereitet.',
    rating: 5,
  },
  {
    name: 'Sandra K.',
    text: 'Wir hatten unsere Firmenfeier im 32Süd und waren begeistert. Das Catering-Team hat alles perfekt organisiert. Die Location auf dem Steinmüllergelände ist einfach beeindruckend.',
    rating: 5,
  },
  {
    name: 'Thomas M.',
    text: 'Regelmäßig zum Mittagstisch hier. Die Qualität stimmt immer, die Preise sind fair und das Personal ist super freundlich. Besonders die Tapasplatte ist ein Traum!',
    rating: 5,
  },
] as const;
