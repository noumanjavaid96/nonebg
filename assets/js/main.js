/* East Bridge Global — interactions */
(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobile-menu");

  /* Sticky nav state */
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(function () {
        menu.classList.add("is-open");
      });
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("is-open");
      document.body.style.overflow = "";
      window.setTimeout(function () {
        if (!menu.classList.contains("is-open")) menu.hidden = true;
      }, 380);
    }
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setMenu(false);
    });
  }

  /* Scroll reveals (plus the AIRA console line animation) */
  var targets = document.querySelectorAll(".reveal, .console");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Contact form → prefilled email (no backend required).
     Swap for Formspree/Netlify/your API by replacing this handler. */
  var form = document.getElementById("contact-form");
  var hint = document.getElementById("form-hint");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = "EBG inquiry — " + (data.get("intent") || "General");
      var body =
        "Name: " + (data.get("name") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n" +
        "Company: " + (data.get("company") || "") + "\n" +
        "Need: " + (data.get("intent") || "") + "\n\n" +
        (data.get("message") || "");
      var href =
        "mailto:hello@ebgofficial.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = href;
      if (hint) {
        hint.innerHTML =
          'Your email app should open with the message ready to send. If it doesn’t, write to <a href="mailto:hello@ebgofficial.com">hello@ebgofficial.com</a>.';
      }
    });
  }

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
