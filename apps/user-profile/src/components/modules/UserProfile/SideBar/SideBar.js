import React from 'react';

const Sidebar = () => {
  return (
    <nav className="h-full w-64 bg-black fixed sticky top-100 left-0 overflow-y-auto self-start  col-span-1">
      <div className="p-4">
        <ul className="mt-4">
          <li className="text-white">Link 1</li>
          <li className="text-white">Link 2</li>
          <li className="text-white">Link 3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
