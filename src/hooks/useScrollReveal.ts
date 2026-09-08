import { RefObject, useEffect } from 'react';

/** Reversible viewport reveals; content remains visible without motion support. */
export function useScrollReveal(rootRef: RefObject<HTMLElement>, refreshKey: string) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(root.querySelectorAll<HTMLElement>(
      '.hero > div:first-child > *, .portrait-composition, .tool-strip, .section-heading, .project-card, .about-grid > div, .service, .experience-section > .eyebrow, .experience-section > h2, .experience-row, .contact-grid > *, .site-footer'
    ));
    function reset() {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove('scroll-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    }
    function setup() {
      reset();
      if (preference.matches) return;
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
    }
    setup();
    preference.addEventListener('change', setup);
    return () => {
      reset();
      preference.removeEventListener('change', setup);
    };
  }, [rootRef, refreshKey]);
}
