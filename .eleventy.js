module.exports = function(eleventyConfig) {
  // Pass through copy
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/**/*");
  
  // Collections
  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getFilteredByGlob("src/pages/projects/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
