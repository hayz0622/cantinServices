import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const BaseIcon = ({ className, size = 24, children, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("shrink-0", className)}
    {...props}
  >
    {children}
  </svg>
);

export const ArrowIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </BaseIcon>
);

export const CheckBadgeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 2.5 9.8 4.8l-3.2-.1-.1 3.2L4.2 10l2.3 2.2-.1 3.2 3.2.1 2.2 2.3 2.2-2.3 3.2-.1-.1-3.2 2.3-2.2-2.3-2.1-.1-3.2-3.2.1z" />
    <path d="m9 12 2 2 4-4" />
  </BaseIcon>
);

export const TreeCutIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 3 7 10h3l-3 5h4l-2 4" />
    <path d="M13 9h4l-2 3h3l-3 5" />
    <path d="M9 21h6" />
  </BaseIcon>
);

export const PruningIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="7" cy="8" r="2.3" />
    <circle cx="7" cy="16" r="2.3" />
    <path d="m9 9 8 8" />
    <path d="m9 15 8-8" />
  </BaseIcon>
);

export const CableIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 19c2-5 5-8 8-8s6 3 8 8" />
    <path d="M6 5v6" />
    <path d="M18 5v6" />
    <path d="M6 5h12" />
  </BaseIcon>
);

export const TrimIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M6 16c0-5 4-8 8-8" />
    <path d="M6 16c1.5 1.8 3.2 2.7 5.1 2.7" />
    <path d="M13 7c2.6 0 5 2 5 4.8" />
    <path d="M4 20h16" />
  </BaseIcon>
);

export const PlantationIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 4v15" />
    <path d="M12 8c0-2.4 2-4 4-4-0.1 2.8-1.5 5-4 5" />
    <path d="M12 10c0-2.4-2-4-4-4 0.1 2.8 1.5 5 4 5" />
    <path d="M6 20h12" />
  </BaseIcon>
);

export const SoilIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 15c2-2 4-2 6 0s4 2 6 0 4-2 4 0" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="13" cy="8" r="1.3" />
    <circle cx="17" cy="11" r="1.2" />
    <path d="M4 20h16" />
  </BaseIcon>
);

export const EmergencyIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 4 3.8 18h16.4z" />
    <path d="M12 9v4" />
    <circle cx="12" cy="15.5" r="0.6" fill="currentColor" stroke="none" />
  </BaseIcon>
);

export const SnowRopeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 3v18" />
    <path d="m7.5 5 9 14" />
    <path d="m16.5 5-9 14" />
    <path d="M4 9h16" />
    <path d="M4 15h16" />
  </BaseIcon>
);

export const CertificationIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="9" r="4" />
    <path d="m9.8 14.5-1.3 5 3.5-2 3.5 2-1.3-5" />
  </BaseIcon>
);

export const ServiceHeartIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M6.5 5.5A3.5 3.5 0 0 0 3 9c0 4.5 9 9.5 9 9.5S21 13.5 21 9a3.5 3.5 0 0 0-6-2.5L12 9l-3-2.5a3.5 3.5 0 0 0-2.5-1z" />
  </BaseIcon>
);

export const AvailabilityIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
  </BaseIcon>
);

export const PhoneIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M6 4h3l1 4-2 1.5a14 14 0 0 0 6.5 6.5L16 14l4 1v3c0 1-0.8 2-1.9 2C10.5 20 4 13.5 4 5.9 4 4.8 5 4 6 4z" />
  </BaseIcon>
);

export const MailIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3.5" y="6" width="17" height="12" rx="2" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </BaseIcon>
);

export const LocationIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10z" />
    <circle cx="12" cy="11" r="2" />
  </BaseIcon>
);

export const ClockIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </BaseIcon>
);

export const MessageIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="5" width="18" height="12" rx="3" />
    <path d="M8 17v3l4-3" />
    <path d="M8 10h8" />
  </BaseIcon>
);
