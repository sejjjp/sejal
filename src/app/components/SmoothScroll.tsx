import { useEffect } from 'react';

export function SmoothScrollHandler() {
  useEffect(() => {
    // Handle smooth scrolling for all anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          const targetId = href.substring(1);
          
          if (href === '#home' || href === '#' || !targetId) {
            // Scroll to top for home link
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          } else {
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              // Use native scrollIntoView which respects scroll-padding-top
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
