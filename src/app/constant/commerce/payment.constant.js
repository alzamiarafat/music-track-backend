module.exports = Object.freeze({
    name: 'PaymentConstant',

    STATUS_ACTIVE: 'active',
    STATUS_INACTIVE: 'inactive',
    DISCOUNT_TYPE_FLAT: 'flat',
    DISCOUNT_TYPE_PERCENT: 'percent',
    DISCOUNT_TYPE_FIXED: 'fixed',
    PAYMENT_TYPE_COD: 'cod',
    PAYMENT_TYPE_DIGITAL: 'digital',

    // Order Type For Payment Transaction 
    PAYMENT_TRANSACTION_ORDER_TYPE_SALE: 'sales',
    PAYMENT_TRANSACTION_ORDER_TYPE_POS: 'pos',
    PAYMENT_TRANSACTION_ORDER_TYPE_PO: 'po',
    PAYMENT_TRANSACTION_ORDER_TYPE_WALLET: 'wallet',
    PAYMENT_TRANSACTION_ORDER_TYPE_ADMIN: 'admin',
    PAYMENT_TRANSACTION_ORDER_TYPE_GENERAL: 'general',

    // Payment Method For Payment Transaction 
    PAYMENT_TRANSACTION_PAYMENT_METHOD_CASH: 'cash',
    PAYMENT_TRANSACTION_PAYMENT_METHOD_BKASH: 'bkash',
    PAYMENT_TRANSACTION_PAYMENT_METHOD_NAGAD: 'nagad',
    PAYMENT_TRANSACTION_PAYMENT_METHOD_CARD: 'card',
    PAYMENT_TRANSACTION_PAYMENT_METHOD_SSLCOMMERCE: 'ssl_commerce',
    PAYMENT_TRANSACTION_PAYMENT_METHOD_COD: 'cod',

    // Status For Payment Transaction 
    PAYMENT_TRANSACTION_STATUS_PENDING: 'pending',
    PAYMENT_TRANSACTION_STATUS_CANCEL: 'cancel',
    PAYMENT_TRANSACTION_STATUS_PAID: 'paid',
    PAYMENT_TRANSACTION_STATUS_FAILED: 'failed',

    DISPLAY_IN_POS: 'pos',
    DISPLAY_IN_WEBSITE: 'website',
    DISPLAY_IN_BOTH: 'both',

    // TRANSACTION PAYMENT TYPE
    PAYMENT_TRANSACTION_TYPE_SALE: 'sales',
    PAYMENT_TRANSACTION_TYPE_RETURN: 'return',
    PAYMENT_TRANSACTION_TYPE_EXCHANGE: 'exchange',

    // Digital Payment
    SSLCOMMERZ: 'ssl_commerz',
    PAYMENT_HASH_SSL: 'SSL',
});