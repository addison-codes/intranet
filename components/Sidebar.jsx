/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Pathways from './Pathways';
import Links from './Links';
import Policies from './Policies';

const Sidebar = () => {
  return (
    <div className='col-span-1 row-span-1 sm:col-span-1 bg-gray-300 p-4'>
      <Pathways />
      <Links />
    </div>
  );
};

export default Sidebar;
