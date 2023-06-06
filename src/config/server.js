const dotenv = require('dotenv');
dotenv.config();

const SEVER_PORT = process.env.SEVER_PORT || 3000;

module.exports = {
    SEVER_PORT
}
