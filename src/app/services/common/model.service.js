'use strict';

const ModelService = {
    /**
     * Get all options of the query/search
     *
     * @example
     * let queryOptions = await ModelService.getQueryOptions(req);
     *
     * @example <caption>distinct = false</caption>
     * Use distinct `false` When there is not any included Model.
     * let queryOptions = await ModelService.getQueryOptions(req, false);
     *
     * @param {Sequelize.Model}     [model] Sequelize Model
     * @param {Object}                 [req] express http request
     * @param {boolean}             [distinct] Use distinct `false` When there is not any included Model.
     * @returns {Promise<{page, limit, offset, order, direction, distinct}>}
     */
    getQueryOptions: async (model, req, distinct = true) => {
        const page = parseInt(req.query.page);
        const limit = +process.env.PAGINATION;
        const offset = (page >= 1) ? parseInt((page - 1) * limit) : 0;
        const order = req.query.order;
        const direction = req.query.direction;
        const show = req.query.show;
        const status = req.query.status;
        const attributes = req.query.fields;
        const includes = req.query.includes;

        let queryOptions = {};

        if (distinct) queryOptions.distinct = true;

        if (page >= 1) {
            queryOptions.limit = limit;
            queryOptions.offset = offset;
        }

        if (!page) queryOptions.limit = limit;

        if (status) {
            queryOptions.where = {
                status: status
            }
        }

        if (show === 'all') queryOptions = {};
        if (attributes) queryOptions.attributes = attributes.split(',');
        if (includes) queryOptions.includes = includes.split(',');

        if (order) {
            let dOrder = direction ? direction : 'asc';
            queryOptions.order = [
                // Sequelize.fn('ISNULL', Sequelize.col(`${model.name}.${order}`)),
                // Sequelize.fn('ISNULL', Sequelize.literal(`Kitab.${order}`)),
                [`${order}`, `${dOrder}`]
            ];
        }

        return queryOptions;
    },

    /**
     * Generate `where object` to `where query string`
     * Example:
     * where.property_name: value
     * where.property_name: {[Op.iLike]: value}
     * where[Op.or]: [{key:value}, {[Op.iLike]: value}]
     * @param {Object}
     * @returns {string}
     */
    getWhereQuery: (whereObject = {}) => {
        let where = ''
        const or = Symbol.for('or')
        const iLike = Symbol.for('iLike')
        const keys = Reflect.ownKeys(whereObject);

        for (const key of keys) {
            if (key === or) {
                let orQuery = ''
                for (const item of whereObject[key]) {
                    const q = `(${getAndQueryFromObject(item)})`
                    orQuery = orQuery ? `${orQuery} OR ${q}` : q
                }
                if (orQuery) where = where ? `${where} AND (${orQuery})` : orQuery;

            } else if (typeof whereObject[key] === 'object') {
                if (iLike in whereObject[key]) {
                    const like = `${key} ILIKE '${whereObject[key][iLike]}'`
                    where = where ? `${where} AND ${like}` : like
                }
            } else {
                where = where ? `${where} AND ${key}='${whereObject[key]}'` : `${key}='${whereObject[key]}'`
            }
        }

        return where;
    },

    successResponse: (res, data) => {
        return res.status(200).send({
            data: data
        });
    },

    errorResponse: (res, error) => {
        console.log(error);

        let errorMessage = error.message;
        if (error.errors) {
            try {
                if (error.errors[0].message) errorMessage = error.errors[0].message;
            } catch (err) {
                errorMessage = err.message;
            }
        }

        return res.status(400).send({
            error: errorMessage
        });
    }
};

/**
 * Private helper function
 * @param {Object}
 * @returns {string}
 */
const getAndQueryFromObject = (object = {}) => {
    let andQuery = ''
    const iLike = Symbol.for('iLike')
    const keys = Object.keys(object);

    for (const key of keys) {
        if (typeof object[key] === 'object' && iLike in object[key]) {
            const like = `${key} ILIKE '${object[key][iLike]}'`
            andQuery = andQuery ? `${andQuery} AND ${like}` : like
        } else {
            andQuery = andQuery ? `${andQuery} AND ${key}='${object[key]}'` : `${key}='${object[key]}'`
        }
    }
    return andQuery;
}

ModelService.name = 'ModelService';
module.exports = ModelService;
