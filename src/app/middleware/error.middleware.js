const { LoggerService } = require('../services');
const { ErrorConstant } = require('../constant');

// eslint-disable-next-line no-unused-vars
module.exports = async (error, req, res, next) => {
    try {
        let message;
        const level = 'error';
        const statusCode = error.statusCode || 400;

        if (error.name !== ErrorConstant.VALIDATION_ERROR) {
            const errorLines = error.stack.split('\n').slice(1)[0]
            const filePath = errorLines.match(/at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/)[2];
            const fileLine = errorLines.match(/at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/)[3];
            message = `${error.message} [${filePath}:${fileLine}] ${req.method} ${req.path} ${statusCode}`;
        } else {
            message = error.message
        }

        LoggerService.logger(level, message)
        return res.status(statusCode).json({
            error: error.message
        });
    } catch (error) {
        return res.status(503).json({
            error: ErrorConstant.SYSTEM_ERROR
        });
    }

};