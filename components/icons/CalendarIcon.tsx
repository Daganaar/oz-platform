import { SVGProps } from 'react';

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={22}
      height={22}
      {...props}
    >
      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
      <path d="M3 10h18M8 2v4M16 2v4"></path>
    </svg>
  );
}
