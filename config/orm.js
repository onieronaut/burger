const connection = require("../config/connection.js");

const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM ?";

        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function (table, column, name, cb) {
        const queryString = "INSERT INTO ? (?) VALUES (?)";

        connection.query(queryString, [table, column, name], function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function (table, column, value, condition, cb) {
        const queryString = "UPDATE ? SET ? = ? WHERE id = ?"

        connection.query(queryString, [table, column, value, condition], function (err, result) {
            if (err) throw err;
            
            cb(result);
        })
    }
}

module.exports = orm;