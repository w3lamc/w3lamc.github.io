/* Behaviour of the former WordPress site without jQuery:
   fading image slider (FlexSlider "fade" settings), back-to-top button,
   drop-down select menu on small screens (TinyNav). */
(function () {
  "use strict";

  function slider(el) {
    var slides = el.querySelectorAll(".slides > li");
    if (slides.length < 2) return;
    var interval = +el.getAttribute("data-interval") || 3000;
    var fade = +el.getAttribute("data-fade") || 600;
    var current = 0, timer = null, paused = false;
    var dots = [];

    slides.forEach(function (li) { li.style.transitionDuration = fade + "ms"; });

    var nav = document.createElement("ol");
    nav.className = "flex-control-nav flex-control-paging";
    slides.forEach(function (li, i) {
      var item = document.createElement("li");
      var a = document.createElement("a");
      a.textContent = i + 1;
      a.addEventListener("click", function (e) { e.preventDefault(); show(i); restart(); });
      item.appendChild(a);
      nav.appendChild(item);
      dots.push(a);
    });
    dots[0].className = "flex-active";

    var dir = document.createElement("ul");
    dir.className = "flex-direction-nav";
    [["flex-prev", "<", -1], ["flex-next", ">", 1]].forEach(function (d) {
      var item = document.createElement("li");
      var a = document.createElement("a");
      a.className = d[0];
      a.href = "#";
      a.textContent = d[1];
      a.addEventListener("click", function (e) { e.preventDefault(); show(current + d[2]); restart(); });
      item.appendChild(a);
      dir.appendChild(item);
    });
    el.appendChild(nav);
    el.appendChild(dir);

    function show(i) {
      i = (i + slides.length) % slides.length;
      if (i === current) return;
      slides[current].classList.remove("flex-active-slide");
      dots[current].className = "";
      current = i;
      slides[current].classList.add("flex-active-slide");
      dots[current].className = "flex-active";
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { if (!paused) show(current + 1); }, interval);
    }
    el.addEventListener("mouseenter", function () { paused = true; });
    el.addEventListener("mouseleave", function () { paused = false; });
    restart();
  }

  function toTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;
    var update = function () { btn.classList.toggle("visible", window.pageYOffset > 0); };
    window.addEventListener("scroll", update, { passive: true });
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    update();
  }

  function tinyNav() {
    var ul = document.querySelector("#access > .menu > ul");
    if (!ul) return;
    var select = document.createElement("select");
    select.className = "tinynav tinynav1";
    select.add(new Option(" = Menu = ", ""));
    (function walk(list, depth) {
      Array.prototype.forEach.call(list.children, function (li) {
        var a = li.querySelector(":scope > a");
        var prefix = depth ? " " + new Array(depth).join("- ") + "- " : "";
        if (a) select.add(new Option(prefix + a.textContent, a.href));
        var sub = li.querySelector(":scope > ul");
        if (sub) walk(sub, depth + 1);
      });
    })(ul, 0);
    select.addEventListener("change", function () { if (select.value) window.location.href = select.value; });
    ul.parentNode.insertBefore(select, ul.nextSibling);
  }

  document.querySelectorAll(".metaslider .flexslider").forEach(slider);
  toTop();
  tinyNav();
})();
