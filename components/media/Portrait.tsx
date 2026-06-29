import Image from "next/image";

/**
 * Kings Ford portrait, framed for the dark-editorial palette.
 *
 * One tunable place for the photo's crop + colour grade, shared by the
 * homepage About teaser and the /about mission section.
 *
 * - `object-position` keeps the face in frame on BOTH the desktop 4:5 crop
 *   (only the sides are trimmed) and the mobile 16:10 crop (only top/bottom
 *   are trimmed), so the focal point is set high-and-left.
 * - The grade is deliberately light: the photo is already low-key and warm,
 *   so we only nudge it. A soft-light amber wash ties it to the accent without
 *   casting the skin tone orange. Tune `--port-*` here to adjust everything.
 *
 * The parent supplies the frame (aspect ratio, border, radius) via `className`;
 * this component supplies `relative overflow-hidden` for `next/image` fill.
 * Any `children` (caption, badge) render above the grade overlays.
 */
export default function Portrait({
  className = "",
  sizes = "(max-width: 768px) 100vw, 42vw",
  priority = false,
  children,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/assets/about/portrait.jpg"
        alt="Portrait of Kings Ford"
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover [object-position:42%_24%] [filter:contrast(1.05)_saturate(0.9)_brightness(1.01)]"
      />
      {/* warm amber wash, ties the photo to the brand accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[radial-gradient(120%_95%_at_80%_6%,rgba(184,67,31,0.26),transparent_58%)]"
      />
      {/* gentle bottom shade so an overlaid caption stays legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(10_8_5/0.58)] via-transparent to-transparent"
      />
      {children}
    </div>
  );
}
