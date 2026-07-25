import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export function MouseCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let animId: number;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      setPosition({ x: clientX, y: clientY });
      setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
        setIsHovered(isInteractive);
      }

      // Spawn subtle particle trail
      if (Math.random() > 0.4) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: clientX + (Math.random() * 8 - 4),
          y: clientY + (Math.random() * 8 - 4),
          size: Math.random() * 5 + 3,
          opacity: 0.8,
        };
        setParticles((prev) => [...prev.slice(-12), newParticle]);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('touchstart', handlePointerMove);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the outer circle follower
    const loop = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));

      // Fade particles over time
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.04, size: p.size * 0.94 }))
          .filter((p) => p.opacity > 0.05)
      );

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible && particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Particle Trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-amber-400 to-amber-600 blur-[1px] transition-opacity duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Outer Smooth Following Ring */}
      <div
        className={`absolute rounded-full border border-amber-500/60 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-transform duration-100 ease-out ${
          isHovered
            ? 'scale-150 border-amber-400 bg-amber-400/20 shadow-[0_0_30px_rgba(245,158,11,0.6)]'
            : isClicked
            ? 'scale-75 border-amber-300 bg-amber-500/30'
            : 'scale-100'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: '38px',
          height: '38px',
          transform: `translate(-50%, -50%) ${
            isHovered ? 'scale(1.6)' : isClicked ? 'scale(0.7)' : 'scale(1)'
          }`,
        }}
      />

      {/* Inner Precision Cursor Dot */}
      <div
        className={`absolute rounded-full bg-amber-400 shadow-[0_0_12px_#f59e0b] transition-transform duration-75 ${
          isHovered ? 'scale-125 bg-amber-300' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
