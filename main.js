(function () {
  "use strict";

  // ----- Year in footer -----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Scroll progress bar -----
  var progressEl = document.getElementById("scroll-progress");
  if (progressEl) {
    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressEl.style.width = pct + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("load", updateProgress);
  }

  // ----- Header background on scroll -----
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
  }

  // ----- Typewriter effect (hero tagline) -----
  var typewriterEl = document.getElementById("typewriter");
  if (typewriterEl) {
    var fullText = "Full-stack at Broadridge — regulatory & data platforms for EY, JP Morgan. C#, .NET, TypeScript, React. AI tools & data viz.";
    var i = 0;
    var speed = 28;
    function type() {
      if (i < fullText.length) {
        typewriterEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(function () {
          typewriterEl.textContent = "";
          i = 0;
          setTimeout(type, 1200);
        }, 3000);
      }
    }
    setTimeout(type, 1200);
  }

  // ----- Scroll reveal (.reveal-el -> .visible) -----
  var revealEls = document.querySelectorAll(".reveal-el");
  var observerOptions = { root: null, rootMargin: "0px 0px -80px 0px", threshold: 0.1 };

  function observeReveal(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }

  var revealObserver = new IntersectionObserver(observeReveal, observerOptions);
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ----- 3D card tilt on mouse move (desktop) -----
  function initCardTilt() {
    var cards = document.querySelectorAll(".card-tilt");
    if (window.matchMedia("(max-width: 768px)").matches) return;

    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / 20;
        var rotateY = (centerX - x) / 20;
        card.style.transform = "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-4px)";
        card.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3), 0 0 50px rgba(99, 102, 241, 0.1)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
        card.style.boxShadow = "";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCardTilt);
  } else {
    initCardTilt();
  }

  // ----- Mobile menu toggle -----
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
  }
})();
