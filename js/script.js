const toggle = document.querySelector(".menu-toggle");
const list = document.querySelector(".list");

toggle.addEventListener("click", () => {
  list.classList.toggle("open");
});

list.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    list.classList.remove("open");
  });
});
