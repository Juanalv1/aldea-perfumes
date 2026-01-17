export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  gender: 'mujer' | 'hombre' | 'unisex';
  image: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  concentration: string;
  volume: string;
  family: string;
  stock: 'in_stock' | 'low_stock' | 'out_of_stock';
  slug: string;
}

export const products: Product[] = [
  // Perfumes para Mujer
  {
    id: '1',
    name: 'Coco Mademoiselle',
    brand: 'Chanel',
    price: 135,
    description: 'Elegante y moderno, una fragancia oriental fresca con un toque de rosa y jazmín.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    notes: {
      top: ['Naranja', 'Bergamota', 'Pomelo'],
      heart: ['Rosa', 'Jazmín', 'Lichi'],
      base: ['Pachulí', 'Vainilla', 'Almizcle']
    },
    concentration: 'Eau de Parfum',
    volume: '100ml',
    family: 'Oriental Floral',
    stock: 'in_stock',
    slug: 'chanel-coco-mademoiselle'
  },
  {
    id: '2',
    name: "J'adore",
    brand: 'Dior',
    price: 128,
    description: 'Floral luminoso que celebra la feminidad con ylang-ylang, rosa y jazmín.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop',
    notes: {
      top: ['Pera', 'Melón', 'Magnolia'],
      heart: ['Jazmín', 'Lirio de los valles', 'Rosa'],
      base: ['Almizcle', 'Vainilla', 'Cedro']
    },
    concentration: 'Eau de Parfum',
    volume: '100ml',
    family: 'Floral',
    stock: 'in_stock',
    slug: 'dior-jadore'
  },
  {
    id: '3',
    name: 'La Vie Est Belle',
    brand: 'Lancôme',
    price: 118,
    description: 'Dulce y cautivador, una declaración de felicidad con iris y gourmand.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop',
    notes: {
      top: ['Grosella negra', 'Pera'],
      heart: ['Iris', 'Jazmín', 'Flor de Azahar'],
      base: ['Praline', 'Vainilla', 'Pachulí']
    },
    concentration: 'Eau de Parfum',
    volume: '75ml',
    family: 'Oriental Gourmand',
    stock: 'in_stock',
    slug: 'lancome-la-vie-est-belle'
  },
  {
    id: '4',
    name: 'Black Opium',
    brand: 'Yves Saint Laurent',
    price: 125,
    description: 'Seductor y adictivo, con café y vainilla para noches inolvidables.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop',
    notes: {
      top: ['Café', 'Rosa', 'Pera'],
      heart: ['Jazmín', 'Flor de Azahar', 'Almendra amarga'],
      base: ['Vainilla', 'Pachulí', 'Cedro']
    },
    concentration: 'Eau de Parfum',
    volume: '90ml',
    family: 'Oriental Vainilla',
    stock: 'low_stock',
    slug: 'ysl-black-opium'
  },
  {
    id: '5',
    name: "L'Interdit",
    brand: 'Givenchy',
    price: 120,
    description: 'Intenso y femenino, una fragancia que desafía las reglas con flor de azahar.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop',
    notes: {
      top: ['Pera', 'Bergamota'],
      heart: ['Flor de Azahar', 'Jazmín', 'Tuberosa'],
      base: ['Pachulí', 'Vetiver', 'Almizcle']
    },
    concentration: 'Eau de Parfum',
    volume: '80ml',
    family: 'Floral Blanco',
    stock: 'in_stock',
    slug: 'givenchy-linterdit'
  },
  {
    id: '6',
    name: 'Good Girl',
    brand: 'Carolina Herrera',
    price: 122,
    description: 'Audaz y sofisticado, jazmín y cacao en un frasco icónico.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop',
    notes: {
      top: ['Almendra', 'Café', 'Bergamota'],
      heart: ['Jazmín Sambac', 'Tuberosa', 'Rosa'],
      base: ['Cacao', 'Haba Tonka', 'Sándalo']
    },
    concentration: 'Eau de Parfum',
    volume: '80ml',
    family: 'Oriental Floral',
    stock: 'in_stock',
    slug: 'carolina-herrera-good-girl'
  },
  {
    id: '7',
    name: 'Olympéa',
    brand: 'Paco Rabanne',
    price: 105,
    description: 'Oriental y sensual, sal marina y vainilla crean una diosa moderna.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1595425964071-2c1ecb10f330?w=400&h=500&fit=crop',
    notes: {
      top: ['Sal verde', 'Mandarina', 'Pimienta acuática'],
      heart: ['Jengibre', 'Jazmín', 'Flor de vainilla'],
      base: ['Cachemira', 'Sándalo', 'Ámbar']
    },
    concentration: 'Eau de Parfum',
    volume: '80ml',
    family: 'Oriental Amaderada',
    stock: 'in_stock',
    slug: 'paco-rabanne-olympea'
  },
  {
    id: '8',
    name: 'Flowerbomb',
    brand: 'Viktor & Rolf',
    price: 130,
    description: 'Explosión floral con jazmín, rosa y orquídea para mujeres atrevidas.',
    gender: 'mujer',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=500&fit=crop',
    notes: {
      top: ['Bergamota', 'Té', 'Osmanthus'],
      heart: ['Jazmín Sambac', 'Orquídea', 'Fresia', 'Rosa'],
      base: ['Pachulí', 'Almizcle', 'Vainilla']
    },
    concentration: 'Eau de Parfum',
    volume: '100ml',
    family: 'Floral Oriental',
    stock: 'in_stock',
    slug: 'viktor-rolf-flowerbomb'
  },
  // Perfumes para Hombre
  {
    id: '9',
    name: 'Sauvage',
    brand: 'Dior',
    price: 115,
    description: 'Fresco y magnético, bergamota y ambroxan para el hombre moderno.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop',
    notes: {
      top: ['Bergamota', 'Pimienta'],
      heart: ['Lavanda', 'Pimienta Sichuan', 'Geranio'],
      base: ['Ambroxan', 'Cedro', 'Labdanum']
    },
    concentration: 'Eau de Toilette',
    volume: '100ml',
    family: 'Aromático Fougère',
    stock: 'in_stock',
    slug: 'dior-sauvage'
  },
  {
    id: '10',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    price: 125,
    description: 'Aromático amaderado, libertad y determinación en cada nota.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=500&fit=crop',
    notes: {
      top: ['Menta', 'Limón', 'Pomelo', 'Pimienta rosa'],
      heart: ['Jengibre', 'Nuez moscada', 'Jazmín', 'Melón'],
      base: ['Cedro', 'Sándalo', 'Pachulí', 'Incienso']
    },
    concentration: 'Eau de Parfum',
    volume: '100ml',
    family: 'Amaderada Aromática',
    stock: 'in_stock',
    slug: 'chanel-bleu-de-chanel'
  },
  {
    id: '11',
    name: '1 Million',
    brand: 'Paco Rabanne',
    price: 98,
    description: 'Intenso y seductor, cuero especiado para conquistar la noche.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1594035900144-17fc11fc5d91?w=400&h=500&fit=crop',
    notes: {
      top: ['Pomelo', 'Menta', 'Naranja sanguina'],
      heart: ['Rosa', 'Canela', 'Notas especiadas'],
      base: ['Cuero', 'Ámbar', 'Pachulí blanco']
    },
    concentration: 'Eau de Toilette',
    volume: '100ml',
    family: 'Especiada Cuero',
    stock: 'in_stock',
    slug: 'paco-rabanne-1-million'
  },
  {
    id: '12',
    name: 'Eros',
    brand: 'Versace',
    price: 95,
    description: 'Fresco y masculino, menta y manzana verde para el dios del amor.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1590156206657-aec1c4f8a8ee?w=400&h=500&fit=crop',
    notes: {
      top: ['Menta', 'Manzana verde', 'Limón'],
      heart: ['Haba Tonka', 'Geranio', 'Ambroxan'],
      base: ['Vainilla', 'Vetiver', 'Musgo de roble', 'Cedro']
    },
    concentration: 'Eau de Toilette',
    volume: '100ml',
    family: 'Aromática Fougère',
    stock: 'low_stock',
    slug: 'versace-eros'
  },
  {
    id: '13',
    name: 'Acqua di Giò',
    brand: 'Giorgio Armani',
    price: 110,
    description: 'Acuático y fresco, brisa marina y cítricos para el espíritu libre.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1595425964071-2c1ecb10f330?w=400&h=500&fit=crop',
    notes: {
      top: ['Limón', 'Bergamota', 'Neroli', 'Mandarina verde'],
      heart: ['Jazmín', 'Notas marinas', 'Calone'],
      base: ['Cedro blanco', 'Almizcle', 'Ámbar gris', 'Pachulí']
    },
    concentration: 'Eau de Toilette',
    volume: '100ml',
    family: 'Acuática Aromática',
    stock: 'in_stock',
    slug: 'giorgio-armani-acqua-di-gio'
  },
  {
    id: '14',
    name: 'Le Male',
    brand: 'Jean Paul Gaultier',
    price: 92,
    description: 'Clásico y vibrante, lavanda y vainilla en un frasco icónico.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop',
    notes: {
      top: ['Menta', 'Lavanda', 'Bergamota', 'Cardamomo'],
      heart: ['Comino', 'Canela', 'Flor de Azahar'],
      base: ['Vainilla', 'Haba Tonka', 'Sándalo', 'Cedro', 'Ámbar']
    },
    concentration: 'Eau de Toilette',
    volume: '125ml',
    family: 'Oriental Fougère',
    stock: 'in_stock',
    slug: 'jean-paul-gaultier-le-male'
  },
  {
    id: '15',
    name: 'The One',
    brand: 'Dolce & Gabbana',
    price: 105,
    description: 'Elegante y especiado, tabaco y jengibre para el caballero moderno.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop',
    notes: {
      top: ['Pomelo', 'Cilantro', 'Albahaca'],
      heart: ['Jengibre', 'Cardamomo', 'Flor de Azahar'],
      base: ['Cedro', 'Labdanum', 'Ámbar', 'Tabaco']
    },
    concentration: 'Eau de Parfum',
    volume: '100ml',
    family: 'Oriental Especiada',
    stock: 'in_stock',
    slug: 'dolce-gabbana-the-one'
  },
  {
    id: '16',
    name: 'Noir',
    brand: 'Tom Ford',
    price: 145,
    description: 'Sofisticado y misterioso, oud y especias para noches de gala.',
    gender: 'hombre',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    notes: {
      top: ['Bergamota', 'Violeta', 'Verbena', 'Pomelo rosa', 'Cardamomo'],
      heart: ['Pimienta negra', 'Nuez moscada', 'Flor de Azahar', 'Rosa búlgara'],
      base: ['Oud', 'Ámbar', 'Madera de cachemira', 'Vainilla', 'Haba Tonka']
    },
    concentration: 'Eau de Parfum',
    volume: '100ml',
    family: 'Oriental Amaderada',
    stock: 'in_stock',
    slug: 'tom-ford-noir'
  }
];

export const brands = [
  'Chanel',
  'Dior',
  'Lancôme',
  'Yves Saint Laurent',
  'Givenchy',
  'Carolina Herrera',
  'Paco Rabanne',
  'Versace',
  'Giorgio Armani',
  'Tom Ford',
  'Dolce & Gabbana',
  'Viktor & Rolf',
  'Jean Paul Gaultier'
];

export const families = [
  'Oriental Floral',
  'Floral',
  'Oriental Gourmand',
  'Oriental Vainilla',
  'Floral Blanco',
  'Oriental Amaderada',
  'Floral Oriental',
  'Aromático Fougère',
  'Amaderada Aromática',
  'Especiada Cuero',
  'Aromática Fougère',
  'Acuática Aromática',
  'Oriental Fougère',
  'Oriental Especiada'
];
