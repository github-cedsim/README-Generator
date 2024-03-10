// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// Array of questions for user input
function createQuestion(name, message) {
    return {
      type: 'input',
      name: name,
      message: message,
    };
  }

const questions = [
  createQuestion('title', 'What is the title of your project?'),
  createQuestion('description', 'Provide a description of the project:'),
  createQuestion('installation', 'How is your project installed?'),
  createQuestion('usage', 'How is your project used?'),
  createQuestion('contribution', 'How can others contribute to your project?'),
  createQuestion('tests', 'How can your project be tested?'),
  // For 'license', since it's a 'list', it doesn't fit the createQuestion mold and should be added manually
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  createQuestion('github', 'Enter your GitHub Username:'),
  createQuestion('email', 'Enter your email address:'),
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
      });
} 


// Function call to initialize app
init();
