# Clipboard Landing Page

A modern, responsive landing page for Clipboard - a clipboard management application. Built with React, TypeScript, and Vite, featuring a fully responsive design that adapts seamlessly across all device sizes.

## Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **TypeScript**: Type-safe codebase for better development experience
- **Component-Based Architecture**: Modular React components for maintainability
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Touch-Friendly**: Optimized touch targets (44px minimum) for mobile devices
- **Performance**: Fast loading with Vite's build tooling

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Features Overview](#features-overview)
- [Component Details](#component-details)

## 🛠 Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **OSLint** - Code linting
- **CSS3** - Styling with responsive design

## Project Structure

```
├── node_modules
├── public
│   ├── favicon.svg
│   └── icons.svg
└── src
    ├── assets
    │   ├── images
    │   └── restaurant-ui.jpg
    ├── components
    │   ├── Benefits
    │   ├── Footer
    │   ├── Hero
    │   ├── Navbar
    │   ├── Products
    │   └── Subfooter
    ├── styles
    │   ├── globals.css
    │   ├── utilities.css
    │   └── variables.css
    ├── App.css
    ├── App.tsx
    └── main.tsx
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Khaviso01/ui-challenge-6.git
cd ui-challenge-6
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` or type 'o + Enter'

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run preview` - Preview the production build locally

## Responsive Breakpoints

The application is fully responsive with the following breakpoints:

- **Mobile**: from 767px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px and above

### Responsive Features

- **Flexible Layouts**: Components adapt using flexbox and CSS Grid
- **Responsive Typography**: Font sizes scale appropriately for each screen size
- **Image Optimization**: Images scale and adapt to container sizes
- **Mobile-First Navigation**: Footer navigation stacks vertically on mobile

## Features Overview

### Header Section
- Hero section with logo and main heading
- Responsive background images (desktop/mobile)
- Call-to-action buttons
- Smooth hover effects and transitions over links and buttons

### Main Content Section
- **Feature Showcase**: Desktop image with feature descriptions
- **Device Compatibility**: Tablet and mobile device showcase
- **Company Logos**: Trusted by major companies
- **Final CTA**: Additional download buttons

### Footer Section
- Logo and navigation links
- Social media icons (Facebook, Twitter, Instagram)
- Responsive layout that stacks on mobile

## Component Details

### Navbar Component
- Semantic `<section>` and `<nav>` element
- Responsive site using CSS elements
- Optimized for all screen sizes

### Main Component
- Semantic `<section>` elements
- Multiple content sections with proper semantic structure
- Responsive image handling
- Flexible icon grid layout
- Company logo showcase
- Consistent button styling
- Accessible navigation and interactive links
- Responsive stacking on mobile devices

## Design Features

- **Color Scheme**: 
  - Primary: Orange (#dd6f02) for buttons
  - Text: White (#fff) for all texts and Icons

- **Typography**: 
  - Responsive font sizes
  - Optimized line heights for readability
  - Proper heading hierarchy

- **Interactions**:
  - Smooth hover effects on buttons
  - Touch-friendly button sizes
  - Focus states for accessibility
  - Transition animations
  - Smooth scrolling
## Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Component-based architecture
- Semantic HTML structure

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested across devices

## License

This project is public and open for review purposes

## Author

Khaviso Vukeya