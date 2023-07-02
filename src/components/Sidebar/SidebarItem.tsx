import React from 'react';

const SidebarItem = ({ label = 'Menu', Icon }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative hidden w-full cursor-pointer flex-row items-center gap-4 rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:flex">
        <Icon size={24} color="white" />
        <p className="hidden text-xl text-white lg:block">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
