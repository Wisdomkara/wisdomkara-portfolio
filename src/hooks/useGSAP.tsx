
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    if (element) {
      // Entrance animation
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return elementRef;
};

export const useMouseFollowAnimation = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll('.mouse-blob');
      blobs.forEach((blob, index) => {
        gsap.to(blob, {
          x: e.clientX - 50 + (index * 20),
          y: e.clientY - 50 + (index * 20),
          duration: 0.3 + (index * 0.1),
          ease: "power2.out"
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};
