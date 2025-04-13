const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy thư mục public/css
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("admin");

  // Filter định dạng ngày
  eleventyConfig.addFilter("date", function(value, format = "MMM dd, yyyy") {
    return DateTime.fromJSDate(value, { zone: 'utc' }).toFormat(format);
  });

  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};
