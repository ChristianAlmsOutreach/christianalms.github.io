# Christian Alms Outreach Website

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

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is licensed under the ISC License - see the package.json file for details.

## Contact

For more information about Christian Alms Outreach:
- Email: contact@christianalms.org
- Website: https://christianalms.org

## Acknowledgments

- Built with [Eleventy](https://www.11ty.dev/)
- Inspired by traditional Christian aesthetics and modern web design
- Developed for God's glory and service to others