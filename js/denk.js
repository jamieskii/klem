const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");

    const isOpen = nav.classList.contains("is-open");
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Menu sluiten" : "Menu openen"
    );
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-label", "Menu openen");
    });
  });
}