const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

function setMenu(open) {
  links.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("visible"));
}
