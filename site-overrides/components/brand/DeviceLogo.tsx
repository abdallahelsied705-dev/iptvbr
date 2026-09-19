import { MonitorSmartphone, Tv } from "lucide-react";

export type DeviceBrand =
  | "firetv" | "androidtv" | "appletv" | "samsung" | "lg" | "roku"
  | "chromecast" | "nvidia" | "windows" | "android" | "formuler" | "mobile";

export function deviceBrandForSlug(slug: string): DeviceBrand | null {
  if (slug.includes("firestick")) return "firetv";
  if (slug.includes("android-tv") || slug.includes("google-tv")) return "androidtv";
  if (slug.includes("apple-tv")) return "appletv";
  if (slug.includes("samsung")) return "samsung";
  if (slug.includes("iptv-lg")) return "lg";
  if (slug.includes("roku")) return "roku";
  if (slug.includes("chromecast")) return "chromecast";
  if (slug.includes("nvidia")) return "nvidia";
  if (slug.includes("windows") || slug.includes("iptv-pc")) return "windows";
  if (slug.includes("iptv-android")) return "android";
  if (slug.includes("formuler")) return "formuler";
  if (slug.includes("telemovel") || slug.includes("iphone-ipad")) return "mobile";
  return null;
}

const labels: Record<DeviceBrand, string> = {
  firetv: "Fire TV",
  androidtv: "Android TV",
  appletv: "Apple TV",
  samsung: "Samsung",
  lg: "LG",
  roku: "Roku",
  chromecast: "Chromecast",
  nvidia: "NVIDIA Shield",
  windows: "Windows",
  android: "Android",
  formuler: "Formuler",
  mobile: "Mobile",
};

export function DeviceLogo({ brand, size = 38 }: { brand: DeviceBrand; size?: number }) {
  const iconBrands: DeviceBrand[] = ["android", "mobile"];
  if (iconBrands.includes(brand)) {
    return brand === "android"
      ? <MonitorSmartphone size={size} aria-label={labels[brand]} />
      : <Tv size={size} aria-label={labels[brand]} />;
  }
  return (
    <span
      className="device-wordmark"
      aria-label={labels[brand]}
      style={{ fontSize: Math.max(11, Math.round(size / 3.4)) }}
    >
      {labels[brand]}
    </span>
  );
}
