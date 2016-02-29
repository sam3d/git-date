# git-date [![npm version](https://badge.fury.io/js/git-date.svg)](https://badge.fury.io/js/git-date)
Easily change the date of the previous git commit
![Demonstration](https://i.imgur.com/gLz7gFC.png)
[![NPM](https://nodei.co/npm/git-date.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/git-date/)

## Installation
Make sure you have `nodejs`, `npm` and `git` installed first, and then run the following:

```console
$ npm install git-date -g
```

## Usage
Because git-date uses the hyphenated alias that allows you to run it as a native git command, you can run:

```console
$ git date <date string>
```

Because `git-date` uses the full power of the [date library](http://sugarjs.com/dates) provided by `sugarjs`, you can use a very large variety of commands to change the date:

```console
$ git date 2010
$ git date 2010-05
$ git date 2010-05-25
$ git date 2010.05.25
$ git date 2010/05/25
$ git date 05-25-2010
$ git date 05/25/2010
$ git date 05.25.2010
$ git date 25 May 2010
$ git date May 2010
$ git date Tuesday May 25th, 2010
$ git date the day after tomorrow
$ git date one day before yesterday
$ git date 2 days after monday
$ git date 2 weeks from monday
$ git date a second ago
$ git date 25 years from now
$ git date last wednesday
$ git date next friday
$ git date this week tuesday
$ git date monday of last week
$ git date May 25th of next year
$ git date the last day of March
$ git date the 23rd of last month
$ git date the beginning of this week
$ git date the end of next month
$ git date the last day of the year
$ git date last month
$ git date next year
$ git date 12pm
$ git date 12:30pm
$ git date 12:30:40
$ git date 12:30:40.299
$ git date 12:30:40.299+01:00
$ git date 2010-05-25T12:30:40.299Z
$ git date 2010-05-25T12:30:40.299+01:00
```
