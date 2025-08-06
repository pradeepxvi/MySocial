# Social Media Frontend

A modern social media frontend built with React and Vite. This project features fast development with HMR, modular components, and a clean codebase.

## Features

- React + Vite for fast development and build
- Modular component structure
- State management with custom store
- Responsive design
- ESLint integration for code quality

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd socialmedia
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Folder Structure

```
src/
  App.jsx           # Main app component
  App.css           # App styles
  index.css         # Global styles
  main.jsx          # Entry point
  assets/           # Static assets
  components/       # Reusable components
    CreatePost.jsx
    Empty.jsx
    Feed.jsx
    Loader.jsx
    NavBar.jsx
  store/
    SocialMediaStore.jsx # State management
public/
  vite.svg           # Public assets
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
