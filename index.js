// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What licence would you like to use?',
        choices: ['apache', 'mit'],
        name: 'licence',
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
 inquirer
    .prompt(questions).then((data) => {
        console.log(data);
        console.log(generateMarkdown(data));
       fs.writeFile('README.md',generateMarkdown(data), (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('README sucessfully generated')
        }
       })
    })
}

// Function call to initialize app
init();
