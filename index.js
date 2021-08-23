// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the Title of Your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Briefly Describe your project:",
  },
  {
    type: "input",
    name: "dependencies",
    message: "Do You Want to Install Dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the Usage of This Repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who Contributed to This Repo?",
  },
  {
    type: "input",
    name: "test",
    message: "What's the Command to Run Tests?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "What's the License of Your Project",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What's Your Github Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What's Your Email Address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
