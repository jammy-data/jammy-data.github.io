# Your New Eleventy Portfolio

Welcome to your modernized portfolio! 🚀

## What's Changed

✅ **Removed**
- Ruby/Jekyll dependencies (Gemfile, Gemfile.lock)
- Minimal Mistakes theme bloat
- Complex Jekyll configuration

✅ **Added**
- **Eleventy** (11ty) - a simpler, JavaScript-based static site generator
- **Vanilla JavaScript** - smooth scroll animations, hover effects
- **Modern CSS** - clean, minimal design framework
- **GitHub Pages CI/CD** - auto-deploy on push to main

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Then visit `http://localhost:8080` in your browser. The site will rebuild automatically as you edit files.

### 3. Build for Production
```bash
npm run build
```
Output goes to `_site/` folder.

## Project Structure

```
src/
├── pages/              # Your main pages (index.md, about.md, projects.md)
├── pages/projects/     # Individual project files
├── _includes/          # Layout templates
├── _data/              # Metadata
└── assets/
    ├── css/            # Styling
    └── js/             # Animations & interactivity
```

## Adding Content

### New Project
Create a file in `src/pages/projects/my-project.md`:

```yaml
---
title: My Project
description: What it does
tags: ["Python", "JavaScript"]
link: "https://github.com/..."
---

Optional detailed content here.
```

Projects automatically appear on `/projects/` page.

### Edit Main Pages
- Home: `src/pages/index.md`
- About: `src/pages/about.md`
- Projects listing: `src/pages/projects.md`

## Customization

### Colors
Edit `src/assets/css/style.css`:
```css
:root {
  --primary: #1a1a1a;        /* Main text */
  --accent: #0066cc;         /* Links, buttons */
  --light: #f5f5f5;          /* Backgrounds */
}
```

### Animations
Edit `src/assets/js/animations.js` to:
- Add scroll triggers
- Customize hover effects
- Add parallax effects

### Add New Pages
Create `src/pages/new-page.md`:
```yaml
---
layout: layout.html
title: New Page
permalink: /new-page/
---

# Your Content Here
```

## Deployment

### GitHub Pages
Push to `main` branch - the GitHub Action will automatically build and deploy to GitHub Pages.

### Other Hosting
Build the site with `npm run build`, then deploy the `_site/` folder to:
- Netlify
- Vercel
- Any static host

## Next Steps

1. ✏️ Edit `src/pages/about.md` with your actual bio
2. 📝 Add your projects in `src/pages/projects/`
3. 🎨 Customize colors in `src/assets/css/style.css`
4. 📱 Test responsive design on mobile
5. 🚀 Push to GitHub to deploy

## Questions?

- Eleventy docs: https://www.11ty.dev/
- Questions about the setup? Check the individual files - they're all well-commented.

Happy building! 🎉
