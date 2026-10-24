(function () {
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  if (toggle && drawer && overlay) {
    var openMenu = function () {
      drawer.removeAttribute("hidden");
      overlay.classList.add("visible");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      document.documentElement.style.overflow = "hidden";
    };
    var closeMenu = function () {
      drawer.setAttribute("hidden", "");
      overlay.classList.remove("visible");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      document.documentElement.style.overflow = "";
    };
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
    overlay.addEventListener("click", closeMenu);
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    if (window.matchMedia) {
      var mq = window.matchMedia("(min-width: 901px)");
      var onChange = function (e) { if (e.matches) { closeMenu(); } };
      if (mq.addEventListener) { mq.addEventListener("change", onChange); }
    }
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode;
      var open = item.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
