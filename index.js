// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
inquirer.prompt([ {
    type: 'input',
    message: "Please title your project",
    name: 'title',
},
{
    type: 'input',
    message: "Please describe your project.",
    name: 'description',
},
{
    type: 'input',
    message: "Installation instructions for this project (if any)?",
    name: 'installation',
},
{
    type: 'input',
    message: "Please provide usage information for this project?",
    name: 'usage',
},
{
    type: 'input',
    message: "Please list project contributors, if any?",
    name: 'contributing',
},
{
    type: 'input',
    message: "Are there any tests for this project?",
    name: 'tests',
},
{
    type: 'list',
    message: "Please provide license type for project?",
    name: 'license',
    choices: [
        "MIT",
        "APACHE 2.0",
        "ISC",
        "None",
    ]
},
{
    type: 'input',
    message: "What is your Github username?",
    name: 'github',
},
{
    type: 'input',
    message: "What is your email address?",
    name: 'email',
},

])
// TODO: Create a function to write README file
.then(answers =>
    fs.writeFile('./utils/README.md', generateReadme(answers), function(err){
        if (err) return console.log(err);
    })
  );