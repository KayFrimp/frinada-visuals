import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#020051",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#e4e7f2" }}>CREATIVE TECHNOLOGY</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1 }}>FRINADA VISUALS</div>
        <div style={{ fontSize: 28, marginTop: 28, letterSpacing: 4, color: "#ffd0d6" }}>EXCELLENCE IN SIMPLICITY</div>
      </div>
    ),
    size,
  );
}
