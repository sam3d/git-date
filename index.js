#!/usr/bin/env node

"use strict";

const moment = require("moment");
const sugar = require("sugar");
const chalk = require("chalk");
const { exec } = require("child_process");

const examples = [
  "2010",
  "Tuesday May 25th, 2010",
  "the day after tomorrow",
  "now",
  "next friday",
  "12pm",
  "a second ago",
  "three days ago",
  "last year"
];

/**
 * Ensure that there is at least one argument.
 */
process.argv.splice(0, 2);
if (!process.argv.length) {
  exit();
}

/**
 * Check if the date can be parsed.
 */
const date = process.argv.join(" ");
const parsedDate = new sugar.Date.create(date);
if (/Invalid Date/.test(parsedDate))
  exit(`Could not parse "${date}" into a valid date`);

/**
 * Create and execute the command to rewrite git date history.
 */
const dateString = moment(parsedDate).format("ddd MMM DD HH:mm:ss YYYY ZZ");
const command = `GIT_COMMITTER_DATE="${dateString}" git commit --amend --date="${dateString}" --no-edit`;

exec(command, (err, stdout, stderr) => {
  if (err || stderr) exit("Could not modify the date of the previous commit");

  console.log(
    chalk`\nModified previous commit:\n    AUTHOR_DATE    {grey ${dateString}}\n    COMMITTER_DATE {grey ${dateString}}\n\nCommand executed:\n    {grey ${command}}\n`
  );
});

/**
 * Handle any exit or error for the application.
 */
function exit(err) {
  if (err) console.log(chalk`{red error: ${err}}`);

  console.log("usage: git date <date string>\n\nExamples of valid commands:");
  examples.forEach(example => console.log(`    git date ${example}`));
  console.log();

  process.exit(1);
}
