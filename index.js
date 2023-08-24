const inquirer = require('inquirer');
const fs = require('fs');
// const { generateSVG } = require('./svgGenerator'); // Create this file later idk if this needs to be e created
const { circle, triangle, square } = require('./lib/shapes');
const svg = require('./lib/svg')


function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to 3 characters for the logo',
            },
            {
                type: 'input',
                name: 'colorOfText',
                message: 'Enter text color(keyboard or hexadecimal number)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for your logo',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'colorOfShape',
                message: 'Enter shape color(keyboard or hexadecimal number)',
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log('Cannot enter more than 3 characters');
                promptUser();
            } else {
                let choiceOfShape 
                if (answers.shape === 'circle') {
                    choiceOfShape = new circle();
                    // svg += `circle cx="150" cy="115" r="80" fill="${answers.colorOfShape}"/>`;
                } else if (answers.shape === 'triangle') {
                    choiceOfShape = new triangle();
                    // svg += `polygon points="150, 18 244, 182 56, 182" fill="${answers.colorOfShape}"/>`;
                } else {
                    choiceOfShape = new square();
                    // svg += `rect x="73" y="130" width="160" fill="${answers.colorOfShape}"/>`;
                }
                choiceOfShape.setColor(answers.colorOfShape);
                const svgObject = new svg();
                svgObject.setTextForLogo(answers.text, answers.colorOfText);
                svgObject.setShapeOfLogo(choiceOfShape);
                writeToFile('logo.svg', svgObject.render());
            }
            // call write file function to generate SVG file
        });
}

promptUser();

function writeToFile(fileName, data) {
    console.log('Writing [' + data + '] to svg file [' + fileName + ']');

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('You completed generating a logo!');
    });
}

async function init() {
    console.log('Initializing');
    const svgString = '';
    const svgFile = 'logo.svg';

    const answers = await inquirer.prompt(promptUser);

    const svgContent = generateSVG(answers);

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');

  
    // The '+=' operator that combines the value on the left hand side with the value on the right and assigns the result back to left
}

  
//   module.exports = { generateSVG };
  