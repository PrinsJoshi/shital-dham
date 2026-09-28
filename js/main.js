/* ===================================================
   शीतल धाम — Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ─────────────────────── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ── Hamburger menu ───────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  /* ── Active nav link ──────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll-reveal animations ─────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

  /* ── Stats counter animation ──────────────────── */
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 25);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target || 0);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target], .hero-stat .num[data-target]').forEach(el => {
    statsObserver.observe(el);
  });

  /* ── Gallery filter ───────────────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ── Donate amount chips ──────────────────────── */
  document.querySelectorAll('.amount-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.amount-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
    });
  });

  /* ── Contact form (frontend only) ─────────────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        form.reset();
        document.querySelectorAll('.amount-chip').forEach(c => c.classList.remove('selected'));
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
      }
    });
  }

  /* ── Smooth scroll for anchor links ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
