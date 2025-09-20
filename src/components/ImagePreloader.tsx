import { useEffect } from 'react';

const ImagePreloader = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/heroSection-Ovelha-desktop.webp',
      '/heroSection-Ovelha-tablet.webp', 
      '/heroSection-Ovelha-mobile.webp'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => {
        if (criticalImages.includes(link.getAttribute('href') || '')) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null;
};

export default ImagePreloader;