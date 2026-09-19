import Link from "next/link";

const devices = [
  ["▣", "Fire TV", "/dispositivos/iptv-firestick/", "Instalação rápida e guiada."],
  ["⌁", "Smart TV", "/dispositivos/iptv-smart-tv/", "Direto no televisor compatível."],
  ["S", "Samsung", "/dispositivos/iptv-samsung/", "Percurso dedicado para Tizen."],
  ["L", "LG", "/dispositivos/iptv-lg/", "Configuração simples no webOS."],
  ["A", "Android TV", "/dispositivos/iptv-android-tv/", "Flexível para apps IPTV."],
  ["G", "Google TV", "/dispositivos/iptv-google-tv/", "Experiência moderna de sala."],
  ["", "Apple TV", "/dispositivos/iptv-apple-tv/", "Guia para o ecossistema Apple."],
  ["◉", "iPhone / iPad", "/dispositivos/iptv-iphone-ipad/", "Também em mobilidade."],
  ["⌘", "PC", "/dispositivos/iptv-pc/", "Veja no computador."],
];

export function DeviceShowcase() {
  return <div className="device-showcase-grid">{devices.map(([icon, name, href, note]) => <Link className="device-showcase-card" href={href} key={href}><span className="device-showcase-icon">{icon}</span><div><strong>{name}</strong><p>{note}</p></div><span className="device-showcase-arrow">↗</span></Link>)}</div>;
}
