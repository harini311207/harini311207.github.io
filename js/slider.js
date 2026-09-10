/**
 * Harini N - Super Slider Engine
 * Controls full-viewport sliding transitions, wheel debounce, touch swipe,
 * keyboard shortcuts, slide indicators, and active link states.
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

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
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
  }

  bindEvents() {
    // 1. Mousewheel with rate-limiting debounce
    window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

    // 2. Keyboard Navigation
    window.addEventListener('keydown', (e) => this.handleKeydown(e));

    // 3. Touch Swipe Handling
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

      // Check if vertical or horizontal swipe is dominant with at least 45px distance
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 45) {
        if (diffY > 0) {
          this.goToSlide(this.currentIndex + 1);
        } else {
          this.goToSlide(this.currentIndex - 1);
        }
      } else if (Math.abs(diffX) > 45) {
        if (diffX > 0) {
          this.goToSlide(this.currentIndex + 1);
        } else {
          this.goToSlide(this.currentIndex - 1);
        }
      }

      this.touchStartY = 0;
      this.touchStartX = 0;
    }, { passive: true });

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
        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
        }
      });
    });

    // 6. Bottom arrow buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.goToSlide(this.currentIndex - 1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.goToSlide(this.currentIndex + 1));
    }

    // 7. Window resize
    window.addEventListener('resize', () => {
      this.updateSlidePosition(false);
    });

    // 8. Popstate (back/forward browser buttons)
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

    e.preventDefault();

    if (this.isAnimating) return;

    if (e.deltaY > 20) {
      this.goToSlide(this.currentIndex + 1);
    } else if (e.deltaY < -20) {
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
}

// Export / Attach to global window
window.SuperSlider = SuperSlider;
