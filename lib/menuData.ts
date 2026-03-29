export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: ('vegetarisch' | 'vegan')[];
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  subtitle: string;
  categories: MenuCategory[];
}

export const mittagskarte: MenuSection = {
  title: 'Mittagskarte',
  subtitle: 'Di–Fr Mittags / Sa–So ganztags',
  categories: [
    {
      name: 'Mittagsgerichte',
      items: [
        {
          name: 'Gefüllte Maispoularde',
          description: 'auf Tomaten-Gemüserisotto',
          price: '18,00€',
        },
        {
          name: 'Thai-Curry',
          description: 'mit Garnelen, Gemüse und Basmatireis',
          price: '17,00€',
        },
        {
          name: 'Spätzle-Pilzrahmpfanne',
          description: 'mit Zwiebeln und Rauke',
          price: '12,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Bowl der Woche',
          description:
            'mit Sushireis, Pulled Lachs, Brokkoli, Tomate, Möhre, Gurke, Paprika, rote Zwiebeln, Sesam und Teriyaki Sauce',
          price: '16,00€',
        },
        {
          name: 'Flammkuchen der Woche',
          description: 'mit Speck, Lauch und Zwiebeln',
          price: '11,00€',
        },
        {
          name: 'Der Burger',
          description:
            '100% Beef (180g), Brioche Bun, irischer Cheddar, frischer Salat, Tomaten, Röstzwiebeln, Gewürzgurken, Baconjam, BBQ Sauce und Coleslaw',
          price: '15,00€',
        },
        {
          name: 'Original Wiener Schnitzel',
          description: 'mit Zitrone, Preiselbeeren und Pommes Frites',
          price: '30,00€',
        },
        {
          name: 'Rumpsteak 200g',
          description: 'mit Pfeffersauce, Bratkartoffeln und kleinem Salat',
          price: '35,00€',
        },
        {
          name: 'Großer Salatteller 32 Süd',
          description:
            'Blattsalate in Balsamico-Vinaigrette, Möhre, Gurke, Paprika, Tomate, Zwiebel, Schafskäse, Oliven, getrockneten Tomaten, Sonnenblumenkernen und Croutons',
          price: '14,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Großer Salatteller mit Hähnchenbrust',
          description:
            'Blattsalate in Balsamico-Vinaigrette, in Estragonbutter gebratene Hähnchenbrust mit Teriyaki Sauce',
          price: '18,00€',
        },
      ],
    },
  ],
};

export const abendkarte: MenuSection = {
  title: 'Abendkarte',
  subtitle: 'Di–Fr 17:30–21:00 / Sa–So 11:30–14:30 & 17:30–21:00',
  categories: [
    {
      name: 'Vorspeisen & Suppen',
      items: [
        {
          name: 'Parmesancremesuppe',
          description: 'mit Tomatenconfit und Basilikumöl',
          price: '8,50€',
          tags: ['vegetarisch'],
        },
        {
          name: 'In Hibiskus gebeizter Lachs',
          description:
            'mit Meerrettich, Süßkartoffelrösti und Wildkräutersalat',
          price: '12,00€',
        },
        {
          name: 'Handgeklopftes Carpaccio vom Rinderfilet',
          description: 'mit Zitrone, Kapern, Parmesan und Rucola',
          price: '18,50€',
        },
        {
          name: 'Tapasplatte (ab 2 Pers.)',
          description:
            'Bruschetta mit Mozzarella, marinierte Oliven, Albondigas, Honig-Balsamico Paprika Manchego, Pimientos de Padrón, in Thymian und Zitrone marinierte Zucchini, Papas Arrugadas, Chili-Knoblauch Garnelen, Aioli, Zitronen-Feta-Thymian Dip und Ciabatta',
          price: '17,00€ p.P.',
        },
        {
          name: 'Ciabatta',
          description:
            'mit hausgemachter Aioli und Zitronen-Feta-Thymian Dip',
          price: '5,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Bruschetta',
          description:
            'mit Mozzarella, Tomate, Zitrone, Basilikum, Pinienkernen und Grana Padano',
          price: '9,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Pimientos de Padrón',
          description: 'mit Zitronen-Feta-Thymian Dip',
          price: '9,50€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Zitronengras-Currysuppe',
          description: 'mit Frühlingslauch, Chili und Sesam',
          price: '7,00€',
          tags: ['vegan'],
        },
      ],
    },
    {
      name: 'Salate',
      items: [
        {
          name: 'Großer Salatteller 32 Süd',
          description:
            'Blattsalate in Balsamico-Vinaigrette, Möhre, Gurke, Paprika, Tomate, Zwiebel, Schafskäse, Oliven, getrockneten Tomaten, Sonnenblumenkernen und Croutons',
          price: '14,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Großer Salatteller mit Hähnchenbrust',
          description:
            'Blattsalate in Balsamico-Vinaigrette, Möhre, Gurke, Paprika, Tomate, Zwiebel, mit in Estragonbutter gebratener Hähnchenbrust und Teriyaki Sauce',
          price: '18,00€',
        },
        {
          name: 'Großer Salatteller mit Riesengarnelen',
          description:
            'Blattsalate in Balsamico-Vinaigrette, Möhre, Gurke, Paprika, Tomate, Zwiebel, Riesengarnelen mit Knoblauch und Rosmarin gebraten',
          price: '22,00€',
        },
      ],
    },
    {
      name: 'Vegetarisch',
      items: [
        {
          name: 'Trüffel-Pasta',
          description:
            'Tagliatelle mit Sommertrüffel, Weißwein, Parmesan und Wildkräuter',
          price: '22,50€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Chana Masala',
          description: 'Kichererbsen-Curry mit knackigem Gemüse und Duftreis',
          price: '18,00€',
          tags: ['vegan'],
        },
      ],
    },
    {
      name: 'Aus dem Meer',
      items: [
        {
          name: 'Gebratenes Lachsfilet mit Kräuterkruste',
          description:
            'auf Vanille-Ratatouille und Trüffelkartoffelpüree mit Rieslingschaum',
          price: '28,00€',
        },
      ],
    },
    {
      name: 'Vom Land',
      items: [
        {
          name: '250g Rumpsteak',
          description:
            'dazu Chimichurri, Zuckerschoten mit gerösteten Mandeln und Ofenkartoffel mit Paprika-Limettenbutter',
          price: '40,00€',
        },
        {
          name: 'Philly Cheese Steak Bowl',
          description:
            'Rustic Fries, Rindersteakstreifen, grüne Paprika, Zwiebel, Champignons, Mais, Jalapeños, Cheddar Sauce und Röstzwiebeln',
          price: '20,00€',
        },
        {
          name: 'Original Wiener Schnitzel',
          description:
            'mit Zitrone, Preiselbeeren und lauwarmen Kartoffel-Gurkensalat',
          price: '30,00€',
        },
      ],
    },
    {
      name: 'Unsere Burger',
      items: [
        {
          name: 'Pulled Turkey Burger',
          description:
            'Karibisch gewürztes Putenfleisch, Brioche Bun, frischer Salat und Mango-Ananassalsa dazu Süßkartoffel-Fries und Chili-Limetten Mayo',
          price: '22,00€',
        },
        {
          name: 'Der Burger',
          description:
            '100% Beef (180g), Brioche Bun, irischer Cheddar, frischer Salat, Tomaten, Röstzwiebeln, Gewürzgurken, Baconjam, BBQ Sauce und Coleslaw',
          price: '15,00€',
        },
      ],
    },
    {
      name: 'Dessert',
      items: [
        {
          name: 'Schokoladenfondant',
          description:
            'mit Joghurt, Beeren, Honig und Haselnuss',
          price: '10,00€',
        },
        {
          name: 'Unsere Eiskreationen',
          description: 'Zitrone-Thymian / Mango-Chili / Mandarine-Koriander',
          price: '–',
        },
      ],
    },
  ],
};

export const weeklyHighlights: MenuItem[] = [
  {
    name: 'Gefüllte Maispoularde',
    description: 'auf Tomaten-Gemüserisotto',
    price: '18,00€',
  },
  {
    name: 'Thai-Curry',
    description: 'mit Garnelen, Gemüse und Basmatireis',
    price: '17,00€',
  },
  {
    name: 'Der Burger',
    description: '100% Beef (180g), Brioche Bun, Irish Cheddar',
    price: '15,00€',
  },
];
