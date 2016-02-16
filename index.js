#!/usr/bin/env node
// Dependencies
var moment = require("moment");
var sugar = require("sugar");
var colors = require("colors");

// Check for CLI argument
process.argv.splice(0, 2);
if (process.argv.length > 0) {

    // Attempt to parse the date
    var date = process.argv.join(" ");
    var parsedDate = Date.create(date);
    if (parsedDate != "Invalid Date"){

        // Date could be parsed, parse the date to git date format
        var dateString = moment(parsedDate).format("ddd MMM DD hh:mm:ss YYYY ZZ");

    } else {
        console.log("fatal: Could not parse \"" + date + "\" into a valid date");
    }

} else {

    // Show documentation

}
