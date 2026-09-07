/* ==========================================================================
   Mitr Ruam Jai Driving School
   JavaScript — navigation + course selection
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initCourseSelection();
});

/* ==========================================================================
   Mobile navigation
   ========================================================================== */

function initMobileNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (!menuToggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      nav.classList.contains("open") &&
      !nav.contains(target) &&
      !menuToggle.contains(target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

/* ==========================================================================
   Course card selection
   ========================================================================== */

function initCourseSelection() {
  const cards = document.querySelectorAll(".course-selectable");

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".course-button")) {
        return;
      }

      cards.forEach((item) => {
        item.classList.remove("active");
      });

      card.classList.add("active");
    });
  });
}
