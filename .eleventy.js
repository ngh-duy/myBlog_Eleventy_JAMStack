const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // eleventyConfig.addPassthroughCopy({
    //     "public/css/style.css": "css/style.css",
    //   });
      eleventyConfig.addPassthroughCopy("public/css");      
  // Định nghĩa filter "date"
  eleventyConfig.addFilter("date", function(value, format = "MMM dd, yyyy") {
    // value là một đối tượng Date
    return DateTime.fromJSDate(value, { zone: 'utc' }).toFormat(format);

  });

  // Trả về config chung
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};
