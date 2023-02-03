import { useEffect, useState } from 'react';

export function useToggleNavOnResize() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isNavOpenMobile, setNavOpenMobile] = useState(false);
  const [isNavOpenDesktop, setNavOpenDesktop] = useState(false);
  const [isNavOpenTablet, setNavOpenTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setNavOpenMobile(true);
      setNavOpenDesktop(false);
      setNavOpenTablet(false);
    } else if (window.innerWidth <= 1024) {
      setNavOpenMobile(false);
      setNavOpenDesktop(false);
      setNavOpenTablet(true);
    } else {
      setNavOpenMobile(false);
      setNavOpenDesktop(true);
      setNavOpenTablet(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isNavOpen, setNavOpen, isNavOpenMobile, isNavOpenDesktop, isNavOpenTablet };
}
