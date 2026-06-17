"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
};

export function InteractiveBackground() {
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

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const particleCount = () => {
      if (window.innerWidth < 640) return 38;
      if (window.innerWidth < 1024) return 58;
      return 100;
    };

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles = Array.from({ length: particleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        baseSize: Math.random() * 1.4 + 0.7
      }));
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
      const connectDistance = width < 640 ? 115 : 155;
      const repelDistance = width < 640 ? 105 : 145;

      for (const particle of particles) {
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelDistance && distance > 0) {
            const force = (repelDistance - distance) / repelDistance;
            const angle = Math.atan2(dy, dx);

            particle.vx += Math.cos(angle) * force * 0.08;
            particle.vy += Math.sin(angle) * force * 0.08;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.985;
        particle.vy *= 0.985;

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

        const gradient = context.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180
        );

        gradient.addColorStop(0, "rgba(215, 255, 114, 0.12)");
        gradient.addColorStop(0.5, "rgba(143, 119, 255, 0.08)");
        gradient.addColorStop(1, "rgba(143, 119, 255, 0)");

        context.beginPath();
        context.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.baseSize, 0, Math.PI * 2);
        context.fillStyle = "rgba(244, 242, 234, 0.34)";
        context.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
  <canvas
    className="fd-network-canvas tech-shared-network-canvas"
    ref={canvasRef}
  />
);
}