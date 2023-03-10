//Packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions
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
        message: 'What was your motivation for creating it?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What did you learn creating it?',
        name: 'learn',
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
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests can be performed on the project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
        {
        type: 'input',
        message: 'What is the name of this projects gihub repository?',
        name: 'repository',
    },
    {
        type: 'list',
        message: 'What licence would you like to use?',
        choices: ['None', 'Apache_2.0', 'MIT', 'GNU_GPL_v3', 'Mozilla_Public_License_2.0','BSD_3_Clause_License'],
        name: 'license',
    }

];



//function to initialize app
function init() {
 inquirer
    .prompt(questions).then((data) => {
       fs.writeFile('./utils/README.md',generateMarkdown(data), (err) => {
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
