export const SITE_NAME = '32Süd';
export const SITE_TAGLINE = 'Wo Industriegeschichte auf moderne bergische Küche trifft.';
export const SITE_URL = 'https://32sued.de';

export const COLORS = {
  primary: '#1a1a1a',
  secondary: '#8B4513',
  accent: '#C8956C',
  background: '#F5F0EB',
  surface: '#2D2D2D',
  textPrimary: '#1a1a1a',
  textLight: '#F5F0EB',
  highlight: '#D4A574',
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
  companyStreet: 'Industriestraße 6',
  companyCity: '51709 Marienheide',
  representative: 'Dipl.-Kfm. Christoph Bois',
  registry: 'HRB 76207, Registergericht Köln',
} as const;

export const OPENING_HOURS = [
  { day: 'Montag', hours: 'Ruhetag', closed: true },
  { day: 'Dienstag', hours: '11:30 – 14:30 Uhr & 17:30 – 21:00 Uhr', closed: false },
  { day: 'Mittwoch', hours: '11:30 – 14:30 Uhr & 17:30 – 21:00 Uhr', closed: false },
  { day: 'Donnerstag', hours: '11:30 – 14:30 Uhr & 17:30 – 21:00 Uhr', closed: false },
  { day: 'Freitag', hours: '11:30 – 14:30 Uhr & 17:30 – 21:00 Uhr', closed: false },
  { day: 'Samstag', hours: '11:30 – 14:30 Uhr & 17:30 – 21:00 Uhr', closed: false },
  { day: 'Sonntag', hours: '11:30 – 14:30 Uhr & 17:30 – 21:00 Uhr', closed: false },
] as const;

export const NAV_LINKS = [
  { label: 'Startseite', href: '/' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Speisekarte', href: '/speisekarte' },
  { label: 'Catering', href: '/catering' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const GALLERY_IMAGES = [
  { src: '/images/gallery/interior-1.jpg', alt: 'Industrielles Interieur des Restaurant 32Süd auf dem Steinmüllergelände Gummersbach' },
  { src: '/images/gallery/interior-2.jpg', alt: 'Gastraum mit historischen Stahlträgern im 32Süd' },
  { src: '/images/gallery/interior-3.jpg', alt: 'Modernes Ambiente in der ehemaligen Fabrikhalle' },
  { src: '/images/gallery/interior-4.jpg', alt: 'Bar-Bereich des 32Süd Restaurant' },
  { src: '/images/gallery/event-1.jpg', alt: 'Eventlocation auf dem Steinmüllergelände' },
  { src: '/images/gallery/food-1.jpg', alt: 'Kulinarische Kreation aus der 32Süd Küche' },
  { src: '/images/gallery/event-2.jpg', alt: 'Veranstaltung im 32Süd Gummersbach' },
  { src: '/images/gallery/detail-1.jpg', alt: 'Detailaufnahme der industriellen Einrichtung' },
  { src: '/images/gallery/detail-2.jpg', alt: 'Stilvolles Detail im Restaurant 32Süd' },
  { src: '/images/gallery/detail-3.jpg', alt: 'Industriecharme trifft auf Gastronomie' },
  { src: '/images/gallery/detail-4.jpg', alt: 'Einrichtungsdetail im Industriedesign' },
  { src: '/images/gallery/food-2.jpg', alt: 'Gericht aus der modernen bergischen Küche' },
  { src: '/images/gallery/food-3.jpg', alt: 'Frisch zubereitete Speise im 32Süd' },
  { src: '/images/gallery/detail-5.jpg', alt: 'Atmosphärisches Detail der Fabrikhalle' },
  { src: '/images/gallery/detail-6.jpg', alt: 'Historische Elemente im modernen Restaurant' },
  { src: '/images/gallery/detail-7.jpg', alt: 'Dekorative Details im 32Süd' },
  { src: '/images/gallery/detail-8.jpg', alt: 'Kunstvolle Einrichtung im Industrieambiente' },
  { src: '/images/gallery/detail-9.jpg', alt: 'Stilvoller Bereich im Restaurant' },
  { src: '/images/gallery/event-3.jpg', alt: 'Event-Atmosphäre im 32Süd' },
  { src: '/images/gallery/terrace-1.jpg', alt: 'Terrasse des 32Süd auf dem Steinmüllergelände' },
  { src: '/images/gallery/service-1.jpg', alt: 'Professioneller Service im 32Süd' },
  { src: '/images/gallery/event-4.jpg', alt: 'Festliche Veranstaltung im Restaurant' },
  { src: '/images/gallery/event-5.jpg', alt: 'Gesellige Atmosphäre bei Events' },
] as const;
