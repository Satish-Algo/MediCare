# ⚡ React + Vite + Tailwind + Redux + Router Template

A clean and scalable starter template using **React + Vite**, styled with **Tailwind CSS**, state management via **Redux Toolkit**, and navigation powered by **React Router**.  
Designed for building modern React applications with best practices out of the box.

---

## 📦 Installation

```sh
npm install
# or
yarn install
# or
pnpm install
````

---

## 🚀 Development

Start the development server with hot reload:

```sh
npm run dev
```

Your app will be available at **[http://localhost:5173](http://localhost:5173)**.

---

## 📤 Build

Create a production-ready build:

```sh
npm run build
```

Preview the built app locally:

```sh
npm run preview
```

---

## 🌐 Environment Variables

Add your environment variables in a `.env` file at the project root:

```env
VITE_API_URL=https://api.example.com
```

Use them in your code with `import.meta.env`:

```js
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🗂 File Structure

```
src/
 ├── assets/             # Images, fonts, static files
 ├── components/         # Reusable UI components
 │   ├── container/      # Layout wrapper components
 │   ├── footer/         # Footer UI
 │   ├── header/         # Header UI
 │   ├── pages/          # Page-level components
 │   │   └── Home.jsx
 │   ├── ui/             # Small reusable UI parts (buttons, inputs, etc.)
 │   └── index.js        # Barrel export for components
 ├── conf/               # Configurations & environment helpers
 │   └── conf.js
 ├── store/              # Redux store setup
 │   ├── features/       # Redux slices
 │   └── store.js
 ├── App.jsx             # Root component
 ├── index.css           # Global styles (Tailwind)
 └── main.jsx            # Application entry point
```

---

## 📚 Included Libraries

* ⚡ **Vite** – Lightning-fast build tool
* 🎨 **Tailwind CSS** – Utility-first styling
* 🔄 **Redux Toolkit** – State management
* 🌍 **React Router** – Client-side routing

---

## 📚 Useful Links

* [React Docs](https://react.dev/)
* [Vite Docs](https://vitejs.dev/)
* [Tailwind CSS Docs](https://tailwindcss.com/)
* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [React Router Docs](https://reactrouter.com/)

