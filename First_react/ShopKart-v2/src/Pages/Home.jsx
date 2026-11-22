import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { categories, Icon } from '../Components/Navbar';
import './Home.css';

const spring = { stiffness: 140, damping: 22, mass: 0.7 };
const imagePath = (name) => `/images/${name}.webp`;

function CategoryCard({ category, index, selected, muted, onSelect }) {
  const reducedMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, spring);
  const rotateY = useSpring(tiltY, spring);

  function move(event) {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 9);
    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 11);
  }

  return (
    <motion.button
      type="button"
      className={`category-card ${category.id} ${selected ? 'is-selected' : ''} ${muted ? 'is-muted' : ''}`}
      data-category={category.id}
      aria-pressed={selected}
      onClick={onSelect}
      onPointerMove={move}
      onPointerLeave={() => { tiltX.set(0); tiltY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ type: 'spring', stiffness: 150, damping: 23, delay: reducedMotion ? 0 : 0.1 + index * 0.065 }}
      whileHover={reducedMotion ? undefined : { y: -7, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
    >
      <div className="category-image-wrap"><img src={imagePath(category.image)} alt="" width="320" height="260" loading="eager" decoding="async" /></div>
      <div className="category-copy"><h3>{category.name}</h3><p>{category.count} Products</p></div>
      <span className="category-selected-mark" aria-hidden="true"><Icon name="check" /></span>
    </motion.button>
  );
}

function Home({ selectedCategory, onCategoryChange, onNavigate, search }) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 60, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 60, damping: 24 });
  const normalizedSearch = search.trim().toLowerCase();
  const matchingCategories = categories.filter((category) => category.name.toLowerCase().includes(normalizedSearch));

  function moveScene(event) {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 28);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 22);
  }

  function goToDeals(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate('/deals');
  }

  return (
    <main className="page-shell">
      <motion.section
        className="hero-section"
        aria-labelledby="hero-heading"
        initial={reducedMotion ? false : { opacity: 0, y: 15, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onPointerMove={moveScene}
        onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      >
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <h1 id="hero-heading">
            <span className="headline-mask"><motion.span initial={reducedMotion ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.12, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}>Good Choices.</motion.span></span>
            <span className="headline-mask headline-accent"><motion.span initial={reducedMotion ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.24, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}>Great Prices.</motion.span></span>
          </h1>

          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }}>
            <p className="hero-description">Everything you need,<br />delivered to your door.</p>
            <div className="hero-buttons">
              <motion.button className="shop-btn" type="button" onClick={() => onCategoryChange('')} whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.96 }}>Shop Now<span className="button-shine" aria-hidden="true" /></motion.button>
              <motion.a className="deal-btn" href="/deals" onClick={goToDeals} whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.96 }}>Explore Deals</motion.a>
            </div>
          </motion.div>

          <motion.div className="hero-benefits" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <div className="benefit-item"><Icon name="shield" /><span>100% Secure<br className="benefit-break" /> Payments</span></div>
            <div className="benefit-item"><Icon name="clock" /><span>7 Days Easy<br className="benefit-break" /> Returns</span></div>
            <div className="benefit-item"><Icon name="truck" /><span>Fast & Free<br className="benefit-break" /> Delivery</span></div>
          </motion.div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <motion.div className="product-scene" style={reducedMotion ? undefined : { x, y }}>
            <motion.div className="hero-disc" initial={reducedMotion ? false : { scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="orbit-dot orbit-dot-one" /><div className="orbit-dot orbit-dot-two" />
            <motion.div className="hero-product hero-headphones" initial={reducedMotion ? false : { y: 65, rotate: -23, opacity: 0, scale: 0.86 }} animate={{ y: 0, rotate: -12, opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 55, damping: 17, delay: 0.2 }}>
              <img className="float-headphones" src={imagePath('category-electronics')} alt="" width="800" height="778" fetchPriority="high" decoding="async" />
            </motion.div>
            <motion.div className="hero-product hero-watch" initial={reducedMotion ? false : { y: -40, rotate: 30, opacity: 0 }} animate={{ y: 0, rotate: 13, opacity: 1 }} transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.43 }}>
              <img className="float-watch" src={imagePath('noisefit')} alt="" width="600" height="572" decoding="async" />
            </motion.div>
            <motion.div className="hero-product hero-sneakers" initial={reducedMotion ? false : { x: 80, y: 40, rotate: -20, opacity: 0 }} animate={{ x: 0, y: 0, rotate: -12, opacity: 1 }} transition={{ type: 'spring', stiffness: 65, damping: 19, delay: 0.52 }}>
              <img className="float-sneakers" src={imagePath('sneakers')} alt="" width="750" height="500" decoding="async" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="category-section" id="categories" aria-labelledby="category-heading">
        <motion.div className="section-heading" initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 id="category-heading">Shop by Category</h2>
          <button type="button" className="view-categories" onClick={() => onCategoryChange('')}>View All Categories</button>
        </motion.div>
        <p className="sr-only" role="status" aria-live="polite">{normalizedSearch ? `${matchingCategories.length} matching categories for ${search}.` : selectedCategory ? `${categories.find((category) => category.id === selectedCategory)?.name} selected.` : 'All six categories.'}</p>
        <div className="category-list">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              selected={selectedCategory === category.id || Boolean(normalizedSearch && matchingCategories.some((match) => match.id === category.id))}
              muted={Boolean((selectedCategory && selectedCategory !== category.id) || (normalizedSearch && !matchingCategories.some((match) => match.id === category.id)))}
              onSelect={() => onCategoryChange(selectedCategory === category.id ? '' : category.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
