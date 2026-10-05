import { useEffect, useRef } from 'react';

type Point = { x: number; y: number; z: number };

function fibonacciSphere(count: number): Point[] {
  const points: Point[] = [];
  const offset = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = i * offset;
    points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return points;
}

function ring(count: number, radius: number): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    points.push({ x: Math.cos(a) * radius, y: 0, z: Math.sin(a) * radius });
  }
  return points;
}

function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const sphere = fibonacciSphere(700);
    const orbit = ring(180, 1.6);
    const ringTilt = 0.45;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let mouseX = 0;
    let mouseY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / width - 0.5;
      mouseY = e.clientY / height - 0.5;
    };

    const project = (p: Point, rotY: number, rotX: number, scale: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const perspective = 3 / (3 + z2);
      return {
        x: width / 2 + x1 * scale * perspective,
        y: height / 2 + y1 * scale * perspective,
        z: z2,
        p: perspective,
      };
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      tiltX += (mouseY * 0.6 - tiltX) * 0.05;
      tiltY += (mouseX * 0.6 - tiltY) * 0.05;

      const scroll = window.scrollY * 0.0015;
      const rotY = time * 0.00015 + scroll + tiltY;
      const rotX = 0.3 + tiltX;
      const scale = Math.min(width, height) * 0.32;

      for (const pt of sphere) {
        const s = project(pt, rotY, rotX, scale);
        const alpha = 0.08 + ((1 - s.z) / 2) * 0.45;
        ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`;
        ctx.fillRect(s.x, s.y, 1.6 * s.p, 1.6 * s.p);
      }

      const orbitRot = -time * 0.0004;
      for (const pt of orbit) {
        const cos = Math.cos(ringTilt);
        const sin = Math.sin(ringTilt);
        const tilted = { x: pt.x, y: pt.y * cos - pt.z * sin, z: pt.y * sin + pt.z * cos };
        const s = project(tilted, rotY + orbitRot, rotX, scale);
        const alpha = 0.15 + ((1 - s.z / 1.6) / 2) * 0.6;
        ctx.fillStyle = `rgba(0, 221, 47, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.4 * s.p, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-3d" aria-hidden="true" />;
}

export default Scene3D;
