import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  const sectionIdsString = JSON.stringify(sectionIds);

  useEffect(() => {
    // Track visibility of each section
    const sectionVisibility = new Map<string, number>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionVisibility.set(entry.target.id, entry.intersectionRatio);
      });

      // Find the section with the highest visibility
      let maxRatio = 0;
      let mostVisibleSection = '';

      sectionVisibility.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection((prev) => (prev !== mostVisibleSection ? mostVisibleSection : prev));
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIdsString]); 


  return activeSection;
}
