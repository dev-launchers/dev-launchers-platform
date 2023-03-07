import React, { useEffect, useState, useRef } from "react";
import { Wrapper, Toggle, Rooms } from "./StyledDropdownButton";

const DropdownButton = ({ toggleBtnText, dropdownItems, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) return;
    // outside click
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Wrapper ref={node} className={className}>
      <Toggle
        onClick={() => setMenuOpen(!menuOpen)}
        as="button"
        fontSize="1.2rem"
      >
        {toggleBtnText}
      </Toggle>
      <Rooms isOpen={menuOpen}>
        <>{dropdownItems}</>
      </Rooms>
    </Wrapper>
  );
};

export default DropdownButton;
