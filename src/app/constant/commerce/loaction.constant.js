module.exports = Object.freeze({
    name: 'LocationConstant',

    LOCATION_TYPE_VIEW: 'view',
    LOCATION_TYPE_VENDOR: 'vendor_location',
    LOCATION_TYPE_CUSTOMER: 'customer_location',
    LOCATION_TYPE_INTERNAL: 'internal_location',
    LOCATION_TYPE_PRODUCTION: 'production',
    LOCATION_TYPE_TRANSIT: 'transit_location',
    LOCATION_TYPE_INVENTORY_LOSS: 'inventory_loss',

    REMOVAL_STRATEGY_FIFO: 'FIFO',
    REMOVAL_STRATEGY_LIFO: 'LIFO',
    REMOVAL_STRATEGY_FEFO: 'FEFO',

    ADDRESS_LABEL_HOME: 'home',
    ADDRESS_LABEL_OFFICE: 'office',
});
