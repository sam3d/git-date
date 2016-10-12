#!/usr/bin/env node

'use strict';

const moment = require("moment");
const sugar = require("sugar");
const chalk = require("chalk");
const exec = require("child_process").exec;

process.argv.splice(0, 2);
if (process.argv.length > 0) {

  // Attempt to parse the date
  let date = process.argv.join(" ");
  let parsedDate = new sugar.Date.create(date);

  if (parsedDate != "Invalid Date") {

    // Date could be parsed, parse the date to git date format
    let dateString = moment(parsedDate).format("ddd MMM DD HH:mm:ss YYYY ZZ");

    // Actually modify the dates
    let command = "GIT_COMMITTER_DATE=\"" + dateString + "\" git commit --amend --date=\"" + dateString + "\" --no-edit";
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.log("fatal: Could not change the previous commit");
      } else {
        console.log("\nModified previous commit:\n\tAUTHOR_DATE " + chalk.grey(dateString) + "\n\tCOMMITTER_DATE " + chalk.grey(dateString) + "\n\nCommand executed:\n\t" + chalk.bgWhite.black(command) + "\n");
      }
    });

  } else {
    console.log("fatal: Could not parse \"" + date + "\" into a valid date");
  }

} else {
  console.log("fatal: No date string given");
}
