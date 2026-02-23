import { SITE_CONFIG } from "@/config/meta";
import { type FC } from "react";

interface SeoMetadataProps {
  /** Nadpisz tytuł strony (fallback = domyślny z metadata) */
  title?: string;
  /** Nadpisz description (fallback = domyślny) */
  description?: string;
  /** Nadpisz canonical URL (fallback = główna strona) */
  canonical?: string;
  /** Nadpisz URL obrazka OG (fallback = /logo-open-graph.png) */
  ogImage?: string;
  /** Czy blokować indeksowanie (noindex + nofollow) */
  noindex?: boolean;
}

export const SeoMetadata: FC<SeoMetadataProps> = ({
  title,
  description,
  canonical = SITE_CONFIG.baseUrl,
  ogImage,
  noindex = false,
}) => {
  const finalTitle = title || SITE_CONFIG.defaultTitle;
  const finalDescription = description || SITE_CONFIG.defaultDescription;
  const ogImagePath = ogImage?.startsWith("/") ? "" : "/";
  const finalOgImage = ogImage
    ? `${SITE_CONFIG.baseUrl}${ogImagePath}${ogImage}`
    : `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultOgImage}`;

  return (
    <>
      <title>{finalTitle}</title>

      <meta name="description" content={finalDescription} />
      <meta name="application-name" content={SITE_CONFIG.applicationName} />

      <meta name="author" content={SITE_CONFIG.author.name} />
      <link rel="author" href={SITE_CONFIG.author.url} />

      <meta name="creator" content={SITE_CONFIG.creator} />
      <meta name="publisher" content={SITE_CONFIG.publisher} />

      <meta name="keywords" content={SITE_CONFIG.keywords.join(", ")} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content={SITE_CONFIG.defaultRobots} />
          <meta name="googlebot" content={SITE_CONFIG.googlebot} />
        </>
      )}

      {SITE_CONFIG.favicons.map((icon, index) => (
        <link key={`${icon.rel}-${index}`} {...icon} />
      ))}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:image" content={finalOgImage} />
      <meta
        property="og:image:width"
        content={SITE_CONFIG.ogImageWidth.toString()}
      />
      <meta
        property="og:image:height"
        content={SITE_CONFIG.ogImageHeight.toString()}
      />
      <meta property="og:image:alt" content={SITE_CONFIG.ogImageAlt} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      <meta property="og:type" content={SITE_CONFIG.ogType} />

      <link rel="canonical" href={canonical} />
    </>
  );
};
