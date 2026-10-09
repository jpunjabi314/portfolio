import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020617",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(6,182,212,0.25), rgba(2,6,23,0) 55%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#22d3ee", letterSpacing: 4, textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 120, fontWeight: 900, letterSpacing: -4, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 42, color: "#e2e8f0", marginTop: 16 }}>
          Platform Engineer at Livelo
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#94a3b8", marginTop: 8 }}>
          Computer Engineering at Boston University
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#22d3ee", marginTop: 56 }}>
          jatinpunjabi.com
        </div>
      </div>
    ),
    size
  );
}
