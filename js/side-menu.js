const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const page = document.getElementById("page");

let touchStart, touchEnd;

// Click
hamburger.addEventListener("click", () => {
  sidebar.classList.add("open");
});

page.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else return;
});

// Touch
sidebar.addEventListener("touchstart", (e) => {
  touchStart = e.targetTouches[0].clientX;
});

sidebar.addEventListener("touchmove", (e) => {
  touchEnd = e.targetTouches[0].clientX;
});

sidebar.addEventListener("touchend", (e) => {
  if (touchStart - touchEnd > 100) {
    sidebar.classList.remove("open");
  }
});

page.addEventListener("touchstart", (e) => {
  touchStart = e.targetTouches[0].clientX;
});

page.addEventListener("touchmove", (e) => {
  touchEnd = e.targetTouches[0].clientX;
});

page.addEventListener("touchend", (e) => {
  if (touchStart - touchEnd < 100) {
    sidebar.classList.add("open");
  }
});
