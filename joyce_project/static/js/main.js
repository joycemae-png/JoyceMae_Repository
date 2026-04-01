// ============================================================
// PORTFOLIO — main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---- Skill bar animation on scroll ----
  const skillFills = document.querySelectorAll('.skill-fill');

  if (skillFills.length) {
    const animateBar = (fill) => {
      const raw = fill.getAttribute('data-pct') || '0';
      const target = parseFloat(raw.replace('%', ''));
      fill.style.width = target + '%';
    };

  const barObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBar(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      // Already visible — animate immediately
      animateBar(fill);
    } else {
      // Below fold — use observer
      barObserver.observe(fill);
    }
  });
  }

  // ---- Fade-in on scroll for cards ----
  const fadeEls = document.querySelectorAll(
    '.project-card, .skill-card, .edu-item, .about-grid'
  );

  if (fadeEls.length && 'IntersectionObserver' in window) {
    fadeEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => fadeObserver.observe(el));
  }

  // ---- Hero staggered entrance ----
  const heroEls = document.querySelectorAll('.hero-badge, .hero-name, .hero-tagline, .hero-actions, .hero-social, .hero-image-wrap');
  heroEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });

});