import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

const HERO_OVERLAY =
  "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.72) 100%)";

type PageHeroProps = {
  image: string;
  children: ReactNode;
  /** Fallback focal position (used when specific mobile/desktop values are not provided). */
  imagePosition?: string;
  /** CSS background-position for mobile widths. */
  imagePositionMobile?: string;
  /** CSS background-position from md breakpoint and up. */
  imagePositionDesktop?: string;
  /** Renders the white wave SVG at the bottom of the hero. */
  showWave?: boolean;
  className?: string;
};

export function PageHero({
  image,
  children,
  imagePosition = "center",
  imagePositionMobile,
  imagePositionDesktop,
  showWave = true,
  className,
}: PageHeroProps) {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    "--focal-mobile": imagePositionMobile ?? imagePosition,
    "--focal-desktop": imagePositionDesktop ?? imagePositionMobile ?? imagePosition,
  } as CSSProperties;

  return (
    <section className={cn("relative py-32 md:py-40 text-center overflow-hidden bg-neutral-950", className)}>
      <div className="absolute inset-0" aria-hidden>
        <div
          className="responsive-focal-bg absolute inset-0 bg-cover bg-no-repeat"
          style={backgroundStyle}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: HERO_OVERLAY }}
        />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
      {showWave ? (
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full" aria-hidden>
            <path d="M0 50L1440 50L1440 15C1200 45 900 0 720 15C540 30 240 0 0 15L0 50Z" fill="white" />
          </svg>
        </div>
      ) : null}
    </section>
  );
}
