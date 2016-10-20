#!/usr/bin/env node

"use strict";

const moment = require("moment");
const sugar = require("sugar");
const chalk = require("chalk");
const exec = require("child_process").exec;

// Throw a fatal error
const fatal = err => {
  console.error(`fatal: ${err}`);
}

process.argv.splice(0, 2);
if (process.argv.length === 0) {
  fatal("No date string given");
} else {

  // Attempt to parse the date
  let date = process.argv.join(" ");
  let parsedDate = new sugar.Date.create(date);

  console.log(parsedDate);
  if (/Invalid Date/.test(parsedDate)) {
    fatal("Could not parse \"" + date + "\" into a valid date");
  } else {

    // Date could be parsed, parse the date to git date format
    let dateString = moment(parsedDate).format("ddd MMM DD HH:mm:ss YYYY ZZ");

    // Actually modify the dates
    let command = "GIT_COMMITTER_DATE=\"" + dateString + "\" git commit --amend --date=\"" + dateString + "\" --no-edit";
    exec(command, (err, stdout, stderr) => {
      if (err) {
        fatal("Could not change the previous commit");
      } else {
        console.log("\nModified previous commit:\n    AUTHOR_DATE " + chalk.grey(dateString) + "\n    COMMITTER_DATE " + chalk.grey(dateString) + "\n\nCommand executed:\n    " + chalk.bgWhite.black(command) + "\n");
      }
    });
  }
}
