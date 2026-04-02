# Arpit Mehrotra — Cybersecurity Portfolio

A premium, production-ready personal portfolio website with a dark futuristic HUD aesthetic.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** — all animations & scroll reveals
- **JetBrains Mono / Orbitron / Rajdhani** — Google Fonts

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Customization

| File | What to edit |
|------|-------------|
| `components/sections/Hero.tsx` | Name, tagline, terminal lines |
| `components/sections/About.tsx` | Bio, university, achievements |
| `components/sections/Skills.tsx` | Skill categories and proficiency levels |
| `components/sections/Projects.tsx` | Project cards, GitHub links, live demos |
| `components/sections/Achievements.tsx` | Achievements and metrics |
| `components/sections/Contact.tsx` | Social links and email |
| `styles/globals.css` | CSS variables, colors, fonts |

## Key Design Tokens

```css
--cyan: #00f0ff          /* Primary accent */
--bg-primary: #020408    /* Main background */
--text-primary: #e8f4f8  /* Primary text */
--text-secondary: ...    /* Muted text */
```

## Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   └── ui/              # Reusable components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── GridBackground.tsx
│       ├── Reveal.tsx
│       └── SectionHeader.tsx
├── styles/
│   └── globals.css      # Global styles & CSS variables
├── public/              # Static assets (add resume.pdf here)
└── tailwind.config.js
```

## Adding Your Resume

Place your PDF at `public/resume.pdf` — the "Download Resume" button will automatically link to it.

## Deployment

Works out of the box with [Vercel](https://vercel.com):

```bash
npx vercel
```
