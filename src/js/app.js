import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  var productElement = document.querySelector(".product");

  var productPrice = document.querySelector(".price").innerHTML;

  productElement.setAttribute("data-price", productPrice);
});
