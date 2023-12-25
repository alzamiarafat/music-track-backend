module.exports = Object.freeze({
    name: 'OrderConstant',

    ORDER_FROM_WEBSITE: 'website',
    ORDER_FROM_ADMIN: 'admin',
    ORDER_FROM_POS: 'pos',

    PAYMENT_STATUS_PAID: 'paid',
    PAYMENT_STATUS_UNPAID: 'unpaid', // Manual Or COD Payment Status
    PAYMENT_STATUS_PENDING: 'pending',
    PAYMENT_STATUS_FAILD: 'failed', // Payment Failed  Status

    // PAYMENT METHOD
    PAYMENT_METHOD_COD: 'cod',
    PAYMENT_METHOD_DIGITAL: 'digital',

    // ORDER OPERATION STATUS
    OPERATION_STATUS_NEW: 'new', // New Order Status
    OPERATION_STATUS_VERIFIED: 'verified', // New order's verified
    OPERATION_STATUS_PROCESSING: 'processing',
    OPERATION_STATUS_READY_TO_SHIP: 'ready_to_ship',
    OPERATION_STATUS_SHIPPED: 'shipped',
    OPERATION_STATUS_DELIVERED: 'delivered',
    OPERATION_STATUS_FAILED_DELIVERY_REQUESTED: 'failed_delivery_requseted',
    OPERATION_STATUS_FAILED_DELIVERY_PRODUCT_RECEIVED: 'failed_delivery_product_received',
    OPERATION_STATUS_FAILED_DELIVERY: 'failed_delivery',
    OPERATION_STATUS_EXCHANGE: 'exchange',
    OPERATION_STATUS_EX_SECURITY_CHECKED_IN: 'ex_security_checked_in', //NUR
    OPERATION_STATUS_FAILED_DELIVERY_SECURITY_CHECKED_IN: 'failed_delivery_security_checked_in', //NUR
    OPERATION_STATUS_CANCEL_DELIVERY_SECURITY_CHECKED_IN: 'cancel_delivery_security_checked_in', //NUR
    OPERATION_STATUS_REFUND_SECURITY_CHECKED_IN: 'refund_security_checked_in', //NUR
    OPERATION_STATUS_EXCHANGE_PRODUCT_RECEIVED: 'exchange_product_received',
    OPERATION_STATUS_EX_VERIFIED: 'exchange_verified',
    OPERATION_STATUS_EXCHANGE_NEW_ORDER: 'exchange_new_order',
    OPERATION_STATUS_EX_PROCESSING: 'exchange_processing',
    OPERATION_STATUS_EX_READY_TO_SHIP: 'exchange_ready_to_ship',
    OPERATION_STATUS_EX_SHIPPED: 'exchange_shipped',
    OPERATION_STATUS_EX_DELIVERY: 'exchange_delivered',
    OPERATION_STATUS_EX_DELIVERED_AND_PRODUCT_RECEIVED: 'ex_delivered_and_product_received',
    OPERATION_STATUS_PARTIAL_REFUND_REQUESTED: 'partial_refund_requested',
    OPERATION_STATUS_FULL_REFUND_REQUESTED: 'full_refund_requested',
    OPERATION_STATUS_REFUND_PRODUCT_RECEIVED: 'refund_product_received',
    OPERATION_STATUS_REFUND_DUE: 'refund_due',
    OPERATION_STATUS_REFUNDED_COMPLETE: 'refund_complete',
    OPERATION_STATUS_POS_PARTIAL_REFUND: 'pos_partial_refund',
    OPERATION_STATUS_POS_FULL_REFUND: 'pos_full_refund',
    OPERATION_STATUS_POS_EXCHANGE: 'pos_exchange',
    OPERATION_STATUS_CANCEL_DELIVERY_REQUESTED: 'cancel_delivery_requested',
    OPERATION_STATUS_CANCEL_DELIVERY_PRODUCT_RECEIVED: 'cancel_delivery_product_received',
    OPERATION_STATUS_CANCEL_DELIVERY: 'cancel_delivery',
    OPERATION_STATUS_CANCELLED: 'cancelled',
    OPERATION_STATUS_POS_NOTRACE_ORDER_DELIVERY: 'pos_no_trace_order_delivery',
    //...more coming

    // CUSTOMER STATUS
    //CUSTOMER_STATUS_PENDING: 'pending',(Changed to draft status)
    CUSTOMER_STATUS_DRAFT: 'draft',
    CUSTOMER_STATUS_RECEIVED: 'received',
    CUSTOMER_STATUS_CANCELLED: 'cancelled',
    CUSTOMER_STATUS_DELIVERED: 'delivered',
    CUSTOMER_STATUS_CONFIRMED: 'confirmed',
    CUSTOMER_STATUS_PROCESSING: 'processing',
    CUSTOMER_STATUS_READY_TO_SHIP: 'ready_to_ship',
    CUSTOMER_STATUS_SHIPPED: 'shipped',
    CUSTOMER_STATUS_EX_PROCESSING: 'exchange_processing',
    CUSTOMER_STATUS_EX_SHIPPED: 'exchange_shipped',
    CUSTOMER_STATUS_EX_DELIVERY: 'exchange_delivered',
    CUSTOMER_STATUS_REFUND_REQUESTED: 'refund_requested',
    CUSTOMER_STATUS_REFUND_PROCESSING: 'refund_processing',
    CUSTOMER_STATUS_REFUNDED: 'refunded',
    CUSTOMER_STATUS_FAILED_DELIVERY_PROCESSING: 'failed_delivery_processing',
    CUSTOMER_STATUS_DELIVERY_FAILED: 'delivery_failed',
    CUSTOMER_STATUS_CANCEL_DELIVERY_PROCESSING: 'cancel_delivery_processing',
    CUSTOMER_STATUS_DELIVERY_CANCELLED: 'delivery_cancelled',

    //order details status
    ORDER_DETAILS_STATUS_DRAFT: 'draft',
    ORDER_DETAILS_STATUS_RECEIVED: 'received',
    ORDER_DETAILS_STATUS_CANCELLED: 'cancelled',
    ORDER_DETAILS_STATUS_DELIVERED: 'delivered',
    ORDER_DETAILS_STATUS_CONFIRMED: 'confirmed',
    ORDER_DETAILS_STATUS_PROCESSING: 'processing',
    ORDER_DETAILS_STATUS_READY_TO_SHIP: 'ready_to_ship',
    ORDER_DETAILS_STATUS_SHIPPED: 'shipped',
    ORDER_DETAILS_STATUS_FAILED_DELIVERY: 'failed_delivery',
    ORDER_DETAILS_STATUS_EX_REQUESTED: 'exchange_requested',
    ORDER_DETAILS_STATUS_EX_PROCESSING: 'exchange_processing',
    ORDER_DETAILS_STATUS_EX_SHIPPED: 'exchange_shipped',
    ORDER_DETAILS_STATUS_EX_DELIVERY: 'exchange_delivered',
    ORDER_DETAILS_REFUND_REQUESTED: 'refund_requested',
    ORDER_DETAILS_STATUS_REFUND_PROCESSING: 'refund_processing',
    ORDER_DETAILS_STATUS_REFUNDED: 'refunded',
    ORDER_DETAILS_STATUS_EXCHANGE_REJECTED: 'exchange_rejected',

    // ORDER OVERALL STATUS
    //ORDER_STATUS_DRAFT:'draft', // pending or new order
    //ORDER_STATUS_WAITING:'waiting', //processing for shipment(packing) after confirmation
    //ORDER_STATUS_READY:'ready', //Ready to ship after packing
    //ORDER_STATUS_DONE:'done', //Already Delivered
    ORDER_STATUS_DRAFT: 'draft', // pending or new order
    ORDER_STATUS_CONFIRMED: 'confirmed', // Order Confirmed for delivery
    ORDER_STATUS_CANCEL: 'cancel', // Order Cancel
    ORDER_STATUS_FAILED: 'failed', // Already Delivered
    ORDER_STATUS_DONE: 'done', // Already Delivered

    //order item type
    ORDER_ITEM_TYPE_PRODUCT: 'product',
    ORDER_ITEM_TYPE_PROMOTION: 'promotion',
    ORDER_ITEM_TYPE_LOYALTY: 'loyalty',
    ORDER_ITEM_TYPE_FREE_PRODUCT: 'free_product',
    ORDER_ITEM_TYPE_DELIVERY: 'delivery',
    ORDER_ITEM_TYPE_PAYMENT_DISCOUNT: 'payment_discount',

    //order type
    ORDER_TYPE_SALE: 'sale',
    ORDER_TYPE_REFUND: 'refund',
    ORDER_TYPE_EXCHANGE: 'exchange',
    ORDER_TYPE_INSTANT_EXCHANGE: 'instant_exchange',
    ORDER_TYPE_NOTRACE: 'no_trace',
    ORDER_TYPE_REJECT: 'reject',
    ORDER_TYPE_CANCEL: 'cancel',

    // ORDER TYTLE
    ORDER_NO_PREFIX_WEB: 'SO',
    ORDER_NO_PREFIX_POS: 'POS',
    ORDER_NO_PREFIX_ADMIN: 'SO', //AO -> SO

    // ORDER PROCESSING MESSAGES
    FULL_ORDER_REFUND_SUCCESS_MSG: 'Full order refund requested successful!',
    PATIAL_ORDER_REFUND_SUCCESS_MSG: 'Partial order refund requested successful!',
    ORDER_ALREADY_VERIFIED: 'Order successfully verified',
    ORDER_EXCHANGE_SUCCESSFUL: 'Order Exchange successful',
    ORDER_EXCHANGE_VERIFIED: 'Order Exchange successfully verified',
    REFUND_ORDER_PRODUCT_RECEIVED_SUCCESS_MSG: 'Refund order product received successful!',
    REFUND_DUE_SUCCESS_MSG: 'Refund invoice create successful!',
    ORDER_SUCCESSFULLY_CANCELLED: 'Order successfully cancelled',

    ORDER_SECURITY_CHECK_STATUS_NONE: 'none',
    ORDER_SECURITY_CHECK_STATUS_IN: 'check_in',
    ORDER_SECURITY_CHECK_STATUS_OUT: 'check_out',

    FIELD_ORDER_NUMBER: 'Order Number',
    FIELD_INVOICE_NUMBER: 'Invoice Number',
    FIELD_TRACKING_CODE: 'Tracking Code',

    DELIVERY_STATUS_PENDING: 'Pending',
    DELIVERY_STATUS_WAITING_FOR_PICKUP: 'Waiting for Pickup',
    DELIVERY_STATUS_REQUEST_FOR_PICKUP: 'Request For Pickup',
    DELIVERY_STATUS_PICKED_UP: 'Picked up',
    DELIVERY_STATUS_WAY_TO_HUB: 'Way To HUB',
    DELIVERY_STATUS_RECEIVED_IN_HUB: 'Received in HUB',
    DELIVERY_STATUS_RECEIVED_IN_HUB_CANCEL: 'Received in HUB(Canceled)',
    DELIVERY_STATUS_RETURN_TO_MERCHANT: 'Return to Merchant',
    DELIVERY_STATUS_WAITING_FOR_DELIVERY: 'Waiting for Delivery',
    DELIVERY_STATUS_REQUEST_FOR_DELIVERY: 'Request for Delivery',
    DELIVERY_STATUS_WAY_TO_DELIVERY: 'Way to Delivery',
    DELIVERY_STATUS_DELIVERED: 'Delivered',
    DELIVERY_STATUS_HOLD: 'Hold',
    DELIVERY_STATUS_CANCEL: 'Cancel',

    PAYMENT_METHOD_TYPE_COD: 'cod',
    PAYMENT_METHOD_TYPE_COD_WEBSITE: 'cod-website',

    SHORT_CODE_OUTGOING: 'OUT',
    ORDER_DETAILS_ITEM_TYPE_PRODUCT: 'product',

});
