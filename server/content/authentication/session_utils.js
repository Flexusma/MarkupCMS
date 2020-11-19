var session = require('express-session');
const {Database} = require("../database");
let MySQLStore = require('express-mysql-session')(session);

let options = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    endConnectionOnClose: false,
    connectionLimit: 5,

}

let sessionStore = new MySQLStore(options);

exports.sessionStore = sessionStore;
exports.session = session;