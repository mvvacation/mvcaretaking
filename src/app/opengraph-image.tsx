import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "MVCaretaking — Martha's Vineyard Caretaker Directory & Home Watch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f1d2e 0%, #243b53 50%, #0f1d2e 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #d4a843, transparent)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #d4a843, #b8922e)",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "white", fontSize: 36, fontWeight: 700 }}>
            MV
          </span>
        </div>

        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            margin: 0,
            padding: "0 60px",
          }}
        >
          Martha&apos;s Vineyard
        </h1>

        <h2
          style={{
            fontSize: 40,
            fontWeight: 400,
            color: "#d4a843",
            textAlign: "center",
            margin: "12px 0 0",
          }}
        >
          Caretaker Directory & Home Watch
        </h2>

        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginTop: 24,
            padding: "0 80px",
          }}
        >
          Connect with trusted, vetted caretakers protecting 10,700+ seasonal
          homes across all 6 MV towns
        </p>

        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #d4a843, transparent)",
          }}
        />

        {/* URL badge */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 16, color: "rgba(255,255,255,0.4)" }}>
            mvcaretaking.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
