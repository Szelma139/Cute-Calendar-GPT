import React from 'react';
import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import SidebarItem from './SidebarItem';

export const Sidebar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: '/users/1',
      auth: true,
    },
  ];

  return (
    <div className="h-full grid-cols-1 pr-4 md:pr-6">
      <div className="flex flex-col">
        <div className="space-y-2">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              auth={item.auth}
              href={item.href}
              Icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
