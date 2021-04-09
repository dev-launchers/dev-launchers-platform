import React, { useEffect, useState, useRef } from "react";
import { Wrapper, Toggle, Rooms } from "./StyledDropdown";

const Dropdown = ({ toggleBtnText, dropdownItems, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();

  const handleClickOutside = e => {
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
        onClick={e => setMenuOpen(!menuOpen)}
        as="button"
        fontSize="1.2rem"
      >
        {toggleBtnText}
      </Toggle>
      <Rooms isOpen={menuOpen}>{dropdownItems}</Rooms>
    </Wrapper>
  );
};

export default Dropdown;
