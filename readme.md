# Maison Martin Margiela Collections

Static site for exploring numbered collections of Maison Martin Margiela.

## GitHub Pages

To publish this site with GitHub Pages:

1. Push the `main` branch to GitHub.
2. In the repository settings, enable **GitHub Pages** and choose the `main` branch with `/ (root)` as the site folder.
3. The site will be available at `https://<username>.github.io/<repository>/`.

## Development

The numbered navigation bar at the top links to collection sections within `index.html`.
An additional `about.html` page reuses the same header.

Run HTML validation:

```bash
npx htmlhint index.html about.html
```
