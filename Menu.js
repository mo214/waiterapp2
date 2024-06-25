/*// JavaScript function to handle image click
function handleImageClick(imageSrc) {
    // Navigate to a new page or perform any action with the clicked image
    console.log('Clicked image source:', imageSrc);
    // For example, you can navigate to a new page
    // window.location.href = 'image-details.html?image=' + encodeURIComponent(imageSrc);
}


// Function to scroll to the food section
function scrollToFood() {
    const foodSection = document.getElementById('food');
    foodSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the drinks section
function scrollToDrinks() {
    const drinksSection = document.getElementById('drinks');
    drinksSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the drinks section
function scrollTodessert() {
    const drinksSection = document.getElementById('dessert');
    drinksSection.scrollIntoView({ behavior: 'smooth' });
}




/*
// Function to add item to the cart and show bottom navigation bar
function addToCart(itemName, price) {
    // Display the navigation bar with the item name and price
    var navigationBar = document.getElementById("bottom-navigation");
    navigationBar.innerHTML = "<p> " + " " + price + " DKK</p>";
    navigationBar.style.display = "block";
}
    
    // Show the bottom navigation bar
    showBottomNav(itemName, 1); // Assuming quantity is always 1 for now


// Function to show bottom navigation bar and update content
function showBottomNav(itemName, quantity) {
    var bottomNav = document.getElementById("bottomNav");
    bottomNav.style.display = "block";
    document.getElementById("cartItem").innerHTML = " " +  + ", Quantity: " + quantity;
}

var totalPrice = 0; // Variable to keep track of total price
        function addToCart( price) {
            // Increment total price
            totalPrice += price;
            
            // Display the navigation bar with the total price
            var navigationBar = document.getElementById("bottom-navigation");
            navigationBar.innerHTML = "<p>Total: " + totalPrice + " DKK</p>";
            navigationBar.style.display = "block";
        }
        */





        // JavaScript function to handle image click
function handleImageClick(imageSrc) {
    // Navigate to a new page or perform any action with the clicked image
    console.log('Clicked image source:', imageSrc);
    // For example, you can navigate to a new page
    // window.location.href = 'image-details.html?image=' + encodeURIComponent(imageSrc);
}

// Function to scroll to the food section
function scrollToFood() {
    const foodSection = document.getElementById('food');
    foodSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the drinks section
function scrollToDrinks() {
    const drinksSection = document.getElementById('drinks');
    drinksSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll to the dessert section
function scrollToDessert() {
    const dessertSection = document.getElementById('dessert');
    dessertSection.scrollIntoView({ behavior: 'smooth' });
}


// Function to add item to the cart and show bottom navigation bar
function addToCart(itemName, price) {
    // Display the navigation bar with the item name and price
    var cartQuantity = document.getElementById("cartQuantity");
    var cartTotal = document.getElementById("cartTotal");
    
    // Update quantity and total price
    cartQuantity.textContent = parseInt(cartQuantity.textContent) + 1;
    cartTotal.textContent = (parseFloat(cartTotal.textContent) + price).toFixed(2);


    
   // Show the bottom navigation bar
   var bottomNav = document.querySelector(".bottom-navigation");
   bottomNav.style.display = "block";
}
function openNewPage(url) {
    window.location.href = url; // Navigate to the specified URL
}