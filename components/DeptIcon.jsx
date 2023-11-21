import Image from 'next/image';
import React from 'react';


const DeptIcon = ({ name, link, image, width, tab }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={link}
      className={`flex flex-col justify-center pb-2 align-middle transition-all hover:scale-110 no-underline ${width ? `sm:w-${width}` : 'w-48'
        }`}
      target={tab ? '_blank' : ''}
      rel={tab ? 'noreferrer' : ''}
    >
      <div className='mx-auto mb-2'>
        <Image
          src={`/icons/intranet-icons_icon-${image}.png`}
          width={100}
          height={100}
          alt={name}
        />
      </div>
      <h4 className='text-lg font-bold text-black no-underline text-center'>{name}</h4>
    </a>
  );
};

export default DeptIcon;
