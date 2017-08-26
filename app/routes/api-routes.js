// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

    // Get all chefs
    app.get("/api/all", function(req, res) {

        var dbQuery = "SELECT * FROM chefs";

        connection.query(dbQuery, function(err, result) {
            res.json(result);
        });

    });

    // Add a chef
    app.post("/api/new", function(req, res) {

        console.log("Chef Data:");
        console.log(req.body);

        var dbQuery = "INSERT INTO monbonchef (author, body, created_at) VALUES (?,?,?)";

        connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
            console.log("Chef Successfully Saved!");
            res.end();
        });

    });

};
