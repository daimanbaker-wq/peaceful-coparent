# The Peaceful Co-Parent — Free Bill of Rights Landing Page

**Live URL:** https://daimanbaker-wq.github.io/peaceful-coparent/  
**Repo URL:** https://github.com/daimanbaker-wq/peaceful-coparent  
**Project path:** `/Users/deebee/.hermes/hermes-agent/projects/peaceful-coparent/`

---

## How to Swap in Your Real Gumroad Product Link

1. Open `script.js` and find **line 1** (the `GUMROAD_URL` constant).
2. Replace the empty string with your Gumroad product URL, e.g.:

   ```js
   const GUMROAD_URL = "https://daimanbaker.gumroad.com/l/peaceful-coparent";
   ```

3. Save and push to GitHub. The form will now redirect to Gumroad when someone submits their email.

---

## How to Add the 60-Second Hook Video

1. Place your `.mp4` file in the project root (e.g., `hook-video.mp4`).
2. Open `index.html` and find the comment block: `<!-- VIDEO PLACEHOLDER -->`
3. Uncomment the `<section class="video-section">` block and update the `<source src="...">` path.

---

## Gumroad Setup Steps (Exact)

1. **Create a free Gumroad account** at [gumroad.com](https://gumroad.com).
2. Click **Products → New Product**.
3. **Title:** "The Peaceful Co-Parent — Bill of Rights & Commitments"
4. **Description:** Short description of the printable PDF (you can copy the "What's Inside" section from the landing page).
5. **Price:** Set to **$0** (free).
6. **Upload the PDF:** Use the file `peaceful-co-parent-bill-of-rights.pdf` from this project.
7. **Settings → Checkout:** Enable **"Collect email addresses"** (required for free products).
8. **Settings → After checkout:** Choose "Redirect to a URL" or leave blank — the landing page will redirect the user to Gumroad with their email prefilled.
9. **Publish** the product.
10. **Copy the product URL** (e.g., `https://daimanbaker.gumroad.com/l/peaceful-coparent`) and paste it into `script.js` as described above.

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch, root directory.  
Any push to `main` automatically updates the live site within a few minutes.

---

© DB Hayle Consulting Ltd. 2026