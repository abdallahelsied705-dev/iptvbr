export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "IPTV Portugal", href: "/iptv-portugal/" },
  { label: "Preços", href: "/precos/" },
  {
    label: "Dispositivos",
    href: "/dispositivos/",
    children: [
      { label: "Fire TV", href: "/dispositivos/iptv-firestick/" },
      { label: "Smart TV", href: "/dispositivos/iptv-smart-tv/" },
      { label: "Samsung", href: "/dispositivos/iptv-samsung/" },
      { label: "LG", href: "/dispositivos/iptv-lg/" },
      { label: "Android TV", href: "/dispositivos/iptv-android-tv/" },
      { label: "Google TV", href: "/dispositivos/iptv-google-tv/" },
      { label: "Apple TV", href: "/dispositivos/iptv-apple-tv/" },
      { label: "Roku", href: "/dispositivos/iptv-roku/" },
      { label: "Chromecast", href: "/dispositivos/iptv-chromecast/" },
      { label: "NVIDIA Shield", href: "/dispositivos/iptv-nvidia-shield/" },
      { label: "Windows", href: "/dispositivos/iptv-windows/" },
      { label: "Android", href: "/dispositivos/iptv-android/" },
      { label: "Formuler", href: "/dispositivos/iptv-formuler/" },
      { label: "Telemóvel", href: "/dispositivos/iptv-telemovel/" },
    ],
  },
  {
    label: "Apps",
    href: "/apps/",
    children: [
      { label: "IPTV Smarters Pro", href: "/apps/iptv-smarters-pro/" },
      { label: "TiviMate", href: "/apps/tivimate/" },
      { label: "IBO Player", href: "/apps/ibo-player/" },
      { label: "Smart IPTV", href: "/apps/smart-iptv/" },
    ],
  },
  { label: "Guias", href: "/guias/" },
  { label: "Blog", href: "/blog/" },
  { label: "Suporte", href: "/suporte/" },
];
