module.exports = Object.freeze({
    name: 'ErrorConstant',

    // PRODUCT ERROR
    PRODUCT_CREATION_FAIL: 'Product creation failed!',
    PRODUCT_FETCH_FAIL: 'Product fetching error!',
    PRODUCT_UPDATE_FAIL: 'Product not updated!',
    PRODUCT_SLUG_EXIT: 'Product slug already exists',
    PRODUCT_SLUG_UPDATE_SUCCESS: 'Product slug already exists',
    PRODUCT_DELETE_FAIL: 'Product deletion failed!',
    PRODUCT_NOT_FOUND: 'Product not found!',
    PRODUCT_CODE_ALREADY_EXIST: 'Product Code Already Exist!',

    PRODUCT_CATEGORY_FETCH_FAIL: 'Product category fetching error!',
    PRODUCT_CATEGORY_UPDATE_FAIL: 'Product category not updated!',
    PRODUCT_CATEGORY_NOT_FOUND: 'Product category not found!',

    // PRODUCT PACKAGE ERROR
    PRODUCT_PACKAGE_NOT_FOUND: 'Product package not found!',
    PRODUCT_PACKAGE_CREATION_FAIL: 'Product package creation failed!',
    PRODUCT_PACKAGE_FETCH_FAIL: 'Product package fetching error!',
    PRODUCT_PACKAGE_UPDATE_FAIL: 'Product package not updated!',
    PRODUCT_PACKAGE_DELETE_FAIL: 'Product package deletion failed!',

    // PRODUCT LOT ERROR
    PRODUCT_LOT_NOT_FOUND: 'Product lot not found!',
    PRODUCT_LOT_CREATION_FAIL: 'Product lot creation failed!',
    PRODUCT_LOT_FETCH_FAIL: 'Product lot fetching error!',
    PRODUCT_LOT_UPDATE_FAIL: 'Product lot not updated!',
    PRODUCT_LOT_DELETE_FAIL: 'Product lot deletion failed!',

    // ATTACHMENT ERROR
    ATTACHMENT_CREATION_FAIL: 'Attachment creation failed!',
    ATTACHMENT_NOT_FOUND: 'Attachment not found!',
    ATTACHMENT_DELETE_FAIL: 'Attachment delete failed!',

    // BRAND ERROR
    BRAND_CREATION_FAIL: 'Brand creation failed!',
    BRAND_FETCH_FAIL: 'Brand fetching error!',
    BRAND_NOT_FOUND: 'Brand not found!',
    BRAND_UPDATE_FAIL: 'Brand not updated!',
    BRAND_DELETE_FAIL: 'Brand deletion failed!',
    BRAND_EXIST: 'Brand already exists!',

    // ADDON ERROR
    ADDON_CREATION_FAIL: 'Addon creation failed!',
    ADDON_FETCH_FAIL: 'Addon fetching error!',
    ADDON_NOT_FOUND: 'Addon not found!',
    ADDON_UPDATE_FAIL: 'Addon not updated!',
    ADDON_DELETE_FAIL: 'Addon deletion failed!',
    ADDON_EXIST: 'Addon already exists!',

    // AREA ERROR
    AREA_FETCH_FAIL: 'Area fetching error!',

    // ADDITIONAL CHARGE ERROR
    ADDITIONAL_CHARGE_CREATION_FAIL: 'Additional charge creation failed!',
    ADDITIONAL_CHARGE_FETCH_FAIL: 'Additional charge fetching error!',
    ADDITIONAL_CHARGE_NOT_FOUND: 'Additional charge not found!',
    ADDITIONAL_CHARGE_UPDATE_FAIL: 'Additional charge not updated!',
    ADDITIONAL_CHARGE_DELETE_FAIL: 'Additional charge deletion failed!',
    ADDITIONAL_CHARGE_EXIST: 'Additional charge already exists!',

    // VARIANT ERROR
    VARIANT_CREATION_FAIL: 'Variant creation failed!',
    VARIANT_FETCH_FAIL: 'Variant fetching error!',
    VARIANT_NOT_FOUND: 'Variant not found!',
    VARIANT_UPDATE_FAIL: 'Variant not updated!',
    VARIANT_DELETE_FAIL: 'Variant deletion failed!',

    // ATTRIBUTE ERROR
    ATTRIBUTE_CREATION_FAIL: 'Attribute creation failed!',
    ATTRIBUTE_FETCH_FAIL: 'Attribute fetching error!',
    ATTRIBUTE_NOT_FOUND: 'Attribute not found!',
    ATTRIBUTE_UPDATE_FAIL: 'Attribute not updated!',
    ATTRIBUTE_DELETE_FAIL: 'Attribute deletion failed!',
    ATTRIBUTE_EXIST: 'Attribute already exists!',

    // ATTRIBUTE VALUE ERROR
    ATTRIBUTE_VALUE_CREATION_FAIL: 'Attribute value creation failed!',
    ATTRIBUTE_VALUE_FETCH_FAIL: 'Attribute value fetching error!',
    ATTRIBUTE_VALUE_NOT_FOUND: 'Attribute value not found!',
    ATTRIBUTE_VALUE_UPDATE_FAIL: 'Attribute value not updated!',
    ATTRIBUTE_VALUE_DELETE_FAIL: 'Attribute value deletion failed!',

    // CATEGORY ERROR
    CATEGORY_CREATION_FAIL: 'Category creation failed!',
    CATEGORY_FETCH_FAIL: 'Category fetching error!',
    CATEGORY_NOT_FOUND: 'Category not found!',
    CATEGORY_UPDATE_FAIL: 'Category not updated!',
    CATEGORY_DELETE_FAIL: 'Category deletion failed!',
    CATEGORY_ALREADY_EXIST: 'Category already exist!',

    //INVENTORY CATEGORY ERROR
    INVENTORY_CATEGORY_CREATION_FAIL: 'Inventory category creation failed!',
    INVENTORY_CATEGORY_FETCH_FAIL: 'Inventory category fetching error!',
    INVENTORY_CATEGORY_NOT_FOUND: 'Inventory category not found!',
    INVENTORY_CATEGORY_UPDATE_FAIL: 'Inventory category not updated!',
    INVENTORY_CATEGORY_DELETE_FAIL: 'Inventory category deletion failed!',
    INVENTORY_CATEGORY_ALREADY_EXIST: 'Inventory category already exist!',
    LAST_INVENTORY_CATEGORY_FETCH_FAIL: 'Last inventory category fetching error!',
    PARENT_CATEGORY_NOT_FOUND: 'Parent category not found!',

    //CUSTOMER ERROR
    CUSTOMER_CREATION_FAIL: 'Customer creation failed!',
    CUSTOMER_FETCH_FAIL: 'Customer fetching error!',
    CUSTOMER_NOT_FOUND: 'Customer not found!',
    CUSTOMER_UPDATE_FAIL: 'Customer not updated!',
    CUSTOMER_DELETE_FAIL: 'Customer deletion failed!',

    //ADDRESS
    ADDRESS_SHIPPING_LOCATION_REQUIRED: 'Please select shipping location!',

    // ORDER ERROR
    ORDER_CREATION_FAIL: 'Order creation failed!',
    ORDER_FETCH_FAIL: 'Order fetching error!',
    ORDER_NOT_FOUND: 'Order not found!',
    ORDER_UPDATE_FAIL: 'Order not updated!',
    ORDER_DELETE_FAIL: 'Order deletion failed!',
    LAST_ORDER_NUMBER_FETCH_FAIL: 'Last Order Number fetching error!',
    ORDER_DETAIL_NOT_FOUND: 'Order detail not found!',
    ORDER_ID_NOT_FOUND: 'Order id not found!',
    ORDER_ALREADY_CHECKED_IN_OR_UNABLE_TO_CHECK_IN: 'Already checked in!, Or This order is unable to check in!',
    ORDER_ALREADY_CHECKED_OUT_OR_UNABLE_TO_CHECK_OUT: 'Already checked out!, Or This order is unable to check out!',
    ORDER_CHECKED_IN_INVALID_INPUT: 'Please provide check type and order numbers!',
    ORDER_DETAILS_NOT_FOUND: 'Order details not found!',
    ORDER_STATUS_NOT_SHIPPED: 'This order is not shipped!',
    ORDER_TRACKING_CODE_ALREADY_SET: 'Order tracking code is already set!',
    INVALID_TYPE_FOR_CHECK_IN_OUT: 'Invalid type for security check in or check out!',

    ORDER_IMPORT_ORDER_NUMBER_REQUIRED: 'Order Number: Field is empty or field name is incorrect!',
    ORDER_IMPORT_TRACKING_CODE_REQUIRED: 'Tracking Code: Field is empty or field name is incorrect!',
    ORDER_IMPORT_INVOICE_NUMBER_REQUIRED: 'Invoice Number: Field is empty or field name is incorrect!',
    ORDER_IMPORT_PHONE_REQUIRED: 'Phone: Field is empty or field name is incorrect!',
    ORDER_IMPORT_COURIER_REQUIRED: 'Courier: Field is empty or field name is incorrect!',

    // TAGS ERROR
    TAG_CREATION_FAIL: 'Tag creation failed!',
    TAG_FETCH_FAIL: 'Tag fetching error!',
    TAG_NOT_FOUND: 'Tag not found!',
    TAG_UPDATE_FAIL: 'Tag not updated!',
    TAG_DELETE_FAIL: 'Tag deletion failed!',
    TAG_EXIST: 'Tag already exists!',

    // TAGS ERROR
    CTAG_CREATION_FAIL: 'Customer tag creation failed!',
    CTAG_FETCH_FAIL: 'Customer tag fetching error!',
    CTAG_NOT_FOUND: 'Customer tag not found!',
    CTAG_UPDATE_FAIL: 'Customer tag not updated!',
    CTAG_DELETE_FAIL: 'Customer tag deletion failed!',
    CTAG_EXIST: 'Customer tag already exists!',

    // UNIT ERROR
    UNIT_CREATION_FAIL: 'Unit creation failed!',
    UNIT_FETCH_FAIL: 'Unit fetching error!',
    UNIT_NOT_FOUND: 'Unit not found!',
    UNIT_UPDATE_FAIL: 'Unit not updated!',
    UNIT_DELETE_FAIL: 'Unit deletion failed!',
    UNIT_TITLE_OR_CODE_EXIST: 'Unit title or code already exists!',
    UNIT_TITLE_EXIST: 'Unit title already exists!',
    UNIT_CODE_EXIST: 'Unit code already exists!',

    // UNIT TYPE ERROR
    UNIT_TYPE_CREATION_FAIL: 'Unit type creation failed!',
    UNIT_TYPE_FETCH_FAIL: 'Unit type fetching error!',
    UNIT_TYPE_NOT_FOUND: 'Unit type not found!',
    UNIT_TYPE_UPDATE_FAIL: 'Unit type not updated!',
    UNIT_TYPE_DELETE_FAIL: 'Unit type deletion failed!',
    UNIT_TYPE_EXIST: 'Unit type already exists!',

    // USER ERROR
    USER_CREATION_FAIL: 'User creation failed!',
    USER_FETCH_FAIL: 'User fetching error!',
    USER_NOT_FOUND: 'User not found!',
    USER_UPDATE_FAIL: 'User not updated!',
    USER_DELETE_FAIL: 'User deletion failed!',
    USER_ALREADY_EXIST: 'User already exist!',
    USER_INVALID_CRENDENTIAL: 'Invalid credentials',

    // WEBSITE ERROR
    WEBSITE_CREATION_FAIL: 'Website creation failed!',
    WEBSITE_FETCH_FAIL: 'Website fetching error!',
    WEBSITE_NOT_FOUND: 'Website not found!',
    WEBSITE_UPDATE_FAIL: 'Website not updated!',
    WEBSITE_DELETE_FAIL: 'Website deletion failed!',

    // Authorization Error
    AUTHORIZATION_FAIL: 'Not Authorized!',
    UNAUTHORIZED_ACCESS: 'Unauthorized Access!',
    UNAUTHORIZED: 'Unauthorized',
    TOKEN_NOT_FOUND: 'Token not found!',
    CUSTOMER_NOT_AUTHORISED: 'Customer is not authorised/found.',

    // OTHER ERROR
    UPLOAD_FAIL: 'Error uploading!',
    INSERT_FAIL: 'insert failed!',
    IMAGE_REQUIRED: 'Image file required!',
    EXCEL_REQUIRED: 'Excel file required!',
    FILE_REQUIRED: 'File required!',

    FILE_UPLOAD_ERROR: 'File upload error:',
    IMAGE_UPLOAD_ERROR: 'Error uploading image',

    // KEYCLOAK ERROR
    KEYCLOAK_USER_NOT_FOUND_IN: 'User not found in keycloak',
    KEYCLOAK_INVALID_TOKEN: 'Invalid token',
    KEYCLOAK_FAILED_TO_GET_ADMIN_TOKEN: 'Failed to get admin access token',
    KEYCLOAK_FAILED_TO_CREATE_USER: 'Failed to create user in keycloak',
    KEYCLOAK_FAILED_TO_LOGIN: 'Failed to login in keycloak',

    // SERVICE ERROR
    SERVICE_CREATION_FAIL: 'Service create faile!',
    SERVICE_FETCH_FAIL: 'Service fetch faile!',
    SERVICE_UPDATE_FAIL: 'Service update faile!',
    SERVICE_NOT_FOUND: 'Service not found!',
    SERVICE_DELETE_FAIL: 'Service delete faile!',
    SERVICE_EXIST: 'Service already exists!',

    SERVER_ERROR: 'Internal Server Error',

    // SETTING ERROR
    SETTING_CREATION_FAIL: 'Setting creation failed!',
    SETTING_FETCH_FAIL: 'Setting fetching error!',
    SETTING_NOT_FOUND: 'Setting not found!',
    SETTING_UPDATE_FAIL: 'Setting not updated!',
    SETTING_DELETE_FAIL: 'Setting deletion failed!',
    SETTING_TYPE_REQUIRED: 'Type required!',
    SETTING_TYPE_INVALID: 'Type is invalid!',
    SETTING_DELETED_SUCCESSFULLY: 'Setting deleted successfully',

    // REQUISITION ERROR
    REQUISITION_CREATION_FAIL: 'Requisition creation failed!',
    REQUISITION_FETCH_FAIL: 'Requisition fetching error!',
    REQUISITION_UPDATE_FAIL: 'Requisition not updated!',
    REQUISITION_DELETE_FAIL: 'Requisition deletion failed!',
    REQUISITION_NOT_FOUND: 'Requisition not found!',
    REQUISITION_SORT_SUCCESS: 'Requisition Successfully Sorted!',

    // PURCHASE_REQUEST ERROR
    PURCHASE_REQUEST_CREATION_FAIL: 'Purchase Request creation failed!',
    PURCHASE_REQUEST_FETCH_FAIL: 'Purchase Request fetching error!',
    PURCHASE_REQUEST_UPDATE_FAIL: 'Purchase Request not updated!',
    PURCHASE_REQUEST_DELETE_FAIL: 'Purchase Request deletion failed!',
    PURCHASE_REQUEST_NOT_FOUND: 'Purchase Request not found!',
    PURCHASE_REQUEST_SORT_SUCCESS: 'Purchase Request successfully sorted!',

    // PURCHASE_ORDER ERROR
    PURCHASE_ORDER_CREATION_FAIL: 'Purchase Order creation failed!',
    PURCHASE_ORDER_FETCH_FAIL: 'Purchase Order fetching error!',
    PURCHASE_ORDER_UPDATE_FAIL: 'Purchase Order not updated!',
    PURCHASE_ORDER_DELETE_FAIL: 'Purchase Order deletion failed!',
    PURCHASE_ORDER_NOT_FOUND: 'Purchase Order not found!',
    PURCHASE_ORDER_SORT_SUCCESS: 'Purchase Order successfully sorted!',
    PLEASE_PROVIDE_QUANTITY: 'Please provide quantity!',
    RECEIVED_QUANTITY_LIMIT_EXCEED: 'Received quantity can not be more than purchase order quantity!',

    LAST_PURCHASE_REQUEST_FETCH_FAIL: 'Last Purchase Request fetching error!',
    LAST_CATEGORY_FETCH_FAIL: 'Last category fetching error!',

    // PURCHASE REQUEST DETAILS ERROR
    PURCHASE_REQUEST_DETAILS_CREATION_FAIL: 'Purchase Request Details creation failed!',
    PURCHASE_REQUEST_DETAILS_FETCH_FAIL: 'Purchase Request Details fetching error!',
    PURCHASE_REQUEST_DETAILS_UPDATE_FAIL: 'Purchase Request Details not updated!',
    PURCHASE_REQUEST_DETAILS_DELETE_FAIL: 'Purchase Request Details deletion failed!',

    // PURCHASE ORDER DETAILS ERROR
    PURCHASE_ORDER_DETAILS_CREATION_FAIL: 'Purchase Order Details creation failed!',
    PURCHASE_ORDER_DETAILS_FETCH_FAIL: 'Purchase Order Details fetching error!',
    PURCHASE_ORDER_DETAILS_UPDATE_FAIL: 'Purchase Order Details not updated!',
    PURCHASE_ORDER_DETAILS_DELETE_FAIL: 'Purchase Order Details deletion failed!',

    // REQUISITION LOG ERROR

    // REQUISITION DETAILS ERROR
    REQUISITION_LOG_CREATION_FAIL: 'Requisition Log creation failed!',

    // PURCHASE REQUEST LOG ERROR
    PURCHASE_REQUEST_LOG_CREATION_FAIL: 'Purchase Request Log creation failed!',

    // VENDOR ERROR
    VENDOR_DETAILS_CREATION_FAIL: 'Vendor creation failed!',
    VENDOR_DETAILS_FETCH_FAIL: 'Vendor fetching error!',
    VENDOR_DETAILS_UPDATE_FAIL: 'Vendor not updated!',
    VENDOR_NOT_FOUND: 'Vendor not found!',
    VENDOR_DETAILS_DELETE_FAIL: 'Vendor deletion failed!',

    // CURRENCY ERROR
    CURRENCY_DETAILS_CREATION_FAIL: 'Currency creation failed!',
    CURRENCY_DETAILS_FETCH_FAIL: 'Currency fetching error!',
    CURRENCY_DETAILS_UPDATE_FAIL: 'Currency not updated!',
    CURRENCY_DETAILS_DELETE_FAIL: 'Currency deletion failed!',

    // VENDOR ERROR
    SPECIFICATION_CREATION_FAIL: 'Specification creation failed!',
    SPECIFICATION_FETCH_FAIL: 'Specification fetching error!',
    SPECIFICATION_UPDATE_FAIL: 'Specification not updated!',
    SPECIFICATION_NOT_FOUND: 'Specification not updated!',
    SPECIFICATION_DELETE_FAIL: 'Specification deletion failed!',
    SPECIFICATION_EXIST: 'Specification already exists!',

    // PRODUCT VARAINT ERROR
    PRODUCT_VARAINT_FETCH_FAIL: 'Product Variant fetching error!',

    // CURRENCY
    CURRENCY_FETCH_FAIL: 'Currency fetching error!',
    CURRENCY_CREATION_FAIL: 'Currency creation fail!',
    CURRENCY_NOT_FOUND: 'Currency not found!',
    CURRENCY_UPDATE_FAIL: 'Currency update fail',
    CURRENCY_DELETE_FAIL: 'Currency delete fail',
    CURRENCY_ALREADY_EXIST: 'Currency already exists!',

    // MENU
    MENU_FETCH_FAIL: 'Menu fetching error!',
    MENU_CREATION_FAIL: 'Menu creation fail!',
    MENU_NOT_FOUND: 'Menu not found!',
    MENU_UPDATE_FAIL: 'Menu update fail',
    MENU_DELETE_FAIL: 'Menu delete fail',
    MENU_ALREADY_EXIST: 'Menu title or slug already used!',
    MENU_TITLE_EXIST: 'Menu title already used!',
    MENU_SLUG_EXIST: 'Menu slug already used!',

    // MENU ITEM
    MENU_ITEM_FETCH_FAIL: 'Menu item fetching error!',
    MENU_ITEM_CREATION_FAIL: 'Menu item creation fail!',
    MENU_ITEM_NOT_FOUND: 'Menu item not found!',
    MENU_ITEM_UPDATE_FAIL: 'Menu item update fail',
    MENU_ITEM_DELETE_FAIL: 'Menu item delete fail',
    MENU_ITEM_ALREADY_EXIST: 'Menu item already exists!',

    // PAGE
    PAGE_FETCH_FAIL: 'Page fetching error!',
    PAGE_CREATION_FAIL: 'Page creation fail!',
    PAGE_NOT_FOUND: 'Page not found!',
    PAGE_UPDATE_FAIL: 'Page update fail',
    PAGE_DELETE_FAIL: 'Page delete fail',
    PAGE_ALREADY_EXIST: 'Page already exists!',
    PAGE_SLUG_ALREADY_EXIST: 'Page slug already exists!',

    // Shipping Location
    SHIPPING_FETCH_FAIL: 'Shipping location fetching error!',
    SHIPPING_CREATION_FAIL: 'Shipping location creation fail!',
    SHIPPING_NOT_FOUND: 'Shipping location not found!',
    SHIPPING_UPDATE_FAIL: 'Shipping location update fail',
    SHIPPING_DELETE_FAIL: 'Shipping location delete fail',
    SHIPPING_EXIST: 'Shipping location already exists!',

    // Shipping Method
    SHIPPING_METHOD_FETCH_FAIL: 'Shipping fetching error!',
    SHIPPING_METHOD_CREATION_FAIL: 'Shipping creation fail!',
    SHIPPING_METHOD_CREATION_SUCCESS: 'Shipping creation success!',
    SHIPPING_METHOD_NOT_FOUND: 'Shipping not found!',
    SHIPPING_METHOD_UPDATE: 'Shipping update success!',
    SHIPPING_METHOD_UPDATE_FAIL: 'Shipping update fail',
    SHIPPING_METHOD_DELETE_FAIL: 'Shipping delete fail',

    // Courier Method
    COURIER_FETCH_FAIL: 'Courier fetching error!',
    COURIER_CREATION_FAIL: 'Courier creation fail!',
    COURIER_NOT_FOUND: 'Courier not found!',
    COURIER_UPDATE_FAIL: 'Courier update fail',
    COURIER_DELETE_FAIL: 'Courier delete fail',
    COURIER_EXIST: 'Courier already exists!',

    // Delivery type
    DELIVERY_TYPE_FETCH_FAIL: 'Delivery Type fetching error!',
    DELIVERY_TYPE_CREATION_FAIL: 'Delivery Type creation fail!',
    DELIVERY_TYPE_NOT_FOUND: 'Delivery Type not found!',
    DELIVERY_TYPE_EXIT: 'Delivery Type All Ready Exists!',
    DELIVERY_TYPE_UPDATE_FAIL: 'Delivery Type update fail',
    DELIVERY_TYPE_DELETE_FAIL: 'Delivery Type delete fail',

    // WAREHOUSE
    WAREHOUSE_CREATION_FAIL: 'Warehouse creation failed!',
    WAREHOUSE_FETCH_FAIL: 'Warehouse fetching error!',
    WAREHOUSE_NOT_FOUND: 'Warehouse not found!',
    WAREHOUSE_UPDATE_FAIL: 'Warehouse not updated!',
    WAREHOUSE_DELETE_FAIL: 'Warehouse deletion failed!',
    WAREHOUSE_CONFIG_UPDATE_FAIL: 'Warehouse config not updated!',

    // PAYMENT
    PAYMENTMETHOD_EXIST: 'Payment method already exist',
    PAYMENT_METHOD_NOT_FOUND: 'Payment method not found!',

    // PROMOTION SETTING ERROR
    PROMOTION_SETTING_NOT_FOUND: 'Promotion setting not found!',
    PROMOTION_SETTING_CREATION_FAIL: 'Promotion setting creation failed!',
    PROMOTION_SETTING_FETCH_FAIL: 'Promotion setting fetching error!',
    PROMOTION_SETTING_UPDATE_FAIL: 'Promotion setting not updated!',
    PROMOTION_SETTING_DELETE_FAIL: 'Promotion setting deletion failed!',

    // LOCATION ERROR
    LOCATION_NOT_FOUND: 'Location not found!',
    LOCATION_CREATION_FAIL: 'Location creation failed!',
    LOCATION_FETCH_FAIL: 'Location fetching error!',
    LOCATION_UPDATE_FAIL: 'Location not updated!',
    LOCATION_DELETE_FAIL: 'Location deletion failed!',

    // Customer
    CUSTOMER_EXIST: 'Customer phone number already exists!',

    // STOCK ERROR
    STOCK_NOT_FOUND: 'Stock not found!',
    STOCK_CREATION_FAIL: 'Stock creation failed!',
    STOCK_FETCH_FAIL: 'Stock fetching error!',
    STOCK_UPDATE_FAIL: 'Stock not updated!',
    STOCK_DELETE_FAIL: 'Stock deletion failed!',

    // ADMIN SETTINGS
    ADMIN_SETTING_NOT_FOUND: 'Admin settings not found!',

    // LOYALTY
    EMPTY_REDEEM_LOYALTY_POINTS: 'Please enter your redeem loyalty points!',
    CUSTOMER_LOYALTY_INACTIVE_MESSAGE: 'Loyalty points is required to enable loyalty redeem options.',
    NON_LOYALTY_PRODUCTS_MSG: 'You can not redeem points on non loyalty products.',
    LOYALTY_NOT_FOUND: 'Loyalty not found!',
    EMPTY_PRODUCT_AMOUNTS: 'Please select your products!',
    MULTIPLE_REDEEM_POINTS: 'Redeemable points must be multiple of ',
    CORPORATE_CUSTOMER_LOYALTY_MSG: 'Corporate customer will do not opportunities loyalty points',
    CUSTOMER_LOYALTY_ID_NULL_MESSAGE: 'Loyalty loyalty id is empty but loyalty status already active.',

    // STOCK TRANSFER
    STOCK_TRANSFER_CREATION_FAIL: 'Stock Transfer creation failed!',
    STOCK_TRANSFER_FETCH_FAIL: 'Stock Transfer fetching error!',
    STOCK_TRANSFER_NOT_FOUND: 'Stock Transfer not found!',
    STOCK_TRANSFER_UPDATE_FAIL: 'Stock Transfer not updated!',
    STOCK_TRANSFER_DELETE_FAIL: 'Stock Transfer deletion failed!',
    STOCK_TRANSFER_FAIL: 'Stock Transfer failed!',

    // STOCK TRANSFER DETAILS
    STOCK_TRANSFER_DETAIL_CREATION_FAIL: 'Stock Transfer Details creation failed!',
    STOCK_TRANSFER_DETAIL_FETCH_FAIL: 'Stock Transfer Details fetching error!',
    STOCK_TRANSFER_DETAIL_NOT_FOUND: 'Stock Transfer Details not found!',
    STOCK_TRANSFER_DETAIL_UPDATE_FAIL: 'Stock Transfer Details not updated!',
    STOCK_TRANSFER_DETAIL_DELETE_FAIL: 'Stock Transfer Details deletion failed!',

    // PRODUCT VARIANT
    PRODUCT_VARIANT_FETCH_FAIL: 'Product Variant fetching failed!',
    PRODUCT_VARIANT_NOT_FOUND: 'Product Variant not found!',

    //STOCK TRANSFER
    INVALID_LOCATION_FROM: 'Location From is invalid!',
    INVALID_LOCATION_TO: 'Location To is invalid!',

    //PAYMENT TRANSACTION
    PAYMENT_TRANSACTION_NOT_FOUND: 'Payment Transaction Not Found',
    PAYMENT_TRANSACTION_FAIL: 'Payment Transaction Failed',
    VALIDATION_ERROR: 'ValidationError',
    SYSTEM_ERROR: 'The server cannot handle the request!',

    //INVOICE MANAGEMENT
    INVOICE_NOT_FOUND: 'Invoice not found',
    LAST_INVOICE_NUMBER_FETCH_FAIL: 'Failed to fetch last invoice number',
    INVOICE_UPDATE_FAIL: 'Invoice update failed',
    INVOICE_CREATION_FAIL: 'Invoice creation failed',
    INVOICE_DELETE_FAIL: 'Invoice delete failed',
    PROMOTIONAL_ITEMS_FETCH_FAIL: 'Promotional Items fetching failed!',
    INVOICE_DETAIL_NOT_FOUND: 'Invoice details not found!',
    INVOICE_TRACKING_CODE_ALREADY_SET: 'Invoice tracking code is already set!',

    // OPERATION TYPE
    OPERATION_TYPE_CREATION_FAIL: 'Operation Type creation failed!',
    OPERATION_TYPE_FETCH_FAIL: 'Operation Type fetching error!',
    OPERATION_TYPE_NOT_FOUND: 'Operation Type not found!',
    OPERATION_TYPE_UPDATE_FAIL: 'Operation Type not updated!',
    OPERATION_TYPE_DELETE_FAIL: 'Operation Type deletion failed!',

    // TRANSFER REASON
    TRANSFER_REASON_CREATION_FAIL: 'Transfer Reason creation failed!',
    TRANSFER_REASON_FETCH_FAIL: 'Transfer Reason fetching error!',
    TRANSFER_REASON_NOT_FOUND: 'Transfer Reason not found!',
    TRANSFER_REASON_UPDATE_FAIL: 'Transfer Reason not updated!',
    TRANSFER_REASON_DELETE_FAIL: 'Transfer Reason deletion failed!',

    // PRODUCT STYLE COLOR ERROR
    PRODUCT_STYLE_COLOR_CREATION_FAIL: 'Product style color creation failed!',
    PRODUCT_STYLE_COLOR_FETCH_FAIL: 'Product style color fetching error!',
    PRODUCT_STYLE_COLOR_NOT_FOUND: 'Product style color not found!',
    PRODUCT_STYLE_COLOR_UPDATE_FAIL: 'Product style color not updated!',
    PRODUCT_STYLE_COLOR_DELETE_FAIL: 'Product style color deletion failed!',
    PRODUCT_STYLE_COLOR_EXIST: 'Product style color already exists!',
    ON_LOCATION_FROM_ID: 'On this location ',

    // ORDERS
    EMPTY_ORDERS_MESSAGE: 'Please select your orders!',
    INVALID_QUANTITY: 'Unavailable quantity for Product Variant',
    STOCK_TRANSFER_FAILED: 'Stock transfer creation failed!',
    INVALID_ITEMS_FORMAT: 'Invalid Items Format!',
    WAREHOUSE_NOT_ASSOCIATED: 'Invalid Warehouse Attachment! Please Contact Super Admin.',
    INVALID_OPERATION_TYPE: 'Invalid Operation Attachment! Please Contact Super Admin.',
    INVALID_TRANSFER_REASON: 'Invalid Transfer Reason!',
    INVALID_ORDER_ID: 'Invalid Order ID!',
    DEFAULT_WEBSITE_SALE_LOCATION_ID_NOT_FOUND: 'Default Website Sale Location ID Not Found!',
    STOCK_MOVE_FAILED: 'Stock Move Failed!',

    ORDER_SUMMARY_FETCH_FAIL: 'Order summary fail!',
    INVALID_SOURCE_LOCATION_ATTACHMENT: 'Invalide Source Location Attachment! Please Contact Super Admin.',
    INVALID_STATUS: 'Invalid Status',
    INVALID_WAREHOUSE_FROM: 'Invalid Warehouse From!',
    INVALID_WAREHOUSE: 'Invalid Warehouse!',

    KX_STORE_CREATION_FAIL: 'KX Store Creation failed!',
    KX_STORE_FETCH_FAIL: 'KX Store Fetch failed!',
    KX_STORE_NOT_FOUND: 'KX Store Not Found!',

    KX_DISTRICT_CREATION_FAIL: 'KX District Creation failed!',
    KX_DISTRICT_FETCH_FAIL: 'KX District Fetch failed!',
    KX_DISTRICT_NOT_FOUND: 'KX District Not Found!',

    KX_UPAZILA_CREATION_FAIL: 'KX Upazila Creation failed!',
    KX_UPAZILA_FETCH_FAIL: 'KX Upazila Fetch failed!',
    KX_UPAZILA_NOT_FOUND: 'KX Upazila Not Found!',

    KX_AREA_CREATION_FAIL: 'KX Area Creation failed!',
    KX_AREA_FETCH_FAIL: 'KX Area Fetch failed!',
    KX_AREA_NOT_FOUND: 'KX Area Not Found!',

    DELIVERY_TYPE_ALREADY_URGENT: 'This order\'s delivery type cannot changed. Delivery type is already urgent!',
    DELIVERY_TYPE_OUTSIDE: 'This order\'s delivery type cannot changed. Order  is outside of Dhaka!',
    DELIVERY_TYPE_PROCCESSING: 'This order is proccessing!',
    DELIVERY_TYPE_SALE: 'Order type must be sale!',

    KX_MERCHANT_LOGIN_FAILED: 'KX Merchant Login Failed!',
    KX_PARCEL_CREATION_FAILED: 'KX Parcel Creation Failed!',
    KX_DEFAULT_STORE_NOT_FOUND: 'KX Default Store Not Found!',
    INVALID_ORDER_ATTACHMENT_WITH_THIS_INVOIVE: 'Invalid Order Attachment with This Invoice!',
    DEFAULT_WEBSITE_SALE_WAREHOUSE_ID_NOT_FOUND: 'Default Website Sale Warehouse ID Not Found!',
    DUPLICATE_STOCK_TRANSFER_REQUEST: 'Duplicate Stock Transfer Request!',
    STOCK_TRANSFER_UPDATE_FAILED: 'Stock Transfer Update Failed!',
    NO_PREVIOUS_DRAFTED_TRANSFER_FOUND: 'No Previous drafted Transfer Found!',
    PREVIOUS_STOCK_MOVE_FAILED: 'Previous Stock Move Failed!',
    INVALID_REQUEST_FOR_TRANSFER: 'Invalid Transfer Request! Order Already Delivered.',

    PAYMENT_STATUS_ALREADY_PAID: 'Order is already paid!',
    PAYMENT_ALREADY_DELIVERED: 'Order is already delivered!',
    PAYMENT_NOTE_ERROR_MSG: 'Payment note is empty!',
    EMPTY_DIGITAL_PAYMENT_METHOD: 'Please select digital payment method!',
    ALREADY_DIGITAL_PAYMENT_METHOD: 'Order payment method is already Digital!',
    ALREADY_COD_PAYMENT_METHOD: 'Order payment method is already Cash On Delivery!',

    ACTIVITY_LOG_FETCH_FAIL: 'Activity log fetching error!',
    ACTIVITY_LOG_CREATION_FAIL: 'Activity log Creation failed!',
    ACTIVITY_LOG_NOTE_NOT_FOUND: 'No note found!',
    LAST_STOCK_TRANSFER_COUNT_FETCH_FAIL: 'Last Stock Transfer Count Fetch Failed!',
    PLEASE_UPDATE_DELIVERY_DISTRICT_ON_ORDER: 'Please Update Delivery District on Order First!',
    PLEASE_UPDATE_AREA_DISTRICT_ON_ORDER: 'Please Update Area District on Order First!',

    // ORDER STATUS ERROR MESSAGE
    ORDER_OPERATION_STATUS_VERIFIED: 'You can not update to verified status, because order already verified!',
    ORDER_OPERATION_STATUS_PRECESSING: 'You can not update to processing status, because orders already processed!',
    ORDER_OPERATION_STATUS_MSG: 'You can not update this status, Please check your orders status!',
    INVALID_PRODUCT_QUANTITY_REQUEST: 'Invalid Product Infomation On Request!',

    INVALID_PRODUCT_SELECT: 'Please select valid product!',
    INVALID_PRODUCT_QUANTITY: 'Invalid product quantity!',
    PENDING_ORDER_CAN_NOT_BE: 'Pending order can not be ',
    AUTHORIZED_ORDER_CAN_NOT_BE: 'Authorized order can not be ',
    REJECTED_ORDER_CAN_NOT_BE: 'Rejected order can not be ',
    APPROVED_ORDER_CAN_NOT_BE: 'Approved order can not be ',

    INVALID_REQUEST: 'Invalid Request!',
    INVALID_REFERANCE_ID_OR_TRACKING_CODE: 'Invalid Referance ID or Tracking Code!',

    RECURSIVE_QUERY_ERROR: 'Error executing recursive query!',
    PARENT_CHILD_CAN_NOT_BE_SAME: 'Parent category and child category can not be same!',
    CHILD_CAN_NOT_BE_PARENT: 'Category already used as parent category!',
    CATEGORY_ALREADY_EXIST_IN_CATEGORY: 'Category already exists in this category!',

    NO_DATA_FOUND: 'All orders are inside of Dhaka!',

    // GIFT BOX SETTING
    GIFT_BOX_SETTING_CREATION_FAIL: 'GiftBoxSetting creation failed!',
    GIFT_BOX_SETTING_FETCH_FAIL: 'GiftBoxSetting fetching error!',
    GIFT_BOX_SETTING_NOT_FOUND: 'GiftBoxSetting not found!',
    GIFT_BOX_SETTING_UPDATE_FAIL: 'GiftBoxSetting not updated!',
    GIFT_BOX_SETTING_DELETE_FAIL: 'GiftBoxSetting deletion failed!',

    // LOYALTY ERROR
    LOYALTY_CREATION_FAIL: 'Loyalty creation failed!',
    LOYALTY_FETCH_FAIL: 'Loyalty fetching error!',
    LOYALTY_UPDATE_FAIL: 'Loyalty not updated!',
    LOYALTY_DELETE_FAIL: 'Loyalty deletion failed!',
    DEFAULT_LOYALTY_NOT_FOUND: 'Default loyalty not available!',

    EMPTY_GRAND_TOTAL_AMOUNT: 'Grand Total Amount not found!',
    EMPTY_EARNED_LOYALTY_POINTS: 'Loyalty earned points not found!',
    EMPTY_PAYABLE_AMOUNTS: 'Payable Amount not found!',
    EMPTY_PAID_AMOUNTS: 'Paid Amount not found!',
    EMPTY_DISCOUNT_AMOUNTS: 'Discount amount not found!',
    EMPTY_REFUND_AMOUNTS: 'Refund Amount not found!',
    EMPTY_ORDER_DETAILS: 'Order details not found!',
    EMPTY_WAREHOUSE: 'Warehouse not found!',
    EMPTY_ORDER_LOCATION: 'Order location not found!',

    VARIANT_BARCODE_ALREADY_EXIST: 'Barcode already exist!',
    EMPTY_EXCHANGE_REFUND_PRODUCTS: 'Exchange refund product not found!',
    EMPTY_EXCHANGE_NEW_PRODUCTS: 'Exchange exchange product not found!',
    ORDER_REFUND_NOTE_EMPTY_MSG: 'Note field is empty! Please give a note.',
    ORDER_OPERATION_EMPTY_COURIER_INFO: 'Please fillup Order Delivery Info (District, Area)',
    CANT_BE_READY_TO_SHIP: 'You cannot Print Slips for this Invoice! Please check Order Operation Status!',

    // UNIT ERROR
    PRICE_LIST_CREATION_FAIL: 'Price List creation failed!',
    PRICE_LIST_FETCH_FAIL: 'Price List fetching error!',
    PRICE_LIST_NOT_FOUND: 'Price List not found!',
    PRICE_LIST_UPDATE_FAIL: 'Price List not updated!',
    PRICE_LIST_DELETE_FAIL: 'Price List deletion failed!',
    TRANSFER_NOT_FOUND: 'Transfer Not Found!',
    TRANSFER_ALREADY_DONE: 'Transfer Already Done. You Can Not Update This Transfer!',
    TRANSFER_ALREADY_CANCELLED: 'Transfer Already Cancelled. You Can Not Update This Transfer!',
    TRANSFER_CANT_BE_UPDATED: 'This is Not a Manual Transfer. You Can Not Update This Transfer!',
    STOCK_TRANSFER_DETAIL_UPDATE_FAILED: 'Stock Transfer Details Update Failed!',

    RECIPIENT_NAME_NOT_FOUND: 'Recipient name not found!',

    // POS
    POSSESSION_CREATION_FAIL: 'Session createion failed!',
    POSSESSION_FETCH_FAIL: 'Session is not found!',
    POSSESSION_UPDATE_FAIL: 'Session update failed!',
    POSSESSION_ALREADY_EXIST: 'This warehouse session already exists!',

    // PAYMENT METHOD 
    PAYMENTMETHOD_CREATION_FAIL: 'Payment method createion failed!',
    PAYMENTMETHOD_FETCH_FAIL: 'Payment method is not found!',
    PAYMENTMETHOD_UPDATE_FAIL: 'Payment method update failed!',

    EXCHANGE_ORDER_TYPE_MSG: 'This order not a general order exchange!',

    KX_PARCEL_VALIDATION_FAILED: 'KX Parcel Validation Failed!',

    INVENTORY_NOT_FOUND: 'Inventory Not Found!',
    INVENTORY_AUDIT_NOT_FOUND: 'Inventory Audit Not Found!',
    INVENTORY_DETAIL_NOT_FOUND: 'Inventory Detail (line) Not Found!',
    INVENTORY_FETCH_FAIL: 'Inventory Fetch Failed!',
    INVENTORY_AUDIT_CREATION_FAIL: 'Inventory Audit creation failed!',
    CANT_UPDATE_THIS_AUDIT: 'You can not update this Inventory Audit!, Please check Status!',
    CANT_UPDATE_THIS_AUDIT_DETAIL: 'You can not update this Inventory Detail (line)!, Please check Status!',
    INVENTORY_DETAIL_UPDATE_FAILED: 'Inventory Details (line) Update Failed!',
    CANT_UPDATE_THIS_STATUS: 'Can not update this status! Please check status!',
    PLEASE_UPDATE_DELIVERY_AREA_ON_ORDER: 'Please Update Delivery Area on Order!',
});
