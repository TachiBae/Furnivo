// ===========================
// SHOPPING CART MODULE
// ===========================

/**
 * Shopping Cart Manager
 * Handles all cart operations including add, remove, update quantity
 */
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.listeners = [];
  }

  /**
   * Load cart from memory (since localStorage is not available)
   */
  loadCart() {
    if (!window.cartData) {
      window.cartData = [];
    }
    return window.cartData;
  }

  /**
   * Save cart to memory
   */
  saveCart() {
    window.cartData = this.items;
    this.notifyListeners();
  }

  /**
   * Add item to cart
   */
  addItem(productId, quantity = 1, selectedColor = null) {
    const product = products[productId];
    if (!product) {
      console.error('Product not found:', productId);
      return false;
    }

    // Check if item already exists in cart
    const existingItemIndex = this.items.findIndex(
      item => item.productId === productId && item.color === selectedColor
    );

    if (existingItemIndex > -1) {
      // Update quantity of existing item
      this.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      const cartItem = {
        productId: productId,
        name: product.name,
        price: product.price,
        image: product.images.main,
        color: selectedColor || (product.colors[0] ? product.colors[0].name : null),
        quantity: quantity,
        addedAt: new Date().toISOString()
      };
      this.items.push(cartItem);
    }

    this.saveCart();
    return true;
  }

  /**
   * Remove item from cart
   */
  removeItem(productId, color = null) {
    const index = this.items.findIndex(
      item => item.productId === productId && item.color === color
    );
    
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
      return true;
    }
    return false;
  }

  /**
   * Update item quantity
   */
  updateQuantity(productId, quantity, color = null) {
    const item = this.items.find(
      item => item.productId === productId && item.color === color
    );
    
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId, color);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
      return true;
    }
    return false;
  }

  /**
   * Get all cart items
   */
  getItems() {
    return this.items;
  }

  /**
   * Get total number of items in cart
   */
  getItemCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Get cart subtotal
   */
  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /**
   * Clear entire cart
   */
  clearCart() {
    this.items = [];
    this.saveCart();
  }

  /**
   * Subscribe to cart changes
   */
  subscribe(callback) {
    this.listeners.push(callback);
  }

  /**
   * Notify all listeners of cart changes
   */
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.items));
  }
}

// Create global cart instance
const cart = new ShoppingCart();

// ===========================
// CART UI FUNCTIONS
// ===========================

/**
 * Update cart icon badge with item count
 */
function updateCartBadge() {
  const cartIcon = document.querySelector('.cart-icon');
  if (!cartIcon) return;

  // Remove existing badge if present
  const existingBadge = cartIcon.querySelector('.cart-badge');
  if (existingBadge) {
    existingBadge.remove();
  }

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
      font-weight: bold;
    `;
    cartIcon.style.position = 'relative';
    cartIcon.appendChild(badge);
  }
}

/**
 * Show cart notification
 */
function showCartNotification(message, type = 'success') {
  // Remove existing notification
  const existing = document.querySelector('.cart-notification');
  if (existing) {
    existing.remove();
  }

  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    font-weight: 500;
  `;

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

/**
 * Create and show cart modal
 */
function showCartModal() {
  // Remove existing modal if present
  const existingModal = document.querySelector('.cart-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  const items = cart.getItems();
  const subtotal = cart.getSubtotal();

  const modalHTML = `
    <div class="cart-modal-overlay" style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    ">
      <div class="cart-modal" style="
        background: white;
        border-radius: 1rem;
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      ">
        <!-- Modal Header -->
        <div class="cart-modal-header" style="
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">Shopping Cart</h2>
          <button class="close-cart-modal" style="
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            color: #6b7280;
            line-height: 1;
          ">&times;</button>
        </div>

        <!-- Modal Body -->
        <div class="cart-modal-body" style="
          padding: 1.5rem;
          overflow-y: auto;
          flex: 1;
        ">
          ${items.length === 0 ? `
            <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
              <svg style="width: 64px; height: 64px; margin: 0 auto 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <p style="font-size: 1.125rem; font-weight: 500; margin-bottom: 0.5rem;">Your cart is empty</p>
              <p style="font-size: 0.875rem;">Add some items to get started!</p>
            </div>
          ` : items.map(item => `
            <div class="cart-item" data-product-id="${item.productId}" data-color="${item.color}" style="
              display: flex;
              gap: 1rem;
              padding: 1rem;
              border: 1px solid #e5e7eb;
              border-radius: 0.5rem;
              margin-bottom: 1rem;
            ">
              <img src="${item.image}" alt="${item.name}" style="
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 0.5rem;
                flex-shrink: 0;
              " onerror="this.src='../img/placeholder.webp'">
              <div style="flex: 1;">
                <h3 style="font-weight: 600; margin: 0 0 0.25rem 0;">${item.name}</h3>
                ${item.color ? `<p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">Color: ${item.color}</p>` : ''}
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <button class="cart-quantity-btn decrease" data-product-id="${item.productId}" data-color="${item.color}" style="
                    width: 28px;
                    height: 28px;
                    border: 1px solid #d1d5db;
                    background: white;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    font-weight: 600;
                  ">-</button>
                  <span style="min-width: 30px; text-align: center; font-weight: 500;">${item.quantity}</span>
                  <button class="cart-quantity-btn increase" data-product-id="${item.productId}" data-color="${item.color}" style="
                    width: 28px;
                    height: 28px;
                    border: 1px solid #d1d5db;
                    background: white;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    font-weight: 600;
                  ">+</button>
                </div>
              </div>
              <div style="text-align: right; display: flex; flex-direction: column; justify-content: space-between;">
                <button class="remove-cart-item" data-product-id="${item.productId}" data-color="${item.color}" style="
                  background: none;
                  border: none;
                  color: #ef4444;
                  cursor: pointer;
                  font-size: 1.25rem;
                  padding: 0;
                  line-height: 1;
                ">&times;</button>
                <p style="font-weight: 700; margin: 0;">$${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          `).join('')}
        </div>

        ${items.length > 0 ? `
          <!-- Modal Footer -->
          <div class="cart-modal-footer" style="
            padding: 1.5rem;
            border-top: 1px solid #e5e7eb;
          ">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span style="font-weight: 600; font-size: 1.125rem;">Subtotal:</span>
              <span style="font-weight: 700; font-size: 1.25rem;">$${subtotal.toLocaleString()}</span>
            </div>
            <button class="checkout-btn" style="
              width: 100%;
              background-color: #d97706;
              color: white;
              padding: 1rem;
              border: none;
              border-radius: 0.5rem;
              font-weight: 600;
              font-size: 1rem;
              cursor: pointer;
              transition: background-color 0.2s;
            " onmouseover="this.style.backgroundColor='#b45309'" onmouseout="this.style.backgroundColor='#d97706'">
              Proceed to Checkout
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Attach event listeners
  const overlay = document.querySelector('.cart-modal-overlay');
  const closeBtn = document.querySelector('.close-cart-modal');
  
  closeBtn.addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  // Quantity buttons
  document.querySelectorAll('.cart-quantity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = e.target.dataset.productId;
      const color = e.target.dataset.color;
      const item = cart.getItems().find(i => i.productId === productId && i.color === color);
      
      if (item) {
        const newQuantity = btn.classList.contains('increase') 
          ? item.quantity + 1 
          : item.quantity - 1;
        
        cart.updateQuantity(productId, newQuantity, color);
        showCartModal(); // Refresh modal
      }
    });
  });

  // Remove buttons
  document.querySelectorAll('.remove-cart-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = e.target.dataset.productId;
      const color = e.target.dataset.color;
      cart.removeItem(productId, color);
      showCartModal(); // Refresh modal
    });
  });

  // Checkout button
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('Checkout functionality coming soon!');
      // Here you would redirect to checkout page
      // window.location.href = '../HTML/checkout-page.html';
    });
  }
}

/**
 * Attach "Add to Cart" button listener on product detail page
 */
function attachAddToCartListener() {
  const addToCartBtn = document.querySelector('.btn-primary');
  if (!addToCartBtn) return;

  addToCartBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get product ID from URL
    const productId = getProductIdFromURL();
    
    // Get selected quantity
    const quantityInput = document.querySelector('.quantity-input');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    // Get selected color
    const selectedColorInput = document.querySelector('.color-option:checked');
    const selectedColor = selectedColorInput ? selectedColorInput.value : null;

    // Get color name
    const product = products[productId];
    const colorObj = product?.colors.find(c => c.id === selectedColor);
    const colorName = colorObj ? colorObj.name : null;

    // Add to cart
    const success = cart.addItem(productId, quantity, colorName);

    if (success) {
      showCartNotification(`Added ${quantity} item(s) to cart!`, 'success');
      updateCartBadge();
    } else {
      showCartNotification('Failed to add item to cart', 'error');
    }
  });
}

/**
 * Attach cart icon click listener
 */
function attachCartIconListener() {
  const cartIcon = document.querySelector('.cart-icon');
  if (!cartIcon) return;

  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    showCartModal();
  });
}

// ===========================
// INITIALIZE CART FUNCTIONALITY
// ===========================

// Subscribe to cart changes to update badge
cart.subscribe(() => {
  updateCartBadge();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  attachAddToCartListener();
  attachCartIconListener();
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cart, ShoppingCart };
}