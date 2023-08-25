# Synaptiq React Skills Test

## Pattern Implemented:
Date list

## Features:
The user clicks the component to open up a dropdown menu with the following date ranges:

	Today
	Last 7 days
    Last 30 days
    Last year
    All

One use case -- Comments are displayed based on range selected (ie. Comments made within the past day, week, month, year, etc.)

## Example Page:
The page includes a comment section with a date list component to select a time range. Comments will be displayed only if they have been created within the range.

## Additional Comments:
Comments are sorted by date made.
Each comment card displays the name of the user, the comment, and the date/time created relative to the current time.

---------

## Your mission

Create a new "combined date" control as described in the shopify polaris "patterns"
documentation at https://polaris.shopify.com/patterns/date-picking/single-date

    - You should build off the framework and tools in this repo, namely:
        - yarn
        - storybook
        - next.js
        - react
        - tailwind.css
        - typescript
    - You may pick any of the patterns described (single-date, date range or date list)
    - You should include your component in a sample next.js page added to this project
    - Your example page can do anything you want, so show off what it can do!
    - Your component should be added to the storybook in this project
    - Your component should be tested and demonstrate your command of css, html and react
    - Your should add (and document) the commands used to run your tests
    - Your component should meet the usability guidelines from polaris
    - You should update this readme explaining what usability features and capabilities you have implemented
    - You should fork this repository and open a pull request against it with your changes.
    - Your code should compile and test cleanly via github actions. 
        - Opening a pull request will verify this
        - You can also use `act -C..` from https://github.com/nektos/act to run locally
    - You should be prepared to discuss your changes in detail and explain why they are great.


