const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

// Added to cart popup //

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

// Cart //

// Get the "Add to Cart" button
const addToCartButton = document.getElementById("add-to-cart");

// Add an event listener to the button
addToCartButton.addEventListener("click", function() {
  // Get the product information from the data attributes
  const productId = this.dataset.productId;
  const productName = this.dataset.productName;
  const productPrice = this.dataset.productPrice;
  const productQuantity = this.dataset.productQuantity;
  const productImage = this.dataset.productImage;

  // Get the products array from local storage
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // Add the product to the products array
  products.push({ id: productId, name: productName, price: productPrice, quantity: productQuantity, image: productImage });

  // Store the products array in local storage
  localStorage.setItem("products", JSON.stringify(products));

  
});




