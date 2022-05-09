let mysql = require("mysql");

let connData={
    host : "localhost",
    user : "root",
    password : "",
    database : "cloneDB"
};

function getConnection(){
    return mysql.createConnection(connData);
}

module.exports.getConnection = getConnection;
