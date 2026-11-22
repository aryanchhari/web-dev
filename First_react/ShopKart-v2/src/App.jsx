import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './App.css';

function App() {
  const reducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const onBack = () => setPage(window.location.pathname);
    window.addEventListener('popstate', onBack);
    return () => window.removeEventListener('popstate', onBack);
  }, []);

  function navigate(path) {
    if (path !== window.location.pathname) window.history.pushState({}, '', path);
    setPage(path);
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  function browseCategory(category = '') {
    setSelectedCategory(category);
    setSearch('');
    if (page !== '/') navigate('/');
    requestAnimationFrame(() => document.getElementById('categories')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' }));
  }

  return (
    <>
      <Navbar
        page={page}
        onNavigate={navigate}
        selectedCategory={selectedCategory}
        onCategoryChange={browseCategory}
        search={search}
        onSearchChange={(value) => { setSearch(value); setSelectedCategory(''); if (page !== '/') navigate('/'); }}
      />
      <AnimatePresence mode="wait">
        {page === '/' && (
          <motion.div key="home" exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}>
            <Home
              selectedCategory={selectedCategory}
              onCategoryChange={browseCategory}
              onNavigate={navigate}
              search={search}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
