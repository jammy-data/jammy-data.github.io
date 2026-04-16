# Jammy Data Portfolio

A clean Eleventy-based personal site for jammy-data.github.io.

## Run Locally

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

3. Build production output:

   npm run build

Generated site is written to `_site/`.

## Edit Profile Content

Main profile details live in:

- `src/_data/site.json`

Update name, bio, links, and CV path in that file.

## Add or Update Projects

Projects are markdown files in:

- `src/projects/`

Create a new file like `src/projects/my-new-project.md` with front matter:

---
layout: base.njk
title: My New Project
summary: One-sentence summary
stack:
  - Python
  - JavaScript
date: 2026-04-16
repo: https://github.com/jammy-data/my-new-project
---

Then add project details below front matter in markdown.

### Edit your first project right now

Open:

- `src/projects/first-project.md`

Update these fields:

- `title`: project name
- `summary`: short card text shown on Home/Projects pages
- `repo`: GitHub URL
- `keywords`: tags used for linking and filtering

The `keywords` array powers:

- keyword chips on Home
- keyword chips on Projects cards
- auto-generated pages at `/projects/tags/<keyword-slug>/`

Example:

keywords:
   - Data Pipelines
   - Geospatial Analysis

## Update CV

1. Put your PDF at:

   `src/files/cv.pdf`

2. If needed, change CV URL in:

   `src/_data/site.json` field `cvPath`

## Add New Pages

Create a new `.njk` file in `src/` using this starter:

---
layout: base.njk
title: New Page
permalink: /new-page/
---

<section class="panel reveal">
  <h1>New Page</h1>
  <p>Your content here.</p>
</section>

Add a nav link in `src/_includes/base.njk` if you want it in the header.

## Add Logo and Headshot

1. Put files in:

   `src/assets/images/`

2. Set paths in:

   `src/_data/site.json`

Example:

"logoPath": "/assets/images/logo-mark.svg"
"headshotPath": "/assets/images/headshot.jpg"

If these are blank, the site will hide logo/headshot automatically.

## Deploy

Push to `main` branch. GitHub Actions builds and deploys to GitHub Pages using:

- `.github/workflows/deploy.yml`
