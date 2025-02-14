import React, { useState, useEffect } from 'react';

const ScrollingImageContainer: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        src="{ MeetingImage }"
        alt="Scrolling Image"
        className="absolute top-0 left-0 w-full h-auto"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`, // Adjust multiplier for effect
        }}
      />
    </div>
  );
};

export default ScrollingImageContainer;
