<div align="center">
  <img src="GifThreeJSPortfolio.gif" alt="PortFolioGif" />
</div>



# React + Vite Portfolio

This template offers a streamlined setup for developing a React application using Vite, featuring Hot Module Replacement (HMR) and basic ESLint rules.

## Official Plugins

Currently, two official plugins are available for React in Vite:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Utilizes [Babel](https://babeljs.io/) for Fast Refresh, enabling a smooth development experience.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Leverages [SWC](https://swc.rs/) for Fast Refresh, offering improved performance.

## About This Portfolio

### Project Goals
This portfolio project aims to enhance my skills with the following technologies:
- **Three.js**: A powerful JavaScript library for creating 3D graphics in the browser.
- **Tailwind CSS**: A utility-first CSS framework for designing custom user interfaces.
- **GSAP**: A robust animation library for creating high-performance animations.

This portfolio was inspired by and developed using resources and tutorials from [Adrian Hajdin](https://github.com/adrianhajdin). Feel free to explore and modify the portfolio as you wish, provided you have a basic understanding of the technologies used.

## Installation Instructions

To get started with this portfolio, follow the steps below:

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can check if Node.js is installed by running:

```bash
node -v
```

### 2. Create a New Project

Create a new React project with Vite by running the following command in your terminal:

```bash
npm create vite@latest my-react-app -- --template react
```

Replace `my-react-app` with your desired project name.

### 3. Navigate to the Project Directory

Change into your project directory:

```bash
cd my-react-app
```

### 4. Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

### 5. Start the Development Server

Launch the development server with:

```bash
npm run dev
```

Your application will be accessible at `http://localhost:5173` (or the port displayed in the terminal).

### 6. Optional: Set Up ESLint

If you want to add ESLint for code quality, install it with:

```bash
npm install eslint eslint-plugin-react --save-dev
```

Then, initialize ESLint configuration:

```bash
npx eslint --init
```

Follow the prompts to configure ESLint according to your preferences.

### 7. Optional: Install Vite Plugins

If desired, you can install one of the official Vite plugins:

- For Babel:

  ```bash
  npm install @vitejs/plugin-react
  ```

- For SWC:

  ```bash
  npm install @vitejs/plugin-react-swc
  ```

### 8. Configure Vite Plugin

After installation, configure the plugin in your `vite.config.js` file:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // or [react({ /* options */ })] for SWC
});
```

## Resources

Some images and links for the 3D Avatar Generation and 3D Desktop Computer were sourced from [Adrian Hajdin](https://github.com/adrianhajdin).

# Important !
- in some Browsers e.g OperaGxthe the site doesn't work :(
