# Adithya Venkat Kumar - Personal Portfolio Website 🚀

A modern, responsive, and high-performance Cloud Engineer & Frontend Developer portfolio built with **React 18**, **Vite**, **TailwindCSS 3**, and **Framer Motion**.

---

## ✨ Key Features

- ⚡ **Cmd + K Command Palette**: Instant keyboard-driven search modal (`⌘K` / `Ctrl+K`) to jump to sections or projects.
- ✍️ **Typing Animation Hero**: Dynamic title typing effect with an interactive code terminal card and Cloud logo branding.
- 🎯 **Scroll Spy Navigation**: Sticky navbar with active section indicators tracking viewport scroll.
- 💼 **Filterable Projects Grid**: Category filtering (*Cloud & DevOps*, *Machine Learning & AI*) with interactive architecture deep-dive modals, live demo links, and GitHub repository links.
- 🎓 **Certifications & Credentials**: Verified credential badges with direct verification links (Oracle OCI 2024 Generative AI Certified Professional, etc.).
- 🐙 **GitHub Activity Widget**: Real-time repository showcase and profile metrics synced with GitHub API.
- 📄 **Interactive Resume Modal**: Built-in PDF resume viewer and downloader (`/resume.pdf`).
- 📩 **Direct Contact Card**: Direct email action card (`adithyavenkata.ravuri@gmail.com`) with availability indicators.
- 📱 **Fully Responsive**: Mobile-first responsive design supporting smartphones, tablets, and desktop displays.
- 🔍 **SEO & Accessibility**: Open Graph meta tags, semantic HTML5 structure, and custom Cloud SVG favicon.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component-based UI framework |
| **Vite 5** | Lightning-fast frontend build tool |
| **TailwindCSS 3** | Utility-first CSS styling & custom design tokens |
| **Framer Motion** | Smooth scroll-triggered & gesture animations |
| **React Icons** | Modular SVG icon library (`Fa`, `Si`, `Vsc`) |
| **Microsoft Azure & Terraform** | Infrastructure as Code & Cloud Services |

---

## 📂 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation bar with Cloud logo, scroll spy & search
│   │   ├── Hero.jsx            # Hero section with typing effect & interactive code terminal
│   │   ├── About.jsx           # Bio, key metrics & education cards
│   │   ├── Projects.jsx        # Filterable project cards grid
│   │   ├── ProjectModal.jsx    # Interactive architecture & IaC deep-dive modal
│   │   ├── Skills.jsx          # Categorized Cloud & Frontend skills
│   │   ├── GithubWidget.jsx    # GitHub activity & repository statistics widget
│   │   ├── Certifications.jsx  # Verified certification cards with credential links
│   │   ├── Contact.jsx         # Direct email contact card & availability indicator
│   │   ├── Footer.jsx          # Footer with social links, Cloud logo & copyright
│   │   ├── CommandPalette.jsx  # Cmd + K global search modal
│   │   ├── ResumeModal.jsx     # Embedded PDF resume viewer & downloader
│   │   └── ScrollToTop.jsx     # Floating smooth scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js    # 👈 Single source of truth for all CV & portfolio data
│   ├── hooks/
│   │   └── useSectionInView.js # Scroll Spy section tracking hook
│   ├── utils/
│   │   └── scrollUtils.js      # Smooth scroll helper utilities
│   ├── App.jsx                 # Main application layout & modals manager
│   ├── main.jsx                # React 18 DOM entry point
│   └── index.css               # Tailwind directives & theme styles
├── public/                     # Static assets (azure-terraform.png, spam-detection.png, resume.pdf, logo.png)
├── tailwind.config.js          # Tailwind design system configuration
├── vite.config.js              # Vite bundler configuration
└── package.json                # Dependencies & build scripts
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/adithyavenkatkumar/portfolio.git
cd portfolio
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Production Build
To generate the optimized production build in `dist/`:
```bash
npm run build
```

To preview the production bundle locally:
```bash
npm run preview
```

---

## ⚙️ Customization

All portfolio content is decoupled and configured in [`src/data/portfolioData.js`](file:///home/avk/Documents/Portfolio/src/data/portfolioData.js).

### 1. Update Personal & CV Info
Edit [`src/data/portfolioData.js`](file:///home/avk/Documents/Portfolio/src/data/portfolioData.js) to update your:
- Name, titles, tagline, bio, and social media links.
- Education & certification history with verification links.
- Projects list, tags, GitHub URLs, architecture diagrams, and metrics.
- Technical skills categories (`Cloud & DevOps`, `Frontend Development`).

### 2. Custom Assets & Logo
- **Resume**: Place your `resume.pdf` in the `public/` directory.
- **Logo**: Place your `logo.png` or `logo.svg` in the `public/` directory (falls back automatically to the Cloud logo icon if omitted).
- **Project Images**: Place your project screenshots (`azure-terraform.png`, `spam-detection.png`) in `public/`.

---

*Made ☁️ by [Adithya Venkat Kumar](https://github.com/adithyavenkatkumar)*
