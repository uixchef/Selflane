import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { assets } from "@/lib/selflane-assets";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Showcase", href: "#" },
] as const;

function HorizonGlow() {
  const { horizon } = assets;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(88vh,980px)] overflow-hidden"
    >
      <div className="absolute left-1/2 top-[10%] h-[1693px] w-[2220px] max-w-none -translate-x-1/2">
        <div className="relative h-full w-full">
          <Image
            src={horizon.outer}
            alt=""
            fill
            className="object-contain opacity-90"
            sizes="2200px"
            priority
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-[12%] h-[1423px] w-[1865px] max-w-none -translate-x-1/2">
        <div className="relative h-full w-full">
          <Image
            src={horizon.base}
            alt=""
            fill
            className="object-contain"
            sizes="1900px"
          />
        </div>
      </div>
      <div className="absolute -left-[20%] top-[8%] h-[1626px] w-[2133px] mix-blend-plus-lighter">
        <div className="relative h-full w-full">
          <Image
            src={horizon.layer1}
            alt=""
            fill
            className="object-contain opacity-80"
            sizes="2100px"
          />
        </div>
      </div>
      <div className="absolute -left-[20%] top-[8%] h-[1626px] w-[2133px] mix-blend-plus-lighter">
        <div className="relative h-full w-full">
          <Image
            src={horizon.layer2}
            alt=""
            fill
            className="object-contain opacity-70"
            sizes="2100px"
          />
        </div>
      </div>
      <div className="absolute -left-[20%] top-[8%] h-[1626px] w-[2133px] mix-blend-plus-lighter">
        <div className="relative h-full w-full">
          <Image
            src={horizon.layer3}
            alt=""
            fill
            className="object-contain opacity-60"
            sizes="2100px"
          />
        </div>
      </div>
      <div className="absolute -left-[20%] top-[8%] h-[1626px] w-[2133px] mix-blend-plus-lighter">
        <div className="relative h-full w-full">
          <Image
            src={horizon.layer4}
            alt=""
            fill
            className="object-contain opacity-50"
            sizes="2100px"
          />
        </div>
      </div>
      <div className="absolute -left-[20%] top-[8%] h-[1626px] w-[2133px] mix-blend-plus-lighter">
        <div className="relative h-full w-full">
          <Image
            src={horizon.layer5}
            alt=""
            fill
            className="object-contain opacity-40"
            sizes="2100px"
          />
        </div>
      </div>
    </div>
  );
}

function LogoStrip() {
  return (
    <div className="relative z-[1] mt-16 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-6 px-4 opacity-70 md:mt-20 md:gap-x-14">
      {assets.logos.map((logo) => (
        <div
          key={logo.mark}
          className="flex h-8 shrink-0 items-center gap-2 md:h-9"
        >
          <Image
            src={logo.mark}
            alt=""
            width={32}
            height={32}
            className="h-7 w-auto object-contain md:h-8"
          />
          <Image
            src={logo.type}
            alt=""
            width={120}
            height={24}
            className="h-5 w-auto object-contain md:h-6"
          />
        </div>
      ))}
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <HorizonGlow />

      <div className="pointer-events-none absolute left-[6%] top-[7%] z-[1] hidden h-[120px] w-[140px] md:block lg:left-[10%]">
        <div className="absolute left-0 top-4 rotate-[48deg]">
          {/* eslint-disable-next-line @next/next/no-img-element -- thin decorative SVG */}
          <img
            src={assets.line1}
            alt=""
            className="w-[160px] opacity-60"
          />
        </div>
        <div className="absolute left-2 top-14 rotate-[48deg]">
          {/* eslint-disable-next-line @next/next/no-img-element -- thin decorative SVG */}
          <img
            src={assets.line2}
            alt=""
            className="w-[160px] opacity-50"
          />
        </div>
      </div>

      <header className="relative z-20 px-4 pt-4 md:px-6">
        <div className="mx-auto flex max-w-[1319px] flex-col gap-3 rounded-xl border border-white/5 bg-black/80 p-3 pl-4 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-[15px] md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <Image
                src={assets.logoMark}
                alt=""
                width={32}
                height={32}
                className="size-8"
                priority
              />
              <span className="text-[22px] font-medium tracking-[-0.06em] md:text-[25px]">
                Selflane
              </span>
            </Link>

            <Button
              size="nav"
              className="bg-white text-black hover:bg-white/90 md:hidden"
              asChild
            >
              <Link href="#">Start Building</Link>
            </Button>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-semibold tracking-[-0.02em] text-[#b6b8c3] md:flex-1 md:justify-center lg:gap-10 lg:text-base"
          >
            {NAV.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            size="nav"
            className="hidden bg-white text-black hover:bg-white/90 md:inline-flex"
            asChild
          >
            <Link href="#">Start Building</Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center px-4 pb-32 pt-10 text-center md:px-6 md:pt-16 lg:pb-40">
        <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 hidden w-[800px] max-w-[90vw] -translate-x-1/2 md:block">
          <div className="relative aspect-[800/303] w-full">
            <Image
              src={assets.glowLarge}
              alt=""
              fill
              className="object-contain opacity-90"
              sizes="800px"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[52%] z-0 hidden w-[284px] -translate-x-1/2 md:block">
          <div className="relative aspect-[284/76] w-full">
            <Image
              src={assets.glowSmall}
              alt=""
              fill
              className="object-contain opacity-90"
              sizes="284px"
            />
          </div>
        </div>

        <div
          className={cn(
            "relative z-[1] mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-2.5",
            "bg-gradient-to-r from-white/10 to-[rgba(153,153,153,0.1)]",
          )}
        >
          <Image
            src={assets.badgeDot}
            alt=""
            width={6}
            height={6}
            className="size-1.5"
          />
          <p
            className="bg-clip-text text-sm font-normal tracking-[0.02em] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(145, 145, 145) 8.7%, rgb(255, 255, 255) 23%, rgb(255, 255, 255) 30%, rgb(145, 145, 145) 38%)",
            }}
          >
            Build Your Online Identity Today
          </p>
        </div>

        <div className="relative z-[1] flex w-full flex-col items-center gap-8 md:gap-10">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <h1
              className="max-w-[807px] bg-clip-text px-2 text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-transparent sm:text-5xl md:text-6xl lg:text-[70px] lg:leading-[1.05] lg:tracking-[-2.8px]"
              style={{
                backgroundImage:
                  "linear-gradient(88.5deg, rgba(255, 255, 255, 0.4) 1.6%, rgb(255, 255, 255) 24%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.4) 97.7%)",
              }}
            >
              <span className="block">Launch a Personal Site</span>
              <span className="block">That Wins Opportunities</span>
            </h1>
            <p className="max-w-[718px] text-lg leading-[1.7] tracking-[0.02em] text-white/60 md:text-xl md:leading-[34px] md:tracking-[0.4px]">
              Whether you&apos;re a designer, developer, or creator, Selflane
              helps you stand out with a site that feels professional, and you.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-start sm:justify-center">
            <Button
              size="pill"
              variant="default"
              className="relative overflow-hidden rounded-full border border-white/50 shadow-[inset_0_0_0_4px_rgba(255,255,255,0.1)]"
              asChild
            >
              <Link href="#">Start Building</Link>
            </Button>
            <Button size="pill" variant="secondary" asChild>
              <Link href="#">See Examples</Link>
            </Button>
          </div>
        </div>

        <LogoStrip />
      </main>
    </div>
  );
}
