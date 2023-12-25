module.exports = Object.freeze({
    name: 'InvoiceConstant',

    INVOICE_TYPE_POS: 'pos',
    INVOICE_TYPE_ADMIN: 'admin',
    INVOICE_TYPE_WEB: 'website',
    //INVOICE_TYPE_POS_RETURN: 'pos_return',
    //INVOICE_TYPE_ADMIN_RETURN: 'admin_return',
    //INVOICE_TYPE_WEB_RETURN: 'web_return',
    INVOICE_TYPE_PURCHASE: 'purchase',
    INVOICE_TYPE_GENERAL: 'general',
    
    // Invoice Status 
    INVOICE_OPEN: 'open',
    INVOICE_DRAFT: 'draft',
    INVOICE_PAID: 'paid',
    INVOICE_CANCEL: 'cancel',

    //invoice details status
    INVOICE_DETAILS_STATUS_DRAFT: 'draft',
    INVOICE_DETAILS_STATUS_RECEIVED: 'received',
    INVOICE_DETAILS_STATUS_CANCELLED: 'cancelled',
    INVOICE_DETAILS_STATUS_DELIVERED: 'delivered',
    INVOICE_DETAILS_STATUS_CONFIRMED: 'confirmed',    
    INVOICE_DETAILS_STATUS_PROCESSING: 'processing',
    INVOICE_DETAILS_STATUS_READY_TO_SHIP: 'ready_to_ship',
    INVOICE_DETAILS_STATUS_SHIPPED: 'shipped',
    INVOICE_DETAILS_STATUS_FAILED_DELIVERY: 'failed_delivery',
    INVOICE_DETAILS_STATUS_EX_REQUESTED: 'exchange_requested',
    INVOICE_DETAILS_STATUS_EX_PROCESSING: 'exchange_processing',
    INVOICE_DETAILS_STATUS_EX_SHIPPED: 'exchange_shipped',
    INVOICE_DETAILS_STATUS_EX_DELIVERY: 'exchange_delivered',
    INVOICE_DETAILS_STATUS_REFUND_REQUESTED: 'refund_requested',
    INVOICE_DETAILS_STATUS_REFUND_PROCESSING: 'refund_processing',
    INVOICE_DETAILS_STATUS_REFUNDED: 'refunded',
    INVOICE_DETAILS_STATUS_EXCHANGE_REJECTED: 'exchange_rejected',

    // INVOICE DETAIL ITEM TYPE
    INVOICE_ITEM_TYPE_PRODUCT: 'product',
    INVOICE_ITEM_TYPE_PROMOTION: 'promotion',
    INVOICE_ITEM_TYPE_LOYALTY: 'loyalty',
    INVOICE_ITEM_TYPE_FREE_PRODUCT: 'free_product',
    INVOICE_ITEM_TYPE_DELIVERY: 'delivery',
    INVOICE_ITEM_TYPE_PAYMENT_DISCOUNT: 'payment_discount',
});