# Christian Alms Foundation Website

An AI-guided Christian charity website that combines traditional pre-schism Christian aesthetics with modern technology. Built with Eleventy static site generator and designed to serve as a platform for charitable work guided by faith and enhanced by AI.

## Features

- **Static Site Generation**: Built with Eleventy for fast, secure, and scalable deployment
- **Blog System**: Markdown-based blog with categories, tags, and RSS feed
- **Simple CRM**: YAML-based contact management for donors, volunteers, and beneficiaries
- **Responsive Design**: Mobile-first approach with Byzantine-inspired aesthetics
- **AI Integration Focus**: Content and structure designed to highlight AI-enhanced charity work
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## Tech Stack

- **Framework**: Eleventy (11ty) Static Site Generator
- **Styling**: Vanilla CSS with CSS custom properties
- **Content**: Markdown files for blog posts
- **Data**: YAML/JSON files for CRM and site configuration
- **Deployment**: GitHub Pages with GitHub Actions

## Project Structure

```
/
├── src/
│   ├── _includes/
│   │   ├── layouts/       # Page layouts
│   │   └── partials/       # Reusable components
│   ├── assets/
│   │   ├── css/           # Stylesheets
│   │   ├── js/            # JavaScript files
│   │   └── images/        # Image assets
│   ├── content/
│   │   └── blog/          # Blog posts in Markdown
│   ├── data/
│   │   ├── contacts/      # CRM data in YAML
│   │   └── site.json      # Site configuration
│   └── [pages].njk        # Site pages
├── public/                 # Generated output (git-ignored)
├── .eleventy.js           # Eleventy configuration
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/christian_alms_website.git
cd christian_alms_website
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with live reload:
```bash
npm run serve
```

The site will be available at `http://localhost:8080`

### Building for Production

Build the static site:
```bash
npm run build
```

The generated files will be in the `public/` directory.

## Deployment

The site is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Access the live site at your GitHub Pages URL

## Content Management

### Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2024-01-01
author: "Author Name"
category: "Theology"
tags: ["faith", "charity"]
scripture: ["Matthew 25:35-40"]
excerpt: "Brief description"
layout: layouts/post.njk
---

Your post content here...
```

### Managing CRM Data

Add YAML files to `src/data/contacts/` for:
- Donors: `donors/name.yaml`
- Volunteers: `volunteers/name.yaml`
- Beneficiaries: `beneficiaries/name.yaml`
- Partners: `partners/name.yaml`

## Design System

The site uses a Byzantine-inspired color palette:

- Byzantine Gold: `#FFD700`
- Icon Blue: `#003f7f`
- Manuscript Red: `#8B0000`
- Parchment: `#F5E6D3`
- Stone Gray: `#4A4A4A`
- Pure White: `#FFFFFF`

Typography:
- Headers: Crimson Text (serif)
- Body: Inter (sans-serif)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is licensed under the ISC License - see the package.json file for details.

## Contact

For more information about the Christian Alms Foundation:
- Email: contact@christianalms.org
- Website: https://christianalms.org

## Acknowledgments

- Built with [Eleventy](https://www.11ty.dev/)
- Inspired by traditional Christian aesthetics and modern web design
- Developed for God's glory and service to others