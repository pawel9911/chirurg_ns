export const SITE_CONFIG = {
  baseUrl: "https://chirurgnowysacz.com.pl",

  defaultTitle: "Robert Gajewski – Gabinet Chirurgii Ogólnej i Onkologicznej",
  defaultDescription:
    "Gabinet chirurgii ogólnej i onkologicznej. Profesjonalna opieka, nowoczesne metody leczenia.",

  applicationName: "Gabinet Roberta Gajewskiego",

  author: {
    name: "Robert Gajewski",
    url: "https://chirurgnowysacz.com.pl",
  },

  keywords: [
    "chirurgia ogólna",
    "chirurgia onkologiczna",
    "gabinet chirurgiczny",
    "Robert Gajewski",
  ],

  creator: "Robert Gajewski",
  publisher: "Robert Gajewski",

  defaultOgImage: `${import.meta.env.VITE_ASSET_PREFIX}/logo-open-graph.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Gabinet Roberta Gajewskiego",

  locale: "pl_PL",
  ogType: "website",
  siteName: "Gabinet Roberta Gajewskiego",

  favicons: [
    {
      rel: "icon",
      href: `${import.meta.env.VITE_ASSET_PREFIX}/favicon-192x192.png`,
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: `${import.meta.env.VITE_ASSET_PREFIX}/favicon-192x192.png`,
    },
    {
      rel: "icon",
      href: `${import.meta.env.VITE_ASSET_PREFIX}/favicon-512x512.png`,
      type: "image/png",
      sizes: "512x512",
    },
  ],

  defaultRobots: "index, follow",
  googlebot: "index, follow",
} as const;
