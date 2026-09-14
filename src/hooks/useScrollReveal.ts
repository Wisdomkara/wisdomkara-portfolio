import { RefObject, useEffect } from 'react';

/** Reversible viewport reveals; content remains visible without motion support. */
export function useScrollReveal(rootRef: RefObject<HTMLElement>, refreshKey: string) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(root.querySelectorAll<HTMLElement>(
      '.hero > div:first-child > *, .portrait-composition, .tool-strip, .section-heading, .project-card, .about-grid > div, .service, .experience-section > .eyebrow, .experience-section > h2, .experience-row, .contact-grid > *, .site-footer'
    ));
    const scaleElements = Array.from(root.querySelectorAll<HTMLElement>('[data-scroll-scale]'));

    function reset() {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove('scroll-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
      scaleElements.forEach(element => {
        element.style.removeProperty('--scroll-scale');
      });
    }

    function setup() {
      reset();
      if (preference.matches) return;

      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
          });
        }, { threshold: 0, rootMargin: '-3% 0px -4% 0px' });

        elements.forEach((element, index) => {
          element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
          element.classList.add('scroll-reveal');
          observer?.observe(element);
        });
      } else {
        elements.forEach(element => {
          element.classList.add('scroll-reveal', 'is-visible');
        });
      }
    }

    function updateScrollScale() {
      if (preference.matches) {
        scaleElements.forEach(element => element.style.setProperty('--scroll-scale', '1'));
        return;
      }

      const viewportHeight = window.innerHeight;
      scaleElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0), 1);
        const scale = 0.95 + progress * 0.08;
        element.style.setProperty('--scroll-scale', scale.toFixed(3));
      });
    }

    setup();
    updateScrollScale();
    window.addEventListener('scroll', updateScrollScale, { passive: true });
    preference.addEventListener('change', setup);

    return () => {
      reset();
      window.removeEventListener('scroll', updateScrollScale);
      preference.removeEventListener('change', setup);
    };
  }, [rootRef, refreshKey]);
}
