# abelthomas.online

Personal portfolio website for Abel Thomas. Plain HTML, CSS and JavaScript. No build step, no paid services.

## Finish setup (3 steps)

1. **Add your photo:** save it as `assets/img/abel.jpg` (portrait, about 480x640 px, under 150 KB for fast loading). Until it exists, an "AT" monogram is shown. Use the same file for the social preview image.
2. **Edit `assets/js/data.js`:** set your WhatsApp number (digits only, with country code), email, location and social links. Empty social links are hidden automatically.
3. **Review the site copy:** edit the text in `index.html` to keep your About and other page content up to date.

## Update the demo projects

Edit the project entries in `assets/js/data.js`. Put project screenshots in `assets/img/` (for example, `assets/img/business-website.jpg`) and set the matching `image` value. Screenshots are displayed without cropping or distortion. Leave `image` empty to use the generated visual placeholder.

To connect the Demonstration Project's button, set its `live` value in `assets/js/data.js` to the real demo URL. The button stays disabled until a URL is provided. Filter buttons are generated from each project's `type`.

## Portfolio demo websites

The three self-contained demonstration sites live under `portfolio/`:

- `portfolio/business-website/` — Vanta Systems, a fictional technology company.
- `portfolio/redesign/` — Northline Engineering, with the existing before-and-after comparison.
- `portfolio/demo-project/` — TerraForge, a fictional industrial solutions company.

Each site's CSS, JavaScript and local imagery are kept in its own folder. The company copy and sector imagery are illustrative; the demo businesses, services and project examples do not represent real clients or company claims. The two new sites link their project enquiries to the portfolio contact page.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Go live on abelthomas.online (free options)

- **GitHub Pages:** push this folder to a GitHub repo, enable Pages, keep the `CNAME` file, then at your domain registrar add the DNS records GitHub lists.
- **Cloudflare Pages / Netlify:** drag-and-drop or connect the repo, then add your custom domain.

## Structure

```
index.html
assets/css/styles.css   all styling and colours (see :root variables)
assets/js/data.js       YOUR DETAILS + PROJECTS (edit this)
assets/js/main.js       behaviour (no need to edit)
assets/img/             photo, project screenshots, favicon
robots.txt, sitemap.xml, CNAME
```
