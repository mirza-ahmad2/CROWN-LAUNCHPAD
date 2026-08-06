/** Canonical site origin — update when the production domain is confirmed. */
export const SITE_URL = "https://ownyourcrown.com";

export const SITE_NAME = "Own Your Crown";
export const SITE_TAGLINE = "Leadership & Personal Development with Angie Wood";

export const DEFAULT_DESCRIPTION =
  "Own Your Crown helps experienced professionals build a next chapter with more autonomy, flexibility and intentional success — led by former Headteacher Angie Wood.";

export const DEFAULT_KEYWORDS = [
  "Own Your Crown",
  "Angie Wood",
  "personal development",
  "leadership development",
  "career transition",
  "remote business",
  "mentorship",
  "former headteacher",
  "next chapter career",
  "professional autonomy",
].join(", ");

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
};

/** Shared head meta for every marketing page. */
export function pageSeo({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  image = "/og-image.jpg",
  imageAlt = `${SITE_NAME} — ${SITE_TAGLINE}`,
}: PageSeoInput) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
