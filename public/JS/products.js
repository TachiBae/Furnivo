// ===========================
// PRODUCT DATABASE
// ===========================
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
        content: '<p>Classic dining chair with contemporary comfort. The Bergen Chair combines traditional craftsmanship with modern ergonomics.</p>'
      },
      materials: {
        title: 'Materials',
        content: '<p>Solid oak construction with hand-finished details</p>'
      },
      dimensions: {
        title: 'Dimensions',
        content: '<p>Width: 18 inches (46 cm)</p><p>Depth: 20 inches (51 cm)</p><p>Height: 32 inches (81 cm)</p>'
      },
      shipping: {
        title: 'Shipping',
        content: '<p>Free standard shipping (5-7 business days)</p><p>30-day return policy</p>'
      }
    },
    featured: {
      title: 'Timeless Dining Elegance',
      description: 'The Bergen Dining Chair brings warmth and sophistication to your dining space.',
      linkText: 'View dining collection',
      linkUrl: '#dining-collection',
      image: '../img/bergen-chair-lifestyle.webp'
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
        content: '<p>Handcrafted walnut coffee table with modern design. Features smooth edges and a durable finish.</p>'
      },
      materials: {
        title: 'Materials',
        content: '<p>Solid walnut wood with natural oil finish</p>'
      },
      dimensions: {
        title: 'Dimensions',
        content: '<p>Width: 48 inches (122 cm)</p><p>Depth: 24 inches (61 cm)</p><p>Height: 18 inches (46 cm)</p>'
      },
      shipping: {
        title: 'Shipping',
        content: '<p>Free standard shipping (5-7 business days)</p><p>White glove delivery available ($99)</p>'
      }
    },
    featured: {
      title: 'Centerpiece of Comfort',
      description: 'The Fjord Coffee Table anchors your living space with natural beauty and functional design.',
      linkText: 'Explore living room furniture',
      linkUrl: '#living-room',
      image: '../img/fjord-table-lifestyle.webp'
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
        content: '<p>Elegant floor lamp with adjustable height. Perfect for reading nooks and ambient lighting.</p>'
      },
      materials: {
        title: 'Materials',
        content: '<p>Oak wood base with natural linen shade</p>'
      },
      dimensions: {
        title: 'Dimensions',
        content: '<p>Height: 60 inches (152 cm)</p><p>Base diameter: 12 inches (30 cm)</p><p>Shade diameter: 16 inches (41 cm)</p>'
      },
      shipping: {
        title: 'Shipping',
        content: '<p>Free standard shipping (3-5 business days)</p><p>Easy assembly required</p>'
      }
    },
    featured: {
      title: 'Illuminate Your Space',
      description: 'The Nordic Floor Lamp provides warm, diffused light that creates a cozy atmosphere.',
      linkText: 'Browse lighting collection',
      linkUrl: '#lighting',
      image: '../img/nordic-lamp-lifestyle.webp'
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
        content: '<p>Perfect companion to the Oslo Armchair. Features the same premium materials and craftsmanship.</p>'
      },
      materials: {
        title: 'Materials',
        content: '<p>Solid oak frame with premium upholstery</p>'
      },
      dimensions: {
        title: 'Dimensions',
        content: '<p>Width: 24 inches (61 cm)</p><p>Depth: 24 inches (61 cm)</p><p>Height: 16 inches (41 cm)</p>'
      },
      shipping: {
        title: 'Shipping',
        content: '<p>Free standard shipping (5-7 business days)</p><p>30-day return policy</p>'
      }
    },
    featured: {
      title: 'Complete Your Comfort',
      description: 'The Oslo Ottoman perfectly complements the Oslo Armchair for ultimate relaxation.',
      linkText: 'View Oslo collection',
      linkUrl: '#oslo-collection',
      image: '../img/oslo-ottoman-lifestyle.webp'
    },
    relatedProducts: ['oslo-armchair', 'fjord-table', 'bergen-chair']
  }
};

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Get product ID from URL parameter
 */
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id') || 'oslo-armchair';
}

/**
 * Generate star rating HTML
 */
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '½';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
}

/**
 * Generate feature icon SVG
 */
function getFeatureIconSVG(iconType) {
  const icons = {
    shipping: '<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
    warranty: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
  };
  
  return icons[iconType] || icons.warranty;
}

// ===========================
// PRODUCT DETAILS PAGE
// ===========================

/**
 * Update page metadata (title and meta description)
 */
function updatePageMetadata(product) {
  document.title = `${product.name} - Furnivo`;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', product.description);
  }
}

/**
 * Update breadcrumb navigation
 */
function updateBreadcrumb(product) {
  const breadcrumb = document.querySelector('.breadcrumb');
  if (!breadcrumb) return;
  
  breadcrumb.innerHTML = `
    <a href="../HTML/main.html">Home</a>
    <span class="breadcrumb-separator" aria-hidden="true">/</span>
    <a href="${product.breadcrumb.categoryLink}">${product.breadcrumb.category}</a>
    <span class="breadcrumb-separator" aria-hidden="true">/</span>
    <span class="breadcrumb-current" aria-current="page">${product.name}</span>
  `;
}

/**
 * Update main product section
 */
function updateProductSection(product) {
  const productImage = document.querySelector('.product-image');
  if (productImage) {
    productImage.src = product.images.main;
    productImage.alt = `${product.name} - main product image`;
    productImage.onerror = function() {
      this.src = '../img/placeholder.webp';
      this.alt = 'Product image not available';
    };
  }
  
  const productTitle = document.querySelector('.product-title');
  if (productTitle) {
    productTitle.textContent = product.name;
  }
  
  const productDescription = document.querySelector('.product-description');
  if (productDescription) {
    productDescription.textContent = product.description;
  }
  
  const ratingStars = document.querySelector('.product-rating-stars span');
  if (ratingStars) {
    ratingStars.textContent = generateStarRating(product.rating);
  }
  
  const ratingText = document.querySelector('.product-rating-text');
  if (ratingText) {
    ratingText.textContent = `(${product.reviewCount} reviews)`;
  }
  
  const ratingContainer = document.querySelector('.product-rating-stars');
  if (ratingContainer) {
    ratingContainer.setAttribute('aria-label', `${product.rating} out of 5 stars`);
  }
  
  const productPrice = document.querySelector('.product-price');
  if (productPrice) {
    productPrice.textContent = `$${product.price.toLocaleString()}`;
    productPrice.setAttribute('aria-label', `Price: $${product.price.toLocaleString()}`);
  }
}

/**
 * Update product color options
 */
function updateProductOptions(product) {
  const colorOptionsContainer = document.querySelector('.color-options');
  if (!colorOptionsContainer) return;
  
  colorOptionsContainer.innerHTML = '';
  
  product.colors.forEach((color, index) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = `color-${color.id}`;
    input.name = 'color';
    input.value = color.id;
    input.className = `color-option ${color.id}`;
    input.style.backgroundColor = color.hex;
    input.setAttribute('aria-label', color.name);
    
    if (index === 0) {
      input.checked = true;
    }
    
    const label = document.createElement('label');
    label.htmlFor = `color-${color.id}`;
    label.className = 'visually-hidden';
    label.textContent = color.name;
    
    colorOptionsContainer.appendChild(input);
    colorOptionsContainer.appendChild(label);
  });
  
  attachColorListeners();
}

/**
 * Update product features
 */
function updateFeatures(product) {
  const featuresContainer = document.querySelector('.product-features');
  if (!featuresContainer) return;
  
  featuresContainer.innerHTML = '';
  
  product.features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'feature-item';
    
    featureItem.innerHTML = `
      <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${getFeatureIconSVG(feature.icon)}
      </svg>
      <span>${feature.text}</span>
    `;
    
    featuresContainer.appendChild(featureItem);
  });
}

/**
 * Update product tabs
 */
function updateTabs(product) {
  const tabNavigation = document.querySelector('.tab-navigation');
  const tabsSection = document.querySelector('.product-tabs');
  
  if (!tabNavigation || !tabsSection) return;
  
  tabNavigation.innerHTML = '';
  
  const existingPanels = tabsSection.querySelectorAll('.tab-content');
  existingPanels.forEach(panel => panel.remove());
  
  const tabKeys = Object.keys(product.tabs);
  
  tabKeys.forEach((key, index) => {
    const tab = product.tabs[key];
    
    const button = document.createElement('button');
    button.role = 'tab';
    button.className = 'tab-button';
    button.setAttribute('aria-controls', `${key}-panel`);
    button.setAttribute('id', `${key}-tab`);
    button.textContent = tab.title;
    
    if (index === 0) {
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
    } else {
      button.setAttribute('aria-selected', 'false');
    }
    
    tabNavigation.appendChild(button);
    
    const panel = document.createElement('div');
    panel.className = 'tab-content';
    panel.role = 'tabpanel';
    panel.id = `${key}-panel`;
    panel.setAttribute('aria-labelledby', `${key}-tab`);
    panel.innerHTML = tab.content;
    
    if (index !== 0) {
      panel.style.display = 'none';
    }
    
    tabsSection.appendChild(panel);
  });
  
  attachTabListeners();
}

/**
 * Update featured section
 */
function updateFeaturedSection(product) {
  if (!product.featured) return;
  
  const featuredContent = document.querySelector('.featured-content');
  const featuredImage = document.querySelector('.featured-image');
  
  if (featuredContent) {
    featuredContent.innerHTML = `
      <h2>${product.featured.title}</h2>
      <p>${product.featured.description}</p>
      <a href="${product.featured.linkUrl}" class="featured-link">
        ${product.featured.linkText}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>
    `;
  }
  
  if (featuredImage && product.featured.image) {
    featuredImage.style.backgroundImage = `url('${product.featured.image}')`;
    featuredImage.style.backgroundSize = 'cover';
    featuredImage.style.backgroundPosition = 'center';
    featuredImage.style.minHeight = '400px';
  }
}

/**
 * Update related products section
 */
function updateRelatedProducts(product) {
  const relatedGrid = document.querySelector('.related-grid');
  if (!relatedGrid) return;
  
  relatedGrid.innerHTML = '';
  
  product.relatedProducts.forEach(relatedId => {
    const relatedProduct = products[relatedId];
    if (!relatedProduct) return;
    
    const article = document.createElement('article');
    article.className = 'related-item';
    article.style.cursor = 'pointer';
    
    article.innerHTML = `
      <div class="related-image" role="img" aria-label="${relatedProduct.name} product image" style="background-image: url('${relatedProduct.images.main}'); background-size: cover; background-position: center;"></div>
      <div class="related-content">
        <h3 class="related-title">${relatedProduct.name}</h3>
        <p class="related-subtitle">${relatedProduct.breadcrumb.category}</p>
        <p class="related-price">$${relatedProduct.price.toLocaleString()}</p>
      </div>
    `;
    
    article.addEventListener('click', () => {
      window.location.href = `product-details.html?id=${relatedId}`;
    });
    
    relatedGrid.appendChild(article);
  });
}

/**
 * Show 404 error for invalid product
 */
function show404Error() {
  const main = document.querySelector('.product-main');
  if (!main) return;
  
  main.innerHTML = `
    <div style="text-align: center; padding: 4rem 2rem;">
      <h1 style="font-size: 3rem; color: var(--product-text-primary); margin-bottom: 1rem;">404</h1>
      <h2 style="font-size: 1.5rem; color: var(--product-text-secondary); margin-bottom: 2rem;">Product Not Found</h2>
      <p style="color: var(--product-text-muted); margin-bottom: 2rem;">The product you're looking for doesn't exist or has been removed.</p>
      <a href="../HTML/shop-page.html" style="display: inline-block; background-color: var(--product-primary-color); color: white; padding: 1rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: 500;">Browse All Products</a>
    </div>
  `;
}

/**
 * Initialize product details page
 */
function initProductPage() {
  const productId = getProductIdFromURL();
  const product = products[productId];
  
  if (!product) {
    show404Error();
    return;
  }
  
  updatePageMetadata(product);
  updateBreadcrumb(product);
  updateProductSection(product);
  updateProductOptions(product);
  updateFeatures(product);
  updateTabs(product);
  updateFeaturedSection(product);
  updateRelatedProducts(product);
  
  attachQuantityListeners();
  attachMenuListeners();
}

// ===========================
// SHOP PAGE
// ===========================

/**
 * Initialize shop page with dynamic products
 */
function initShopPage() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  Object.values(products).forEach(product => {
    const article = document.createElement('article');
    article.className = 'product-card';
    article.style.cursor = 'pointer';
    
    article.innerHTML = `
      <div class="product-image">
        <img src="${product.images.main}" 
             alt="${product.name}"
             onerror="this.src='../img/placeholder.webp'">
      </div>
      <div class="product-info">
        <p class="product-category">${product.breadcrumb.category}</p>
        <h2 class="product-name">${product.name}</h2>
        <div class="product-rating">
          <div class="stars">
            <span class="star">${generateStarRating(product.rating)}</span>
          </div>
          <span class="review-count">(${product.reviewCount})</span>
        </div>
        <p class="product-price">$${product.price.toLocaleString()}</p>
      </div>
    `;
    
    // Add click handler to navigate to product details
    article.addEventListener('click', () => {
      // Get current page location to determine correct path
      const currentPath = window.location.pathname;
      
      if (currentPath.includes('/HTML/')) {
        window.location.href = `product-details.html?id=${product.id}`;
      } else {
        // Otherwise use the HTML folder path
        window.location.href = `../public/HTML/product-details.html?id=${product.id}`;
      }
    });
    
    productsGrid.appendChild(article);
  });
}

// ===========================
// EVENT LISTENERS
// ===========================

/**
 * Attach tab click event listeners
 */
function attachTabListeners() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(content => {
        content.style.display = 'none';
      });
      
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      
      const targetPanel = button.getAttribute('aria-controls');
      const targetContent = document.getElementById(targetPanel);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });
}

/**
 * Attach color selection event listeners
 */
function attachColorListeners() {
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('change', () => {
      colorOptions.forEach(opt => opt.checked = false);
      option.checked = true;
    });
  });
}

/**
 * Attach quantity control event listeners
 */
function attachQuantityListeners() {
  const quantityInput = document.querySelector('.quantity-input');
  const decreaseBtn = document.querySelector('.quantity-button:first-of-type');
  const increaseBtn = document.querySelector('.quantity-button:last-of-type');
  
  if (decreaseBtn && quantityInput) {
    decreaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  }
  
  if (increaseBtn && quantityInput) {
    increaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      const maxValue = parseInt(quantityInput.getAttribute('max'));
      if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
      }
    });
  }
}

/**
 * Attach mobile menu event listeners
 */
function attachMenuListeners() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  if (menuToggle && navMenu && menuOverlay) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
    });
  }
}

// ===========================
// MAIN INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  // Product details page
  if (document.querySelector('.product-page')) {
    initProductPage();
  }
  
  // Shop page
  if (document.querySelector('.shop-page')) {
    initShopPage();
    attachMenuListeners();
  }
});