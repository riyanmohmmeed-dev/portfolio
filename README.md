# Mohammed Riyaan — Personal Portfolio

A 2025-style single-page portfolio: bento grid, glassmorphism, bold typography (Syne + DM Sans), and smooth scroll animations. Use this URL on job sites, LinkedIn, or your resume.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080` (or the port shown).

## Deploy (free)

- **GitHub Pages**: Push this folder to a repo, enable Pages, set source to main branch / root (or `/docs` if you put the site in `docs/`). Your site: `https://<username>.github.io/<repo>/`
- **Netlify**: Drag the `personal-site` folder to [netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: Import the repo and set the root to `personal-site` (or deploy the whole repo and set publish directory to `personal-site`).

## Customize

- **Content**: Edit `index.html` (name, bio, projects, links).
- **Colors**: In `styles.css`, change `--accent` and `--bg` in `:root`.
- **Links**: Update GitHub, LinkedIn, and email in the Contact section and in the hero.

Use the live URL (e.g. `https://yourusername.github.io/portfolio/`) in job applications where they ask for “Your website”.
