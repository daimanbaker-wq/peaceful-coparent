/* ============================================================
   The Peaceful Co-Parent — Landing Page JS
   One-step UX: enter email → get PDF instantly
   ============================================================ */

// ============================================================
// EMAIL_CAPTURE_URL — EDIT THIS ONE LINE
// Set this to your email capture endpoint, e.g.:
//   Formspree:  "https://formspree.io/f/your-form-id"
//   Google Apps Script: "https://script.google.com/macros/s/.../exec"
// Leave empty string "" to skip email capture (PDF still downloads).
// ============================================================
const EMAIL_CAPTURE_URL = ""; // <-- SET THIS

// Local PDF path (hosted on GitHub Pages alongside the page)
const PDF_URL = "peaceful-co-parent-bill-of-rights.pdf";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("lead-form");
  const formWrap = document.querySelector(".form-wrap");
  const btn = document.querySelector(".btn-primary");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email) return;

    // 1. Disable button — prevent double-submit
    btn.disabled = true;
    btn.textContent = "Downloading…";

    // 2. Capture email in the background (fire-and-forget — never blocks)
    if (EMAIL_CAPTURE_URL) {
      fetch(EMAIL_CAPTURE_URL, {
        method: "POST",
        mode: "no-cors", // works across any origin
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "peaceful-coparent" }),
      }).catch(function (err) {
        // Silently fail — never block the download
        console.warn("Email capture error:", err);
      });
    }

    // 3. Trigger PDF download immediately (no redirect, no extra clicks)
    var link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "peaceful-co-parent-blueprint.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 4. Replace form with success state
    formWrap.innerHTML =
      '<div class="download-success">' +
        '<p class="success-icon">&#10003;</p>' +
        '<p class="success-text">Your blueprint is downloading now.</p>' +
        '<p class="success-sub">' +
          'Check your downloads folder. We\'ll also send a copy to <strong>' +
          email.replace(/</g, "&lt;") +
          '</strong> shortly.' +
        '</p>' +
      '</div>';
  });
});