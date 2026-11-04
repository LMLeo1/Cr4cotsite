import type { SVGProps, CSSProperties } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

const createIcon = (paths: React.ReactNode) => (props: IconProps) => {
  const { size = 24, className = '', ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths}
    </svg>
  );
};

export const IconMenu = createIcon([
  <path key="1" d="M3 12h18" />,
  <path key="2" d="M3 6h18" />,
  <path key="3" d="M3 18h18" />,
]);

export const IconClose = createIcon([
  <path key="1" d="M18 6L6 18" />,
  <path key="2" d="M6 6l12 12" />,
]);

export const IconChevronDown = createIcon([
  <path key="1" d="M6 9l6 6 6-6" />,
]);

export const IconChevronUp = createIcon([
  <path key="1" d="M18 15L12 9 6 15" />,
]);

export const IconArrowRight = createIcon([
  <path key="1" d="M5 12h14" />,
  <path key="2" d="M12 5l7 7-7 7" />,
]);

export const IconArrowUpRight = createIcon([
  <path key="1" d="M7 17L17 7" />,
  <path key="2" d="M7 7h10v10" />,
]);

export const IconPlay = createIcon([
  <polygon key="1" points="5 3 19 12 5 21 5 3" />,
]);

export const IconPause = createIcon([
  <rect key="1" x="6" y="4" width="4" height="16" />,
  <rect key="2" x="14" y="4" width="4" height="16" />,
]);

export const IconYoutube = createIcon([
  <path key="1" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />,
  <path key="2" d="M10 15l5-3-5-3z" />,
]);

export const IconGithub = createIcon([
  <path key="1" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
]);

export const IconTwitter = createIcon([
  <path key="1" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
]);

export const IconLinkedin = createIcon([
  <path key="1" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
  <rect key="2" x="2" y="9" width="4" height="12" />,
  <circle key="3" cx="4" cy="4" r="2" />,
]);

export const IconDiscord = createIcon([
  <path key="1" d="M19.02 6.89a6.09 6.09 0 0 0-4.94-2.1 59.57 59.57 0 0 0-9.16 0 6.1 6.1 0 0 0-4.94 2.1 45.93 45.93 0 0 0 0 10.22c1.97 1.7 4.2 2.6 6.5 2.6s4.53-.9 6.5-2.6a45.93 45.93 0 0 0 0-10.22z" />,
  <path key="2" d="M12 17.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />,
  <circle key="3" cx="18" cy="12" r="1" />,
  <circle key="4" cx="6" cy="12" r="1" />,
]);

export const IconMail = createIcon([
  <path key="1" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
  <polyline key="2" points="22,6 12,13 2,6" />,
]);

export const IconCode = createIcon([
  <polyline key="1" points="16 18 22 12 16 6" />,
  <polyline key="2" points="8 6 2 12 8 18" />,
]);

export const IconUsers = createIcon([
  <path key="1" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
  <circle key="2" cx="9" cy="7" r="4" />,
  <path key="3" d="M23 21v-2a4 4 0 0 0-3-3.87" />,
  <path key="4" d="M16 3.13a4 4 0 0 1 0 7.75" />,
]);

export const IconAward = createIcon([
  <circle key="1" cx="12" cy="8" r="7" />,
  <path key="2" d="M8.21 13.89 7 23l5-4 5 4L15.79 13.88" />,
]);

export const IconRocket = createIcon([
  <path key="1" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c1.26-1.5.5-3.74-2-5z" />,
  <path key="2" d="M12 15.5V6.5" />,
  <path key="3" d="m17 5-4.5 9 2.5 2 4.5-9-2.5-2" />,
  <path key="4" d="m9 5 2.5 9 4.5-9-2.5-2" />,
]);

export const IconStar = createIcon([
  <polygon key="1" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
]);

export const IconHeart = createIcon([
  <path key="1" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
]);

export const IconShare = createIcon([
  <circle key="1" cx="18" cy="5" r="3" />,
  <circle key="2" cx="6" cy="12" r="3" />,
  <circle key="3" cx="18" cy="19" r="3" />,
  <line key="4" x1="8.59" x2="15.42" y1="13.51" y2="17.49" />,
  <line key="5" x1="15.41" x2="8.59" y1="6.51" y2="10.49" />,
]);

export const IconExternalLink = createIcon([
  <path key="1" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />,
  <polyline key="2" points="15 3 21 3 21 9" />,
  <line key="3" x1="10" x2="21" y1="14" y2="3" />,
]);

export const IconCalendar = createIcon([
  <rect key="1" x="3" y="4" width="18" height="18" rx="2" ry="2" />,
  <line key="2" x1="16" x2="16" y1="2" y2="6" />,
  <line key="3" x1="8" x2="8" y1="2" y2="6" />,
  <line key="4" x1="3" x2="21" y1="10" y2="10" />,
]);

export const IconClock = createIcon([
  <circle key="1" cx="12" cy="12" r="10" />,
  <polyline key="2" points="12 6 12 12 16 14" />,
]);

export const IconEye = createIcon([
  <path key="1" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />,
  <circle key="2" cx="12" cy="12" r="3" />,
]);

export const IconTag = createIcon([
  <path key="1" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />,
  <line key="2" x1="7" x2="7.01" y1="7" y2="7" />,
]);

export const IconCheck = createIcon([
  <polyline key="1" points="20 6 9 17 4 12" />,
]);

export const IconSearch = createIcon([
  <circle key="1" cx="11" cy="11" r="8" />,
  <line key="2" x1="21" x2="16.65" y1="21" y2="16.65" />,
]);

export const IconSun = createIcon([
  <circle key="1" cx="12" cy="12" r="5" />,
  <line key="2" x1="12" x2="12" y1="1" y2="3" />,
  <line key="3" x1="12" x2="12" y1="21" y2="23" />,
  <line key="4" x1="4.22" x2="5.64" y1="4.22" y2="5.64" />,
  <line key="5" x1="18.36" x2="19.78" y1="18.36" y2="19.78" />,
  <line key="6" x1="1" x2="3" y1="12" y2="12" />,
  <line key="7" x1="21" x2="23" y1="12" y2="12" />,
  <line key="8" x1="4.22" x2="5.64" y1="19.78" y2="18.36" />,
  <line key="9" x1="18.36" x2="19.78" y1="5.64" y2="4.22" />,
]);

export const IconMoon = createIcon([
  <path key="1" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
]);

export const IconLoader = createIcon([
  <path key="1" d="M21 12a9 9 0 1 1-6.219-8.56" />,
]);

export const IconSend = createIcon([
  <line key="1" x1="22" x2="11" y1="2" y2="13" />,
  <polygon key="2" points="22 2 15 22 11 13 2 9 22 2" />,
]);

export const IconCheckCircle = createIcon([
  <path key="1" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />,
  <polyline key="2" points="22 4 12 14.01 9 11.01" />,
]);

export const IconAlertCircle = createIcon([
  <circle key="1" cx="12" cy="12" r="10" />,
  <line key="2" x1="12" x2="12" y1="8" y2="12" />,
  <line key="3" x1="12" x2="12.01" y1="16" y2="16" />,
]);