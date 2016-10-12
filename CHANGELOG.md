# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

# 0.1.4 - 2016-10-12
A tiny reverse-compatibility update - thanks to @wiyarmir you can now use `git-date` with node v5.0.0.

## 0.1.3 - 2016-09-21
Not a massive update by any standard, just updating the libraries and switching to es6 syntax - general maintenance more than anything else.

## 0.1.2 - 2016-03-08
### Fixed
- The date format was previously in 12-hour format, it now displays correctly in the 24-hour time format. @danhawkes

## 0.1.1 - 2016-02-29
### Changed
- Make the warning when no date string is entered `fatal` to match git warning standards.

## 0.1.0 - 2016-02-29
### Added
- Use the full power of the `sugarjs` library to amend the previous git commit with a large variety of both relative and absolute date formats.
