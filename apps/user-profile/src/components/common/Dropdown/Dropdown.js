import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@devlaunchers/components/components/DropdownMenu';
import Chevron from './../../common/Icons/SVG/FilledChevron';
function DropDownMenu({ menuItems = [], menu, onChange }) {
  return (
    <DropdownMenu>
      <p className="text-xs leading-4 block w-full box-border font-normal pd-3">
        {menu}
      </p>
      <DropdownMenuTrigger asChild size="100%">
        <div className="group">
          <p>
            {' '}
            <Chevron
              point="down"
              colorClass="fill-white"
              className="mr-5"
            />{' '}
            {menu || 'Select...'}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="large">
        {menuItems.map((item) => {
          // Validate the item before rendering
          if (!item || item == '' || item == undefined) {
            console.warn('Invalid menu item:', item);
            return null;
          }

          return (
            <DropdownMenuItem
              key={item?.code}
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
