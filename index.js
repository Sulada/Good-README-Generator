import { writeFile } from "fs";
import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";

const { prompt } = inquirer;

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for use."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?"
    },
    {
        type: "input",
        name: "test",
        message: "How do you test your project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Contributors?"
    },
    {
        type: "list",
        name: "license",
        message: "Please select type of license",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    }
    
];

// Function to write file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
    }

// function to initialize program
function init() {
    prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
        console.log("New README file created success!");
       
        writeToFile("README.md", response);
    });
}

// function call to initialize program
init();