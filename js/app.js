/**
 * Harini N - Main Application Controller
 * Handles Theme Toggling, Mobile Menu, Contact Submission, Email Copying,
 * and Toast Notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Slider Engine
  const slider = new SuperSlider();

  // 2. Initialize Theme (Dark default, persisted via localStorage)
  initTheme();

  // 3. Initialize Mobile Navigation Menu
  initMobileMenu();

  // 4. Initialize Contact Form & Email Copying
  initContactForm();

  // 5. Update Dynamic Year in Footer
  initFooterYear();
});

/* ==========================================================================
   THEME TOGGLER (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('harini_portfolio_theme') || 'dark';

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('harini_portfolio_theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fas fa-moon';
        themeIcon.setAttribute('aria-label', 'Switch to Dark Mode');
      } else {
        themeIcon.className = 'fas fa-sun';
        themeIcon.setAttribute('aria-label', 'Switch to Light Mode');
      }
    }
  }
}

/* ==========================================================================
   MOBILE MENU TOGGLER
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-links-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }
}

/* ==========================================================================
   CONTACT FORM & EMAIL COPY
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  const statusMsg = document.getElementById('form-status-msg');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // 1. 1-Click Email Copy
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'harining205@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard: ' + email);
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Email copied to clipboard: ' + email);
      }
    });
  }

  // 2. Direct Message Form
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Reset previous status
      statusMsg.className = 'form-status-msg';
      statusMsg.textContent = '';

      if (!name || !email || !message) {
        statusMsg.className = 'form-status-msg error';
        statusMsg.textContent = 'Please fill out all fields before sending.';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        statusMsg.className = 'form-status-msg error';
        statusMsg.textContent = 'Please provide a valid email address.';
        return;
      }

      // Compose mailto
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Hi Harini,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
      );
      const mailtoUrl = `mailto:harining205@gmail.com?subject=${subject}&body=${body}`;

      statusMsg.className = 'form-status-msg success';
      statusMsg.textContent = 'Opening your email client to send message...';

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);

      contactForm.reset();
    });
  }
}

/* ==========================================================================
   DYNAMIC YEAR
   ========================================================================== */
function initFooterYear() {
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> <span>${message}</span>`;
  toast.classList.add('show');

  if (window.toastTimer) clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Global expose
window.showToast = showToast;
