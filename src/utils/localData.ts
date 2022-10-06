import { IProducts, ISpecialOffers } from '../modules'

const path =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_LOCALHOST
    : process.env.REACT_APP_HOST

export const products: IProducts[] = [
  {
    id: 1,
    title: 'Overhit with belt',
    categories: "Women's outerwear",
    price: 55,
    discount: 50,
    newProduct: false,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
    ],
  },
  {
    id: 2,
    title: 'Dress',
    categories: "Women's dresses",
    price: 9.99,
    discount: null,
    newProduct: true,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
    ],
  },
  {
    id: 3,
    title: 'Top',
    categories: "Women's underwear",
    price: 16,
    discount: null,
    newProduct: true,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
    ],
  },
  {
    id: 4,
    title: 'Nice Dress',
    categories: "Women's outerwear",
    price: 80,
    discount: 30,
    newProduct: false,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
    ],
  },
  {
    id: 5,
    title: 'Hoodie',
    categories: "Women's outerwear",
    price: 75,
    discount: 15,
    newProduct: false,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
    ],
  },
  {
    id: 6,
    title: 'Sunglasses',
    categories: "Women's outerwear",
    price: 12,
    discount: null,
    newProduct: true,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
    ],
  },
  {
    id: 7,
    title: 'Old Hat',
    categories: "Women's outerwear",
    price: 18,
    discount: 80,
    newProduct: false,
    images: [
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large3.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large2.jpg`,
      },
      {
        smallUrl: `${path}assets/images/products/small/small.jpg`,
        largeUrl: `${path}assets/images/products/large/large1.jpg`,
      },
    ],
  },
]

export const specialOffers: ISpecialOffers[] = [
  {
    id: 20,
    title: 'Special Offer',
    images: {
      smallUrl: `${path}assets/images/specialOffers/small/small1.jpg`,
      largeUrl: `${path}assets/images/specialOffers/large/large1.jpg`,
    },
  },
  {
    id: 21,
    title: 'Street Wear',
    images: {
      smallUrl: `${path}assets/images/specialOffers/small/small3.jpg`,
      largeUrl: `${path}assets/images/specialOffers/large/large1.jpg`,
    },
  },
  {
    id: 22,
    title: 'Unisex',
    images: {
      smallUrl: `${path}assets/images/specialOffers/small/small2.jpg`,
      largeUrl: `${path}assets/images/specialOffers/large/large2.jpg`,
    },
  },
  {
    id: 23,
    title: 'Only Tomorrow',
    images: {
      smallUrl: `${path}assets/images/specialOffers/small/small2.jpg`,
      largeUrl: `${path}assets/images/specialOffers/large/large1.jpg`,
    },
  },
  {
    id: 24,
    title: 'Dance Collection',
    images: {
      smallUrl: `${path}assets/images/specialOffers/small/small3.jpg`,
      largeUrl: `${path}assets/images/specialOffers/large/large2.jpg`,
    },
  },
  {
    id: 25,
    title: "Women's outerwear",
    images: {
      smallUrl: `${path}assets/images/specialOffers/small/small1.jpg`,
      largeUrl: `${path}assets/images/specialOffers/large/large1.jpg`,
    },
  },
]
