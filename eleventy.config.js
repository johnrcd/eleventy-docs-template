import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAdmon from "markdown-it-admon";
import markdownItContainer from "markdown-it-container";
import markdownItTaskLists from "markdown-it-task-lists";
import markdownItGitHubAlerts from "markdown-it-github-alerts";
import { full as emoji } from 'markdown-it-emoji'
import YAML from "yaml";
import markdownItSub from "markdown-it-sub";
import markdownItSup from "markdown-it-sup";
import footnote_plugin from "markdown-it-footnote";
import multimd_table_plugin from "markdown-it-multimd-table";
import deflist_plugin from "markdown-it-deflist";
import pluginTOC from "eleventy-plugin-toc";
import MarkdownItTOC from 'markdown-it-table-of-contents';

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
	eleventyConfig.addPlugin(pluginTOC, {
		tags: ["h2", "h3", "h4"],
		wrapper: "nav",
		wrapperClass: "tableOfContents",
		ul: false,
		flat: false
	});

	// markdown parser

	const markdownLib = markdownIt({
		html: true
	});

	markdownLib
		.use(emoji)
		.use(markdownItSub)
		.use(markdownItSup)
		.use(footnote_plugin)
		.use(deflist_plugin)
		.use(markdownItTaskLists, { label: true })
		// .use(gridTableRulePlugin)
		.use(multimd_table_plugin)
		.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.headerLink(),
		})
		.use(markdownItContainer, "example", {})
		.use(markdownItContainer, "cardSelect", {})
		.use(markdownItContainer, "cardSelect--labelOverlap", {})
		.use(markdownItContainer, "cardSelect--framed", {})
		.use(markdownItContainer, "scaleUpImage", {})
		.use(markdownItContainer, "multiColumnList", {})
		.use(markdownItContainer, "multiColumnList--2", {})
		.use(markdownItContainer, "multiColumnList--3", {})
		.use(markdownItContainer, "multiColumnList--4", {})
		.use(markdownItAdmon, {})
		.use(markdownItGitHubAlerts, {})
		.use(MarkdownItTOC, {
			containerHeaderHtml: "<p class=\"table-of-contents__header\">Table of Contents</p>",
			includeLevel: [1, 2, 3, 4],
			transformContainerOpen: () => {
				return "<details class=\"table-of-contents\" open><summary class=\"table-of-contents__header\">Table of Contents</summary>";
			},
			transformContainerClose: () => {
				return "</details>";
			}
		})
		;
	eleventyConfig.setLibrary("md", markdownLib);

	// filters

	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		let t = (tags || [])

		// remove special tags
		t = t.filter(tag => ["all", "posts", "post", "blog", "page", "pages", "user page"].indexOf(tag) === -1)

		// remove duplicate tags
		let s = new Set(t);
		t = [...s];

		return t;
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
