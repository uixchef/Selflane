#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/figma"
mkdir -p "$DEST"

fetch() {
  local url="$1" out="$2"
  if [[ ! -f "$out" ]]; then
    curl -fsSL "$url" -o "$out"
    echo "saved $out"
  else
    echo "exists $out"
  fi
}

# URLs from Figma MCP get_design_context export
fetch "https://www.figma.com/api/mcp/asset/b053142f-303c-4021-b952-19be11529e95" "$DEST/carbon-shape-exclude.svg"
# Hero shadow glows — Figma 616:2716 / 616:2717
fetch "https://www.figma.com/api/mcp/asset/246d83fc-0ba1-40a8-a89c-9d216d0105b1" "$DEST/ellipse-43660.svg"
fetch "https://www.figma.com/api/mcp/asset/19f6a04c-c724-4d4f-9147-60a28fe88234" "$DEST/ellipse-43661.svg"
fetch "https://www.figma.com/api/mcp/asset/68cd9f22-659d-48fe-ba39-d45def3daa91" "$DEST/ellipse-43659.svg"
fetch "https://www.figma.com/api/mcp/asset/74940c04-d748-4192-9e1e-a8af00fcdd08" "$DEST/line-1.svg"
fetch "https://www.figma.com/api/mcp/asset/ae0b7ef1-a39e-432e-b33b-47cd5a453a4e" "$DEST/line-2.svg"
fetch "https://www.figma.com/api/mcp/asset/4a578afd-7695-4594-ad9b-e66cbc8bb8b5" "$DEST/fictional-company-logo.svg"
# Horizon stack — Figma 616:2744 MCP asset IDs
fetch "https://www.figma.com/api/mcp/asset/47e62da1-39f8-45b9-9317-ff7273310549" "$DEST/ellipse-43641.svg"
fetch "https://www.figma.com/api/mcp/asset/21fad1b8-8f73-49be-bcef-43e3d0e8dd3a" "$DEST/ellipse-43647.svg"
fetch "https://www.figma.com/api/mcp/asset/b2e08723-4388-499e-80ed-9d95195f063c" "$DEST/ellipse-43646.svg"
fetch "https://www.figma.com/api/mcp/asset/3b39c79a-c225-44e7-8929-2829881a70b2" "$DEST/ellipse-43642.svg"
fetch "https://www.figma.com/api/mcp/asset/57c0391e-54b8-4a97-bd26-56d69133d64c" "$DEST/ellipse-43643.svg"
fetch "https://www.figma.com/api/mcp/asset/f72542ca-c9f4-4331-9c7d-68153aa863b9" "$DEST/ellipse-43644.svg"
fetch "https://www.figma.com/api/mcp/asset/8d07bfe2-1a4d-43ea-98a4-1631fbc0d8e6" "$DEST/ellipse-43645.svg"

fetch "https://www.figma.com/api/mcp/asset/b6f2fbc7-816f-4fea-99d9-a9f9a755bfdd" "$DEST/logomark-0.svg"
fetch "https://www.figma.com/api/mcp/asset/9c5d2b8c-d33c-482f-bfa2-35dc129dc4b7" "$DEST/logotype-0.svg"
fetch "https://www.figma.com/api/mcp/asset/e140ed63-338d-4f00-b1f8-358f45a68928" "$DEST/logomark-1.svg"
fetch "https://www.figma.com/api/mcp/asset/488709ee-b6d0-4aeb-9f81-47821dc91d30" "$DEST/logotype-1.svg"
fetch "https://www.figma.com/api/mcp/asset/6fc44597-926d-47ea-9a68-2fce5dbbc483" "$DEST/logomark-2.svg"
fetch "https://www.figma.com/api/mcp/asset/6b9c77d1-154c-4c17-b1ff-db0deea64d79" "$DEST/logotype-2.svg"
fetch "https://www.figma.com/api/mcp/asset/9058a085-3927-4ade-b3d4-6bbb6dfac952" "$DEST/logomark-3.svg"
fetch "https://www.figma.com/api/mcp/asset/b597c01c-e31d-4135-b7c2-63da3b548bc7" "$DEST/logotype-3.svg"
fetch "https://www.figma.com/api/mcp/asset/1b7d9404-bd47-48a2-ac12-9e5d1c0b08ac" "$DEST/logomark-4.svg"
fetch "https://www.figma.com/api/mcp/asset/28165760-5524-48c3-b8bc-95c1bb417047" "$DEST/logotype-4.svg"
fetch "https://www.figma.com/api/mcp/asset/a67d5ca5-f309-486a-a2a8-09c5302972a5" "$DEST/logomark-5.svg"
fetch "https://www.figma.com/api/mcp/asset/702e5af7-ae54-4251-a699-e8f7252bfe2f" "$DEST/logotype-5.svg"
fetch "https://www.figma.com/api/mcp/asset/eb98387c-4f56-46b4-b09d-4ab5f4cadd12" "$DEST/logomark-6.svg"
fetch "https://www.figma.com/api/mcp/asset/20ab572b-84d0-4331-96df-d96365178c9f" "$DEST/logotype-6.svg"

echo "Done. Assets in $DEST"
