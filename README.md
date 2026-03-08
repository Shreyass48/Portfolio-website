# Neo-Brutalist Portfolio

A mobile-first, neo-brutalist portfolio site for a frontend developer. Built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn-style components.

## Features

- **Mobile-first** layout with responsive breakpoints (md, lg)
- **Neo-brutalist** design: bold typography, thick borders, high contrast
- **Pages**: Home, Reach Out (contact form), Blogs (coming soon)
- **Contact form** with Zod validation, inline errors, loading and success states
- **Accessible**: semantic HTML, ARIA labels, keyboard navigation, focus styles
- **Performance**: optimized fonts via `next/font`, minimal animations

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-style UI](https://ui.shadcn.com/) (Button, Input, Label, Textarea)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- [Framer Motion](https://www.framer.com/motion/) (optional subtle animations)

## Setup

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Install and run

```bash
# Install dependencies
npm install

# Run development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, Header/Footer
│   ├── page.tsx        # Home (hero, projects, skills)
│   ├── reach-out/
│   │   └── page.tsx    # Contact form + social links
│   ├── blogs/
│   │   └── page.tsx    # Coming soon + email subscribe
│   └── globals.css
├── components/
│   ├── ui/             # Button, Input, Label, Textarea
│   ├── header.tsx      # Nav + mobile menu
│   ├── footer.tsx
│   ├── section-wrapper.tsx
│   ├── brutalist-button.tsx
│   ├── project-card.tsx
│   └── form-input.tsx
└── lib/
    └── utils.ts        # cn()
```

## Customization

- **Content**: Edit name, intro, projects, and skills in `src/app/page.tsx`. Update social links in `src/app/reach-out/page.tsx`.
- **Theme**: Colors and fonts are in `tailwind.config.ts` and `src/app/globals.css` (CSS variables).
- **Contact**: The form currently simulates submit (no backend). Connect to your API or service (e.g. Formspree, Resend) in `src/app/reach-out/page.tsx` inside `onSubmit`.

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub.
2. In [Vercel](https://vercel.com), import the project.
3. Use default build settings (build: `npm run build`, output: Next.js).
4. Deploy.

### Other platforms

- **Netlify**: Use Next.js runtime; build command `npm run build`, publish directory `.next` (or use Next.js plugin).
- **Docker**: Use the official Next.js Docker example; set `NODE_ENV=production` and run `npm run build && npm start`.

## Design tokens

| Token    | Value    |
|----------|----------|
| Background | `#0B0B0B` |
| Foreground | `#EAEAEA` |
| Accent   | `#00FF88` |
| Muted    | `#BDBDBD` |
| Border   | `#FFFFFF` |

Fonts: Space Grotesk / Sora (headings), Inter (body), JetBrains Mono (labels).

## License

MIT.
