/**
 * KYMER ORIEL CRISOSTOMO - WIREFRAME & DESIGN SPEC CHECKING LOGIC
 * Dedicated Inspector Script for wireframes.html
 */

document.addEventListener('DOMContentLoaded', () => {
  initViewportSwitcher();
  initColorCopy();
  initRubricChecklist();
  initPrintButton();
});

/* Viewport Device Switcher */
function initViewportSwitcher() {
  const deviceButtons = document.querySelectorAll('.device-btn');
  const frame = document.getElementById('preview-frame');

  if (!frame) return;

  const deviceWidths = {
    desktop: '1200px',
    tablet: '768px',
    mobile: '375px'
  };

  deviceButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      deviceButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const device = btn.getAttribute('data-device');
      frame.style.maxWidth = deviceWidths[device] || '100%';
      
      if (window.showToast) {
        window.showToast(`Viewport set to ${device.toUpperCase()} (${deviceWidths[device]})`);
      }
    });
  });
}

/* One-Click Copy for Design System Color Swatches */
function initColorCopy() {
  const cards = document.querySelectorAll('.swatch-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-hex');
      const name = card.querySelector('.swatch-name')?.textContent || 'Color';
      if (hex) {
        navigator.clipboard.writeText(hex).then(() => {
          if (window.showToast) {
            window.showToast(`Copied ${name} (${hex}) to clipboard!`);
          }
        });
      }
    });
  });
}

/* Rubric & Checking Checklist Engine */
function initRubricChecklist() {
  const checkboxes = document.querySelectorAll('.rubric-check');
  const countEl = document.getElementById('checked-count');
  const totalEl = document.getElementById('total-count');
  const barEl = document.getElementById('rubric-bar');

  if (!checkboxes.length) return;

  const total = checkboxes.length;
  if (totalEl) totalEl.textContent = total;

  const updateProgress = () => {
    const checked = Array.from(checkboxes).filter((c) => c.checked).length;
    if (countEl) countEl.textContent = checked;
    if (barEl) {
      const percentage = (checked / total) * 100;
      barEl.style.width = `${percentage}%`;
    }

    // Save state to localStorage
    const states = Array.from(checkboxes).map((c) => c.checked);
    localStorage.setItem('kc-rubric-checks', JSON.stringify(states));

    if (checked === total && window.showToast) {
      window.showToast('🎉 All 7 wireframe & design rubric items checked! 100% Complete!', 'info');
    }
  };

  // Restore state if saved
  try {
    const saved = JSON.parse(localStorage.getItem('kc-rubric-checks') || '[]');
    if (Array.isArray(saved) && saved.length === total) {
      checkboxes.forEach((c, idx) => (c.checked = saved[idx]));
    }
  } catch (e) {
    // fallback
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener('change', updateProgress);
  });

  updateProgress();
}

/* Print / Export Report Button */
function initPrintButton() {
  const printBtn = document.getElementById('print-spec-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
