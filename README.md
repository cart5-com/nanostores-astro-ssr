# Astro SSR with Nanostores Demo

This project demonstrates server-side rendering (SSR) in Astro using nanostores for state management, with both Astro and Vue components.

## Features

- Server-side rendering with Astro
- State management using nanostores
- Counter component with shared state
- Posts component with API integration
- Vue integration
- TypeScript support

## Tech Stack

- [Astro](https://astro.build/) - Web framework
- [Vue 3](https://vuejs.org/) - UI framework
- [nanostores](https://github.com/nanostores/nanostores) - State management
- [TypeScript](https://www.typescriptlang.org/) - Type safety

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

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

- `src/components/` - Reusable components (Astro and Vue)
- `src/layouts/` - Layout components
- `src/pages/` - Route components
- `src/stores/` - Nanostore state management
- `src/types/` - TypeScript type definitions

## Available Routes

- `/` - Home page with counter
- `/about` - About page with multiple counters
- `/hello` - Hello page with counter
- `/posts` - Posts page demonstrating SSR with API data

## State Management

The project uses nanostores for state management with two main stores:

1. Counter Store
- Maintains a simple counter value
- Supports increment and decrement operations
- Shared state across multiple components

2. Posts Store
- Fetches posts from JSONPlaceholder API
- Supports adding new posts
- Demonstrates SSR data handling

## Development

### Environment Setup

The project includes VSCode configuration for optimal development:

- Recommended extensions for Astro and Vue
- Debug configuration for development server
- TypeScript configuration

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Start production server
- `npm run astro` - Run Astro CLI commands