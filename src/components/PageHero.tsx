import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const HERO_OVERLAY =
  "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.72) 100%)";

type PageHeroProps = {
  image: string;
  children: ReactNode;
  /** Renders the white wave SVG at the bottom of the hero. */
  showWave?: boolean;
  className?: string;
};

export function PageHero({ image, children, showWave = true, className }: PageHeroProps) {
  return (
    <section className={cn("relative py-24 text-center overflow-hidden bg-neutral-950", className)}>
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
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
