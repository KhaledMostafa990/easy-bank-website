import { useEffect } from 'react';

export function useNavSectionObserver(navList: string[]) {
  useEffect(() => {
    // Observing sections to change active layout on scroll
    const observer = Observer();

    navList.forEach((item: HTMLElement | any) => {
      const sections = document.querySelectorAll(`[data-section="${item}"]`);

      sections.forEach((section) => {
        const linkToSection = document.querySelector(
          `a[href="#${section.getAttribute('data-section')}"]`
        );

        linkToSection?.addEventListener('click', (e) => {
          e.preventDefault();
          section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        });

        observer.observe(section);
      });
    });
  }, [navList]);
}

function Observer() {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, idx) => {
        toggleActiveSection(entry);
      });
    },
    { threshold: [0.35] }
  );
}

function toggleActiveSection(entry: any) {
  // toggle in/out view active
  const linkToSection = document.querySelector(
    `a[href="#${entry.target.getAttribute('data-section')}"]`
  );

  if (entry.isIntersecting) {
    linkToSection?.classList.add('active');
  } else if (!entry.isIntersecting) {
    linkToSection?.classList.remove('active');
  }
}
