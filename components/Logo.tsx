type LogoProps = {
  variant?: 'dark' | 'light';
};

export function Logo({ variant = 'dark' }: LogoProps) {
  if (variant === 'light') {
    return (
      <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-label="לוגו עוז">
        <polygon points="100,5 182.27,52.5 182.27,147.5 100,195 17.73,147.5 17.73,52.5" fill="#DCC4EA" stroke="#DCC4EA" strokeWidth={10} strokeLinejoin="round"></polygon>
        <polygon points="100,18 171.01,59 171.01,141 100,182 28.99,141 28.99,59" fill="#3D075F" stroke="#3D075F" strokeWidth={6} strokeLinejoin="round"></polygon>
        <polygon points="100,46 154,100 100,154 46,100" fill="#571580"></polygon>
        <rect x={66} y={100} width={68} height={54} fill="#EFE2F6"></rect>
        <polygon points="100,54 150,102 50,102" fill="#EFE2F6"></polygon>
        <rect x={86} y={126} width={28} height={28} fill="#3D075F"></rect>
        <circle cx={100} cy={101} r={6} fill="none" stroke="#3D075F" strokeWidth={4}></circle>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-label="לוגו עוז">
      <polygon points="100,5 182.27,52.5 182.27,147.5 100,195 17.73,147.5 17.73,52.5" fill="#170226" stroke="#170226" strokeWidth={10} strokeLinejoin="round"></polygon>
      <polygon points="100,18 171.01,59 171.01,141 100,182 28.99,141 28.99,59" fill="#3D075F" stroke="#3D075F" strokeWidth={6} strokeLinejoin="round"></polygon>
      <polygon points="100,46 154,100 100,154 46,100" fill="#571580"></polygon>
      <rect x={66} y={100} width={68} height={54} fill="#DCC4EA"></rect>
      <polygon points="100,54 150,102 50,102" fill="#DCC4EA"></polygon>
      <rect x={86} y={126} width={28} height={28} fill="#3D075F"></rect>
      <circle cx={100} cy={101} r={6} fill="none" stroke="#170226" strokeWidth={4}></circle>
    </svg>
  );
}
