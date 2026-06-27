import type { SVGProps } from "react";

const baseClass = "inline-block h-[0.9em] w-[0.9em] shrink-0 align-[-0.08em]";

type ArrowProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export function ArrowRight({ className = "", ...props }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 10"
      fill="none"
      className={`${baseClass} ${className}`.trim()}
      {...props}
    >
      <path
        d="M1 5h15M12 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "", ...props }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      fill="none"
      className={`${baseClass} ${className}`.trim()}
      {...props}
    >
      <path
        d="M3 9 9 3M4 3h5v5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft({ className = "", ...props }: ArrowProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 10"
      fill="none"
      className={`${baseClass} ${className}`.trim()}
      {...props}
    >
      <path
        d="M17 5H2M6 1 2 5l4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
