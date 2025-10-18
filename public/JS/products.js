// products.js - Central product database
const products = {
  'oslo-armchair': {
    id: 'oslo-armchair',
    name: 'Oslo Armchair',
    description: 'A perfect blend of Scandinavian minimalism and contemporary comfort. Crafted with premium materials for lasting elegance.',
    price: 1299,
    rating: 5,
    reviewCount: 127,
    images: {
      main: '../img/oslo-armchair-main.webp',
      gallery: [
        '../img/oslo-armchair-1.webp',
        '../img/oslo-armchair-2.webp',
        '../img/oslo-armchair-3.webp'
      ]
    },
    breadcrumb: {
      category: 'Living Room',
      categoryLink: '#living-room'
    },
    colors: [
      { id: 'beige', name: 'Beige', hex: '#e7e5e4' },
      { id: 'gray', name: 'Gray', hex: '#9ca3af' },
      { id: 'dark', name: 'Dark brown', hex: '#57534e' }
    ],
    features: [
      { icon: 'shipping', text: 'Free shipping' },
      { icon: 'warranty', text: '2-year warranty' }
    ],
    tabs: {
      description: {
        title: 'Description',
        content: `
          <p>The Oslo Armchair embodies the essence of Scandinavian design philosophy. Its clean lines and thoughtful proportions create a piece that's both visually striking and incredibly comfortable.</p>
          <p>Handcrafted by skilled artisans, each chair features a solid oak frame and premium upholstery that ages beautifully over time. The ergonomic design provides optimal support for extended periods of relaxation.</p>
        `
      },
      materials: {
        title: 'Materials',
        content: `
          <p>Premium solid oak frame with reinforced joints</p>
          <p>High-density foam cushioning</p>
          <p>Premium fabric upholstery (100% polyester)</p>
          <p>Water-resistant coating</p>
        `
      },
      dimensions: {
        title: 'Dimensions',
        content: `
          <p>Width: 32 inches (81 cm)</p>
          <p>Depth: 35 inches (89 cm)</p>
          <p>Height: 34 inches (86 cm)</p>
          <p>Seat Height: 18 inches (46 cm)</p>
        `
      },
      shipping: {
        title: 'Shipping',
        content: `
          <p>Free standard shipping (5-7 business days)</p>
          <p>Express shipping available ($49)</p>
          <p>White glove delivery available ($149)</p>
          <p>30-day return policy</p>
        `
      }
    },
    featured: {
      title: 'Designed for Modern Living',
      description: 'See how the Oslo Armchair transforms any space into a sanctuary of comfort and style. Perfect for reading corners, living rooms, or bedroom retreats.',
      linkText: 'Explore our styling guide',
      linkUrl: '#styling-guide',
      image: '../img/oslo-armchair-lifestyle.webp'
    },
    relatedProducts: ['bergen-chair', 'fjord-table', 'nordic-lamp', 'oslo-ottoman']
  },
  
  'bergen-chair': {
    id: 'bergen-chair',
    name: 'Bergen Dining Chair',
    description: 'Timeless dining chair crafted from solid oak. Perfect for any dining space.',
    price: 399,
    rating: 4.5,
    reviewCount: 89,
    images: {
      main: '../img/bergen-chair-main.webp',
      gallery: ['../img/bergen-chair-1.webp']
    },
    breadcrumb: {
      category: 'Dining Room',
      categoryLink: '#dining-room'
    },
    colors: [
      { id: 'natural', name: 'Natural Oak', hex: '#d4a574' },
      { id: 'walnut', name: 'Walnut', hex: '#5d4037' }
    ],
    features: [
      { icon: 'shipping', text: 'Free shipping' },
      { icon: 'warranty', text: '1-year warranty' }
    ],
    tabs: {
      description: {
        title: 'Description',
        content: '<p>Classic dining chair with contemporary comfort.</p>'
      }
    },
    relatedProducts: ['oslo-armchair', 'fjord-table', 'nordic-lamp']
  },
  
  'fjord-table': {
    id: 'fjord-table',
    name: 'Fjord Coffee Table',
    description: 'Elegant walnut wood coffee table with clean lines.',
    price: 899,
    rating: 5,
    reviewCount: 64,
    images: {
      main: '../img/fjord-table-main.webp',
      gallery: ['../img/fjord-table-1.webp']
    },
    breadcrumb: {
      category: 'Living Room',
      categoryLink: '#living-room'
    },
    colors: [
      { id: 'walnut', name: 'Walnut', hex: '#5d4037' }
    ],
    features: [
      { icon: 'shipping', text: 'Free shipping' },
      { icon: 'warranty', text: '2-year warranty' }
    ],
    tabs: {
      description: {
        title: 'Description',
        content: '<p>Handcrafted walnut coffee table with modern design.</p>'
      }
    },
    relatedProducts: ['oslo-armchair', 'bergen-chair', 'oslo-ottoman']
  },

  'nordic-lamp': {
    id: 'nordic-lamp',
    name: 'Nordic Floor Lamp',
    description: 'Modern floor lamp with oak base and linen shade.',
    price: 299,
    rating: 4.5,
    reviewCount: 102,
    images: {
      main: '../img/nordic-lamp-main.webp',
      gallery: ['../img/nordic-lamp-1.webp']
    },
    breadcrumb: {
      category: 'Lighting',
      categoryLink: '#lighting'
    },
    colors: [
      { id: 'natural', name: 'Natural Oak', hex: '#d4a574' },
      { id: 'black', name: 'Black', hex: '#000000' }
    ],
    features: [
      { icon: 'shipping', text: 'Free shipping' },
      { icon: 'warranty', text: '1-year warranty' }
    ],
    tabs: {
      description: {
        title: 'Description',
        content: '<p>Elegant floor lamp with adjustable height.</p>'
      }
    },
    relatedProducts: ['oslo-armchair', 'fjord-table', 'bergen-chair']
  },

  'oslo-ottoman': {
    id: 'oslo-ottoman',
    name: 'Oslo Ottoman',
    description: 'Matching ottoman for the Oslo Armchair collection.',
    price: 599,
    rating: 5,
    reviewCount: 45,
    images: {
      main: '../img/oslo-ottoman-main.webp',
      gallery: ['../img/oslo-ottoman-1.webp']
    },
    breadcrumb: {
      category: 'Living Room',
      categoryLink: '#living-room'
    },
    colors: [
      { id: 'beige', name: 'Beige', hex: '#e7e5e4' },
      { id: 'gray', name: 'Gray', hex: '#9ca3af' }
    ],
    features: [
      { icon: 'shipping', text: 'Free shipping' },
      { icon: 'warranty', text: '2-year warranty' }
    ],
    tabs: {
      description: {
        title: 'Description',
        content: '<p>Perfect companion to the Oslo Armchair.</p>'
      }
    },
    relatedProducts: ['oslo-armchair', 'fjord-table', 'bergen-chair']
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}