import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoSrc = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/brand/logo-on-light.png")).toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020051",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#ffffff",
            padding: "56px 64px 48px",
          }}
        >
          {/* next/og paints this element itself. next/image cannot be used inside ImageResponse. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={720} height={275} alt="" />
          <div style={{ marginTop: 28, fontSize: 28, color: "#020051" }}>Creative Technology & Digital Solutions</div>
        </div>
      </div>
    ),
    size,
  );
}
