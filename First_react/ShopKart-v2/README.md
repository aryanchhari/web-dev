# ShopKart v2

This version uses simple React components, Bootstrap and separate CSS files. The CSS uses named classes and basic hover effects.

## Run it

From the repository root:

```sh
cd First_react/ShopKart-v2
npm install
npm run dev
```

Production build:

```sh
npm run build
```

## Read the files in this order

| File | What it does |
| --- | --- |
| src/main.jsx | Loads React, Bootstrap and BrowserRouter. |
| src/App.jsx | Stores the search text and shows Navbar and Home. |
| src/Components/Navbar.jsx | Contains the logo, dropdown, menu, search and icons. |
| src/Components/Navbar.css | Styles those elements using their own classes. |
| src/Pages/Home.jsx | Contains the hero section and six category cards. |
| src/Pages/Home.css | Styles the hero, images, buttons and category cards. |
| src/App.css | Sets the page width and outside spacing. |
| src/index.css | Styles the body through the site-body class in index.html. |

## How the CSS works

Each element has a class in JSX. Find that same class in the CSS file to change its appearance.

```jsx
<h1 className="hero-title">Good Choices.</h1>
```

```css
.hero-title {
  font-size: 72px;
  font-weight: 800;
}
```

The custom CSS only uses `.class-name` and `.class-name:hover` selectors. There are no ID, element, nested, attribute or universal selectors, and no combined class selectors. There is no `:target`, `:nth-child`, `::before` or `::after`.

Some elements have two classes so they can share styles:

```jsx
<a className="hero-button shop-btn" href="#categories">Shop Now</a>
```

- `.hero-button` sets the size and spacing shared by both hero buttons.
- `.shop-btn` sets the Shop Now button's colours.
- `.shop-btn:hover` changes its background when the mouse is over it.

```css
.shop-btn:hover {
  background-color: #defd83;
  color: #173b25;
}
```

`transition: background-color 0.3s` makes that colour change smooth. The automatic floating and entrance animations have been removed. Product positions use `top`, `right`, `bottom` and `left`; `rotate` gives the product images their angle.

## Smaller screens

A media query changes styles below a screen width:

```css
@media (max-width: 575px) {
  .hero-title {
    font-size: 40px;
  }
}
```

This makes the title smaller on phones. Below 768px, the product images sit below the hero text so the content can fit naturally.

Bootstrap handles the category grid:

| Class | Cards per row |
| --- | --- |
| col-6 | 2 on phones |
| col-md-4 | 3 from 768px |
| col-xl-2 | 6 from 1200px |
| row g-3 | Creates the row and adds gaps |

## Bootstrap and IDs

Bootstrap's CSS is imported in main.jsx; you do not need to edit it. Its classes handle the dropdown, mobile menu, active navigation link and wishlist toggle. The custom styles are in the project's CSS files.

The IDs in JSX have a purpose, but none are used as CSS selectors:

- `root` is where React loads the app.
- `shopKartNavbar` connects Bootstrap's menu button to the mobile menu.
- `categoryMenu` connects the dropdown button to its menu.
- `product-search` connects the search label to its input.
- The heading IDs connect sections to their accessible names.
- `categories` and the category card IDs let links jump to the right place.

For example, `href="#electronics"` jumps to `id="electronics"`. The CSS still styles that card through `.category-card` and `.electronics`.

## Search

App.jsx stores the text with one `useState`. Navbar updates it while you type. Home's `getSearchClass` function returns a class for each card:

| Class | Appearance |
| --- | --- |
| search-match | Green border around matching categories |
| search-muted | Grey background for other categories |

All six cards remain visible. This searches category names; product listing pages are still empty. Shop Now and View All Categories clear the search. Dropdown links jump to a category without extra selection styling.

## Unfinished pages

About, Contact, Products, Cart, Login, Register and Footer JSX/CSS files remain empty. App.jsx shows the header on unfinished routes. There is no fetch API or remote product data; images and icons are in public.
