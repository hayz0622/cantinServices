import { useEffect, useRef } from "react";

type ParallaxImageBandProps = {
  src: string;
  className?: string;
  focalX?: string;
  focalYMobile?: string;
  focalYDesktop?: string;
};


export function ParallaxImageBand({
  src,
  className = "",
  focalX = "50%",
  focalYMobile = "45%",
  focalYDesktop = "38%",
}: ParallaxImageBandProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    let rafId = 0;
    const getBaseY = () => (window.innerWidth >= 768 ? focalYDesktop : focalYMobile);

    const apply = () => {
      const baseY = getBaseY();
      if (mq.matches) {
        el.style.backgroundPosition = `${focalX} ${baseY}`;
        return;
      }
      const raw = el.getAttribute("data-parallax-velocity");
      const v = raw != null ? parseFloat(raw) : 0.2;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = centerOffset * (Number.isFinite(v) ? v : 0.2);
      el.style.backgroundPosition = `${focalX} calc(${baseY} + ${shift}px)`;
    };

    const loop = () => {
      apply();
      rafId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const startLoop = () => {
      if (mq.matches || rafId) return;
      rafId = requestAnimationFrame(loop);
    };

    const marginPx = 120;
    const isNearViewport = () => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > -marginPx && rect.top < window.innerHeight + marginPx;
    };

    const onMqChange = () => {
      if (mq.matches) {
        stopLoop();
        apply();
      } else if (isNearViewport()) {
        startLoop();
      } else {
        apply();
      }
    };

    const onResize = () => {
      apply();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (mq.matches) {
          stopLoop();
          apply();
          return;
        }
        if (entry?.isIntersecting) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { root: null, rootMargin: `${marginPx}px 0px`, threshold: 0 },
    );

    io.observe(el);
    apply();

    window.addEventListener("resize", onResize, { passive: true });
    mq.addEventListener("change", onMqChange);

    return () => {
      stopLoop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onMqChange);
    };
  }, [focalX, focalYDesktop, focalYMobile]);

  return (
    <div
      ref={ref}
      role="presentation"
      data-parallax-velocity="0.2"
      className={`w-full shrink-0 overflow-hidden bg-muted h-56 sm:h-72 md:h-80 lg:h-96 ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${focalX} ${focalYMobile}`,
      }}
    />
  );
}
