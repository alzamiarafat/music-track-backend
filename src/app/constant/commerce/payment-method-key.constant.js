const keysConstant = [
    {
        key: 'ssl_commerce',
        value: {
            'SSL_STORE_ID': process.env.SSL_STORE_ID,
            'SSL_STORE_PASSWORD': process.env.SSL_STORE_PASSWORD
        }
    }
]

keysConstant.name = 'KeysConstant';
module.exports = keysConstant;