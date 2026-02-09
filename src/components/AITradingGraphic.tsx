"use client";

import { useEffect, useRef } from "react";

export default function AITradingGraphic() {
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

    // Trading data streams
    interface DataPoint {
      x: number;
      y: number;
      speed: number;
      value: string;
      opacity: number;
      color: string;
      size: number;
    }

    interface Signal {
      x: number;
      y: number;
      type: "BUY" | "SELL" | "HOLD" | "SCAN" | "SWAP";
      life: number;
      maxLife: number;
      opacity: number;
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
    }

    interface ChartLine {
      points: number[];
      x: number;
      y: number;
      w: number;
      h: number;
      speed: number;
      color: string;
      opacity: number;
    }

    interface ScanLine {
      y: number;
      speed: number;
      opacity: number;
    }

    const dataPoints: DataPoint[] = [];
    const signals: Signal[] = [];
    const particles: Particle[] = [];
    const chartLines: ChartLine[] = [];
    const scanLines: ScanLine[] = [];

    const colors = {
      buy: "#00E676",
      sell: "#FF5252",
      accent: "#4A9EFF",
      cyan: "#00C1DE",
      silver: "#B8C5D0",
      gold: "#FFD740",
    };

    const tickers = [
      "BTC", "ETH", "NEAR", "SOL", "AVAX", "DOT", "LINK", "MATIC",
      "ARB", "OP", "ATOM", "ADA", "DOGE", "SHIB", "PEPE", "WIF",
      "FET", "RNDR", "INJ", "TIA", "SUI", "APT", "SEI", "JUP",
    ];

    const genPrice = () => (Math.random() * 99999).toFixed(2);
    const genPct = () => {
      const v = (Math.random() * 40 - 20).toFixed(1);
      return (parseFloat(v) >= 0 ? "+" : "") + v + "%";
    };

    // Initialize chart lines
    const initCharts = () => {
      for (let i = 0; i < 4; i++) {
        const pts: number[] = [];
        for (let j = 0; j < 30; j++) pts.push(Math.random());
        chartLines.push({
          points: pts,
          x: Math.random() * W() * 0.3 + (i % 2 === 0 ? 0 : W() * 0.65),
          y: Math.random() * H() * 0.6 + H() * 0.15,
          w: 80 + Math.random() * 60,
          h: 25 + Math.random() * 20,
          speed: 0.5 + Math.random() * 1.5,
          color: i % 2 === 0 ? colors.buy : colors.cyan,
          opacity: 0.15 + Math.random() * 0.2,
        });
      }
    };

    // Spawn floating data
    const spawnData = () => {
      const side = Math.random() > 0.5;
      const ticker = tickers[Math.floor(Math.random() * tickers.length)];
      const isPrice = Math.random() > 0.4;
      dataPoints.push({
        x: side ? Math.random() * W() * 0.25 : W() * 0.75 + Math.random() * W() * 0.25,
        y: H() + 10,
        speed: 0.08 + Math.random() * 0.25,
        value: isPrice ? `${ticker} $${genPrice()}` : `${ticker} ${genPct()}`,
        opacity: 0.2 + Math.random() * 0.4,
        color: isPrice ? colors.silver : (Math.random() > 0.5 ? colors.buy : colors.sell),
        size: 8 + Math.random() * 3,
      });
    };

    // Spawn trading signals near head
    const spawnSignal = () => {
      const cx = W() * 0.5;
      const cy = H() * 0.42;
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 100;
      const types: Signal["type"][] = ["BUY", "SELL", "HOLD", "SCAN", "SWAP"];
      signals.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        type: types[Math.floor(Math.random() * types.length)],
        life: 0,
        maxLife: 60 + Math.random() * 80,
        opacity: 0,
      });
    };

    // Spawn neural particles from head center
    const spawnParticle = () => {
      const cx = W() * 0.5;
      const cy = H() * 0.38;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.6;
      particles.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 40 + Math.random() * 60,
        color: [colors.accent, colors.cyan, colors.buy, colors.gold][Math.floor(Math.random() * 4)],
        size: 1 + Math.random() * 2,
      });
    };

    // Spawn scan line
    const spawnScan = () => {
      scanLines.push({
        y: 0,
        speed: 0.4 + Math.random() * 0.6,
        opacity: 0.08 + Math.random() * 0.12,
      });
    };

    initCharts();

    let frame = 0;
    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);

      frame++;

      // Spawn elements at intervals (fast-forward feel)
      if (frame % 14 === 0) spawnData();
      if (frame % 65 === 0) spawnSignal();
      if (frame % 10 === 0) spawnParticle();
      if (frame % 220 === 0) spawnScan();

      // Draw scan lines
      for (let i = scanLines.length - 1; i >= 0; i--) {
        const s = scanLines[i];
        s.y += s.speed;
        if (s.y > h) { scanLines.splice(i, 1); continue; }
        const grad = ctx.createLinearGradient(0, s.y - 2, 0, s.y + 2);
        grad.addColorStop(0, `rgba(74, 158, 255, 0)`);
        grad.addColorStop(0.5, `rgba(74, 158, 255, ${s.opacity})`);
        grad.addColorStop(1, `rgba(74, 158, 255, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, s.y - 2, w, 4);
      }

      // Draw chart lines (mini charts in background)
      for (const chart of chartLines) {
        ctx.save();
        ctx.globalAlpha = chart.opacity * (0.7 + 0.3 * Math.sin(frame * 0.01));

        // Shift chart data
        if (frame % Math.round(4 / chart.speed) === 0) {
          chart.points.shift();
          chart.points.push(chart.points[chart.points.length - 1] + (Math.random() - 0.48) * 0.15);
          // Normalize
          const min = Math.min(...chart.points);
          const max = Math.max(...chart.points);
          const range = max - min || 1;
          for (let j = 0; j < chart.points.length; j++) {
            chart.points[j] = (chart.points[j] - min) / range;
          }
        }

        ctx.strokeStyle = chart.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let j = 0; j < chart.points.length; j++) {
          const px = chart.x + (j / (chart.points.length - 1)) * chart.w;
          const py = chart.y + (1 - chart.points[j]) * chart.h;
          if (j === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Fill area under
        const lastPt = chart.points[chart.points.length - 1];
        ctx.lineTo(chart.x + chart.w, chart.y + chart.h);
        ctx.lineTo(chart.x, chart.y + chart.h);
        ctx.closePath();
        const fillGrad = ctx.createLinearGradient(0, chart.y, 0, chart.y + chart.h);
        fillGrad.addColorStop(0, chart.color.replace(")", ", 0.1)").replace("rgb", "rgba"));
        fillGrad.addColorStop(1, "transparent");
        ctx.fillStyle = fillGrad;
        ctx.fill();

        ctx.restore();
      }

      // Draw neural particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const lifeRatio = p.life / p.maxLife;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.life >= p.maxLife) { particles.splice(i, 1); continue; }

        const alpha = lifeRatio < 0.2 ? lifeRatio * 5 : lifeRatio > 0.7 ? (1 - lifeRatio) / 0.3 : 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `, ${alpha * 0.6})`).replace("rgb", "rgba").replace("#", "");
        // Convert hex to rgba
        const hex = p.color;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
        ctx.fill();

        // Glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connection lines between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            const alpha = (1 - dist / 60) * 0.15;
            ctx.strokeStyle = `rgba(74, 158, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw floating data
      ctx.textAlign = "center";
      for (let i = dataPoints.length - 1; i >= 0; i--) {
        const d = dataPoints[i];
        d.y -= d.speed;
        if (d.y < -20) { dataPoints.splice(i, 1); continue; }

        // Fade in/out at edges
        const edgeFade = Math.min(1, (h - d.y) / 80, d.y / 80);
        const alpha = d.opacity * edgeFade;

        ctx.font = `${d.size}px monospace`;
        ctx.fillStyle = d.color.startsWith("#")
          ? (() => { const hex = d.color; const r = parseInt(hex.slice(1,3),16); const g = parseInt(hex.slice(3,5),16); const b = parseInt(hex.slice(5,7),16); return `rgba(${r},${g},${b},${alpha})`; })()
          : d.color;
        ctx.fillText(d.value, d.x, d.y);
      }

      // Draw trading signals
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.life++;
        if (s.life >= s.maxLife) { signals.splice(i, 1); continue; }

        const lifeRatio = s.life / s.maxLife;
        s.opacity = lifeRatio < 0.15 ? lifeRatio / 0.15 : lifeRatio > 0.7 ? (1 - lifeRatio) / 0.3 : 1;

        const bgColor = s.type === "BUY" || s.type === "SWAP" ? colors.buy
          : s.type === "SELL" ? colors.sell
          : s.type === "SCAN" ? colors.cyan
          : colors.gold;

        const hex = bgColor;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        // Pill background
        const pillW = s.type.length * 7 + 16;
        const pillH = 18;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${s.opacity * 0.2})`;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${s.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        const px = s.x - pillW / 2;
        const py = s.y - pillH / 2;
        const radius = 9;
        ctx.moveTo(px + radius, py);
        ctx.lineTo(px + pillW - radius, py);
        ctx.arcTo(px + pillW, py, px + pillW, py + radius, radius);
        ctx.lineTo(px + pillW, py + pillH - radius);
        ctx.arcTo(px + pillW, py + pillH, px + pillW - radius, py + pillH, radius);
        ctx.lineTo(px + radius, py + pillH);
        ctx.arcTo(px, py + pillH, px, py + pillH - radius, radius);
        ctx.lineTo(px, py + radius);
        ctx.arcTo(px, py, px + radius, py, radius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Text
        ctx.font = "bold 9px monospace";
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${s.opacity * 0.9})`;
        ctx.fillText(s.type, s.x, s.y);

        // Glow
        ctx.shadowColor = bgColor;
        ctx.shadowBlur = 8 * s.opacity;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // HUD ring around head
      const cx = w * 0.5;
      const cy = h * 0.42;
      const ringRadius = Math.min(w, h) * 0.28;

      // Outer rotating ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(frame * 0.0015);
      ctx.strokeStyle = `rgba(74, 158, 255, 0.08)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Inner rotating ring (opposite direction)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-frame * 0.0025);
      ctx.strokeStyle = `rgba(0, 193, 222, 0.06)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 18]);
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius * 0.85, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Pulsing dot on ring
      const dotAngle = frame * 0.009;
      const dotX = cx + Math.cos(dotAngle) * ringRadius;
      const dotY = cy + Math.sin(dotAngle) * ringRadius;
      const pulse = 0.5 + 0.5 * Math.sin(frame * 0.05);
      ctx.beginPath();
      ctx.arc(dotX, dotY, 2 + pulse * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(74, 158, 255, ${0.4 + pulse * 0.4})`;
      ctx.fill();
      ctx.shadowColor = colors.accent;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

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
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 45%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 45%, black 30%, transparent 70%)",
      }}
    >
      {/* AI Head image */}
      <img
        src="/ai-head.png"
        alt="AI Trading System"
        className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
        style={{
          filter: "brightness(1.1) contrast(1.05)",
        }}
      />

      {/* Canvas overlay for animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      />

      {/* Subtle ambient glow behind head */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(74, 158, 255, 0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
