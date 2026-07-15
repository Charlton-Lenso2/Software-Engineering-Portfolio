# Charlton Lenso — Portfolio

A personal portfolio site built with React and Tailwind CSS, showcasing my
projects, background, and journey as a software engineering student.

**Live site:** https://software-engineering-portfolio-blush.vercel.app/

## About

This portfolio was built as a bootcamp assignment for Uncommon.org, with the
goal of applying React and Tailwind CSS hands-on rather than copying a
template, every section was built and understood component by component.

## Features

- **Dark-themed hero** with an animated glowing triangle accent (inline CSS
  `conic-gradient` + keyframe rotation)
- **Responsive navbar** that shrinks and blurs on scroll, swaps between a
  name and a profile picture, and collapses into a hamburger menu on mobile
- **About page** with a background summary, a journey timeline, a sliding
  toolkit marquee, and a certificates/achievements grid
- **Projects page** linking directly out to each live project
- **Contact page** with a working form (name, email, message)
- Fully responsive across mobile, tablet, and desktop breakpoints

## Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/) for page navigation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) as the build tool
- [Font Awesome](https://fontawesome.com/) for social icons
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Charlton-Lenso2/portfolio.git
cd portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── assets/
│   ├── profile.jpg
│   └── certificates/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Certificates.jsx
├── data/
│   ├── projects.js
│   └── certificates.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx
```

## Fonts

- **Oswald** — headings and display text
- System sans-serif stack — body text

## Contact

- GitHub: [Charlton-Lenso2](https://github.com/Charlton-Lenso2)
- LinkedIn: [Charlton Lenso](https://www.linkedin.com/in/charlton-lenso-1678353ab/)
- Email: lensocharlton63@gmail.com

## Acknowledgements

Built as part of the Uncommon.org software engineering bootcamp curriculum,
with AI assistance (Claude) used to help learn and apply Tailwind CSS
concepts throughout the build.

## License

This project is personal portfolio work and not licensed for reuse.