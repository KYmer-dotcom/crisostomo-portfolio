/**
 * KYMER ORIEL CRISOSTOMO - PORTFOLIO INTERACTION ENGINE
 * Particle Canvas, ScrollSpy, Filters, Modals, Forms & Theme Management
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTheme();
  initNavigation();
  initProjectFilters();
  initProjectModals();
  initResumeModal();
  initContactForm();
  initBlueprintHUD();
  initKeyboardShortcuts();
});

/* ==========================================================================
   1. Interactive Particle / Mesh Hero Canvas
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 70);

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 20 + 1;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.color = Math.random() > 0.5 ? '#6366f1' : '#06b6d4';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = 0.5;
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interactive push
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * 5;
          const directionY = (dy / distance) * force * 5;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          const opacity = 1 - distance / 110;
          ctx.strokeStyle = '#6366f1';
          ctx.globalAlpha = opacity * 0.15;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].draw();
      particles[i].update();
    }
    connect();
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. Theme Switcher (Dark / Light)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('kc-portfolio-theme') || 'dark';

  if (storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon(true);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      playBeep(600, 0.05);
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('kc-portfolio-theme', 'dark');
        updateThemeIcon(false);
        showToast('Switched to Dark Mode');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('kc-portfolio-theme', 'light');
        updateThemeIcon(true);
        showToast('Switched to Light Mode');
      }
    });
  }

  function updateThemeIcon(isLight) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = isLight
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   3. Sticky Navigation & ScrollSpy
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }
}

/* ==========================================================================
   4. Project Filters & Dynamic Animation
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      playBeep(750, 0.04);
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Project Modals & Deep Dives
   ========================================================================== */
const projectDetails = {
  nexuscloud: {
    title: 'NexusCloud - DevOps Infrastructure Monitor',
    category: 'Full-Stack & Cloud Architecture',
    desc: 'An enterprise-grade distributed infrastructure observability dashboard. Features sub-second telemetry streams, real-time node health clustering, automated pod remediation triggers, and custom Prometheus-compatible metrics exporters.',
    tech: ['React 18', 'Node.js', 'Express', 'Docker', 'WebSockets', 'Chart.js', 'PostgreSQL'],
    features: [
      'Real-time WebSocket event ingestion pipeline handling 10k events/sec',
      'Interactive cluster topology canvas visualizing microservices health',
      'Automated threshold alerts with Slack and Webhook integrations',
      'Dark-mode glassmorphic interface with accessible high-contrast modes'
    ],
    github: 'https://github.com/KYmer-dotcom/crisostomo-portfolio',
    demo: '#'
  },
  auraflow: {
    title: 'AuraFlow - AI Collaborative Canvas',
    category: 'Frontend & Creative Tooling',
    desc: 'Infinite canvas workflow studio connecting generative AI models with node-based logic pipelines. Users can visually map prompts, sentiment analysis nodes, markdown inspectors, and multi-model chains in real time.',
    tech: ['TypeScript', 'WebGL', 'HTML5 Canvas', 'Tailwind/Vanilla CSS', 'Python Fast-API', 'OpenAI API'],
    features: [
      'Hardware-accelerated infinite 2D canvas with smooth pan, zoom, and multi-touch gestures',
      'Dynamic Bezier curve node connection system with collision detection',
      'Markdown live documentation inspector with syntax highlighting',
      'Real-time multi-user cursor synchronization over WebRTC'
    ],
    github: 'https://github.com/KYmer-dotcom/crisostomo-portfolio',
    demo: '#'
  },
  finpulse: {
    title: 'FinPulse - High-Frequency Trading Terminal',
    category: 'FinTech & Real-Time Systems',
    desc: 'A responsive financial trading terminal and crypto analytics platform. Delivers institutional-grade candlestick charts, live L2 order book depth ladders, market sentiment trackers, and instant paper trading simulation.',
    tech: ['Vanilla JavaScript (ES6+)', 'HTML5 Canvas API', 'CSS Grid', 'REST / Binance WebSocket API'],
    features: [
      'Custom lightweight 60 FPS HTML5 Canvas candlestick charting engine',
      'Real-time depth chart calculation with visual liquidity bid/ask walls',
      'Instant paper-trade order execution with local portfolio accounting',
      'Sub-50ms latency WebSocket market data processor'
    ],
    github: 'https://github.com/KYmer-dotcom/crisostomo-portfolio',
    demo: '#'
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const openButtons = document.querySelectorAll('.open-project-modal');

  if (!modal || !modalBody) return;

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetails[projectId];
      if (!data) return;

      playBeep(850, 0.05);

      modalBody.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent-secondary); margin-bottom: 8px;">
          ${data.category}
        </div>
        <h2 style="font-family: var(--font-heading); font-size: var(--text-2xl); font-weight: 800; margin-bottom: 16px; color: var(--text-primary);">
          ${data.title}
        </h2>
        <p style="color: var(--text-secondary); font-size: var(--text-base); line-height: 1.6; margin-bottom: 24px;">
          ${data.desc}
        </p>
        <h4 style="font-family: var(--font-heading); font-size: var(--text-md); font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">
          Key Architecture & Capabilities
        </h4>
        <ul style="list-style: square; padding-left: 20px; color: var(--text-secondary); font-size: var(--text-sm); line-height: 1.8; margin-bottom: 24px;">
          ${data.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
        <h4 style="font-family: var(--font-heading); font-size: var(--text-md); font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">
          Technologies Used
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;">
          ${data.tech.map((t) => `<span class="project-tag" style="background: var(--bg-tertiary); padding: 4px 10px; border-radius: 6px; font-size: 12px;">${t}</span>`).join('')}
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            View GitHub Repository
          </a>
          <a href="wireframes.html" class="btn btn-secondary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            Check Design Wireframes
          </a>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  const closeModal = () => modal.classList.remove('active');
  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ==========================================================================
   6. Resume Modal & Download
   ========================================================================== */
function initResumeModal() {
  const resumeBtn = document.getElementById('open-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const resumeClose = document.getElementById('resume-close-btn');
  const downloadBtn = document.getElementById('download-resume-btn');

  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      playBeep(700, 0.05);
      resumeModal.classList.add('active');
    });

    const close = () => resumeModal.classList.remove('active');
    resumeClose?.addEventListener('click', close);
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) close();
    });

    downloadBtn?.addEventListener('click', () => {
      showToast('Initiating Kymer Crisostomo CV Download (PDF)...');
      window.print();
    });
  }
}

/* ==========================================================================
   7. Contact Form Simulation & Live Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showToast('Please provide a valid email address.', 'error');
      return;
    }

    // Submit state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending Message...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      playBeep(900, 0.1);
      showToast('Thank you! Your message has been sent to Kymer Crisostomo.');
    }, 1200);
  });
}

/* ==========================================================================
   8. Blueprint / Wireframe Mode Toggle & HUD
   ========================================================================== */
function initBlueprintHUD() {
  const toggleBtns = document.querySelectorAll('.blueprint-toggle-btn');
  const isBlueprintActive = localStorage.getItem('kc-blueprint-mode') === 'true';

  if (isBlueprintActive) {
    document.body.classList.add('blueprint-mode');
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleBlueprintMode();
    });
  });

  // Create HUD element if not already in DOM
  if (!document.getElementById('blueprint-hud')) {
    const hud = document.createElement('div');
    hud.id = 'blueprint-hud';
    hud.className = 'blueprint-hud';
    hud.innerHTML = `
      <div class="blueprint-hud-header">
        <span>📐 BLUEPRINT HUD</span>
        <span style="font-size: 10px; opacity: 0.8;">[B] Toggle</span>
      </div>
      <div class="hud-item"><span class="hud-label">Viewport:</span><span class="hud-val" id="hud-viewport">1920 &times; 1080</span></div>
      <div class="hud-item"><span class="hud-label">Grid Layout:</span><span class="hud-val">12-Col Responsive</span></div>
      <div class="hud-item"><span class="hud-label">Current Section:</span><span class="hud-val" id="hud-section">#hero</span></div>
      <div class="hud-item"><span class="hud-label">DPR Ratio:</span><span class="hud-val">${window.devicePixelRatio || 1}x</span></div>
      <div style="margin-top: 6px; border-top: 1px dashed rgba(56, 189, 248, 0.3); padding-top: 6px;">
        <a href="wireframes.html" style="color: #38bdf8; text-decoration: none; font-weight: 700; font-size: 11px;">&rarr; Open Full Design Specs</a>
      </div>
    `;
    document.body.appendChild(hud);
  }

  // Live HUD updates
  const updateHUD = () => {
    const vp = document.getElementById('hud-viewport');
    if (vp) vp.textContent = `${window.innerWidth} × ${window.innerHeight}`;

    const sec = document.getElementById('hud-section');
    const sections = document.querySelectorAll('section[id]');
    let activeId = 'hero';
    sections.forEach((s) => {
      const rect = s.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        activeId = s.id;
      }
    });
    if (sec) sec.textContent = `#${activeId}`;
  };

  window.addEventListener('resize', updateHUD);
  window.addEventListener('scroll', updateHUD);
  updateHUD();
}

function toggleBlueprintMode() {
  playBeep(450, 0.08);
  const active = document.body.classList.toggle('blueprint-mode');
  localStorage.setItem('kc-blueprint-mode', active ? 'true' : 'false');
  if (active) {
    showToast('📐 Blueprint / Wireframe Mode Activated! [Press B to toggle]');
  } else {
    showToast('Blueprint Mode Deactivated');
  }
}

/* ==========================================================================
   9. Keyboard Shortcuts & Sound Engine (Web Audio API)
   ========================================================================== */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // Press 'B' outside of inputs to toggle blueprint mode
    if ((e.key === 'b' || e.key === 'B') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      toggleBlueprintMode();
    }
    // Press ESC to close any modal
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach((m) => m.classList.remove('active'));
    }
  });
}

// Synthetic Audio Micro-Interactions
function playBeep(freq = 600, duration = 0.05) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Silently continue if audio context is blocked
  }
}

/* ==========================================================================
   10. Toast Notification Helper
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.borderLeftColor = '#f43f5e';
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

window.showToast = showToast;
window.toggleBlueprintMode = toggleBlueprintMode;
