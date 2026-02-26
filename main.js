(function () {
  "use strict";

  // ═══════════════════════════════════════════════════════════════
  //  Mohammed Riyaan Portfolio v3.0 — Clean Motion Engine
  //  No gimmicks. Purposeful, smooth, minimal.
  // ═══════════════════════════════════════════════════════════════

  // ─── Year ───
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Header: appear on scroll ───
  var header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
  }

  // ─── Scroll Reveal ───
  var fadeEls = document.querySelectorAll(".fade-up");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0.15 });

  fadeEls.forEach(function (el) { observer.observe(el); });

  // ─── Mobile Nav ───
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      toggle.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }

  // ─── Smooth active nav highlight ───
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-menu a");
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY + 200;
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      var id = sec.getAttribute("id");
      navLinks.forEach(function (a) {
        if (a.getAttribute("href") === "#" + id) {
          if (scrollY >= top && scrollY < top + height) {
            a.style.color = "var(--text)";
          } else {
            a.style.color = "";
          }
        }
      });
    });
  }, { passive: true });

})();
