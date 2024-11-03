import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@devlaunchers/components/components/DropdownMenu';
function DropDownMenu({ menuItems = [], menu, onChange }) {
  return (
    <DropdownMenu>
      <p className="text-xs leading-4 block w-full box-border font-normal pd-3">
        {menu}
      </p>
      <DropdownMenuTrigger asChild size="100%">
        <FilledChevron />
        <div className="group">{menu || 'Select...'}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="large">
        {menuItems.map((item) => {
          // Validate the item before rendering
          if (!item || typeof item !== 'object') {
            console.warn('Invalid menu item:', item);
            return null;
          }

          return (
            <DropdownMenuItem
              key={item.code ? item.code : 'item-${Math.random()}'}
              onSelect={() => onChange(item?.name)}
            >
              <button aria-label="fake-anchor">{item?.name}</button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropDownMenu;
