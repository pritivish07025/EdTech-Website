# TechieBoom — Corporate / EdTech Landing Page

A fully responsive, multi-section marketing landing page built with **React**, **Vite**, and **React-Bootstrap**. Designed for a corporate/EdTech brand, the site showcases services, portfolio work, team members, pricing plans, testimonials, and a contact section — all built as modular, reusable React components.

**Live Demo:** [https://edtechwebsite-clone.netlify.app/]
**GitHub Repo:** [https://github.com/pritivish07025/EdTech-Website.git]

---

## 📌 Project Overview

TechieBoom is a single-page application (SPA) that simulates a real-world business/agency website. The goal was to practice converting a static design into a component-driven React architecture, work with a component library (React-Bootstrap), manage data-driven UI rendering, and handle a full deployment pipeline from local development to a live production URL.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 (Functional Components + Hooks) |
| Build Tool | Vite |
| UI Library | React-Bootstrap (Bootstrap 5 under the hood) |
| Icons | Font Awesome |
| Styling | Custom CSS (BEM-style class naming) + Bootstrap utility classes |
| Deployment | Netlify (CI/CD via GitHub integration) |
| Version Control | Git & GitHub |

---

## ✨ Key Features

- **Component-based architecture** — Every section (Header, Hero, About, Services, Works, Teams, Testimonials, Pricing, Blog, Contact, Footer) is its own isolated, reusable React component.
- **Data-driven rendering** — Instead of hardcoding repeated markup, each section (Team members, Blog posts, Pricing plans, Services, Portfolio works) is rendered dynamically from a local JavaScript array using `.map()`, making the content easy to scale or connect to a CMS/API later.
- **Image Carousel (Hero + Testimonials)** — Built using React-Bootstrap's `Carousel` component with custom captions, auto-play, and theming.
- **Scroll-aware Navbar** — Uses the `useEffect` + `window.addEventListener("scroll")` pattern to detect scroll position and apply conditional styling (shadow, compact height) as the user scrolls.
- **Scroll-to-top button** — Appears conditionally after the user scrolls past a threshold, using React state (`useState`) tied to a scroll event listener, with cleanup on unmount to avoid memory leaks.
- **Responsive design** — Fully responsive across desktop, tablet, and mobile breakpoints using Bootstrap's grid system (`Container`, `Row`, `Col`) combined with custom media queries.
- **Progress bars** — Skills section uses React-Bootstrap's `ProgressBar` to visually represent proficiency levels.
- **Contact section** — Includes a contact form and an embedded Google Map (iframe) for location.
- **Custom brand theming** — Consistent green accent color, custom typography (Muli font), hover states, and micro-interactions (underline animations, image zoom on hover, overlay reveals) — all implemented with hand-written CSS rather than relying purely on Bootstrap defaults.

---

## 📂 Folder Structure

```
techieboom/
├── src/
│   ├── assets/
│   │   └── images/          # All static images (hero, team, blog, portfolio)
│   ├── components/
│   │   ├── header.jsx
│   │   ├── hero.jsx
│   │   ├── about.jsx
│   │   ├── services.jsx
│   │   ├── works.jsx
│   │   ├── teams.jsx
│   │   ├── testimonials.jsx
│   │   ├── pricing.jsx
│   │   ├── blog.jsx
│   │   ├── contact.jsx
│   │   └── footer.jsx
│   ├── App.jsx               # Composes all section components
│   ├── main.jsx               # App entry point, global CSS/Bootstrap imports
│   └── App.css / style.css    # Custom theming and section-specific styles
├── public/
├── package.json
└── vite.config.js
```

---

## 🧠 Technical Decisions & Challenges Solved

### 1. Data-driven components over hardcoded JSX
Rather than repeating near-identical JSX blocks for each team member, blog post, or pricing card, each section stores its content as an array of objects and renders it via `.map()`. This mirrors how real production apps consume data from an API, and makes the codebase easier to extend (e.g., adding a 9th team member only means adding one object to the array).

### 2. Image imports with Vite
Vite handles static assets differently from Create React App — images are imported as ES modules (`import team1 from "../assets/images/team1.jpg"`) rather than referenced by public folder path. This was an early adjustment made while migrating patterns from CRA-style tutorials to a Vite-based project.

### 3. Scroll-based conditional UI
Implemented scroll-aware behavior (navbar shadow on scroll, scroll-to-top button visibility) using `useEffect` with a scroll event listener and proper cleanup (`removeEventListener`) to prevent memory leaks — a common React pitfall when working with global browser events.

### 4. CSS Specificity conflicts with Bootstrap
Since the project layers custom CSS on top of Bootstrap's own component styles (e.g., `Carousel.Caption` text color, `Navbar` structure), several styling issues came down to CSS specificity — resolved by scoping custom rules under parent section IDs/classes (e.g., `.hero-block .carousel-caption h5`) rather than fighting Bootstrap's defaults with `!important`.

### 5. Deployment pipeline (Netlify)
Deployed via Netlify with GitHub integration for continuous deployment — every push to the `main` branch triggers an automatic rebuild. Debugged and resolved a production build failure caused by a missing dependency import (`createContext` not imported from React in a context file), which only surfaced during the Netlify build step and not in local dev mode — reinforcing the importance of running a full production build (`npm run build`) locally before pushing, rather than relying solely on the dev server.

---

## 🚀 Getting Started (Local Setup)

```bash
# Clone the repository
git clone https://github.com/pritivish07025/EdTech-Website.git
cd YOUR-REPO-NAME

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📈 What I Learned

- Structuring a multi-section landing page into clean, independent, reusable components.
- Working with a third-party component library (React-Bootstrap) while still layering fully custom design on top of it.
- Debugging real production build failures that don't appear in local development — and the discipline of testing production builds before deployment.
- Setting up a CI/CD pipeline using Netlify + GitHub for automatic redeployment on every commit.
- Practical use of React Hooks (`useState`, `useEffect`) for browser-event-driven UI behavior (scroll detection).

---

## 🔮 Future Improvements

- Connect the contact form to a real backend/email service (e.g., EmailJS or a Node/Express API).
- Replace static array data with content fetched from a headless CMS or custom API.
- Add form validation and success/error toast notifications on submission.
- Add unit tests for key components using React Testing Library.
