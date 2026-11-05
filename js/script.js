const bars = document.querySelector(".bars");
const list = document.querySelector(".list");

bars.addEventListener("click", function () {
  list.classList.toggle("open");
});

const links = document.querySelectorAll(".list a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    list.classList.remove("open");
  });
});
