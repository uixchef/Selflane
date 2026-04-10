/* eslint-disable @next/next/no-img-element -- Figma SVG layers (exact stack; decorative) */
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import { FigmaMeteorLines } from "@/components/selflane/figma-meteor-lines";
import { LogoMaskStrip } from "@/components/selflane/logo-mask-strip";
import { MeteorField } from "@/components/selflane/meteor-field";
import { assets } from "@/lib/selflane-assets";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Showcase", href: "#" },
] as const;

const HEADLINE_GRADIENT =
  "linear-gradient(88.50455926584836deg, rgba(255, 255, 255, 0.4) 1.564%, rgb(255, 255, 255) 23.753%, rgb(255, 255, 255) 50.162%, rgba(255, 255, 255, 0.4) 97.715%)";

const BADGE_TEXT_GRADIENT =
  "linear-gradient(90deg, rgb(145, 145, 145) 8.6793%, rgb(255, 255, 255) 23.343%, rgb(255, 255, 255) 30.288%, rgb(145, 145, 145) 38.332%)";

/** Figma 616:2719 — Frame 2095585131 fill (`bg-gradient-to-r` + stop at 14.657%). */
const BADGE_SURFACE_GRADIENT =
  "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 14.657%, rgba(153, 153, 153, 0.1) 100%)";

/** Figma 616:2747–616:2751 — mix-blend-plus-lighter stack (insets from Dev Mode). */
const HORIZON_PLUS_LAYERS = [
  { nodeId: "616:2747", src: assets.horizon.layer43646, inset: "inset-[-0.74%_-0.56%]" },
  { nodeId: "616:2748", src: assets.horizon.layer43642, inset: "inset-[-0.74%_-0.56%]" },
  { nodeId: "616:2749", src: assets.horizon.layer43643, inset: "inset-[-0.49%_-0.38%]" },
  { nodeId: "616:2750", src: assets.horizon.layer43644, inset: "inset-[-0.25%_-0.19%]" },
  { nodeId: "616:2751", src: assets.horizon.layer43645, inset: "inset-[-0.25%_-0.19%]" },
] as const;

/**
 * Figma 616:2744–616:2751 — full horizon stack. `isolation` + capped opacity on plus-lighter
 * keeps the rim stable in the browser (same approach as earlier Figma exports).
 */
function HorizonStack({ className }: { className?: string }) {
  const h = assets.horizon;
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-[800.76px] isolate w-full max-w-[1440px] -translate-x-1/2 overflow-x-clip max-lg:hidden",
        className,
      )}
      data-node-id="616:2744"
    >
      {/* 616:2745 — top 801px on artboard ⇒ +0.24px vs group origin */}
      <div
        className="absolute left-[calc(50%-3.29px)] top-[0.24px] h-[1422.651px] w-[1865.417px] -translate-x-1/2"
        data-node-id="616:2745"
      >
        <div
          className="horizon-globe-drift absolute inset-0"
          style={
            {
              "--drift-duration": "92s",
              "--drift-delay": "0s",
            } as CSSProperties
          }
        >
          <div
            className="horizon-globe-breathe absolute inset-0"
            style={{ "--breathe-delay": "-4s" } as CSSProperties}
          >
            <div className="absolute inset-[-0.84%_-0.64%]">
              <img src={h.layer43641} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      {/* 616:2746 — top 811.81px on artboard ⇒ +11.05px */}
      <div
        className="absolute left-1/2 top-[11.05px] h-[1693.072px] w-[2220px] -translate-x-1/2"
        data-node-id="616:2746"
      >
        <div
          className="horizon-globe-drift absolute inset-0"
          style={
            {
              "--drift-duration": "118s",
              "--drift-delay": "-38s",
            } as CSSProperties
          }
        >
          <div
            className="horizon-globe-breathe absolute inset-0"
            style={{ "--breathe-delay": "-11s" } as CSSProperties}
          >
            <div className="absolute inset-[-0.71%_-0.54%]">
              <img src={h.layer43647} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      {HORIZON_PLUS_LAYERS.map((layer, i) => (
        <div
          key={layer.nodeId}
          className="absolute left-[-348.89px] top-0 mix-blend-plus-lighter"
          style={{ opacity: 0.34 }}
          data-node-id={layer.nodeId}
        >
          <div
            className="horizon-globe-drift relative h-[1626.446px] w-[2132.639px]"
            style={
              {
                "--drift-duration": `${72 + i * 16}s`,
                "--drift-delay": `${-i * 24}s`,
              } as CSSProperties
            }
          >
            <div className={cn("absolute", layer.inset)}>
              <img src={layer.src} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Figma 616:2716 — large soft shadow behind headline (800×303 @ y 649) */
function HeroGlowLarge() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[649px] z-[2] hidden h-[303px] w-[800px] max-w-[calc(100vw-48px)] -translate-x-1/2 lg:block"
      aria-hidden
      data-node-id="616:2716"
    >
      <div className="absolute inset-[-82.51%_-31.25%]">
        <img
          src={assets.glowLarge}
          alt=""
          className="block size-full max-w-none"
        />
      </div>
    </div>
  );
}

/** Figma 616:2717 — tight secondary shadow (284×76 @ y 776) */
function HeroGlowSmall() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[776px] z-[2] hidden h-[76px] w-[284px] max-w-[calc(100vw-48px)] -translate-x-1/2 lg:block"
      aria-hidden
      data-node-id="616:2717"
    >
      <div className="absolute inset-[-131.58%_-35.21%]">
        <img
          src={assets.glowSmall}
          alt=""
          className="block size-full max-w-none"
        />
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div
      className={cn(
        "relative overflow-x-hidden bg-black text-white",
        "min-h-screen",
        /* Figma Desktop - 4 is 1024px tall — drop min-h-[2480px] empty scroll; lock lg viewport */
        "lg:h-[min(1024px,100vh)] lg:min-h-0 lg:overflow-hidden",
      )}
    >
      <MeteorField />
      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px]">
        {/* Mobile: subtle bottom wash (full Figma stack is lg+ only) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[42vh] bg-gradient-to-t from-white/[0.07] via-white/[0.02] to-transparent lg:hidden"
        />
        <HorizonStack />

        <HeroGlowLarge />
        <HeroGlowSmall />
        <FigmaMeteorLines />

        {/* 616:2703 — nav */}
        <header className="absolute left-1/2 top-4 z-30 w-[min(1319px,calc(100%-32px))] -translate-x-1/2 max-lg:relative max-lg:left-auto max-lg:top-0 max-lg:w-full max-lg:translate-x-0 max-lg:px-4 max-lg:pt-4">
          <div className="flex items-center justify-between rounded-[12px] bg-black p-3 backdrop-blur-[15px] max-lg:flex-col max-lg:gap-3 max-lg:rounded-xl">
            <Link
              href="/"
              className="inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-none"
            >
              <span className="col-start-1 row-start-1 ml-[35px] mt-[1.5px] h-[27px] w-[95px] text-center text-[25px] font-medium tracking-[-1px] text-white">
                Selflane
              </span>
              <span className="col-start-1 row-start-1 size-[32px]">
                <Image
                  src={assets.logoMark}
                  alt=""
                  width={32}
                  height={32}
                  className="size-full"
                  priority
                />
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="flex shrink-0 items-center gap-10 text-center text-[16px] font-semibold leading-[1.3] tracking-[-0.32px] text-[#b6b8c3] max-lg:flex-wrap max-lg:justify-center max-lg:gap-6"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="whitespace-nowrap transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              asChild
              size="nav"
              className="h-auto shrink-0 rounded-[65px] bg-white px-4 py-1.5 text-[16px] font-medium leading-[1.3] tracking-[-0.32px] text-black hover:bg-white/90"
            >
              <Link href="#">Start Building</Link>
            </Button>
          </div>
        </header>

        {/* 616:2718 — hero column */}
        <main className="absolute left-1/2 top-[176px] z-20 flex w-[min(785px,calc(100%-48px))] -translate-x-1/2 flex-col items-center gap-6 text-center max-lg:relative max-lg:left-auto max-lg:top-0 max-lg:mt-8 max-lg:w-full max-lg:translate-x-0 max-lg:px-4">
          {/* Figma 616:2719 — 284×37: border-white + surface gradient (single layer; matches file). */}
          <div
            className="inline-flex shrink-0 items-center justify-center gap-[10px] rounded-[100px] border border-solid border-white px-[24px] py-[10px]"
            data-node-id="616:2719"
            style={{ backgroundImage: BADGE_SURFACE_GRADIENT }}
          >
            <span
              className="relative size-[6px] shrink-0"
              data-node-id="616:2720"
            >
              <Image
                src={assets.badgeDot}
                alt=""
                width={6}
                height={6}
                className="size-full"
              />
            </span>
            <p
              className="relative shrink-0 bg-clip-text text-center text-[14px] font-normal leading-normal tracking-[0.28px] text-transparent whitespace-nowrap"
              data-node-id="616:2721"
              style={{ backgroundImage: BADGE_TEXT_GRADIENT }}
            >
              Build Your Online Identity Today
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-10">
            <div className="flex w-full flex-col items-center gap-8">
              <h1
                className="w-full max-w-[807px] bg-clip-text text-[clamp(2.25rem,6vw,70px)] font-extrabold leading-none tracking-[-2.8px] text-transparent"
                style={{ backgroundImage: HEADLINE_GRADIENT }}
              >
                <span className="block leading-[80px] max-lg:leading-[1.1]">
                  Launch a Personal Site
                </span>
                <span className="block whitespace-nowrap leading-[80px] max-lg:leading-[1.1]">
                  That Wins Opportunities
                </span>
              </h1>
              <p className="w-full max-w-[718px] text-[20px] font-normal leading-[34px] tracking-[0.4px] text-white opacity-60">
                Whether you&apos;re a designer, developer, or creator, Selflane
                helps you stand out with a site that feels professional, and you.
              </p>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-5">
              <Button
                asChild
                size="pill"
                variant="default"
                className="relative overflow-hidden rounded-[100px] border border-[rgba(255,255,255,0.5)] px-6 py-4 text-[16px] font-semibold leading-normal text-black shadow-[inset_0px_0px_0px_4px_rgba(255,255,255,0.1)]"
              >
                <Link href="#">Start Building</Link>
              </Button>
              <Button
                asChild
                size="pill"
                variant="secondary"
                className="rounded-[100px] bg-[#414141] px-6 py-4 text-[16px] font-semibold leading-normal hover:bg-[#4a4a4a]"
              >
                <Link href="#">See Examples</Link>
              </Button>
            </div>
          </div>
        </main>

        <LogoMaskStrip />
      </div>
    </div>
  );
}
