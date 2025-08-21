'use client';
import { useEffect, useState } from 'react';
import RingsCanvas from '../app/components/RingsCanvas';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <RingsCanvas scrollY={scrollY} />
      <main>
          content to come later, just setting up the scroll tracking
      </main>
    </>
  );
}
