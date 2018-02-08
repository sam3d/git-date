#!/usr/bin/env node

"use strict";

const moment = require("moment");
const sugar = require("sugar");
const chalk = require("chalk");
const exec = require("child_process").exec;

let fatal = err => {
    console.error(`fatal: ${err}`);
    process.exit(1);
};

process.argv.splice(0, 2);
if (process.argv.length === 0) {
    fatal("No date string given");
};

let date = process.argv.join(" ");
let parsedDate = new sugar.Date.create(date);

if (/Invalid Date/.test(parsedDate)) {
    fatal(`Could not parse ${date} into a valid date`);
};

let dateString = moment(parsedDate).format("ddd MMM DD HH:mm:ss YYYY ZZ");

let command = `GIT_COMMITTER_DATE="${dateString}" git commit --amend --date="${dateString}" --no-edit`;
exec(command, (err, stdout, stderr) => {
    if (err) fatal("Could not modify the date of the previous commit");
    console.log(chalk`\nModified previous commit:\n    AUTHOR_DATE {grey ${dateString}}\n    COMMITTER_DATE {grey ${dateString}}\n\nCommand executed:\n    {grey ${command}}\n`);
});
