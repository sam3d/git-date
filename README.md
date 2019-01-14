# git-date [![npm version](https://badge.fury.io/js/git-date.svg)](https://badge.fury.io/js/git-date) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Easily change the date of the previous git commit
![Demonstration](https://i.imgur.com/1c699Gb.png)
[![NPM](https://nodei.co/npm/git-date.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/git-date/)

## Installation

Make sure you have `nodejs`, `npm` and `git` installed first, and then run the following:

```console
npm install git-date -g
```

## Usage

`git-date` uses a hyphenated alias that allows you to run it as a native git command:

```console
git date <date string>
```

`git-date` uses the full power of the [date parsing](https://sugarjs.com/docs/#/DateParsing) provided by the excellent [Sugar](https://sugarjs.com/) library. This means you can use a very large variety of commands to change the date. Below are some examples of what you could put into `<date string>`:

- 2010
- 2010-05
- 2010-05-25
- 2010.05.25
- 2010/05/25
- 05-25-2010
- 05/25/2010
- 05.25.2010
- 25 May 2010
- May 2010
- Tuesday May 25th, 2010
- the day after tomorrow
- one day before yesterday
- 2 days after monday
- 2 weeks from monday
- a second ago
- 25 years from now
- last wednesday
- next friday
- this week tuesday
- monday of last week
- May 25th of next year
- the last day of March
- the 23rd of last month
- the beginning of this week
- the end of next month
- the last day of the year
- last month
- next year
- 12pm
- 12:30pm
- 12:30:40
- 12:30:40.299
- 12:30:40.299+01:00
- 2010-05-25T12:30:40.299Z
- 2010-05-25T12:30:40.299+01:00
