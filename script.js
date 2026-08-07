/* ============================================================
   The Peaceful Co-Parent — Landing Page JS
   ============================================================ */

// ============================================================
// GUMROAD_URL — EDIT THIS ONE LINE
// Paste your real Gumroad product URL below, e.g.:
//   const GUMROAD_URL = "https://daimanbaker.gumroad.com/l/peaceful-coparent";
// Leave it as an empty string to show the "coming soon" state.
// ============================================================
const GUMROAD_URL = "";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("lead-form");
  const formWrap = document.getElementById("signup");
  const comingSoon = document.getElementById("coming-soon");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email) return; // browser required attribute should catch this

    if (GUMROAD_URL) {
      // Send the subscriber to Gumroad to grab the free PDF.
      const sep = GUMROAD_URL.includes("?") ? "&" : "?";
      window.location.href = GUMROAD_URL + sep + "email=" + encodeURIComponent(email);
    } else {
      // Gumroad link not configured yet — graceful "coming soon" state.
      formWrap.style.display = "none";
      comingSoon.style.display = "block";
    }
  });

  // Coming-soon notify form: no backend yet — just a friendly ack.
  const notifyForm = document.getElementById("notify-form");
  if (notifyForm) {
    notifyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      notifyForm.innerHTML =
        '<p class="coming-soon-text">Thank you — we\u2019ll email you the moment the Co-Parent Bill of Rights is ready.</p>';
    });
  }
});
