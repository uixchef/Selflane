/* eslint-disable @next/next/no-img-element -- thin Figma streak SVGs */
import { assets } from "@/lib/selflane-assets";
import { METEOR_STREAK_ANGLE } from "@/lib/meteor-direction";

type LineMeteor = {
  line: 1 | 2;
  left: string;
  top: string;
  width: string;
  /** inset padding for img wrapper — matches Figma export */
  inset: string;
  delay: string;
  duration: string;
  /** show on small screens */
  mobile?: boolean;
};

/**
 * Figma 616:2731 / 616:2732 style diagonal streaks — animated along their axis (shooting flash).
 */
const LINE_METEORS: LineMeteor[] = [
  {
    line: 1,
    left: "310px",
    top: "108.07px",
    width: "106.104px",
    inset: "inset-[-0.5px_-0.47%]",
    delay: "0s",
    duration: "4.2s",
  },
  {
    line: 2,
    left: "133px",
    top: "158px",
    width: "105.688px",
    inset: "inset-[-0.28px_-0.26%]",
    delay: "1.1s",
    duration: "4.9s",
  },
  {
    line: 1,
    left: "68%",
    top: "120px",
    width: "100px",
    inset: "inset-[-0.5px_-0.47%]",
    delay: "2.3s",
    duration: "5.2s",
  },
  {
    line: 2,
    left: "52%",
    top: "88px",
    width: "96px",
    inset: "inset-[-0.28px_-0.26%]",
    delay: "3.4s",
    duration: "4.5s",
  },
  {
    line: 1,
    left: "84%",
    top: "196px",
    width: "90px",
    inset: "inset-[-0.5px_-0.47%]",
    delay: "0.6s",
    duration: "5.8s",
  },
  {
    line: 2,
    left: "24%",
    top: "224px",
    width: "94px",
    inset: "inset-[-0.28px_-0.26%]",
    delay: "4.6s",
    duration: "4.1s",
  },
  {
    line: 1,
    left: "41%",
    top: "62px",
    width: "98px",
    inset: "inset-[-0.5px_-0.47%]",
    delay: "5.1s",
    duration: "4.7s",
  },
  {
    line: 2,
    left: "11%",
    top: "176px",
    width: "88px",
    inset: "inset-[-0.28px_-0.26%]",
    delay: "2.8s",
    duration: "5.4s",
  },
  {
    line: 1,
    left: "58%",
    top: "248px",
    width: "86px",
    inset: "inset-[-0.5px_-0.47%]",
    delay: "1.7s",
    duration: "4.3s",
  },
  {
    line: 2,
    left: "76%",
    top: "52px",
    width: "92px",
    inset: "inset-[-0.28px_-0.26%]",
    delay: "3.9s",
    duration: "5s",
  },
  {
    line: 1,
    left: "94%",
    top: "140px",
    width: "82px",
    inset: "inset-[-0.5px_-0.47%]",
    delay: "4.2s",
    duration: "4.6s",
    mobile: true,
  },
  {
    line: 2,
    left: "8%",
    top: "96px",
    width: "80px",
    inset: "inset-[-0.28px_-0.26%]",
    delay: "1.3s",
    duration: "5.1s",
    mobile: true,
  },
];

export function FigmaMeteorLines() {
  return (
    <>
      {LINE_METEORS.map((m, i) => {
        const src = m.line === 1 ? assets.line1 : assets.line2;
        return (
          <div
            key={`${m.left}-${m.top}-${i}`}
            className={`pointer-events-none absolute z-[3] items-center justify-center ${m.mobile ? "flex lg:hidden" : "hidden lg:flex"}`}
            style={{ left: m.left, top: m.top }}
          >
            <div className="flex h-[78px] w-[71px] items-center justify-center max-lg:scale-90">
              <div
                className="flex-none"
                style={{ transform: `rotate(${METEOR_STREAK_ANGLE})` }}
              >
                <div
                  className="figma-meteor-line-track relative h-0 will-change-transform"
                  style={{
                    width: m.width,
                    animationDelay: m.delay,
                    animationDuration: m.duration,
                  }}
                >
                  <div className={`absolute ${m.inset}`}>
                    <img src={src} alt="" className="block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
