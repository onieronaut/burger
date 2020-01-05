const orm = require("../config/orm.js");


// Our model that works with our ORM to interact with our database and the front end
const burger = {

    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    add: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    devour: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;