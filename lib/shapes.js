const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (max 3 characters):',
      validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color for the logo:',
    },
  ];
  inquirer.prompt(questions).then(answers => {
    const { text, shape, color } = answers;
    const svgContent = generateSVG(text, shape, color);
    fs.writeFile('logo.svg', svgContent, err => {
      if (err) {
        console.error('Error saving the logo:', err);
      } else {
        console.log('Logo saved as logo.svg');
      }
    });
  });