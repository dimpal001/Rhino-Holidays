export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/trips",
          "/destinations",
          "/about",
          "/contact",
          "/faq",
          "/privacy-policy",
        ],
      },
    ],
    sitemap: "https://rhinoholidays.co.in/sitemap.xml",
  };
}
