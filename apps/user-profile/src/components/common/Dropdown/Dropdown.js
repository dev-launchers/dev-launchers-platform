import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@devlaunchers/components/components/DropdownMenu';
function Dropdown(menuItems = []) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild size="large">
        <div className="group">{person.country || 'Country'}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="large">
        {menuItems.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onSelect={() => onCountryChange(item.name)}
          >
            <button aria-label="fake-anchor">{item.name}</button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropdownMenu;
