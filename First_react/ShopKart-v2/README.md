# ShopKart v2

A second version of the ShopKart homepage, built with React, Vite, Motion and custom CSS. The original `React_main/ShopKart` app is unchanged.

## Run locally

From the repository root:

```sh
cd First_react/ShopKart-v2
npm install
npm run dev
```

Open the local URL printed by Vite. To create the production build:

```sh
npm run build
npm run preview
```

## Files

- `src/Components/Navbar.jsx` and `Navbar.css`: shipping bar, navigation, category picker, search, wishlist toggle and mobile menu.
- `src/Pages/Home.jsx` and `Home.css`: the same hero, three shopping benefits and six categories as the original screenshot.
- `src/App.jsx`, `App.css`, `index.css` and `main.jsx`: the React entry point, shared styles, category state and navigation.
- `src/Pages/About`, `Contact`, `Products`, `Cart`, `Login`, `Register` and `src/Components/Footer`: empty JSX/CSS files, ready for later work. Navigation to these unfinished pages intentionally shows only the header. `/deals` is also an empty destination.

Search highlights matching category names; selecting a category highlights its card. No product catalog, checkout or extra homepage sections have been added. The wishlist button is a visual toggle, and the cart badge retains the reference count of 3.

## Motion

Staggered headline reveals, spring entrances, cursor parallax, floating product images, category tilt and hover effects. Motion respects the system's reduced motion setting. Asset images are optimized WebP copies of the existing ShopKart images and are served locally.
