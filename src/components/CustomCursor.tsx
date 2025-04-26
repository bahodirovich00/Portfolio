import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setHidden(false);
      
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseDown = () => setClicked(true);
      const handleMouseUp = () => setClicked(false);
      
      const handleLinkHoverStart = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('cursor-pointer')
        ) {
          setLinkHovered(true);
        }
      };
      
      const handleLinkHoverEnd = () => {
        setLinkHovered(false);
      };
      
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseover', handleLinkHoverStart);
      document.addEventListener('mouseout', handleLinkHoverEnd);
      
      return () => {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseover', handleLinkHoverStart);
        document.removeEventListener('mouseout', handleLinkHoverEnd);
      };
    }
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className="custom-cursor w-4 h-4 rounded-full bg-accent-950 transition-transform duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.7 : 1}) ${linkHovered ? 'scale(1.5)' : ''}`,
          opacity: 0.7,
        }}
      />
      <div
        className="custom-cursor w-10 h-10 rounded-full border-2 border-accent-950 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : 1}) ${linkHovered ? 'scale(1.5)' : ''}`,
          opacity: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;