# rockhold-dev

Repo for personal website at rockhold.dev

## Development

This project uses Vite for development and building, with comprehensive testing setup including unit tests, component tests, and end-to-end tests.

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

## Available Scripts

### Development

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run clean`** - Clean build artifacts and cache

### Code Quality

- **`npm run lint`** - Run ESLint to check code quality and style
- **`npm run check`** - Run linting and unit tests (quick verification)
- **`npm run check:all`** - Run linting and all tests (comprehensive verification)

### Testing

#### Unit Tests

- **`npm run test`** - Run unit tests with Vitest
- **`npm run test:watch`** - Run unit tests in watch mode (re-runs on file changes)
- **`npm run test:coverage`** - Run unit tests with coverage reporting

#### Component Tests

- **`npm run ct`** - Run Cypress component tests in interactive mode
- **`npm run ct:headless`** - Run Cypress component tests in headless mode

#### End-to-End Tests

- **`npm run e2e`** - Run Cypress E2E tests in interactive mode
- **`npm run e2e:headless`** - Run Cypress E2E tests in headless mode

#### Comprehensive Testing

- **`npm run test:all`** - Run all tests (unit + component + E2E)
- **`npm run test:ci`** - Run linting, coverage, and all tests (CI pipeline)

## Testing Strategy

This project uses a comprehensive testing approach:

### Unit Tests (Vitest)

- Fast, isolated tests for individual functions and components
- Located in `src/**/*.test.tsx` files
- Run with `npm run test`

### Component Tests (Cypress)

- Test individual React components in isolation
- Located in `cypress/ct/` directory
- Mirror the `src/components/` directory structure
- Run with `npm run ct`

### End-to-End Tests (Cypress)

- Test complete user workflows and page functionality
- Located in `cypress/e2e/` directory
- Run with `npm run e2e`

## Development Workflow

### Daily Development

```bash
# Start development server
npm run dev

# In another terminal, run tests in watch mode
npm run test:watch
```

### Before Committing

```bash
# Quick check
npm run check

# Or comprehensive check
npm run check:all
```

### Before Pushing

```bash
# Full verification
npm run test:ci
```

## CI/CD

The project uses GitHub Actions for continuous integration. Each pull request runs:

1. **Linting** - Code quality checks
2. **Unit Tests** - With coverage reporting
3. **Component Tests** - Individual component testing
4. **E2E Tests** - Full application testing

All checks must pass before merging.

## Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Shared components
│   ├── home/           # Home page components
│   └── layout/         # Layout components
├── pages/              # Page components
└── content/            # Content and data

cypress/
├── ct/                 # Component tests
│   └── components/     # Mirrors src/components structure
└── e2e/                # End-to-end tests
    └── pages/          # Page-level E2E tests
```
