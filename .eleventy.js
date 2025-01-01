// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = config => {
    const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);


    // st data merging
    config.setDataDeepMerge(true)
    // Returns work items, sorted by display order
    config.addCollection('work', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    // Returns work items, sorted by display order then filtered by featured
    config.addCollection('featuredWork', collection => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
            x => x.data.featured
        );
    });

    config.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    //! DEBUG

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist',
            includes: "_includes",
            data: "_data",
        }
    };
};
