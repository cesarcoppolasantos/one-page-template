# One-Page Template

A modern, responsive Next.js application with a beautiful landing page and document creation form.

## Features

- 🎨 **Modern UI/UX** - Beautiful gradient backgrounds and glassmorphism effects
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 📝 **Document Creation Form** - Interactive form with real-time preview
- 🎯 **TypeScript** - Full type safety throughout the application
- 🎨 **Tailwind CSS** - Modern styling with custom design system
- ⚡ **Next.js 15** - Latest features with App Router

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── form/              # Document creation form page
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared interfaces and types
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Landing page with hero section, pricing, and FAQ
- **Form** (`/form`) - Document creation form with live preview

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Geist Font** - Modern typography from Vercel

## Customization

The project uses CSS custom properties for theming. You can customize colors and fonts by modifying the variables in `src/app/globals.css`.

## Deployment

This project is ready to deploy on Vercel, Netlify, or any other hosting platform that supports Next.js.
