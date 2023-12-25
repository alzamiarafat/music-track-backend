module.exports = Object.freeze({
    name: 'CurrencyValidatorConstant',

    SYMBOL_SHOULD_STRING: 'Symbol should be a string',
    SYMBOL_MAX: 'Symbol should have at most {#limit} characters',
    SYMBOL_REQUIRED: 'Symbol is required',

    CODE_SHOULD_STRING: 'Code should be a string',
    CODE_MIN: 'Code should have at least {#limit} characters',
    CODE_MAX: 'Code should have at most {#limit} characters',
    CODE_REQUIRED: 'Code is required',

    EXCHANGE_RATE_SHOULD_NUMBER: 'Exchange rate should be a number',
    EXCHANGE_RATE_SHOULD_POSITIVE_NUMBER: 'Exchange rate should be a positive number',
    EXCHANGE_RATE_REQUIRED: 'Exchange rate is required',
});
