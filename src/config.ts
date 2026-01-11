export const SITE = {
  website: "https://oyeaayushaman.dev/",
  author: "Aayushman Pratap",
  profile: "https://oyeaayushaman.dev/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Aayushman's Blog",
  ogImage: "aayushman-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/aayushmanpratap/aayushmanpratap.github.io/edit/main/src/data/blog/",
    enabled: false,
    text: "Edit page",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata",
} as const;
