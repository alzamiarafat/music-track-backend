module.exports = Object.freeze({
    name: 'CustomerConstant',

    PROVIDER_SMS: 'sms',
    PROVIDER_EMAIL: 'email',

    LOYALTY_ACTIVED_SYSTEM_USER: 'system_user',
    LOYALTY_ACTIVED_CUSTOMER: 'customer',

    CUSTOMER_TYPE_CUSTOMER: 'customer',
    CUSTOMER_TYPE_STAFF: 'staff',
    CUSTOMER_TYPE_CORPORATE: 'corporate',

    CUSTOMER_ACTIVE_STATUS: 'active',
    
    LOYALTY_ACTIVE_STATUS: 'active',
    LOYALTY_INACTIVE_STATUS: 'inactive',

    KEYCLOAK_DEFAULT_ROLE: 'default-roles-bysl-commerce',

    DEFAULT_CUSOTMER: {
        id: 0,
        email: 'walkincustomer@ilyn.global.com',
        phone: '01234567890'
    }
});
