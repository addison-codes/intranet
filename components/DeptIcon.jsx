import Image from 'next/image';
import React from 'react';


const DeptIcon = ({ name, link, image, width, tab }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={link}
      className={`flex flex-col justify-center align-top transition-all hover:scale-110 no-underline ${width ? `sm:w-${width}` : 'w-1/2'
        }`}
      target={tab ? '_blank' : ''}
      rel={tab ? 'noreferrer' : ''}
    >
      <div className='mx-auto mb-2'>
        {/* <Image
          src={`/icons/intranet-icons_icon-${image}.png`}
          width={50}
          height={50}
          alt={name}
        /> */}
      </div>
      <h4 className='my-0 text-lg font-bold text-white no-underline'>{name}</h4>
    </a>
  );
};

export default DeptIcon;
