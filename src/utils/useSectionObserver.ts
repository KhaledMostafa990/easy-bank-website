import { useEffect } from 'react';

export function useNavSectionObserver(navList: string[]) {
  useEffect(() => {
    // Observing sections to change active layout on scroll
    const observer = Observer();

    navList.forEach((item: HTMLElement | any) => {
      const sections = document.querySelectorAll(`[data-section="${item}"]`);
      sections.forEach((section) => section && observer.observe(section));
    });
  }, []);
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
  const intersectingAtrr = entry.target.getAttribute('data-section');
  const links = document.querySelectorAll(`a[href="#${intersectingAtrr}"]`);

  links.forEach((link) => {
    // toggle in/out view active
    if (!entry.isIntersecting) {
      link.classList.remove('active');
    } else {
      link.classList.add('active');
    }

    // move to the section realted to the clicked link
    link.addEventListener('click', () => {
      entry.target.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    });
  });
}
