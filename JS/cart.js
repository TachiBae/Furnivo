// ===========================
// CART MANAGEMENT SYSTEM
// ===========================

/**
 * Get the correct base path for images based on current location
 */
function getCartImageBasePath() {
  const currentPath = window.location.pathname;
  
  // If we're in the HTML subdirectory
  if (currentPath.includes('/HTML/')) {
    return '../img/';
  }
  // If we're at root or in a GitHub Pages repo subdirectory
  else {
    const pathParts = currentPath.split('/').filter(p => p);
    if (pathParts.length > 0 && !pathParts[0].includes('.html')) {
      return './img/';
    }
    return './img/';
  }
}

/**
 * Get full image path
 */
function getCartImagePath(imageName) {
  // If imageName already has a path (starts with ../ or ./), extract just the filename
  if (imageName.includes('/')) {
    imageName = imageName.split('/').pop();
  }
  const basePath = getCartImageBasePath();
  return basePath + imageName;
}

/**
 * Cart object to manage shopping cart state
 */
const cart = {
  items: [],
  subscribers: [],

  // Initialize cart from localStorage or start fresh
  init() {
    const savedCart = localStorage.getItem('furnivo_cart');
    if (savedCart) {
      try {
        this.items = JSON.parse(savedCart);
      } catch (e) {
        console.error('Error loading cart:', e);
        this.items = [];
      }
    } else {
      this.items = [];
    }
  },

  // Save cart to localStorage
  save() {
    try {
      localStorage.setItem('furnivo_cart', JSON.stringify(this.items));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  },

  // Subscribe to cart changes
  subscribe(callback) {
    this.subscribers.push(callback);
  },

  // Notify all subscribers of changes
  notify() {
    this.subscribers.forEach(callback => callback());
  },

  // Get all cart items
  getItems() {
    return this.items;
  },

  // Get cart item count
  getItemCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },

  // Get cart subtotal
  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Add item to cart
  addItem(product, quantity = 1, selectedColor = null) {
    const existingItemIndex = this.items.findIndex(
      item => item.productId === product.id && item.color === selectedColor
    );

    if (existingItemIndex > -1) {
      // Item already exists, update quantity
      this.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item - store only the image filename without path
      const imageFilename = product.images.main.includes('/') 
        ? product.images.main.split('/').pop() 
        : product.images.main;
      
      this.items.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: imageFilename, // Store only filename
        color: selectedColor,
        quantity: quantity
      });
    }

    this.save();
    this.notify();
    return true;
  },

  // Update item quantity
  updateQuantity(productId, newQuantity, color = null) {
    const itemIndex = this.items.findIndex(
      item => item.productId === productId && item.color === color
    );

    if (itemIndex > -1) {
      if (newQuantity <= 0) {
        this.items.splice(itemIndex, 1);
      } else {
        this.items[itemIndex].quantity = newQuantity;
      }

      this.save();
      this.notify();
      return true;
    }
    return false;
  },

  // Remove item from cart
  removeItem(productId, color = null) {
    const itemIndex = this.items.findIndex(
      item => item.productId === productId && item.color === color
    );

    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
      this.save();
      this.notify();
      return true;
    }
    return false;
  },

  // Clear all items from cart
  clear() {
    this.items = [];
    this.save();
    this.notify();
  }
};

// Initialize cart
cart.init();

// ===========================
// CART UI FUNCTIONS
// ===========================

function updateCartBadge() {
  const cartIcon = document.querySelector('.cart-icon');
  if (!cartIcon) return;

  const existingBadge = cartIcon.querySelector('.cart-badge');
  if (existingBadge) existingBadge.remove();

  const itemCount = cart.getItemCount();
  
  if (itemCount > 0) {
    const badge = document.createElement('span');
    badge.className = 'cart-badge';
    badge.textContent = itemCount;
    badge.style.cssText = `
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #d97706;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
      pointer-events: none;
    `;
    
    cartIcon.style.position = 'relative';
    cartIcon.appendChild(badge);
  }
}

function showCartNotification(message, type = 'success') {
  const existingNotification = document.querySelector('.cart-notification');
  if (existingNotification) existingNotification.remove();

  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  
  const bgColor = type === 'success' ? '#10b981' : '#ef4444';
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${bgColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;

  if (!document.querySelector('#cart-notification-styles')) {
    const style = document.createElement('style');
    style.id = 'cart-notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function attachCartIconListener() {
  const cartIcon = document.querySelector('.cart-icon');
  if (!cartIcon) return;

  const newCartIcon = cartIcon.cloneNode(true);
  cartIcon.parentNode.replaceChild(newCartIcon, cartIcon);

  newCartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    if (currentPath.includes('/HTML/')) {
      window.location.href = 'cart-page.html';
    } else {
      window.location.href = 'HTML/cart-page.html';
    }
  });

  newCartIcon.style.cursor = 'pointer';
}

// ===========================
// ADD TO CART FUNCTIONALITY
// ===========================

function attachAddToCartListener() {
  const addToCartForm = document.querySelector('.product-options');
  const addToCartButton = document.querySelector('.btn-primary');
  
  if (!addToCartForm || !addToCartButton) return;

  addToCartForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const productId = getProductIdFromURL();
    const product = products[productId];

    if (!product) {
      showCartNotification('Product not found', 'error');
      return;
    }

    const selectedColorInput = document.querySelector('.color-option:checked');
    const selectedColor = selectedColorInput ? selectedColorInput.value : null;

    const quantityInput = document.querySelector('.quantity-input');
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    cart.addItem(product, quantity, selectedColor);
    updateCartBadge();
    showCartNotification(`${product.name} added to cart!`, 'success');

    if (quantityInput) quantityInput.value = 1;
  });
}

// ===========================
// CART PAGE FUNCTIONALITY
// ===========================

function renderCartItems() {
  const container = document.getElementById('cartItemsContainer');
  if (!container) return;

  const items = cart.getItems();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-cart" style="text-align:center; padding:4rem 2rem;">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any items yet.</p>
        <a href="../HTML/shop-page.html" style="background:#d97706;color:white;padding:0.75rem 2rem;border-radius:0.5rem;text-decoration:none;font-weight:600;display:inline-block;">Start Shopping</a>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => {
    const imagePath = getCartImagePath(item.image);
    return `
      <article class="div-wrapper">
        <div class="div-4">
          <div class="img-wrapper">
            <img src="${imagePath}" 
                 alt="${item.name}" 
                 style="width:100%;height:100%;object-fit:cover;border-radius:0.5rem;" 
                 onerror="this.src='${getCartImagePath('placeholder.webp')}'" />
          </div>
          <div class="div-5">
            <h2 class="text-wrapper-2">${item.name}</h2>
            ${item.color ? `<p class="p">Color: ${item.color}</p>` : '<p class="p">&nbsp;</p>'}
            <div class="div-6">
              <div class="div-7">
                <p class="text-wrapper-3">$${item.price.toLocaleString()}</p>
                <div class="div-8" role="group" aria-label="Quantity selector">
                  <button class="button cart-qty-decrease" data-product-id="${item.productId}" data-color="${item.color || ''}">-</button>
                  <span>${item.quantity}</span>
                  <button class="button cart-qty-increase" data-product-id="${item.productId}" data-color="${item.color || ''}">+</button>
                </div>
              </div>
              <div class="div-9">
                <p>$${(item.price * item.quantity).toLocaleString()}</p>
                <button class="cart-remove-item" data-product-id="${item.productId}" data-color="${item.color || ''}" style="cursor:pointer;background:transparent;border:none;color:#ef4444;font-weight:500;">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachCartPageListeners();
}

function updateOrderSummary() {
  const subtotal = cart.getSubtotal();
  const shipping = subtotal > 0 ? 49 : 0;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const subtotalEl = document.getElementById('subtotalAmount');
  const shippingEl = document.getElementById('shippingAmount');
  const taxEl = document.getElementById('taxAmount');
  const totalEl = document.getElementById('totalAmount');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = `$${shipping.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function attachCartPageListeners() {
  document.querySelectorAll('.cart-qty-decrease').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      const color = btn.dataset.color || null;
      const item = cart.getItems().find(i => i.productId === productId && i.color === color);
      if (item) {
        cart.updateQuantity(productId, item.quantity - 1, color);
        renderCartItems();
        updateOrderSummary();
        updateCartBadge();
      }
    });
  });

  document.querySelectorAll('.cart-qty-increase').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      const color = btn.dataset.color || null;
      const item = cart.getItems().find(i => i.productId === productId && i.color === color);
      if (item) {
        cart.updateQuantity(productId, item.quantity + 1, color);
        renderCartItems();
        updateOrderSummary();
        updateCartBadge();
      }
    });
  });

  document.querySelectorAll('.cart-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      const color = btn.dataset.color || null;
      if (confirm('Remove this item from your cart?')) {
        cart.removeItem(productId, color);
        renderCartItems();
        updateOrderSummary();
        updateCartBadge();
        showCartNotification('Item removed from cart', 'success');
      }
    });
  });
}

function attachCartPageButtonListeners() {
  const checkoutBtn = document.getElementById('checkoutBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const items = cart.getItems();
      if (items.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
      }
      alert('Checkout functionality coming soon!');
    });
  }

  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', () => {
      window.location.href = '../HTML/shop-page.html';
    });
  }
}

function renderRecommendedProducts() {
  const recommendationsSection = document.querySelector('.section-2');
  if (!recommendationsSection) return;

  // Check if products is defined
  if (typeof products === 'undefined') {
    console.warn('Products not loaded yet');
    return;
  }

  // Get 4 random products
  const productList = Object.values(products);
  const shuffled = productList.sort(() => 0.5 - Math.random());
  const recommended = shuffled.slice(0, 4);

  // Find the products grid container
  const grid = recommendationsSection.querySelector('.div-28');
  if (!grid) return;

  grid.innerHTML = '';

  recommended.forEach(product => {
    const article = document.createElement('article');
    article.className = 'div-29';
    article.style.cursor = 'pointer';

    const imagePath = getCartImagePath(product.images.main);

    article.innerHTML = `
      <div class="div-30">
        <div class="related-image" role="img" aria-label="${product.name}" 
             style="width:100%;height:256px;background-image:url('${imagePath}');background-size:cover;background-position:center;">
        </div>
      </div>
      <div class="div-31">
        <h3 class="text-wrapper-29">${product.name}</h3>
        <p class="text-wrapper-30">${product.description.substring(0, 50)}...</p>
        <p class="text-wrapper-31">$${product.price.toLocaleString()}</p>
      </div>
    `;

    article.addEventListener('click', () => {
      window.location.href = `product-details.html?id=${product.id}`;
    });

    grid.appendChild(article);
  });
}

function initCartPage() {
  renderCartItems();
  updateOrderSummary();
  updateCartBadge();
  attachCartPageButtonListeners();
  attachCartIconListener();
  renderRecommendedProducts();

  cart.subscribe(() => {
    renderCartItems();
    updateOrderSummary();
    updateCartBadge();
  });
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  attachCartIconListener();

  // Product page
  attachAddToCartListener();

  // Cart page
  if (document.getElementById('cartItemsContainer')) {
    initCartPage();
  }
});