const orm = require("../config/orm.js");

const burger = {

    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    add: function (column, name, cb) {
        orm.insertOne("burgers", column, name, function (res) {
            cb(res);
        });
    },

    devour: function (column, value, condition, cb) {
        orm.updateOne("burgers", column, value, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;