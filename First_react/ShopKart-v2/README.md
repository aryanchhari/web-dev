# ShopKart v2

This version follows the structure of your original React_main/ShopKart app: simple React components, Bootstrap classes and separate CSS files. The homepage keeps the same content and the green/lime design.

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
| src/main.jsx | Loads React, Bootstrap CSS, Bootstrap's JavaScript bundle and BrowserRouter. |
| src/App.jsx | Shows Navbar and Home. It stores the search text with one useState. |
| src/Components/Navbar.jsx | Contains the shipping bar, Bootstrap dropdown, navigation, search box and icons. |
| src/Pages/Home.jsx | Contains the hero and all six category cards, written out directly. |
| src/Components/Navbar.css | Styles the header, search, icons and mobile menu. |
| src/Pages/Home.css | Styles the hero and cards. All animations are here. |
| src/App.css | Sets the homepage width and outside spacing. |
| src/index.css | Sets common styles such as fonts and page colors. |

The JSX and CSS have section comments. CSS properties are written on separate lines.

## Bootstrap classes used

A category column uses:

```jsx
<div className="col-6 col-md-4 col-xl-2 category-column">
```

Bootstrap divides a row into 12 columns:

| Class | Width of each card | Cards per row |
| --- | --- | --- |
| col-6 | 6 of 12 columns | 2 on phones |
| col-md-4 | 4 of 12 columns, from 768px | 3 on tablets |
| col-xl-2 | 2 of 12 columns, from 1200px | 6 on desktops |
| row g-3 | Creates the row and adds gaps | Applies to the card container |

The navbar uses the same approach as your original code:

- navbar-expand-xl shows the full navigation from 1200px.
- data-bs-toggle="dropdown" opens the category dropdown.
- dropdown-menu-end aligns the dropdown to the right of its button.
- data-bs-toggle="collapse" opens the mobile navigation.
- data-bs-target="#shopKartNavbar" tells Bootstrap which menu to open.
- data-bs-toggle="button" toggles the wishlist button's pink background.

These attributes use Bootstrap's imported bundle. You do not need to write the menu JavaScript.

## The small amount of React code

App.jsx has one state variable:

```jsx
const [search, setSearch] = useState("");
```

- search is the current text in the search box.
- setSearch changes that text.
- App passes both values to Navbar and Home as props.
- Navbar updates the text when you type.
- Home's getSearchClass function checks each category name and returns a CSS class.

The matching cards get a border. Other card images fade slightly. All six cards remain visible. This searches category names; the product listing pages are still empty.

Submitting the search box on the homepage jumps to the categories. Shop Now and View All Categories clear the search.

Category dropdown links use normal anchors such as /#electronics. In CSS, :target highlights the card whose ID matches the URL. This selection does not need React state.

## How the animations work

All movement is in Home.css:

| CSS | Effect |
| --- | --- |
| @keyframes fade-in | Fades the hero and product images into view. |
| @keyframes slide-up | Moves the heading, buttons and cards up as they appear. |
| @keyframes float-product | Moves the product images up and down continuously. |
| animation-delay | Makes elements start at different times. |
| transition and :hover | Smoothly lifts the buttons and category cards. |
| prefers-reduced-motion | Disables animation for visitors who request less movement. |

To change the floating speed, change 7s in .hero-product img. To change how high the products float, change -14px in @keyframes float-product.

The effects use CSS instead of the Motion library or cursor-tracking hooks. No fetch API, Axios, remote product data or custom DOM event listeners are used. Images and icons are local files in public.

## Unfinished pages

About, Contact, Products, Cart, Login, Register and Footer JSX/CSS files remain empty. App.jsx shows the header for unfinished routes, including /deals. You can fill those files and add more Route entries when you are ready.

React_main/ShopKart is your original app and has not been changed.
