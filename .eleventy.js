module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_static");
	return {
		dir: {
			input: "views"
		}
	};
};
