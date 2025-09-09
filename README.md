# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode toggle, smooth animations with Framer Motion, and optimized images.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Optimized Images**: Using Next.js Image component
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## Pages

- **Home (/)**: Hero section with profile picture and introduction
- **About (/about)**: Personal information and journey
- **Projects (/projects)**: Showcase of projects with GitHub and live demo links
- **Skills (/skills)**: Technical skills with icons
- **Contact (/contact)**: Contact form and social media links

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Next.js Image Optimization

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The `vercel.json` file is already configured for optimal deployment.

## Customization

- Update personal information in the respective page files
- Replace the profile image in the `public/` folder
- Modify the projects data in `src/data/projects.js`
- Customize colors and styling in the Tailwind classes

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── skills/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── data/
    └── projects.js
```
