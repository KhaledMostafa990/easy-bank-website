import { RefObject, useEffect, useState } from 'react';

export function useheaderScrollHandler(headerRef: RefObject<HTMLElement>) {
  const [scrollLength, setsScrollLength] = useState<number>(0);
  const handleScroll = () => setsScrollLength(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (scrollLength < 55 || scrollLength === 0) {
    headerRef?.current?.classList?.remove('scrolled-down');
    headerRef?.current?.firstElementChild?.classList.remove('scrolled-down');
  } else {
    headerRef?.current?.classList?.add('scrolled-down');
    headerRef?.current?.firstElementChild?.classList.add('scrolled-down');
  }
}
