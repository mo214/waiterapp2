/* shopping-cart.js */

(function(){
    // Add to Cart Interaction - by CodyHouse.co
    var cart = document.querySelector('.js-cd-cart');
    if(cart) {
      var cartAddBtns = document.querySelectorAll('.js-cd-cart-trigger'),
          cartBody = cart.querySelector('.cd-cart__body'),
          cartList = cartBody.querySelector('.cd-cart__product-list'),
          cartTotal = cart.querySelector('.cd-cart__checkout span'),
          cartCount = cart.querySelector('.cd-cart__count'),
          cartCountItems = cartCount.querySelectorAll('li'),
          cartUndo = cart.querySelector('.cd-cart__undo'),
          productId = 0, //this is a placeholder -> use your real product ids instead
          cartTimeoutId = false,
          animatingQuantity = false;
  
      initCartEvents();
  
      function initCartEvents() {
        // Add click event to each cart trigger button
        cartAddBtns.forEach(function(btn) {
          btn.addEventListener('click', addToCart);
        });
  
        // Open/close cart when trigger button is clicked
        cart.addEventListener('click', function(event) {
          if (event.target === cart || event.target.closest('.cd-cart__trigger')) {
            event.preventDefault();
            toggleCart();
          }
        });
  
        // Update product quantity inside cart
        cart.addEventListener('change', function(event) {
          if(event.target.tagName.toLowerCase() === 'select') quickUpdateCart();
        });
  
        // Reinsert product deleted from the cart
        cartUndo.addEventListener('click', function(event) {
          if(event.target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
            if(cartTimeoutId) clearInterval(cartTimeoutId);
            // Reinsert deleted product
            var deletedProduct = cartList.querySelector('.cd-cart__product--deleted');
            if (deletedProduct) {
              deletedProduct.classList.add('cd-cart__product--undo');
              deletedProduct.addEventListener('animationend', function cb(){
                deletedProduct.removeEventListener('animationend', cb);
                deletedProduct.classList.remove('cd-cart__product--deleted', 'cd-cart__product--undo');
                deletedProduct.removeAttribute('style');
                quickUpdateCart();
              });
              cartUndo.classList.remove('cd-cart__undo--visible');
            }
          }
        });
      }
  
      function addToCart(event) {
        event.preventDefault();
        if(animatingQuantity) return;
        var cartIsEmpty = cart.classList.contains('cd-cart--empty');
        // Update cart product list
        addProduct(this);
        // Update number of items
        updateCartCount(cartIsEmpty);
        // Update total price
        updateCartTotal(this.getAttribute('data-price'), true);
        // Show cart
        cart.classList.remove('cd-cart--empty');
      }
  
      function toggleCart() {
        // Toggle cart visibility
        cart.classList.toggle('cd-cart--open');
      }
  
      function addProduct(target) {
        // Add product to the cart
        // This is just a placeholder product
        productId++;
        var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#"><img src="assets/img/product-preview.png" alt="Product Image"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#">Product Name</a></h3><span class="cd-cart__price">$25.99</span><div class="cd-cart__actions"><a href="#" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
        cartList.insertAdjacentHTML('beforeend', productAdded);
      }
  
      function updateCartCount(emptyCart) {
        // Update the number of items in the cart
        var actual = parseInt(cartCountItems[0].innerText);
        var next = actual + 1;
        if (emptyCart) {
          cartCountItems[0].innerText = actual;
          cartCountItems[1].innerText = next;
          animatingQuantity = false;
        } else {
          cartCount.classList.add('cd-cart__count--update');
          setTimeout(function() {
            cartCountItems[0].innerText = actual;
          }, 150);
          setTimeout(function() {
            cartCount.classList.remove('cd-cart__count--update');
          }, 200);
          setTimeout(function() {
            cartCountItems[1].innerText = next;
            animatingQuantity = false;
          }, 230);
        }
      }
  
      function updateCartTotal(price, bool) {
        // Update the total price of items in the cart
        var currentTotal = parseFloat(cartTotal.innerText.replace('$', ''));
        var newTotal = bool ? currentTotal + parseFloat(price) : currentTotal - parseFloat(price);
        cartTotal.innerText = '$' + newTotal.toFixed(2);
      }
  
      function quickUpdateCart() {
        // Update the cart quickly without animations
        var quantity = 0;
        var price = 0;
        var products = cartList.querySelectorAll('.cd-cart__product');
        products.forEach(function(product) {
          if (!product.classList.contains('cd-cart__product--deleted')) {
            var singleQuantity = parseInt(product.querySelector('select').value);
            quantity += singleQuantity;
            var singlePrice = parseFloat(product.querySelector('.cd-cart__price').innerText.replace('$', ''));
            price += singleQuantity * singlePrice;
          }
        });
        cartTotal.innerText = '$' + price.toFixed(2);
        cartCountItems[0].innerText = quantity;
        cartCountItems[1].innerText = quantity + 1;
      }
    }
  })();
  