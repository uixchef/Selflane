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
fetch "https://www.figma.com/api/mcp/asset/4189d3cf-466a-4443-a407-0ea59669d593" "$DEST/ellipse-43660.svg"
fetch "https://www.figma.com/api/mcp/asset/7cb602d0-a6b7-4e31-a272-fadf4ebb57c8" "$DEST/ellipse-43661.svg"
fetch "https://www.figma.com/api/mcp/asset/4150ab8d-d600-4a71-9269-565869f3d268" "$DEST/ellipse-43659.svg"
fetch "https://www.figma.com/api/mcp/asset/74940c04-d748-4192-9e1e-a8af00fcdd08" "$DEST/line-1.svg"
fetch "https://www.figma.com/api/mcp/asset/ae0b7ef1-a39e-432e-b33b-47cd5a453a4e" "$DEST/line-2.svg"
fetch "https://www.figma.com/api/mcp/asset/4a578afd-7695-4594-ad9b-e66cbc8bb8b5" "$DEST/fictional-company-logo.svg"
fetch "https://www.figma.com/api/mcp/asset/5220d724-7a51-4cad-9980-0b6b74c6843e" "$DEST/ellipse-43641.svg"
fetch "https://www.figma.com/api/mcp/asset/a1cb2845-610b-4ee1-8a89-806018353344" "$DEST/ellipse-43647.svg"
fetch "https://www.figma.com/api/mcp/asset/b4868e6d-6257-45cd-9eff-46ca1c02c250" "$DEST/ellipse-43646.svg"
fetch "https://www.figma.com/api/mcp/asset/4ac721b4-7201-4177-811c-c0123e7f5990" "$DEST/ellipse-43642.svg"
fetch "https://www.figma.com/api/mcp/asset/45550116-a861-4b31-b2e9-34705fbc8b20" "$DEST/ellipse-43643.svg"
fetch "https://www.figma.com/api/mcp/asset/ee1e7906-def8-464f-90eb-fa96ee1dc689" "$DEST/ellipse-43644.svg"
fetch "https://www.figma.com/api/mcp/asset/85c4b66b-ef53-4039-8483-9e4215b572f4" "$DEST/ellipse-43645.svg"

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
