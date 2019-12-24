# Color Blocks - Solo Challenge(s)

We will be building up an application that creates Color Blocks on the DOM based off of buttons that are loaded right away. Additionally, we are going to be tracking the number of Blocks in each color we create. When the user clicks on a color button, it will create a Color Block, then add to that colors count.

## Installation and Setup

1. create a Postgres database called `color_blocks_dashboard`
1. Use the following queries to setup your tables needed for the exercise

    ```sql
    -- store the different color options
    CREATE TABLE "colors" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(80) NOT NULL,
        hexcode VARCHAR(6)
    );

    -- store the color blocks that have been created
    CREATE TABLE "blocks" (
        id SERIAL PRIMARY KEY,
        color_id INT REFERENCES "colors"
    );

    INSERT INTO "colors" ("label", "hexcode")
    ```

1. from the root of the project directory
    1. run: `npm install`
    1. run: `npm run server`
        - starts the node back-end server and restarts the server every time a change is saved
    1. run: `npm run client`
        - starts the client-side server with live refresh


## Base Mode

- [ ] create two pages "Swatches" and "Colors"
- [ ] on the "Colors" page, add color form
    - [ ] field - "Label / Name"
    - [ ] field - "Hexcode"
- [ ] on the "Colors" page, submit new color POSTs back to the server saving new color information to the `colors` table
- [ ] on the "Swatches" page, list all **Add Color** buttons representing each of the available colors stored in the `colors` table
- [ ] on the "Swatches" page, when any of the **Add Colors** buttons are clicked a new color block should be saved to the database `blocks` table
- [ ] on the "Swatches" page, all of the blocks stored in the `blocks` table are displayed on page load
- [ ] on the "Swatches" page, each individual color block should display the color in a square / rectangle and below the color is the name of the color displayed next to a **Delete** button


## Part 1: HTML/CSS

### Assignment Objectives

- Practice Read and Write skills
- Solidify HTML & CSS knowledge
  - HTML elements, attributes
  - using class and id
  - Box Model and layout

## Required Functionality

For the first part, we will be adding Color Blocks to the DOM using HTML & CSS. More specifically, create a Red, Yellow, Green, and Blue blocks when the application loads. They should be 100px in width, and 100px in height. They should have 10 px of space between each box.

### Here is an example of what your application should look like after Part 1

![Here is an example of what your application should look like after part 1](http://i.imgur.com/TRhp9w1.png)


---

## Part 2: jQuery

### Assignment Objectives

- Practice Read and Write skills
- Solidify jQuery knowledge
  - Selectors
  - Dynamic Content
  - Methods `.on()`, `.append()`, `empty()`

## Required Functionality

Add 4 buttons that read 'Red', 'Yellow', 'Green', and 'Blue'. When you click on those buttons, it should add a Color Block of that associated color to the DOM. Above the buttons, should be total counts for each colors relative to the number of times the button has been clicked, thus the total number of color blocks of that color.

### Here is an example of what your application should look like after Part 2

![Here is an example of what your application should look like after part 2](http://i.imgur.com/ChOIEjW.png)

## Stretch Goals

Make it so that when you click on one of the color blocks, it deletes that block, and then updates the color count. Create an input field that allows users to add multiple blocks at a time (e.g. 4 green blocks instead of just one).

