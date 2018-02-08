#!/usr/bin/env node

"use strict";

const moment = require("moment");
const sugar = require("sugar");
const chalk = require("chalk");
const exec = require("child_process").exec;

let examples = [
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

let exit = err => {
    if (err) console.log(chalk`{red error: ${err}}`);

    console.log(`usage: git date <date string>\n\nExamples of valid commands:`);
    examples.forEach(example => console.log(`    git date ${example}`));
    console.log();

    process.exit(1);
};

process.argv.splice(0, 2);
if (process.argv.length === 0) {
    exit();
};

let date = process.argv.join(" ");
let parsedDate = new sugar.Date.create(date);

if (/Invalid Date/.test(parsedDate)) {
    exit(`Could not parse "${date}" into a valid date`);
};

let dateString = moment(parsedDate).format("ddd MMM DD HH:mm:ss YYYY ZZ");

let command = `GIT_COMMITTER_DATE="${dateString}" git commit --amend --date="${dateString}" --no-edit`;
exec(command, (err, stdout, stderr) => {
    if (err || stderr) exit("Could not modify the date of the previous commit");
    console.log(chalk`\nModified previous commit:\n    AUTHOR_DATE {grey ${dateString}}\n    COMMITTER_DATE {grey ${dateString}}\n\nCommand executed:\n    {grey ${command}}\n`);
});
