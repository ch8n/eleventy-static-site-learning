const markdownIt = require('markdown-it');
const markdownItClass = require('@toycode/markdown-it-class');

const mapping = {
    h1: ['text-4xl', 'text-gray-200', 'font-bold'],
    a: ['text-blue-300', 'hover:underline'],
};

module.exports = function (eleventyConfig) {
    const md = markdownIt({ linkify: true, html: true });
    md.use(markdownItClass, mapping);
    eleventyConfig.setLibrary('md', md);

    eleventyConfig.addPassthroughCopy("./css")
    eleventyConfig.addPassthroughCopy("./images")
    eleventyConfig.addPassthroughCopy("./scripts")
};