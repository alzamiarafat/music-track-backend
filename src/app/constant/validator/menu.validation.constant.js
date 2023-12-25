module.exports = Object.freeze({
    name: 'MenuValidatorConstant',

    TITLE_SHOULD_STRING: 'Title should be a string',
    TITLE_MIN: 'Title should have at least {#limit} characters',
    TITLE_MAX: 'Title should have at most {#limit} characters',
    TITLE_REQUIRED: 'Title is required',

    SLUG_SHOULD_STRING: 'Slug should be a string',
    SLUG_MIN: 'Slug should have at least {#limit} characters',
    SLUG_MAX: 'Slug should have at most {#limit} characters',
    SLUG_REQUIRED: 'Slug is required',

    WEBSITE_SHOULD_NUMBER: 'Website id should be a number',
    WEBSITE_SHOULD_INTEGER: 'Website id should be a integer number',
    WEBSITE_SHOULD_POSITIVE_INTEGER: 'Website id should be a positive integer number',
    WEBSITE_REQUIRED: 'Website id is required',
});
