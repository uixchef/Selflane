/* eslint-disable @next/next/no-img-element -- Figma SVG layers (exact stack; decorative) */
import Image from "next/image";
import Link from "next/link";

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

/**
 * Figma 616:2744–616:2751 — full horizon stack. `isolation` + capped layer opacity
 * keeps plus-lighter from blowing out to flat white in the browser.
 */
function HorizonStack({ className }: { className?: string }) {
  const h = assets.horizon;
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-[800.76px] isolate w-full max-w-[1440px] -translate-x-1/2 overflow-x-clip max-lg:hidden",
        className,
      )}
    >
      {/* 616:2745 */}
      <div className="absolute left-[calc(50%-3.29px)] top-0 h-[1422.651px] w-[1865.417px] -translate-x-1/2">
        <div className="absolute inset-[-0.84%_-0.64%]">
          <img src={h.layer43641} alt="" className="block size-full max-w-none" />
        </div>
      </div>
      {/* 616:2746 */}
      <div className="absolute left-1/2 top-[11.05px] h-[1693.072px] w-[2220px] -translate-x-1/2">
        <div className="absolute inset-[-0.71%_-0.54%]">
          <img src={h.layer43647} alt="" className="block size-full max-w-none" />
        </div>
      </div>
      {(
        [
          h.layer43646,
          h.layer43642,
          h.layer43643,
          h.layer43644,
          h.layer43645,
        ] as const
      ).map((src) => (
        <div
          key={src}
          className="absolute left-[-348.89px] top-0 mix-blend-plus-lighter"
          style={{ opacity: 0.34 }}
        >
          <div className="relative h-[1626.446px] w-[2132.639px]">
            <div className="absolute inset-[-0.5%]">
              <img src={src} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Figma 616:2716 — ellipse behind headline area */
function HeroGlowLarge() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[649px] z-[2] hidden h-[303px] w-[800px] max-w-[calc(100vw-48px)] -translate-x-1/2 lg:block">
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

/** Figma 616:2717 */
function HeroGlowSmall() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[776px] z-[2] hidden h-[76px] w-[284px] max-w-[calc(100vw-48px)] -translate-x-1/2 lg:block">
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
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <MeteorField />
      {/* Figma “Desktop - 4” artboard — min height fits horizon stack (node 616:2744+) */}
      <div className="relative z-10 mx-auto min-h-[2480px] w-full max-w-[1440px] max-lg:min-h-0">
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
          <div
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-[10px] rounded-[100px] border border-solid border-white bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)] px-6 py-2.5",
            )}
          >
            <span className="relative block size-[6px] shrink-0">
              <Image
                src={assets.badgeDot}
                alt=""
                width={6}
                height={6}
                className="size-full"
              />
            </span>
            <p
              className="bg-clip-text text-[14px] font-normal tracking-[0.28px] text-transparent"
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
