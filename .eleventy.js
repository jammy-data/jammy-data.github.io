const keywordToSlug = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getProjectKeywords = (project) => {
  const rawKeywords = project?.data?.keywords || project?.data?.stack || [];
  if (!Array.isArray(rawKeywords)) {
    return [];
  }

  return rawKeywords
    .map((item) => String(item || "").trim())
    .filter(Boolean);
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/files": "files" });

  eleventyConfig.addFilter("keywordSlug", keywordToSlug);

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("projectTags", function (collectionApi) {
    const projects = collectionApi
      .getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => b.date - a.date);

    const tagMap = {};

    for (const project of projects) {
      const keywords = getProjectKeywords(project);

      for (const keyword of keywords) {
        const slug = keywordToSlug(keyword);
        if (!slug) {
          continue;
        }

        if (!tagMap[slug]) {
          tagMap[slug] = {
            slug,
            name: keyword,
            url: `/projects/tags/${slug}/`,
            projects: []
          };
        }

        tagMap[slug].projects.push(project);
      }
    }

    return Object.values(tagMap)
      .map((tag) => ({ ...tag, count: tag.projects.length }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
