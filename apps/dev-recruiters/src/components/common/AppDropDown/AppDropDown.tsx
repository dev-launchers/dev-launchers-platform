import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  Toggle,
  Title,
  Icon,
  ContentContainer,
} from './StyledDropDown';

interface Props {
  title: string;
  children: React.ReactElement;
}

export default function AppDropDown({ title, children }: Props) {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useOutsideClick(node, handleCloseMenu);
  return (
    <Wrapper ref={node}>
      <Toggle type='button' onClick={() => setIsOpen((prev) => !prev)}>
        <Title>{title}</Title>
        <Icon viewBox='0 0 24 24' height={24} width={24}>
          <polyline
            points={isOpen ? '6 15 12 9 18 15' : '6 9 12 15 18 9'}
            stroke='black'
          ></polyline>
        </Icon>
      </Toggle>
      <ContentContainer isOpen={isOpen}>{children}</ContentContainer>
    </Wrapper>
  );
}

/**
 * Check of outside clicks
 * @param callback a callback function to execute when an outside click is detected
 */

function useOutsideClick(ref: MutableRefObject<any>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
}
