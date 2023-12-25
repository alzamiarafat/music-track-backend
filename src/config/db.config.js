const mongoose = require('mongoose');
require('dotenv').config();

const DB = {
    connection: async () => {
        mongoose.connect(process.env.DATABASE)
            .then(() => console.log('DB connection successful!'))
            .catch(err => {
                console.log(err);
            });
    }
}

DB.name = 'DB';
module.exports = DB;
