// Plain JavaScript. Bootstrap handles the modal, accordion, and mobile menu.
'use strict';

const models = {
  db12: {
    name: 'DB12',
    category: 'The super tourer',
    image: 'assets/db12.png',
    description: 'Grand touring, with an extraordinary sense of occasion. A 4.0-litre twin-turbo V8, a beautifully considered cabin, and an appetite for the open road.',
    power: '680', acceleration: '3.6', speed: '325',
    url: 'https://www.astonmartin.com/en/models/db12'
  },
  vantage: {
    name: 'Vantage',
    category: 'The driver’s car',
    image: 'assets/vantage.png',
    description: 'A sharper connection between car, driver, and road. The two-seat Vantage brings a 4.0-litre twin-turbo V8 to every sweeping bend and unforgettable straight.',
    power: '665', acceleration: '3.5', speed: '325',
    url: 'https://www.astonmartin.com/en/models/vantage-coupe'
  },
  vanquish: {
    name: 'Vanquish',
    category: 'The V12 expression',
    image: 'assets/vanquish.jpg',
    description: 'Presence. Poise. A remarkable V12. The 5.2-litre twin-turbo Vanquish pairs effortless grand touring with a personality that is entirely its own.',
    power: '835', acceleration: '3.3', speed: '345',
    url: 'https://www.astonmartin.com/en/models/vanquish'
  }
};

// Reuse one Bootstrap modal for all three cars.
document.getElementById('modelModal').addEventListener('show.bs.modal', (event) => {
  const selectedModel = event.relatedTarget?.dataset.model || 'db12';
  const model = models[selectedModel] || models.db12;

  document.getElementById('modalModelTitle').textContent = model.name;
  document.getElementById('modalModelCategory').textContent = model.category;
  document.getElementById('modalModelDescription').textContent = model.description;
  document.getElementById('modalPower').textContent = model.power;
  document.getElementById('modalAcceleration').textContent = model.acceleration;
  document.getElementById('modalSpeed').textContent = model.speed;
  document.getElementById('modalOfficialLink').href = model.url;

  const image = document.getElementById('modalModelImage');
  image.src = model.image;
  image.alt = `Aston Martin ${model.name}, side profile`;
});

// Close the mobile navigation after choosing a section.
const mobileMenu = document.getElementById('mainNav');
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(mobileMenu, { toggle: false }).hide();
    }
  });
});

// Subtle reveals, with a reduced-motion preference and a no-JS fallback.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.documentElement.classList.add('reveal-enabled');
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
