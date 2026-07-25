import React, { useEffect, useRef } from 'react';

export const Canvas3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for interactive physics
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // 1. Constellation Mesh Nodes
    const nodeCount = Math.min(Math.floor((width * height) / 14000), 75);
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      baseRadius: number;
      color: string;
    }> = [];

    const goldColors = [
      'rgba(245, 158, 11, ',  // Amber 500
      'rgba(249, 115, 22, ',  // Orange 500
      'rgba(251, 191, 36, ',  // Amber 400
      'rgba(217, 119, 6, ',   // Amber 600
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 400 + 50,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.2,
        baseRadius: Math.random() * 2 + 1,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    // 2. Flowing Wave Particle Stream (Video FX Simulation)
    const streamParticleCount = 120;
    const streamParticles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
      offset: number;
      opacity: number;
      color: string;
    }> = [];

    for (let i = 0; i < streamParticleCount; i++) {
      streamParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 1.2 + 0.3,
        size: Math.random() * 2.5 + 0.8,
        offset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.6 + 0.2,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    // 3. Floating Bokeh Orbs
    const bokehCount = 18;
    const bokehs: Array<{
      x: number;
      y: number;
      radius: number;
      vy: number;
      pulseSpeed: number;
      alpha: number;
      maxAlpha: number;
    }> = [];

    for (let i = 0; i < bokehCount; i++) {
      bokehs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 35 + 15,
        vy: -(Math.random() * 0.3 + 0.1),
        pulseSpeed: Math.random() * 0.02 + 0.005,
        alpha: Math.random() * 0.15,
        maxAlpha: Math.random() * 0.2 + 0.08,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // --- LAYER 1: Soft Floating Bokeh Video Orbs ---
      bokehs.forEach((b) => {
        b.y += b.vy;
        if (b.y < -b.radius * 2) {
          b.y = height + b.radius * 2;
          b.x = Math.random() * width;
        }

        b.alpha = (Math.sin(time * b.pulseSpeed * 10) + 1) * 0.5 * b.maxAlpha;

        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        gradient.addColorStop(0, `rgba(245, 158, 11, ${b.alpha.toFixed(3)})`);
        gradient.addColorStop(0.5, `rgba(249, 115, 22, ${(b.alpha * 0.4).toFixed(3)})`);
        gradient.addColorStop(1, 'rgba(10, 10, 11, 0)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // --- LAYER 2: Fluid Particle Video Waves (Sine Stream) ---
      for (let i = 0; i < streamParticles.length; i++) {
        const p = streamParticles[i];
        p.x += p.speed;
        p.y += Math.sin(time + p.offset + p.x * 0.003) * 0.8;

        if (p.x > width + 20) {
          p.x = -20;
          p.y = Math.random() * height;
        }

        // Mouse influence on wave particles
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - dist) / 150;
            p.x -= Math.cos(angle) * force * 3;
            p.y -= Math.sin(angle) * force * 3;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity.toFixed(2)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.6)';
        ctx.fill();
      }

      // --- LAYER 3: 3D Constellation Mesh & Connected Nodes ---
      const perspective = 350;
      const projectedNodes: Array<{ x: number; y: number; scale: number; alpha: number; color: string }> = [];

      nodes.forEach((node) => {
        // Move nodes gently
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Wrap around boundaries
        if (node.x > width + 50) node.x = -50;
        if (node.x < -50) node.x = width + 50;
        if (node.y > height + 50) node.y = -50;
        if (node.y < -50) node.y = height + 50;
        if (node.z > 500) node.z = 50;
        if (node.z < 50) node.z = 500;

        // Interactive mouse force
        if (mouse.isHovered) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            node.x += (dx / dist) * force * 1.5;
            node.y += (dy / dist) * force * 1.5;
          }
        }

        const scale = perspective / (perspective + node.z);
        const alpha = Math.min(Math.max((500 - node.z) / 450, 0.15), 0.85);

        projectedNodes.push({
          x: node.x,
          y: node.y,
          scale,
          alpha,
          color: node.color,
        });

        // Draw particle node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.baseRadius * scale * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${alpha.toFixed(2)})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.fill();
      });

      // Draw laser constellation connection lines
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = ((1 - dist / 130) * 0.22 * Math.min(p1.alpha, p2.alpha)).toFixed(2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * Math.min(p1.scale, p2.scale);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Canvas rendering high performance 60fps 3D particle video physics */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-70"
      />

      {/* Atmospheric Video Flare Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(249,115,22,0.05)_50%,rgba(10,10,11,0.95)_100%)] pointer-events-none" />

      {/* Subdued ambient glowing light core */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
};
