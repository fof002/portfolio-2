const productBtn = document.querySelector("#projects");
let windowHeight = "";

productBtn.addEventListener("click", () => {
  windowHeight = window.innerHeight;
  window.scrollBy(0, windowHeight);
});
