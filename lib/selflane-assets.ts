/** Local copies of Figma MCP assets under /public/figma (see scripts/download-figma-assets.sh). */
export const assets = {
  logoMark: "/figma/carbon-shape-exclude.svg",
  /** Hero badge dot — [616:2720](https://www.figma.com/design/L0jpj7O9ENkRH4u9H9VPzT/GoSarthak?node-id=616-2720) / frame [616:2719](https://www.figma.com/design/L0jpj7O9ENkRH4u9H9VPzT/GoSarthak?node-id=616-2719) */
  badgeDot: "/figma/ellipse-43659.svg",
  /** Headline-area shadow — [616:2716](https://www.figma.com/design/L0jpj7O9ENkRH4u9H9VPzT/GoSarthak?node-id=616-2716) */
  glowLarge: "/figma/ellipse-43660.svg",
  /** Secondary shadow under hero — [616:2717](https://www.figma.com/design/L0jpj7O9ENkRH4u9H9VPzT/GoSarthak?node-id=616-2717) */
  glowSmall: "/figma/ellipse-43661.svg",
  line1: "/figma/line-1.svg",
  line2: "/figma/line-2.svg",
  maskStrip: "/figma/fictional-company-logo.svg",
  /** Bottom horizon — [616:2744](https://www.figma.com/design/L0jpj7O9ENkRH4u9H9VPzT/GoSarthak?node-id=616-2744) */
  horizon: {
    layer43641: "/figma/ellipse-43641.svg",
    layer43647: "/figma/ellipse-43647.svg",
    layer43646: "/figma/ellipse-43646.svg",
    layer43642: "/figma/ellipse-43642.svg",
    layer43643: "/figma/ellipse-43643.svg",
    layer43644: "/figma/ellipse-43644.svg",
    layer43645: "/figma/ellipse-43645.svg",
  },
  logos: [
    { mark: "/figma/logomark-0.svg", type: "/figma/logotype-0.svg" },
    { mark: "/figma/logomark-1.svg", type: "/figma/logotype-1.svg" },
    { mark: "/figma/logomark-2.svg", type: "/figma/logotype-2.svg" },
    { mark: "/figma/logomark-3.svg", type: "/figma/logotype-3.svg" },
    { mark: "/figma/logomark-4.svg", type: "/figma/logotype-4.svg" },
    { mark: "/figma/logomark-5.svg", type: "/figma/logotype-5.svg" },
    { mark: "/figma/logomark-6.svg", type: "/figma/logotype-6.svg" },
  ],
} as const;
