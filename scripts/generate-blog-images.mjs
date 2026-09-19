import fs from "node:fs";
import path from "node:path";

const images = [
  ["box-iptv.svg", "BOX IPTV", "Hardware · sistema · desempenho", "▣"],
  ["wifi-ethernet.svg", "WI-FI OU CABO", "Estabilidade antes de velocidade", "⌁"],
  ["vpn-iptv.svg", "VPN & IPTV", "Privacidade com contexto", "◈"],
  ["checklist-iptv.svg", "CHECKLIST IPTV", "Decidir com critérios claros", "✓"],
  ["seguranca-apps.svg", "APPS SEGURAS", "Dados · permissões · atualizações", "◇"],
  ["multi-dispositivo.svg", "VÁRIOS ECRÃS", "Uma casa, uma rede organizada", "▦"],
  ["4k-hdr.svg", "4K & HDR", "Resolução, cor e codecs", "4K"],
  ["controlo-parental.svg", "CONTROLO PARENTAL", "Uma experiência familiar", "●"],
  ["iptv-viagem.svg", "IPTV EM VIAGEM", "Rede, dados e segurança", "↗"],
  ["manutencao-app.svg", "APP EM FORMA", "Atualizar · limpar · diagnosticar", "↻"],
];

const out = path.join(process.cwd(), "public/images/blog");
fs.mkdirSync(out, { recursive: true });

for (const [file, title, subtitle, symbol] of images) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title><desc id="desc">${subtitle}</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071525"/><stop offset=".52" stop-color="#102d55"/><stop offset="1" stop-color="#236de5"/></linearGradient><radialGradient id="glow"><stop stop-color="#62b1ff" stop-opacity=".7"/><stop offset="1" stop-color="#62b1ff" stop-opacity="0"/></radialGradient><filter id="shadow"><feDropShadow dx="0" dy="20" stdDeviation="24" flood-opacity=".3"/></filter></defs>
  <rect width="1200" height="630" rx="28" fill="url(#bg)"/><circle cx="970" cy="90" r="340" fill="url(#glow)" opacity=".35"/><circle cx="1020" cy="315" r="180" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="2"/><circle cx="1020" cy="315" r="120" fill="none" stroke="#fff" stroke-opacity=".09" stroke-width="32"/>
  <g transform="translate(820 160)" filter="url(#shadow)"><rect width="400" height="315" rx="56" fill="#fff" fill-opacity=".09" stroke="#fff" stroke-opacity=".22"/><text x="200" y="200" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="112" font-weight="800">${symbol}</text></g>
  <g transform="translate(82 92)"><rect width="132" height="38" rx="19" fill="#3c87ff"/><text x="66" y="25" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="2">IPTVBR GUIA</text><text x="0" y="205" fill="#fff" font-family="Arial,sans-serif" font-size="62" font-weight="800" letter-spacing="-2">${title}</text><text x="2" y="260" fill="#bfd9ff" font-family="Arial,sans-serif" font-size="26">${subtitle}</text><rect y="315" width="90" height="7" rx="4" fill="#54a2ff"/><text y="390" fill="#fff" fill-opacity=".72" font-family="Arial,sans-serif" font-size="18" letter-spacing="4">IPTVBR.PT · PORTUGAL</text></g>
  </svg>`;
  fs.writeFileSync(path.join(out, file), svg);
}

console.log(`Generated ${images.length} blog images in ${out}`);
