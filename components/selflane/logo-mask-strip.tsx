import Image from "next/image";
import type { CSSProperties } from "react";

import { assets } from "@/lib/selflane-assets";
import { cn } from "@/lib/utils";

function LogoGroup({
  idSuffix,
  ariaHidden,
  className,
}: {
  idSuffix: string;
  ariaHidden?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-8 pr-10 sm:gap-10 md:gap-12",
        className,
      )}
      aria-hidden={ariaHidden}
    >
      {assets.logos.map((logo, i) => (
        <div
          key={`${logo.mark}-${idSuffix}`}
          className="flex shrink-0 items-center gap-1.5 sm:gap-2"
          data-name="Fictional company logo"
          data-node-id={`616:${2737 + i}`}
        >
          <Image
            src={logo.mark}
            alt=""
            width={32}
            height={32}
            className="h-[26px] w-auto object-contain grayscale sm:h-7 md:h-8"
          />
          <Image
            src={logo.type}
            alt=""
            width={120}
            height={24}
            className="h-4 w-auto object-contain sm:h-[18px] md:h-5"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Figma 616:2734 — partner logos as an infinite horizontal marquee.
 */
export function LogoMaskStrip() {
  return (
    <section
      aria-label="Partner logos"
      className="z-[15] mx-auto mt-12 w-[min(785px,calc(100%-48px))] max-lg:mt-12 lg:pointer-events-none lg:absolute lg:left-1/2 lg:top-[697px] lg:mt-0 lg:-translate-x-1/2"
      data-name="Mask group"
      data-node-id="616:2734"
    >
      <div
        className="logo-marquee-edge pointer-events-auto relative overflow-hidden px-2 sm:px-4"
        data-node-id="616:2736"
      >
        <div
          className="logo-marquee-track h-8 items-center opacity-70"
          style={
            {
              "--marquee-duration": "50s",
            } as CSSProperties
          }
        >
          <LogoGroup idSuffix="a" />
          <LogoGroup
            idSuffix="b"
            ariaHidden
            className="logo-marquee-duplicate"
          />
        </div>
      </div>
    </section>
  );
}
