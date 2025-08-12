# InnoNautics - Autonomous Water Mobility Solutions

## Overview

InnoNautics is a cutting-edge company specializing in autonomous water mobility devices for water sports enthusiasts and marine applications. The website showcases their innovative technology including autonomous navigation, remote control systems, and onboard control devices. Built as a modern full-stack TypeScript application, the site features a tech-focused marine design with video backgrounds, interactive galleries, team showcases, and comprehensive contact systems for both customers and business partnerships.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **Styling**: Tailwind CSS with custom ocean-themed color variables and shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing (single-page application)
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod for runtime type checking and validation
- **Storage Pattern**: Repository pattern with in-memory storage implementation (MemStorage) that can be swapped for database storage
- **API Design**: RESTful endpoints with proper error handling and validation

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Contact Inquiries Table**: Customer contact form submissions with fields for personal info, experience level, and messages
- **Migrations**: Drizzle Kit handles schema migrations to `./migrations` directory

### Development Workflow
- **Hot Reload**: Vite dev server with HMR for frontend development
- **Type Safety**: Shared TypeScript types between frontend and backend via `@shared` directory
- **Build Process**: Vite builds frontend, esbuild bundles backend for production
- **Code Quality**: TypeScript strict mode enabled across the entire codebase

### Component Architecture
- **Page Components**: Single Home page component that aggregates all sections
- **Section Components**: 
  - Navigation: Logo integration with InnoNautics branding, responsive navigation with smooth scrolling and mobile menu
  - Hero: Full-screen video background (surfive_scene.mp4) with tech-focused messaging and CTA buttons
  - Features: Interactive showcase with properly spaced videos, centered headings for Automation, On Board, and Remote control systems
  - About: Company mission with aboutUs.mp4 video, redesigned objectives cards, simplified user interviews with single quote icons
  - Gallery: Filterable image gallery with "Load More" functionality (max 4 images initially), modal view and project categories
  - Team: Four-member team showcase with skills, bio, and social links
  - Contact: Multi-purpose contact form with partnership and demo inquiry options
  - Footer: Newsletter signup, comprehensive links, and company information
- **UI Components**: Reusable shadcn/ui components with InnoNautics tech-marine theme
- **Form Handling**: Contact form with Zod validation and React Hook Form integration

### Recent UI Improvements (August 2025)
- Added official InnoNautics logo (logo2.png) to navigation title
- Enhanced Features section with proper video spacing and centered headings
- Redesigned objectives UI from large gradient boxes to clean card format with overlay text
- Simplified user interviews layout with single quote icon instead of multiple
- Implemented gallery "Load More" functionality showing 4 images initially
- Fixed critical button contrast issues: Changed all buttons to deep-marine background with white borders for maximum visibility against light backgrounds
- Replaced team overview with individual developer cards showcasing William (Software), Howard (Electronic), and Echo (Mechanical) - removed Stephen completely
- Maintained authentic content using real videos and images from company assets
- Implemented video enlargement modal functionality for all feature videos with proper z-index and click handling
- Added scroll-to-top button that appears on scroll with smooth animation back to top
- Centered all footer text on mobile devices for better visual balance
- Updated copyright to "Copyright@2025 | InnoNautics Limited"
- Optimized codebase: Removed debug console logs, fixed TypeScript errors, cleaned unused imports
- Successful production build: 273KB JS bundle, 71KB CSS bundle, fully optimized for deployment
- **Apple-Inspired Design Update**: Applied Apple's minimalist design principles with larger typography (5xl-6xl headings), generous white space, cleaner button styling with rounded-full buttons, font-light descriptions, and tracking-tight letter spacing for enhanced visual hierarchy and professional appearance while maintaining InnoNautics branding and colors

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon serverless
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management with validation
- **@hookform/resolvers**: Zod integration for form validation

### UI and Styling
- **@radix-ui/react-***: Accessible UI primitive components (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development plugins

### Validation and Utilities
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod schemas
- **date-fns**: Date manipulation and formatting utilities