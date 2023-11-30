# Find Your Hat: Interactive Terminal Game

## Overview

"Find Your Hat" is a terminal-based game developed as part of the Codecademy's Front-End Development course. Unlike typical tutorials, this project was open-ended, providing a set of requirements to build an engaging, interactive terminal game. The game revolves around a player navigating through a field of holes to find their lost hat.

## Project Goals

In this game, players must navigate through a field, avoiding holes and trying to find their lost hat. It's a test of strategy and planning, as one wrong move could lead to falling into a hole. The player wins by reaching the hat and loses by either falling into a hole or stepping outside the field.

## Setup Instructions

To run "Find Your Hat" on your local machine:

1. **Download the Project**: Download the project files from the github repository.
2. **Edit `main.js`**: Use a text editor (like VSCode, Atom, etc.) to modify the `main.js` file.
3. **Install Node.js**: Ensure Node.js is installed on your computer for running the game. Visit [Node.js](https://nodejs.org/) for installation.
4. **Run the Game**: Navigate to the project directory in the terminal and run `node main.js` to start the game.

## Development Stages

### Prerequisites
- Completion of JavaScript classes in Codecademy’s Introduction to JavaScript curriculum.
- Understanding of handling user input in Node.js.

### 1. Field Class
- The `Field` class represents the game field, constructed with a two-dimensional array. The field contains the player's path (`*`), holes (`O`), and the hat (`^`).

### 2. Printing the Field
- The `.print()` method in `Field` class displays the current state of the field, helping players visualize their moves.

### 3. Interactive Gameplay
- Players run `main.js` and interactively input directions to move within the field.
- The game updates the field view after each move, marking visited tiles with `*`.
- The game concludes if the player wins (finds the hat), loses (falls in a hole), or moves outside the field.

### 4. Field Generation
- `.generateField()` method: A static method in the `Field` class to create a randomized field, setting the dimensions and the percentage of holes.

### 5. Extensions and Enhancements (Optional)
- Random starting position for the player.
- A “hard mode” with additional holes appearing during the game.
- Enhanced terminal graphics and interactivity using additional Node.js packages.
- Field validation to ensure generated fields are solvable.

## Conclusion

"Find Your Hat" offers a unique blend of fun and challenge, making it an excellent project for practicing JavaScript and Node.js. Players can enjoy a simple yet captivating game while developers can appreciate the complexities of class-based game design in JavaScript.
