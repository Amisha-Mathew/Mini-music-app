var mysql = require('mysql');
module.exports = {
    dbconnect: function dbconnect() {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "music"
        });
    }
} 