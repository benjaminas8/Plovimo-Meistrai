/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://plovimomeistrai.lt",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://plovimomeistrai.lt/server-sitemap.xml"],
  },
  exclude: ["/server-sitemap.xml"],
  changefreq: "weekly",
  priority: 0.7,
};
