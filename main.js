(function () {
  // Mobile nav toggle
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  // Fill contact links from config.js
  if (typeof EMAIL !== "undefined") {
    document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + EMAIL; });
  }
  if (typeof WHATSAPP_NUMBER !== "undefined") {
    var ok = /^\d{8,15}$/.test(WHATSAPP_NUMBER);
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      if (ok) {
        a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent("Hello, I'd like to know more about tuition classes.");
      } else { a.hidden = true; }
    });
  }
  // Booking section
  var box = document.getElementById("booking-box");
  if (box && typeof BOOKING_URL !== "undefined") {
    var placeholder = /PASTE_GOOGLE_APPOINTMENT_URL_HERE/.test(BOOKING_URL);
    if (placeholder) {
      box.innerHTML = '<div class="notice"><h3>Booking opens soon</h3><p>Please email me at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a> and I will get back to you.</p></div>';
    } else {
      var html = "";
      if (typeof BOOKING_EMBED_URL !== "undefined" && BOOKING_EMBED_URL) {
        html += '<div class="iframe-wrap"><iframe src="' + BOOKING_EMBED_URL + '" title="Book a 15-minute call with Gayatri Jumani" loading="lazy"></iframe></div>';
      }
      html += '<p class="center"><a class="btn btn-secondary" href="' + BOOKING_URL + '" target="_blank" rel="noopener">Open booking page in a new tab</a></p>';
      box.innerHTML = html;
    }
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
