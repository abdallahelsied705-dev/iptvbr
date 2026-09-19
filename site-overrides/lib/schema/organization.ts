import { siteConfig } from "@/config/site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/hero/iptv-portugal-streaming.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Portuguese"],
      url: `${siteConfig.url}/contacto/`,
    }
  };
}
