import type { CSSProperties } from "react";

import {
  METEOR_FLIGHT_DX,
  METEOR_FLIGHT_DY,
  METEOR_STREAK_ANGLE,
} from "@/lib/meteor-direction";

/**
 * Hairline shooting-star streaks — same angle & flight vector for every particle.
 */
const METEORS: {
  left: string;
  top: string;
  delay: string;
  duration: string;
  width: string;
}[] = [
  { left: "8%", top: "4%", delay: "0s", duration: "4.2s", width: "118px" },
  { left: "92%", top: "8%", delay: "1.4s", duration: "5.1s", width: "96px" },
  { left: "78%", top: "2%", delay: "2.8s", duration: "3.9s", width: "128px" },
  { left: "18%", top: "14%", delay: "4.1s", duration: "4.8s", width: "88px" },
  { left: "65%", top: "6%", delay: "0.7s", duration: "4.5s", width: "112px" },
  { left: "42%", top: "3%", delay: "3.5s", duration: "5.4s", width: "104px" },
  { left: "55%", top: "11%", delay: "5.2s", duration: "4s", width: "84px" },
  { left: "30%", top: "7%", delay: "6s", duration: "5.8s", width: "98px" },
  { left: "14%", top: "11%", delay: "2.1s", duration: "4.4s", width: "92px" },
  { left: "88%", top: "16%", delay: "3.7s", duration: "5.3s", width: "100px" },
  { left: "48%", top: "2%", delay: "4.9s", duration: "4.6s", width: "122px" },
  { left: "72%", top: "13%", delay: "1.1s", duration: "5.6s", width: "90px" },
  { left: "25%", top: "5%", delay: "5.8s", duration: "4.3s", width: "108px" },
  { left: "60%", top: "18%", delay: "0.3s", duration: "5.9s", width: "86px" },
  { left: "95%", top: "22%", delay: "2.6s", duration: "4.7s", width: "94px" },
  { left: "6%", top: "20%", delay: "4.4s", duration: "5.2s", width: "102px" },
];

export function MeteorField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {METEORS.map((m, i) => (
        <div
          key={i}
          className="meteor-particle absolute"
          style={
            {
              left: m.left,
              top: m.top,
              "--meteor-dx": METEOR_FLIGHT_DX,
              "--meteor-dy": METEOR_FLIGHT_DY,
              animationDuration: m.duration,
              animationDelay: m.delay,
            } as CSSProperties
          }
        >
          <div
            className="meteor-streak h-px rounded-full will-change-transform"
            style={{
              width: m.width,
              transform: `rotate(${METEOR_STREAK_ANGLE})`,
              transformOrigin: "right center",
            }}
          />
        </div>
      ))}
    </div>
  );
}
