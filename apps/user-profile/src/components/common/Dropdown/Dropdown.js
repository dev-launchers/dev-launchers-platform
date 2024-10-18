import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@devlaunchers/components/components/DropdownMenu';
function DropDownMenu({ menuItems = [], country, onCountryChange }) {
  return (
    <DropdownMenu>
      <p className="text-xs leading-4 block w-full box-border font-normal pd-3">
        Country
      </p>
      <DropdownMenuTrigger asChild size="100%">
        <div className="group">{country || 'Select...'}</div>
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
export default DropDownMenu;
