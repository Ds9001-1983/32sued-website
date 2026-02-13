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
          name: 'Kalbstafelspitz',
          description: 'mit Meerrettich, Gartengemüse und jungen Kartoffeln',
          price: '18,50€',
        },
        {
          name: 'Tagliatelle "Funghi"',
          description: 'mit Wildkräutern und Grana Padano',
          price: '14,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Caldeirada',
          description:
            'Portugiesischer Fischeintopf mit Muscheln, saisonale Fischauswahl, Gemüse, Chili und Kartoffeln',
          price: '17,50€',
        },
        {
          name: 'Bowl der Woche',
          description:
            'mit würzigem Hack, Couscous, Tomate, Gurke, roten Zwiebeln, Chiffonade, Jalapeños, Bacon, Cheddar und Smoky-BBQ-Sauce',
          price: '16,50€',
        },
        {
          name: 'Flammkuchen der Woche',
          description: 'mit Mozzarella, Tomate und Pesto',
          price: '10,00€',
          tags: ['vegetarisch'],
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
          name: 'Handgeklopftes Carpaccio vom Rinderfilet',
          description: 'mit Zitrone, Kapern, Parmesan und Rucola',
          price: '18,50€',
        },
        {
          name: 'In Sternanis gebeizter Lachs',
          description:
            'mit Apfelrelish, Reibekuchen und Wildkräutersalat in Orangendressing',
          price: '11,00€',
        },
        {
          name: 'Tapasplatte (ab 2 Pers.)',
          description:
            'Bruschetta, marinierte Oliven, Albondigas, Honig-Balsamico Paprika, Manchego, Pimientos de Padrón, marinierte Zucchini, Papas Arrugadas, Chili-Knoblauch Garnelen, Aioli, Tomatenaufstrich und Ciabatta',
          price: '17,00€ p.P.',
        },
        {
          name: 'Ciabatta',
          description:
            'mit hausgemachter Aioli und mediterranem Tomatenaufstrich',
          price: '5,00€',
          tags: ['vegan'],
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
          description: 'mit mediterranem Tomatenaufstrich',
          price: '9,50€',
          tags: ['vegan'],
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
            'Blattsalate, Schafskäse, Oliven, getrocknete Tomaten, Sonnenblumenkerne, Croutons',
          price: '14,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Großer Salatteller mit Hähnchenbrust',
          description: 'mit Estragonbutter und Teriyaki Sauce',
          price: '18,00€',
        },
        {
          name: 'Großer Salatteller mit Riesengarnelen',
          description: 'mit Knoblauch und Rosmarin gebraten',
          price: '22,00€',
        },
      ],
    },
    {
      name: 'Vegetarisch',
      items: [
        {
          name: 'Rote Beete Ravioli',
          description:
            'gefüllt mit Camembert, in Walnussbutter gebraten mit Rucola und Orangen-Velouté',
          price: '19,50€',
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
          name: 'Gebratenes Lachsfilet',
          description:
            'mit Topinambur-Velouté, Romanesco und Fondantkartoffeln',
          price: '28,00€',
        },
      ],
    },
    {
      name: 'Vom Land',
      items: [
        {
          name: 'Rumpsteak mit Nuss-Paprikakruste',
          description:
            'Sherry Sauce, Rosmarinkartoffeln und bunter Salat in Balsamico Dressing',
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
            'mit Zitrone, Preiselbeeren und lauwarmem Kartoffel-Gurkensalat',
          price: '30,00€',
        },
      ],
    },
    {
      name: 'Burger',
      items: [
        {
          name: 'Veggie Burger',
          description:
            'Haferflockenpatty, Brioche Bun, irischer Cheddar, frischer Salat, BBQ-Sauce und Coleslaw',
          price: '13,00€',
          tags: ['vegetarisch'],
        },
        {
          name: 'Der Burger',
          description:
            '100% Beef (180g), Brioche Bun, irischer Cheddar, Baconjam, BBQ Sauce und Coleslaw',
          price: '15,00€',
        },
      ],
    },
    {
      name: 'Dessert',
      items: [
        {
          name: 'Schwarzwälder Kirsch Bowl',
          description:
            'mit Brownies, Haselnuss, Kirschsorbet, Vanille und Sauerkirschen',
          price: '9,50€',
        },
        {
          name: 'Eiskreationen',
          description: 'Zitrone-Thymian / Mango-Chili / Mandarine-Koriander',
          price: '–',
        },
      ],
    },
  ],
};

export const weeklyHighlights: MenuItem[] = [
  {
    name: 'Kalbstafelspitz',
    description: 'mit Meerrettich, Gartengemüse und jungen Kartoffeln',
    price: '18,50€',
  },
  {
    name: 'Caldeirada',
    description: 'Portugiesischer Fischeintopf mit Muscheln',
    price: '17,50€',
  },
  {
    name: 'Der Burger',
    description: '100% Beef (180g), Brioche Bun, Irish Cheddar',
    price: '15,00€',
  },
];
