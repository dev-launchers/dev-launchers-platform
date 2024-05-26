import { useLayoutEffect, useState } from 'react';
import { useTheme } from 'styled-components';

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const theme = useTheme();
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < theme.breakpoints.md);
      setIsDesktop(window.innerWidth > theme.breakpoints.lg);
    };
    window.addEventListener('resize', updateSize);
    window.dispatchEvent(new Event('resize'));
    return () => window.removeEventListener('resize', updateSize);
  }, [theme.breakpoints.lg, theme.breakpoints.md]);

  return { isMobile, isDesktop };
};

export default useResponsive;
