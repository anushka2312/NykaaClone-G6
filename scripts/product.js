// Get the product card containers and cart element
var productCardContainers = document.querySelectorAll(".card");
var cart = document.getElementById("cart");

// Loop through each product card container and add an event listener to the "Add to Cart" button
productCardContainers.forEach(function(card) {
  var addToCartBtn = card.querySelector(".image-button");
  addToCartBtn.addEventListener("click", function() {
    // Get the product information from the card
    var productImageSrc = card.querySelector("img").getAttribute("src");
    var productName = card.querySelector("h2").textContent;
    var productDescription = card.querySelector("p").textContent;
    // var productPrice = container.querySelector(".product-price").textContent;

    // Create a product object with the information
    var product = {
      imageSrc: productImageSrc,
      name: productName,
      description: productDescription,
      
    };

    // Store the product object in local storage
    localStorage.setItem("product", JSON.stringify(product));
  });
});