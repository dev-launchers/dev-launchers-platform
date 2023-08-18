import debounce from 'lodash/debounce';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useTheme } from 'styled-components';

export function useResponsive() {
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
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return { isMobile, isDesktop };
};
