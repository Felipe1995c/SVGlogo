import inquirer  from 'inquirer';
import fs from 'fs';
import path from 'path';
import { Circle, Square, Triangle } from './lib/shapes.js';

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (max 3 characters):',
    validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape:',
  },
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let svgShape;
  switch (shape) {
    case 'circle':
      svgShape = new Circle(shapeColor);
      break;
    case 'square':
      svgShape = new Square(shapeColor);
      break;
    case 'triangle':
      svgShape = new Triangle(shapeColor);
      break;
  }

  const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${svgShape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
  `;
  const outputDir = path.join(process.cwd(), 'examples');
  const outputPath = path.join(outputDir, 'logo.svg');

  // Ensure the examples directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFile(outputPath, svgContent, err => {
    if (err) {
      console.error('Error saving the logo:', err);
    } else {
      console.log('Generated logo.svg in examples folder');
    }
  });
});