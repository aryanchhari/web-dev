import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './Navbar.css';

export const categories = [
  { id: 'electronics', name: 'Electronics', count: '1200+', image: 'category-electronics' },
  { id: 'fashion', name: 'Fashion', count: '1800+', image: 'category-fashion' },
  { id: 'home', name: 'Home & Kitchen', count: '950+', image: 'category-home' },
  { id: 'beauty', name: 'Beauty & Personal Care', count: '750+', image: 'category-beauty' },
  { id: 'fitness', name: 'Sports & Fitness', count: '600+', image: 'category-fitness' },
  { id: 'books', name: 'Books & Stationery', count: '500+', image: 'category-books' },
];

export function Icon({ name, className = '', ...props }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    search: <><circle cx="10.8" cy="10.8" r="7" /><path d="m16 16 4.5 4.5" /></>,
    heart: <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />,
    cart: <><path d="M2 3h3l2.5 12h11.8l2.2-8.5H6" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    shield: <><path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" /><path d="m8.5 12 2.3 2.3 4.7-5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    truck: <><path d="M3 5h11v12H3M14 9h4l3 4v4h-7M3 9H1M3 13H1" /><circle cx="6.5" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3M9 14v.1M15 14v.1M9 17q3 2.5 6 0" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`icon ${className}`} aria-hidden="true" {...props}>{paths[name]}</svg>;
}

function Navbar({ page, onNavigate, selectedCategory, onCategoryChange, search, onSearchChange }) {
  const reducedMotion = useReducedMotion();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const categoryRef = useRef(null);
  const categoryButtonRef = useRef(null);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function closeOutside(event) {
      if (!categoryRef.current?.contains(event.target)) setCategoryOpen(false);
      if (!navRef.current?.contains(event.target)) setMenuOpen(false);
    }
    function closeOnEscape(event) {
      if (event.key !== 'Escape') return;
      if (categoryOpen) { setCategoryOpen(false); categoryButtonRef.current?.focus(); }
      else if (menuOpen) { setMenuOpen(false); menuButtonRef.current?.focus(); }
    }
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [categoryOpen, menuOpen]);

  const links = [['Home', '/'], ['Products', '/products'], ['Deals', '/deals'], ['About Us', '/about'], ['Contact', '/contact']];

  function follow(event, href) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setMenuOpen(false);
    setCategoryOpen(false);
    onNavigate(href);
  }

  const navLinks = links.map(([label, href]) => (
    <a key={href} href={href} onClick={(event) => follow(event, href)} className={page === href ? 'nav-link active' : 'nav-link'} aria-current={page === href ? 'page' : undefined}>
      {label}
      {page === href && <motion.span className="nav-active-line" layoutId="nav-active" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
    </a>
  ));

  return (
    <header className="site-header">
      <div className="shipping-bar">
        <span className="new-badge">NEW</span>
        <span>Free shipping on orders above ₹499 <span className="shipping-divider">|</span> Easy 7-day returns</span>
      </div>

      <nav className="main-navbar" aria-label="Main navigation" ref={navRef}>
        <div className="nav-inner">
          <a className="brand" href="/" aria-label="ShopKart home" onClick={(event) => follow(event, '/')}>
            <span className="brand-symbol"><Icon name="bag" /></span>
            <span>Shop<span className="brand-accent">Kart</span></span>
          </a>

          <div className="category-dropdown" ref={categoryRef}>
            <button className={`category-trigger ${categoryOpen ? 'is-open' : ''}`} type="button" ref={categoryButtonRef} onClick={() => { setCategoryOpen(!categoryOpen); setMenuOpen(false); }} aria-expanded={categoryOpen} aria-controls="category-menu" aria-label="All Categories">
              <Icon name="grid" /><span>All Categories</span><Icon name="chevron" className="category-chevron" />
            </button>
            <AnimatePresence>
              {categoryOpen && (
                <motion.div className="category-menu" id="category-menu" initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ type: 'spring', stiffness: 420, damping: 32 }}>
                  {categories.map((category) => (
                    <button key={category.id} type="button" className={selectedCategory === category.id ? 'is-selected' : ''} onClick={() => { onCategoryChange(category.id); setCategoryOpen(false); categoryButtonRef.current?.focus(); }}>
                      {category.name}{selectedCategory === category.id && <Icon name="check" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="nav-links">{navLinks}</div>

          <form className="search-form" role="search" onSubmit={(event) => { event.preventDefault(); document.getElementById('categories')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' }); }}>
            <label htmlFor="product-search" className="sr-only">Search for products</label>
            <input id="product-search" type="search" placeholder="Search for products..." value={search} onChange={(event) => onSearchChange(event.target.value)} autoComplete="off" />
            <button type="submit" aria-label="Search"><Icon name="search" /></button>
          </form>

          <div className="nav-actions">
            <motion.button type="button" className={`icon-button wishlist ${saved ? 'is-saved' : ''}`} aria-label="Wishlist" aria-pressed={saved} onClick={() => setSaved(!saved)} whileTap={{ scale: 0.82 }} whileHover={{ y: -2 }}>
              <Icon name="heart" />
            </motion.button>
            <motion.a href="/cart" className="icon-button cart-button" aria-label="Cart, 3 items" onClick={(event) => follow(event, '/cart')} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }}>
              <Icon name="cart" /><span className="cart-count">3</span>
            </motion.a>
          </div>

          <button ref={menuButtonRef} className="icon-button mobile-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => { setMenuOpen(!menuOpen); setCategoryOpen(false); }}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.div className="mobile-nav" id="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>{navLinks}</motion.div>}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
