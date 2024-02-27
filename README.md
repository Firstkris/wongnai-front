# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Usage
```bash
npx install-peerdeps --dev eslint-config-airbnb
pnpm install
pnpm run dev
```

# Docker Build 
docker build -t [name 's container] . 

# Docker Run
docker run -p 8000:8000 [name 's container]