import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function GET() {
  const artwork = await readFile(join(process.cwd(), "public/images/social/iptvbr-preview-2026.jpg"));

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#07112a", color: "white", fontFamily: "sans-serif" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/jpeg;base64,${artwork.toString("base64")}`} alt="" width="1200" height="630" style={{ position: "absolute", inset: 0, width: 1200, height: 630, objectFit: "cover" }} />
      <div style={{ display: "flex", position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,13,34,.96), rgba(4,13,34,.83) 35%, rgba(4,13,34,.08) 70%, transparent)" }} />
      <div style={{ display: "flex", position: "relative", flexDirection: "column", justifyContent: "space-between", width: 750, height: "100%", padding: "48px 54px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 15, background: "#2d79eb", fontSize: 39, fontWeight: 850 }}>B</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontSize: 26, fontWeight: 900 }}>IPTVBR</span>
            <span style={{ fontSize: 15, letterSpacing: 3.5, color: "#91c6ff", fontWeight: 750 }}>PORTUGAL</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ color: "#9bc6ff", fontSize: 19, fontWeight: 800, letterSpacing: 2 }}>CANAIS · DESPORTO · CINEMA</span>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 62, fontWeight: 850, lineHeight: 1.03, letterSpacing: -2 }}>
            <span>O teu mundo IPTV.</span>
            <span style={{ color: "#80b6ff" }}>Num só lugar.</span>
          </div>
          <span style={{ fontSize: 21, color: "#dae7f5" }}>+45.000 canais · filmes e séries · apoio em português</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 19, fontWeight: 750 }}>
          <span style={{ display: "flex", padding: "12px 20px", borderRadius: 99, background: "#347af1", color: "#fff" }}>TESTE GRÁTIS 24H</span>
          <span style={{ color: "#dce9f7" }}>Planos e guias de instalação</span>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
