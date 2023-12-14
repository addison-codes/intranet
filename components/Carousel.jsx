'use client';

import { Carousel } from 'flowbite-react';
import React from 'react';

function ReviewCarousel() {
  return (
    <div className="h-56">
      <Carousel pauseOnHover slideInterval={4000}>
        <img src="/reviews/1.png" alt="..." />
        <img src="/reviews/2.png" alt="..." />
        <img src="/reviews/3.png" alt="..." />
        <img src="/reviews/4.png" alt="..." />
        <img src="/reviews/5.png" alt="..." />
        <img src="/reviews/6.png" alt="..." />
      </Carousel>
    </div>
  );
}

export default ReviewCarousel;