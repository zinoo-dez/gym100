let bars = document.querySelector("#bars");
let nav_items = document.querySelector(".nav-items");
bars.addEventListener("click", function () {
  //   alert("helllo");
  nav_items.classList.toggle("show");
  bars.classList.toggle("fa-times");
});
