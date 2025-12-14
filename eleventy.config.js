import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAdmon from "markdown-it-admon";
import YAML from "yaml";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {

	// automatically rebuild site when developing
	// and a file in these location changes
	eleventyConfig.addWatchTarget("_data/");
	eleventyConfig.addWatchTarget("_includes/");
	eleventyConfig.addWatchTarget("public/");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

	// most of the site settings

	eleventyConfig.addPassthroughCopy({ "./public/": "/public/" })

	eleventyConfig.addBundle("css", { toFileDirectory: "dist", });
	eleventyConfig.addBundle("js", { toFileDirectory: "dist", });

	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin); // need for 404 page

	// markdown parser

	const markdownItOptions = {
		html: true,
	};

	const markdownItAnchorOptions = {
		permalink: markdownItAnchor.permalink.headerLink()
	};

	const markdownLib = markdownIt(markdownItOptions).use(
		markdownItAnchor,
		markdownItAnchorOptions,
	);

	eleventyConfig.setLibrary("md", markdownLib);
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAdmon));

	// filters

	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts", "post", "blog", "page", "pages", "user page"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);

	// custom file format: yaml!!!

	eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",

	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},

	// pathPrefix: "/",
};
