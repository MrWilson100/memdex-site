"use client";

import { useEffect, useRef } from "react";

export default function TechLeverageGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width / dpr;
    const H = () => canvas.height / dpr;

    // Touch point - where the two fingers meet (center spark)
    const touchX = () => W() * 0.48;
    const touchY = () => H() * 0.48;

    const colors = {
      accent: "#4A9EFF",
      cyan: "#00C1DE",
      white: "#FFFFFF",
      silver: "#B8C5D0",
      gold: "#FFD740",
      green: "#00E676",
      purple: "#B388FF",
    };

    function hexToRgb(hex: string) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    }

    // Data stream particles flowing toward touch point
    interface StreamParticle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      trail: { x: number; y: number }[];
    }

    // Knowledge labels floating toward center
    interface KnowledgeLabel {
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      life: number;
      maxLife: number;
      color: string;
      size: number;
    }

    // Energy pulse rings at touch point
    interface PulseRing {
      radius: number;
      maxRadius: number;
      opacity: number;
      color: string;
      width: number;
    }

    // Binary/hex data falling from AI hand
    interface DataDrop {
      x: number;
      y: number;
      speed: number;
      chars: string;
      opacity: number;
      size: number;
    }

    // Spark particles at touch point
    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
    }

    const streamParticles: StreamParticle[] = [];
    const knowledgeLabels: KnowledgeLabel[] = [];
    const pulseRings: PulseRing[] = [];
    const dataDrops: DataDrop[] = [];
    const sparks: Spark[] = [];

    const concepts = [
      "ANALYSIS", "PATTERN", "INSIGHT", "SIGNAL", "DATA",
      "NEURAL", "LOGIC", "PREDICT", "OPTIMIZE", "DETECT",
      "LEARN", "ADAPT", "COMPUTE", "MODEL", "VECTOR",
      "TENSOR", "WEIGHT", "LAYER", "TOKEN", "QUERY",
    ];

    const binaryChars = "01";
    const hexChars = "0123456789ABCDEF";

    const genBinary = () => {
      let s = "";
      for (let i = 0; i < 6 + Math.floor(Math.random() * 6); i++) {
        s += binaryChars[Math.floor(Math.random() * 2)];
      }
      return s;
    };

    const genHex = () => {
      let s = "0x";
      for (let i = 0; i < 4; i++) {
        s += hexChars[Math.floor(Math.random() * 16)];
      }
      return s;
    };

    // Spawn stream particle from edges toward touch point
    const spawnStream = () => {
      const w = W();
      const h = H();
      const tx = touchX();
      const ty = touchY();

      // Spawn from top half (AI hand side) more often
      let x: number, y: number;
      const side = Math.random();
      if (side < 0.4) {
        // From top
        x = Math.random() * w;
        y = -5;
      } else if (side < 0.6) {
        // From left
        x = -5;
        y = Math.random() * h * 0.7;
      } else if (side < 0.8) {
        // From right
        x = w + 5;
        y = Math.random() * h * 0.7;
      } else {
        // From top corners
        x = Math.random() > 0.5 ? Math.random() * w * 0.2 : w * 0.8 + Math.random() * w * 0.2;
        y = Math.random() * h * 0.2;
      }

      const colorArr = [colors.accent, colors.cyan, colors.green, colors.purple, colors.gold];

      streamParticles.push({
        x,
        y,
        targetX: tx + (Math.random() - 0.5) * 20,
        targetY: ty + (Math.random() - 0.5) * 20,
        speed: 0.5 + Math.random() * 0.7,
        size: 1 + Math.random() * 2,
        color: colorArr[Math.floor(Math.random() * colorArr.length)],
        life: 0,
        maxLife: 200,
        trail: [],
      });
    };

    // Spawn knowledge label
    const spawnLabel = () => {
      const w = W();
      const h = H();
      const tx = touchX();
      const ty = touchY();

      // Spawn from upper area (AI hand)
      const angle = Math.random() * Math.PI - Math.PI; // Upper hemisphere
      const dist = 120 + Math.random() * 80;
      const x = tx + Math.cos(angle) * dist;
      const y = ty + Math.sin(angle) * dist * 0.6;

      // Direction toward touch point
      const dx = tx - x;
      const dy = ty - y;
      const len = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.15 + Math.random() * 0.2;

      knowledgeLabels.push({
        x,
        y,
        vx: (dx / len) * speed,
        vy: (dy / len) * speed,
        text: concepts[Math.floor(Math.random() * concepts.length)],
        life: 0,
        maxLife: 120 + Math.random() * 80,
        color: [colors.accent, colors.cyan, colors.silver][Math.floor(Math.random() * 3)],
        size: 7 + Math.random() * 3,
      });
    };

    // Spawn pulse ring at touch point
    const spawnPulse = () => {
      pulseRings.push({
        radius: 2,
        maxRadius: 60 + Math.random() * 50,
        opacity: 0.4 + Math.random() * 0.3,
        color: Math.random() > 0.5 ? colors.accent : colors.cyan,
        width: 1 + Math.random(),
      });
    };

    // Spawn data drop from AI hand area
    const spawnDrop = () => {
      const w = W();
      const tx = touchX();
      dataDrops.push({
        x: tx + (Math.random() - 0.5) * w * 0.4,
        y: -10,
        speed: 0.25 + Math.random() * 0.4,
        chars: Math.random() > 0.5 ? genBinary() : genHex(),
        opacity: 0.1 + Math.random() * 0.2,
        size: 7 + Math.random() * 2,
      });
    };

    // Spawn spark at touch point
    const spawnSpark = () => {
      const tx = touchX();
      const ty = touchY();
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 0.9;
      sparks.push({
        x: tx + (Math.random() - 0.5) * 6,
        y: ty + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 20 + Math.random() * 30,
        color: [colors.white, colors.accent, colors.cyan][Math.floor(Math.random() * 3)],
        size: 0.5 + Math.random() * 1.5,
      });
    };

    let frame = 0;

    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      frame++;

      const tx = touchX();
      const ty = touchY();

      // Spawn elements
      if (frame % 10 === 0) spawnStream();
      if (frame % 140 === 0) spawnLabel();
      if (frame % 120 === 0) spawnPulse();
      if (frame % 20 === 0) spawnDrop();
      if (frame % 7 === 0) spawnSpark();

      // Draw data drops (binary/hex rain in background)
      ctx.textAlign = "center";
      for (let i = dataDrops.length - 1; i >= 0; i--) {
        const d = dataDrops[i];
        d.y += d.speed;
        if (d.y > h + 10) { dataDrops.splice(i, 1); continue; }

        // Fade near touch point
        const distToTouch = Math.sqrt((d.x - tx) ** 2 + (d.y - ty) ** 2);
        const touchFade = Math.min(1, distToTouch / 80);
        const alpha = d.opacity * touchFade;

        ctx.font = `${d.size}px monospace`;
        const { r, g, b } = hexToRgb(colors.accent);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillText(d.chars, d.x, d.y);
      }

      // Draw stream particles with trails
      for (let i = streamParticles.length - 1; i >= 0; i--) {
        const p = streamParticles[i];
        p.life++;

        // Move toward target with easing
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 5 || p.life >= p.maxLife) {
          // Arrived or expired - spawn extra sparks
          if (dist < 5) {
            for (let j = 0; j < 3; j++) spawnSpark();
          }
          streamParticles.splice(i, 1);
          continue;
        }

        // Store trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 12) p.trail.shift();

        // Accelerate toward target
        const accel = Math.min(p.speed, dist * 0.02);
        p.x += (dx / dist) * accel;
        p.y += (dy / dist) * accel;

        // Draw trail
        if (p.trail.length > 1) {
          const { r, g, b } = hexToRgb(p.color);
          for (let t = 1; t < p.trail.length; t++) {
            const alpha = (t / p.trail.length) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.trail[t - 1].x, p.trail[t - 1].y);
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = p.size * 0.5;
            ctx.stroke();
          }
        }

        // Draw particle
        const { r, g, b } = hexToRgb(p.color);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
        ctx.fill();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw pulse rings
      for (let i = pulseRings.length - 1; i >= 0; i--) {
        const p = pulseRings[i];
        p.radius += 0.4;
        const progress = p.radius / p.maxRadius;
        p.opacity = (1 - progress) * 0.3;

        if (p.radius >= p.maxRadius) { pulseRings.splice(i, 1); continue; }

        const { r, g, b } = hexToRgb(p.color);
        ctx.beginPath();
        ctx.arc(tx, ty, p.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.lineWidth = p.width;
        ctx.stroke();
      }

      // Draw knowledge labels
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = knowledgeLabels.length - 1; i >= 0; i--) {
        const l = knowledgeLabels[i];
        l.x += l.vx;
        l.y += l.vy;
        l.life++;

        if (l.life >= l.maxLife) { knowledgeLabels.splice(i, 1); continue; }

        const lifeRatio = l.life / l.maxLife;
        const alpha = lifeRatio < 0.15 ? lifeRatio / 0.15
          : lifeRatio > 0.7 ? (1 - lifeRatio) / 0.3
          : 1;

        // Distance to touch point - fade as approaching
        const distToTouch = Math.sqrt((l.x - tx) ** 2 + (l.y - ty) ** 2);
        const touchProximity = Math.min(1, distToTouch / 40);
        const finalAlpha = alpha * 0.5 * touchProximity;

        const { r, g, b } = hexToRgb(l.color);
        ctx.font = `${l.size}px monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
        ctx.fillText(l.text, l.x, l.y);
      }

      // Draw sparks at touch point
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.life++;

        if (s.life >= s.maxLife) { sparks.splice(i, 1); continue; }

        const lifeRatio = s.life / s.maxLife;
        const alpha = (1 - lifeRatio) * 0.8;

        const { r, g, b } = hexToRgb(s.color);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - lifeRatio * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Central glow pulse at touch point
      const glowPulse = 0.5 + 0.5 * Math.sin(frame * 0.018);
      const glowRadius = 15 + glowPulse * 10;
      const glowGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, glowRadius);
      glowGrad.addColorStop(0, `rgba(255, 255, 255, ${0.15 + glowPulse * 0.1})`);
      glowGrad.addColorStop(0.4, `rgba(74, 158, 255, ${0.08 + glowPulse * 0.06})`);
      glowGrad.addColorStop(1, "rgba(74, 158, 255, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(tx, ty, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Subtle energy arc between hands (wavy line through touch point)
      ctx.save();
      ctx.globalAlpha = 0.06 + 0.04 * Math.sin(frame * 0.012);
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const x = tx + (t - 0.5) * 60;
        const y = ty - 80 + t * 160 + Math.sin(t * Math.PI * 4 + frame * 0.025) * 8;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-[500px] aspect-square mx-auto"
      style={{
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 48%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 48%, black 30%, transparent 70%)",
      }}
    >
      {/* Fingers image */}
      <img
        src="/fingers.png"
        alt="Leveraging Super Intelligent Technology"
        className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
        style={{
          filter: "brightness(1.15) contrast(1.05)",
        }}
      />

      {/* Canvas overlay for animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      />

      {/* Subtle ambient glow behind touch point */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(74, 158, 255, 0.18) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
