const open = document.getElementById("open");
const overlay = document.querySelector(".overlay");

open.addEventListener("click", () => {
  overlay.classList.add("show");
  document.body.classList.add("disable-scrolling");
});

overlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    overlay.classList.remove("show");
    document.body.classList.remove("disable-scrolling");
  }
});
