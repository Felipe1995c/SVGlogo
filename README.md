# SVG Logo Maker

## Your Task

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a black square with white text that reads "LoL.".](./examples/logo.svg).
![Image of the svglogo passing the test](./lib/svglogo%20test%20passed.jpg).

## Setup

1. Run "npm install inquirer jest"
2. Run "index.js"
3. Follow prompts to enter text, choose text, color, shape, and shape color.
4. Finally, the logo.svg file will be created and you can open up a live server to visualize it.

## Testing 
For testing of the app I used "npm test" to initiate the test.
The test basically checks that all three shapes render correctly.
I also went line by line to make sure the paths were written down correctly because a lot of the issues I ran into were from misspelling, thus not having the correct path.


