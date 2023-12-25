const { validationResult } = require('express-validator');

const formatExpressValidatorError = (req, res, next) => {
    try {
        const result = validationResult(req)

        if (result.errors.length) {
            return res.status(422).json(result.array());
        }

        next();
    } catch (error) {
        console.log(error);
        return next(new Error('Validation Result Checking Fail'));
    }

}

module.exports = {
    formatExpressValidatorError
}