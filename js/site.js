// site.js — the only script on the static site. No framework, no deps.

(function () {
  var root = document.documentElement;

  // --- wave field: scroll drives one css var, same as the Next build ---
  var frame = 0;

  function paint() {
    frame = 0;
    var span = Math.max(1, window.innerHeight * 0.9);
    var p = Math.min(1, Math.max(0, window.scrollY / span));
    root.style.setProperty("--wave-fade", p.toFixed(3));
  }

  function queue() {
    if (!frame) frame = requestAnimationFrame(paint);
  }

  paint();
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
})();
