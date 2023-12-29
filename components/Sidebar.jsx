/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Pathways from './Pathways';
import Links from './Links';
import Policies from './EmployeeServices';
import MVV from './MVV';

const Sidebar = () => {
  return (
    <div className='col-span-1 row-span-1 p-4 bg-gray-300 sm:col-span-1'>
      <Pathways />
      <Links />
      <MVV />
    </div>
  );
};

export default Sidebar;
