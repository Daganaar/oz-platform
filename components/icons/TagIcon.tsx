import { SVGProps } from 'react';

export function TagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={17}
      height={17}
      {...props}
    >
      <path d="M9 5H2v7l6.29 6.29a2.4 2.4 0 0 0 3.42 0l4.58-4.58a2.4 2.4 0 0 0 0-3.42Z"></path>
      <circle cx={5.5} cy={8.5} r={1}></circle>
    </svg>
  );
}
