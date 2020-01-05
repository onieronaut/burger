const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

// Index route, when the page is first loaded we display all burgers in our database to the user
router.get("/", function(req,res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// When we add a user created burger to our database we use this route and take their data in from the front end
router.post("/api/burgers", function(req,res) {
    burger.add(["burger_name", "devoured"], [req.body.name, false], function(result) {
        res.json({id: result.insertId});
    });
});

// Updating a burger's value of devoured to true
router.put("/api/burgers/:id", function(req,res) {

    let condition = "id = " + req.params.id;

    burger.devour({devoured: req.body.devoured}, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});
module.exports = router;