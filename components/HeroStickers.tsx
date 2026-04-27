"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";

type Shape = "pill" | "circle" | "tag" | "sticker";

type StickerDef = {
  label: string;
  sub?: string;
  rotate: number;
  bg: string;
  fg: string;
  shape: Shape;
  content?: ReactNode;
  size?: { w: number; h: number };
};

type IconProps = { src: string; alt: string; size: number };

function Icon3D({ src, alt, size }: IconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      draggable={false}
      style={{
        width: size,
        height: size,
        userSelect: "none",
        WebkitUserDrag: "none",
        pointerEvents: "none",
      } as CSSProperties}
    />
  );
}

const FigmaLogoSticker = (
  <svg viewBox="0 0 60 90" width="60" height="90" fill="none" aria-hidden>
    <defs>
      <linearGradient id="figRed" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff8860" />
        <stop offset="1" stopColor="#e53e13" />
      </linearGradient>
      <linearGradient id="figOrange" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff9686" />
        <stop offset="1" stopColor="#ff5b43" />
      </linearGradient>
      <linearGradient id="figPurple" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#c58bff" />
        <stop offset="1" stopColor="#8537e6" />
      </linearGradient>
      <linearGradient id="figBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#6ad6ff" />
        <stop offset="1" stopColor="#0aa0e4" />
      </linearGradient>
      <linearGradient id="figGreen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4fe3a8" />
        <stop offset="1" stopColor="#05a968" />
      </linearGradient>
      <radialGradient id="figHL" cx="0.3" cy="0.25" r="0.6">
        <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>

    <path
      d="M15 0 L30 0 L30 30 L0 30 L0 15 A15 15 0 0 1 15 0 Z"
      fill="url(#figRed)"
    />
    <path
      d="M15 0 L30 0 L30 30 L0 30 L0 15 A15 15 0 0 1 15 0 Z"
      fill="url(#figHL)"
    />

    <path d="M30 0 L45 0 A15 15 0 0 1 45 30 L30 30 Z" fill="url(#figOrange)" />
    <path d="M30 0 L45 0 A15 15 0 0 1 45 30 L30 30 Z" fill="url(#figHL)" />

    <rect x="0" y="30" width="30" height="30" fill="url(#figPurple)" />
    <rect x="0" y="30" width="30" height="30" fill="url(#figHL)" opacity="0.8" />

    <circle cx="45" cy="45" r="15" fill="url(#figBlue)" />
    <circle cx="45" cy="45" r="15" fill="url(#figHL)" />

    <circle cx="15" cy="75" r="15" fill="url(#figGreen)" />
    <circle cx="15" cy="75" r="15" fill="url(#figHL)" />
  </svg>
);

const STICKERS: StickerDef[] = [
  {
    label: "UX",
    sub: "designer",
    rotate: -8,
    bg: "#ff6b35",
    fg: "#fff8f2",
    shape: "circle",
  },
  {
    label: "Pixel perfect",
    rotate: 6,
    bg: "#8b5cf6",
    fg: "#faf5ff",
    shape: "pill",
  },
  {
    label: "8pt grid",
    rotate: -4,
    bg: "#0e0e0d",
    fg: "#fafaf9",
    shape: "pill",
  },
  {
    label: "A11y",
    rotate: 10,
    bg: "#10b981",
    fg: "#ecfdf5",
    shape: "circle",
  },
  {
    label: "Ship it",
    rotate: -6,
    bg: "#f59e0b",
    fg: "#0e0e0d",
    shape: "pill",
  },
  {
    label: "Figma",
    rotate: 8,
    bg: "#fafaf9",
    fg: "#0e0e0d",
    shape: "tag",
  },
  {
    label: "Research",
    rotate: -8,
    bg: "transparent",
    fg: "#0e0e0d",
    shape: "sticker",
    size: { w: 84, h: 84 },
    content: <Icon3D src="/stickers/magnifier.png" alt="" size={84} />,
  },
  {
    label: "Rocket",
    rotate: -6,
    bg: "transparent",
    fg: "#0e0e0d",
    shape: "sticker",
    size: { w: 88, h: 88 },
    content: <Icon3D src="/stickers/rocket.png" alt="" size={88} />,
  },
  {
    label: "Pencil",
    rotate: -14,
    bg: "transparent",
    fg: "#0e0e0d",
    shape: "sticker",
    size: { w: 86, h: 86 },
    content: <Icon3D src="/stickers/pencil.png" alt="" size={86} />,
  },
  {
    label: "Ruler",
    rotate: 8,
    bg: "transparent",
    fg: "#0e0e0d",
    shape: "sticker",
    size: { w: 86, h: 86 },
    content: <Icon3D src="/stickers/ruler.png" alt="" size={86} />,
  },
  {
    label: "FigmaLogo",
    rotate: -10,
    bg: "transparent",
    fg: "#0e0e0d",
    shape: "sticker",
    size: { w: 60, h: 90 },
    content: FigmaLogoSticker,
  },
  {
    label: "Chai",
    rotate: 6,
    bg: "transparent",
    fg: "#0e0e0d",
    shape: "sticker",
    size: { w: 80, h: 80 },
    content: <Icon3D src="/stickers/chai.png" alt="" size={80} />,
  },
];

const SPAWN_MIN_X = 0.48;
const SPAWN_MAX_X = 0.96;
const SPAWN_MIN_Y = 0.06;
const SPAWN_MAX_Y = 0.9;
const SPAWN_PADDING = 10;
const SPAWN_MAX_ATTEMPTS = 80;

function pickRandomPosition(
  r: number,
  W: number,
  H: number,
  placed: { x: number; y: number; r: number }[]
): { x: number; y: number } {
  for (let attempt = 0; attempt < SPAWN_MAX_ATTEMPTS; attempt++) {
    const rx = SPAWN_MIN_X + Math.random() * (SPAWN_MAX_X - SPAWN_MIN_X);
    const ry = SPAWN_MIN_Y + Math.random() * (SPAWN_MAX_Y - SPAWN_MIN_Y);
    const x = Math.max(r, Math.min(W - r, rx * W));
    const y = Math.max(r, Math.min(H - r, ry * H));
    let collides = false;
    for (const p of placed) {
      const dx = x - p.x;
      const dy = y - p.y;
      if (Math.hypot(dx, dy) < r + p.r + SPAWN_PADDING) {
        collides = true;
        break;
      }
    }
    if (!collides) return { x, y };
  }
  return {
    x: Math.max(r, Math.min(W - r, W * 0.75)),
    y: Math.max(r, Math.min(H - r, H * 0.5)),
  };
}

type Body = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  r: number;
  rotate: number;
  dragging: boolean;
  grabOffsetX: number;
  grabOffsetY: number;
  lastX: number;
  lastY: number;
  lastT: number;
};

const FRICTION = 0.982;
const RESTITUTION = 0.78;
const WALL_RESTITUTION = 0.72;
const MIN_V = 0.04;
const MAX_V = 38;
const FRAME_MS = 1000 / 60;

export function HeroStickers({
  constraintsRef,
}: {
  constraintsRef: RefObject<HTMLElement>;
}) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bodiesRef = useRef<Body[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = constraintsRef.current;
    if (!section) return;

    const measureSection = () => {
      const r = section.getBoundingClientRect();
      sizeRef.current = { w: r.width, h: r.height };
    };
    measureSection();

    const ro = new ResizeObserver(measureSection);
    ro.observe(section);

    const placed: { x: number; y: number; r: number }[] = [];
    bodiesRef.current = STICKERS.map((s, i) => {
      const el = itemRefs.current[i];
      const w = s.size?.w ?? el?.offsetWidth ?? 80;
      const h = s.size?.h ?? el?.offsetHeight ?? 80;
      const r = (w + h) / 4;
      const { x, y } = pickRandomPosition(
        r,
        sizeRef.current.w,
        sizeRef.current.h,
        placed
      );
      placed.push({ x, y, r });
      const rotate = s.rotate + (Math.random() - 0.5) * 10;
      return {
        x,
        y,
        vx: 0,
        vy: 0,
        w,
        h,
        r,
        rotate,
        dragging: false,
        grabOffsetX: 0,
        grabOffsetY: 0,
        lastX: 0,
        lastY: 0,
        lastT: 0,
      };
    });

    applyTransforms();
    setReady(true);

    let raf = 0;
    let lastT = performance.now();
    const tick = (t: number) => {
      const dt = Math.min((t - lastT) / FRAME_MS, 2.5);
      lastT = t;
      step(dt);
      applyTransforms();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyTransforms() {
    const bodies = bodiesRef.current;
    for (let i = 0; i < bodies.length; i++) {
      const b = bodies[i];
      const el = itemRefs.current[i];
      if (!el) continue;
      el.style.transform = `translate3d(${b.x - b.w / 2}px, ${
        b.y - b.h / 2
      }px, 0) rotate(${b.rotate}deg)`;
    }
  }

  function step(dt: number) {
    const { w: W, h: H } = sizeRef.current;
    const bodies = bodiesRef.current;
    if (!W || !H) return;

    for (const b of bodies) {
      if (b.dragging) continue;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      const f = Math.pow(FRICTION, dt);
      b.vx *= f;
      b.vy *= f;
      if (Math.abs(b.vx) < MIN_V) b.vx = 0;
      if (Math.abs(b.vy) < MIN_V) b.vy = 0;
    }

    for (const b of bodies) {
      if (b.dragging) continue;
      if (b.x - b.r < 0) {
        b.x = b.r;
        if (b.vx < 0) b.vx = -b.vx * WALL_RESTITUTION;
      }
      if (b.x + b.r > W) {
        b.x = W - b.r;
        if (b.vx > 0) b.vx = -b.vx * WALL_RESTITUTION;
      }
      if (b.y - b.r < 0) {
        b.y = b.r;
        if (b.vy < 0) b.vy = -b.vy * WALL_RESTITUTION;
      }
      if (b.y + b.r > H) {
        b.y = H - b.r;
        if (b.vy > 0) b.vy = -b.vy * WALL_RESTITUTION;
      }
    }

    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const a = bodies[i];
        const b = bodies[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const minD = a.r + b.r;
        if (dist >= minD) continue;
        const nx = dx / dist;
        const ny = dy / dist;
        const overlap = minD - dist;
        const aFixed = a.dragging;
        const bFixed = b.dragging;

        if (!aFixed && !bFixed) {
          const half = overlap / 2;
          a.x -= nx * half;
          a.y -= ny * half;
          b.x += nx * half;
          b.y += ny * half;
        } else if (aFixed && !bFixed) {
          b.x += nx * overlap;
          b.y += ny * overlap;
        } else if (!aFixed && bFixed) {
          a.x -= nx * overlap;
          a.y -= ny * overlap;
        }

        const vRel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (vRel < 0) {
          if (!aFixed && !bFixed) {
            const jImp = -(1 + RESTITUTION) * vRel * 0.5;
            a.vx -= jImp * nx;
            a.vy -= jImp * ny;
            b.vx += jImp * nx;
            b.vy += jImp * ny;
          } else if (aFixed && !bFixed) {
            const jImp = -(1 + RESTITUTION) * vRel;
            b.vx += jImp * nx;
            b.vy += jImp * ny;
          } else if (!aFixed && bFixed) {
            const jImp = -(1 + RESTITUTION) * vRel;
            a.vx -= jImp * nx;
            a.vy -= jImp * ny;
          }
        }
      }
    }

    for (const b of bodies) {
      if (b.vx > MAX_V) b.vx = MAX_V;
      else if (b.vx < -MAX_V) b.vx = -MAX_V;
      if (b.vy > MAX_V) b.vy = MAX_V;
      else if (b.vy < -MAX_V) b.vy = -MAX_V;
    }
  }

  function getLocalPoint(e: React.PointerEvent) {
    const rect = constraintsRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function onPointerDown(i: number) {
    return (e: React.PointerEvent<HTMLDivElement>) => {
      const b = bodiesRef.current[i];
      if (!b) return;
      const { x, y } = getLocalPoint(e);
      b.dragging = true;
      b.vx = 0;
      b.vy = 0;
      b.grabOffsetX = x - b.x;
      b.grabOffsetY = y - b.y;
      b.lastX = x;
      b.lastY = y;
      b.lastT = performance.now();
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.style.zIndex = "20";
      e.currentTarget.style.cursor = "grabbing";
    };
  }

  function onPointerMove(i: number) {
    return (e: React.PointerEvent<HTMLDivElement>) => {
      const b = bodiesRef.current[i];
      if (!b || !b.dragging) return;
      const { x, y } = getLocalPoint(e);
      const now = performance.now();
      const dtFrames = Math.max(now - b.lastT, 1) / FRAME_MS;
      b.vx = (x - b.lastX) / dtFrames;
      b.vy = (y - b.lastY) / dtFrames;
      b.x = x - b.grabOffsetX;
      b.y = y - b.grabOffsetY;
      b.lastX = x;
      b.lastY = y;
      b.lastT = now;
    };
  }

  function onPointerUp(i: number) {
    return (e: React.PointerEvent<HTMLDivElement>) => {
      const b = bodiesRef.current[i];
      if (!b) return;
      b.dragging = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      e.currentTarget.style.zIndex = "";
      e.currentTarget.style.cursor = "grab";
    };
  }

  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      {STICKERS.map((s, i) => {
        const isSticker = s.shape === "sticker";
        const shapeClass =
          s.shape === "circle"
            ? "flex h-[90px] w-[90px] items-center justify-center rounded-full text-center leading-tight"
            : s.shape === "sticker"
            ? "inline-flex items-center justify-center"
            : s.shape === "pill"
            ? "rounded-full px-5 py-2.5"
            : "rounded-xl px-4 py-2.5";

        const stickerStyle: CSSProperties = isSticker
          ? {
              background: "transparent",
              filter:
                "drop-shadow(0 14px 18px rgba(14,14,13,0.22)) drop-shadow(0 3px 4px rgba(14,14,13,0.14))",
            }
          : {
              background: s.bg,
            };

        const chromeClass = isSticker
          ? ""
          : "text-sm font-medium tracking-tight shadow-[0_14px_40px_-12px_rgba(14,14,13,0.35)] ring-1 ring-black/5";

        return (
          <div
            key={s.label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onPointerDown={onPointerDown(i)}
            onPointerMove={onPointerMove(i)}
            onPointerUp={onPointerUp(i)}
            onPointerCancel={onPointerUp(i)}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              color: s.fg,
              touchAction: "none",
              willChange: "transform",
              cursor: "grab",
              opacity: ready ? 1 : 0,
              transition: `opacity 500ms ${ease} ${0.5 + i * 0.05}s`,
              ...stickerStyle,
            }}
            className={`pointer-events-auto select-none ${chromeClass} ${shapeClass}`}
          >
            {s.shape === "circle" ? (
              <span className="flex flex-col items-center">
                <span className="text-lg font-semibold">{s.label}</span>
                {s.sub && (
                  <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] opacity-80">
                    {s.sub}
                  </span>
                )}
              </span>
            ) : s.shape === "sticker" ? (
              s.content
            ) : (
              <span>{s.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
