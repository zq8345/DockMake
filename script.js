const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setMenu = (open) => {
  header.classList.toggle("nav-open", open);
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  }
};

year.textContent = new Date().getFullYear();
syncHeader();

window.addEventListener("scroll", syncHeader, { passive: true });

if (navToggle) {
  navToggle.addEventListener("click", () => {
    setMenu(!header.classList.contains("nav-open"));
  });
}

if (siteNav) {
  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (!header.classList.contains("nav-open")) return;
  if (!event.target.closest(".site-header")) setMenu(false);
});
