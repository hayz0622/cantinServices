
export function createFadeUpVariants(options?: { duration?: number; staggerDelay?: number }) {
  const duration = options?.duration ?? 0.5;
  const staggerDelay = options?.staggerDelay ?? 0.08;
  return {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration, delay: i * staggerDelay, ease: "easeOut" as const },
    }),
  };
}

export const fadeUp = createFadeUpVariants();

/** Slightly snappier timig for the gallery page. */
export const fadeUpGallery = createFadeUpVariants({ duration: 0.45, staggerDelay: 0.06 });
