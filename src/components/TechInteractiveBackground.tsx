"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export function TechInteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    active: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];

    const getParticleCount = () => {
      if (window.innerWidth < 640) return 42;
      if (window.innerWidth < 1024) return 64;
      return 88;
    };

    const createParticles = () => {
      particles = Array.from({ length: getParticleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        size: Math.random() * 1.3 + 0.7
      }));
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      createParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const connectDistance = width < 640 ? 110 : 155;
      const repelDistance = width < 640 ? 100 : 150;

      for (const particle of particles) {
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelDistance && distance > 0) {
            const force = (repelDistance - distance) / repelDistance;
            const angle = Math.atan2(dy, dx);

            particle.vx += Math.cos(angle) * force * 0.07;
            particle.vy += Math.sin(angle) * force * 0.07;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.986;
        particle.vy *= 0.986;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            const opacity = 1 - distance / connectDistance;

            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(215, 255, 114, ${opacity * 0.12})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      if (mouse.active) {
        for (const particle of particles) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 210) {
            const opacity = 1 - distance / 210;

            context.beginPath();
            context.moveTo(mouse.x, mouse.y);
            context.lineTo(particle.x, particle.y);
            context.strokeStyle = `rgba(143, 119, 255, ${opacity * 0.18})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        const glow = context.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          190
        );

        glow.addColorStop(0, "rgba(215, 255, 114, 0.09)");
        glow.addColorStop(0.5, "rgba(143, 119, 255, 0.07)");
        glow.addColorStop(1, "rgba(143, 119, 255, 0)");

        context.beginPath();
        context.arc(mouse.x, mouse.y, 190, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.fill();
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(244, 242, 234, 0.34)";
        context.fill();
      }

      frame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas className="tech-network-canvas" ref={canvasRef} />;
}