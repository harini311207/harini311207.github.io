/**
 * Harini N - Slider Engine
 * Controls full-viewport sliding transitions, wheel debounce, touch swipe,
 * keyboard shortcuts, slide indicators, top progress bar, and active link states.
 */

class SuperSlider {
  constructor() {
    this.viewport = document.getElementById('slider-viewport');
    this.track = document.getElementById('slider-track');
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.indicators = Array.from(document.querySelectorAll('.indicator-item'));
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
    this.counterDisplay = document.getElementById('slide-counter-display');
    this.prevBtn = document.getElementById('slider-prev-btn');
    this.nextBtn = document.getElementById('slider-next-btn');
    this.progressBar = document.getElementById('slide-progress-bar');

    this.currentIndex = 0;
    this.totalSlides = this.slides.length || 9;
    this.isAnimating = false;
    this.debounceTime = 550; // ms to prevent rapid accidental skipping
    this.touchStartY = 0;
    this.touchStartX = 0;

    this.slideIds = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'achievements',
      'learning',
      'resume',
      'contact'
    ];

    this.init();
  }

  init() {
    // Check initial hash in URL
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const targetIdx = this.slideIds.indexOf(hash);
    if (targetIdx !== -1) {
      this.currentIndex = targetIdx;
    }

    this.updateUI(false);
    this.bindEvents();

    // Store instance on window for global accessibility
    window.SuperSliderInstance = this;
  }

  bindEvents() {
    // 1. Mousewheel with rate-limiting debounce
    window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

    // 2. Keyboard Navigation
    window.addEventListener('keydown', (e) => this.handleKeydown(e));

    // 3. Touch Swipe Handling
    if (this.viewport) {
      this.viewport.addEventListener('touchstart', (e) => {
        this.touchStartY = e.touches[0].clientY;
        this.touchStartX = e.touches[0].clientX;
      }, { passive: true });

      this.viewport.addEventListener('touchend', (e) => {
        if (!this.touchStartY || !this.touchStartX) return;
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndX = e.changedTouches[0].clientX;
        const diffY = this.touchStartY - touchEndY;
        const diffX = this.touchStartX - touchEndX;

        // Dominant vertical swipe with at least 45px delta
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 45) {
          if (diffY > 0) {
            this.goToSlide(this.currentIndex + 1);
          } else {
            this.goToSlide(this.currentIndex - 1);
          }
        } else if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
            this.goToSlide(this.currentIndex + 1);
          } else {
            this.goToSlide(this.currentIndex - 1);
          }
        }

        this.touchStartY = 0;
        this.touchStartX = 0;
      }, { passive: true });
    }

    // 4. Side Indicators click
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    // 5. Navigation Links click
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target') || link.getAttribute('href').replace('#', '');
        const targetIdx = this.slideIds.indexOf(targetId);
        if (targetIdx !== -1) {
          this.goToSlide(targetIdx);
        }
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-links-menu');
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          if (mobileToggle) {
            mobileToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
          }
        }
      });
    });

    // 6. Any in-page jump links (e.g. Hero buttons: View Projects, View Resume, Contact Me)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      // Exclude nav links already bound
      if (anchor.classList.contains('nav-link')) return;

      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href').replace('#', '').toLowerCase();
        const targetIdx = this.slideIds.indexOf(href);
        if (targetIdx !== -1) {
          e.preventDefault();
          this.goToSlide(targetIdx);
        }
      });
    });

    // 7. Bottom arrow buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.goToSlide(this.currentIndex - 1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.goToSlide(this.currentIndex + 1));
    }

    // 8. Window resize
    window.addEventListener('resize', () => {
      this.updateSlidePosition(false);
    });

    // 9. Popstate (browser back/forward)
    window.addEventListener('popstate', () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const targetIdx = this.slideIds.indexOf(hash);
      if (targetIdx !== -1 && targetIdx !== this.currentIndex) {
        this.goToSlide(targetIdx, false);
      }
    });
  }

  handleWheel(e) {
    // If the event target is inside an element that has inner scroll, check scroll boundaries
    const currentSlide = this.slides[this.currentIndex];
    if (currentSlide) {
      const isScrollable = currentSlide.scrollHeight > currentSlide.clientHeight;
      if (isScrollable) {
        const atTop = currentSlide.scrollTop <= 5;
        const atBottom = currentSlide.scrollHeight - currentSlide.scrollTop - currentSlide.clientHeight <= 5;

        if (e.deltaY > 0 && !atBottom) {
          return; // Allow natural inner scroll down
        }
        if (e.deltaY < 0 && !atTop) {
          return; // Allow natural inner scroll up
        }
      }
    }

    e.preventDefault();

    if (this.isAnimating) return;

    if (e.deltaY > 25) {
      this.goToSlide(this.currentIndex + 1);
    } else if (e.deltaY < -25) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  handleKeydown(e) {
    // Ignore keystrokes if focused inside form input or textarea
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case 'PageDown':
        e.preventDefault();
        this.goToSlide(this.currentIndex + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        this.goToSlide(this.currentIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        this.goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        this.goToSlide(this.totalSlides - 1);
        break;
      default:
        break;
    }
  }

  goToSlide(index, updateHistory = true) {
    if (index < 0 || index >= this.totalSlides || index === this.currentIndex || this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    this.currentIndex = index;

    this.updateUI(true);

    if (updateHistory) {
      const currentId = this.slideIds[this.currentIndex];
      history.pushState(null, '', `#${currentId}`);
    }

    setTimeout(() => {
      this.isAnimating = false;
    }, this.debounceTime);
  }

  updateUI(animate = true) {
    this.updateSlidePosition(animate);
    this.updateIndicators();
    this.updateNavLinks();
    this.updateControls();
    this.updateProgressBar();
  }

  updateSlidePosition(animate = true) {
    if (!this.track) return;
    this.track.style.transition = animate ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
    const translateY = -(this.currentIndex * 100);
    this.track.style.transform = `translateY(${translateY}vh)`;
  }

  updateIndicators() {
    this.indicators.forEach((indicator, idx) => {
      if (idx === this.currentIndex) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', 'step');
      } else {
        indicator.classList.remove('active');
        indicator.removeAttribute('aria-current');
      }
    });
  }

  updateNavLinks() {
    const currentId = this.slideIds[this.currentIndex];
    this.navLinks.forEach((link) => {
      const targetId = link.getAttribute('data-target') || link.getAttribute('href').replace('#', '');
      if (targetId === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  updateControls() {
    if (this.counterDisplay) {
      const formattedCurrent = String(this.currentIndex + 1).padStart(2, '0');
      const formattedTotal = String(this.totalSlides).padStart(2, '0');
      this.counterDisplay.textContent = `${formattedCurrent} / ${formattedTotal}`;
    }

    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
    }
  }

  updateProgressBar() {
    if (this.progressBar) {
      const percentage = ((this.currentIndex + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${percentage}%`;
    }
  }
}

// Attach to window
window.SuperSlider = SuperSlider;
