# Gemini Context: Portofolio

This project is a high-performance personal portfolio website for **Mustafa Ibrahim**, built with modern web technologies and a focus on immersive motion and precise engineering.

## Project Overview

- **Core Framework:** [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6+](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (`motion/react`)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/) (using `radix-nova` style)
- **Icons:** [Lucide React](https://lucide.dev/)

### Key Features & Design
- **Immersive Motion:** Heavy use of Framer Motion for scroll-triggered animations and interactive elements.
- **Custom Reveal Animations:** `SpecialText` component for hacker-style character-randomizing text reveals.
- **Dark Aesthetic:** A high-contrast dark theme using `#050505` backgrounds and `#D4FF5A` (electric lime) accents.
- **Responsive Layout:** Mobile-first design with a sidebar-ready architecture (currently hidden/integrated).

## Project Structure

- `src/components/`: Core UI components (Hero, WorksCarousel, etc.)
- `src/components/ui/`: `shadcn/ui` primitive components.
- `src/lib/utils.ts`: Utility functions (e.g., `cn` for Tailwind class merging).
- `src/App.tsx`: Main layout and routing.
- `src/App.css`: Global styles and Tailwind v4 configuration.
- `public/`: Static assets (icons, images).
- `.agent/skills/`: Custom agent skills for design, React, and UI automation.

## Building and Running

### Development
```bash
npm run dev
```
Starts the Vite development server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Type-checks with `tsc` and bundles the application for production.

### Preview Build
```bash
npm run preview
```
Serves the production build locally for verification.

### Linting
```bash
npm run lint
```
Runs ESLint with standard React and TypeScript rules.

## Development Conventions

- **Import Aliases:** Use `@/` to refer to the `src` directory (e.g., `import { Button } from "@/components/ui/button"`).
- **Tailwind v4:** Note that Tailwind v4 does not use a `tailwind.config.js` file by default; configuration is handled via CSS variables and `@theme` directives in `src/App.css`.
- **Component Style:** Follow the `shadcn/ui` pattern for adding new UI primitives.
- **Motion Principles:** Prefer `motion/react` for complex animations. Ensure animations are performant and respect `prefers-reduced-motion`.
- **Typing:** Strict TypeScript is enforced. Use functional components with proper interface definitions.

## Key Files for AI Context
- `package.json`: Dependency and script manifest.
- `src/App.tsx`: Main application structure.
- `src/App.css`: Design tokens and Tailwind configuration.
- `components.json`: `shadcn/ui` registry and alias configuration.
- `src/components/special-text.tsx`: Core text reveal animation logic.
