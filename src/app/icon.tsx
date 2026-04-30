import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 15,
              fontWeight: 800,
              fontFamily: "sans-serif",
              letterSpacing: -0.5,
              lineHeight: 1,
            }}
          >
            S
          </span>
          <span
            style={{
              color: "#C9A84C",
              fontSize: 15,
              fontWeight: 800,
              fontFamily: "sans-serif",
              letterSpacing: -0.5,
              lineHeight: 1,
            }}
          >
            G
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
