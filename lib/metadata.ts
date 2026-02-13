import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: '32Süd – Restaurant, Café & Bar in Gummersbach',
    template: '%s | 32Süd Gummersbach',
  },
  description:
    'Modernes Restaurant mit bergischer Küche auf dem historischen Steinmüllergelände in Gummersbach. Café, Restaurant & Bar – Industrie meets Genuss.',
  keywords: [
    '32Süd',
    'Restaurant Gummersbach',
    'Steinmüllergelände',
    'bergische Küche',
    'Café Gummersbach',
    'Bar Gummersbach',
    'Catering Oberbergischer Kreis',
    'Event Location Gummersbach',
  ],
  authors: [{ name: 'Messing Gastronomie GmbH' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://32sued.de',
    siteName: '32Süd',
    title: '32Süd – Restaurant, Café & Bar in Gummersbach',
    description:
      'Wo Industriegeschichte auf moderne bergische Küche trifft. Auf dem historischen Steinmüllergelände in Gummersbach.',
    images: [
      {
        url: '/images/gallery/interior-1.jpg',
        width: 1200,
        height: 630,
        alt: '32Süd Restaurant Gummersbach',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: '32Süd',
  description:
    'Modernes Restaurant mit bergischer Küche auf dem historischen Steinmüllergelände in Gummersbach',
  image: '/images/gallery/interior-1.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Steinmüllerallee 10',
    addressLocality: 'Gummersbach',
    postalCode: '51643',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0264,
    longitude: 7.5653,
  },
  telephone: '+492261919693',
  email: 'info@32sued.de',
  url: 'https://32sued.de',
  servesCuisine: ['Deutsch', 'Bergisch', 'Modern'],
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:30',
      closes: '14:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '17:30',
      closes: '21:00',
    },
  ],
  acceptsReservations: 'True',
  menu: 'https://32sued.de/speisekarte',
};
