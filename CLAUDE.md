# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
The project is split into a frontend directory. All commands should be run within the `frontend/` folder.

- **Install dependencies**: `cd frontend && npm install`
- **Run development server**: `cd frontend && npm run dev`
- **Build for production**: `cd frontend && npm run build`
- **Lint code**: `cd frontend && npm run lint`
- **Preview production build**: `cd frontend && npm run preview`

## Architecture & Structure
The project is a React application built with Vite, Tailwind CSS, and Three.js.

### Frontend Structure (`/frontend/src`)
- `pages/`: Top-level page components (e.g., `Home.jsx`, `Products.jsx`).
- `components/`: Reusable UI components (e.g., `Navbar`, `Footer`, `ProductCard`, `ProductModal`).
- `data/`: Static data used across the application.
- `assets/`: Static assets like images and icons.

### Key Technologies
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **3D Rendering**: `@react-three/fiber` and `@react-three/drei` (Three.js)
- **Routing**: `react-router-dom`
- **Icons**: `lucide-react`
