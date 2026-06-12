// ── Nav scroll ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── Clic sur un projet → ouvre le lien ──
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.dataset.link;
    if (link && !link.includes('TON_LIEN')) {
      window.open(link, '_blank', 'noopener');
    }
  });
});

// ── Fallback image manquante → placeholder texte ──
document.querySelectorAll('.project-visual img').forEach(img => {
  img.addEventListener('error', function () {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.textContent = '[ Photo BTS à ajouter ]';
    this.replaceWith(placeholder);
  });
});
