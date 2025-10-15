'use client';

import { useEffect, useRef, useMemo } from 'react';

interface AnimatedGradientProps {
  className?: string;
}

interface ColorOrb {
  x: number;
  y: number;
  radius: number;
  color: { r: number; g: number; b: number; alpha: number };
  blur: number;
}

// ALL COLORS FLAT - STRONG & VIBRANT
const ALL_COLORS = [
  // Lights - BRIGHTER
  { r: 255, g: 255, b: 255, alpha: 1.0, type: 'light' },
  { r: 250, g: 250, b: 255, alpha: 1.0, type: 'light' },
  { r: 255, g: 250, b: 250, alpha: 1.0, type: 'light' },
  { r: 245, g: 245, b: 255, alpha: 1.0, type: 'light' },
  // Vibrants - STRONGER SATURATION & ALPHA
  { r: 255, g: 50, b: 220, alpha: 1.0, type: 'vibrant' },
  { r: 250, g: 60, b: 255, alpha: 1.0, type: 'vibrant' },
  { r: 80, g: 100, b: 255, alpha: 1.0, type: 'vibrant' },
  { r: 50, g: 140, b: 255, alpha: 1.0, type: 'vibrant' },
  { r: 80, g: 255, b: 220, alpha: 0.95, type: 'vibrant' },
  { r: 100, g: 255, b: 150, alpha: 0.95, type: 'vibrant' },
  { r: 255, g: 100, b: 80, alpha: 0.95, type: 'vibrant' },
  { r: 255, g: 70, b: 140, alpha: 1.0, type: 'vibrant' },
  { r: 170, g: 80, b: 255, alpha: 1.0, type: 'vibrant' },
  { r: 80, g: 180, b: 255, alpha: 1.0, type: 'vibrant' },
  { r: 255, g: 180, b: 70, alpha: 0.95, type: 'vibrant' },
  { r: 255, g: 120, b: 255, alpha: 1.0, type: 'vibrant' },
  // Darks - DEEPER
  { r: 5, g: 10, b: 30, alpha: 1.0, type: 'dark' },
  { r: 20, g: 10, b: 35, alpha: 1.0, type: 'dark' },
  { r: 10, g: 20, b: 15, alpha: 1.0, type: 'dark' },
  { r: 25, g: 10, b: 20, alpha: 1.0, type: 'dark' },
  { r: 10, g: 15, b: 35, alpha: 1.0, type: 'dark' },
  // Mediums - MORE SATURATED
  { r: 70, g: 80, b: 200, alpha: 0.95, type: 'medium' },
  { r: 160, g: 70, b: 200, alpha: 0.95, type: 'medium' },
  { r: 70, g: 160, b: 180, alpha: 0.9, type: 'medium' },
  { r: 200, g: 90, b: 150, alpha: 0.9, type: 'medium' },
];

const BASE_COLORS = ['#050a15', '#0a0d1a', '#0f0a1a', '#0a1215', '#120a15', '#08091a'];

// COMPLETELY RANDOM GENERATION
const generateRandomGradient = () => {
  const shuffled = [...ALL_COLORS].sort(() => Math.random() - 0.5);

  const lights = shuffled.filter(c => c.type === 'light');
  const darks = shuffled.filter(c => c.type === 'dark');
  const others = shuffled.filter(c => c.type !== 'light' && c.type !== 'dark');

  const selectedColors = [
    lights[0],
    darks[0],
    ...others.slice(0, 4 + Math.floor(Math.random() * 4))
  ];

  const finalColors = selectedColors.sort(() => Math.random() - 0.5);

  const orbs: ColorOrb[] = finalColors.map(color => ({
    x: Math.random(),
    y: Math.random(),
    radius: 0.45 + Math.random() * 0.40,
    color: { r: color.r, g: color.g, b: color.b, alpha: color.alpha },
    blur: 60 + Math.random() * 40,
  }));

  const shuffledOrbs = orbs.sort(() => Math.random() - 0.5);

  return {
    orbs: shuffledOrbs,
    baseColor: BASE_COLORS[Math.floor(Math.random() * BASE_COLORS.length)]
  };
};

export default function AnimatedGradient({ className = '' }: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradient = useMemo(() => generateRandomGradient(), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true, // Better performance - async rendering
      willReadFrequently: false,
    });
    if (!ctx) return;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) return;

      // Use lower DPR for performance (Safari especially)
      const perfScale = Math.min(dpr, 2); // Cap at 2x
      canvas.width = rect.width * perfScale;
      canvas.height = rect.height * perfScale;
      ctx.scale(perfScale, perfScale);

      const w = rect.width;
      const h = rect.height;

      // Base color
      ctx.fillStyle = gradient.baseColor;
      ctx.fillRect(0, 0, w, h);

      // Draw orbs with canvas blur (keep original look)
      gradient.orbs.forEach((orb, i) => {
        const px = orb.x * w;
        const py = orb.y * h;
        const radius = orb.radius * Math.max(w, h);

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        const c = orb.color;

        grad.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${c.alpha})`);
        grad.addColorStop(0.2, `rgba(${c.r}, ${c.g}, ${c.b}, ${c.alpha * 0.9})`);
        grad.addColorStop(0.4, `rgba(${c.r}, ${c.g}, ${c.b}, ${c.alpha * 0.7})`);
        grad.addColorStop(0.6, `rgba(${c.r}, ${c.g}, ${c.b}, ${c.alpha * 0.45})`);
        grad.addColorStop(0.8, `rgba(${c.r}, ${c.g}, ${c.b}, ${c.alpha * 0.2})`);
        grad.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

        // Keep canvas blur for quality
        ctx.filter = `blur(${orb.blur}px)`;
        ctx.globalCompositeOperation = i < 2 ? 'source-over' : 'screen';
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';

      // Optimized noise - sample every 2 pixels for 4x speed boost
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const noiseStrength = 40;

      // Only process every other pixel for speed
      for (let i = 0; i < data.length; i += 8) { // Skip every other pixel
        const noise = (Math.random() - 0.5) * noiseStrength;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
        // Copy to next pixel for consistency
        if (i + 4 < data.length) {
          data[i + 4] += noise;
          data[i + 5] += noise;
          data[i + 6] += noise;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    render();

    const resizeObserver = new ResizeObserver(() => {
      render();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [gradient]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0,0,0)', // Force GPU layer
        }}
      />
    </div>
  );
}
