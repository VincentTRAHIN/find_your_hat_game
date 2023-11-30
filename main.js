const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//define class
class Field {
  constructor(hatAndHoles, field) {
    this._field  = field;
    this._hatAndHoles = hatAndHoles;
  }
  //play game method
  playGame() {
    let y = 0;
    let x = 0;
    this.print();
    
    while (this._hatAndHoles[y][x] === pathCharacter || this._hatAndHoles[y][x] === fieldCharacter) {
        const direction = prompt("Time to move! Which way to go? N for North (where it's chilly), S for South (watch out for penguins), E for East (sunrise side), or W for West (where the sun takes naps). \n");

        if (direction.toUpperCase() === 'N') {
            if (y === 0) {
                console.log("North Pole is that way, but you can't go further. Try another direction!");
            } else {
                y -= 1;
            }
        } else if (direction.toUpperCase() === 'S') {
            if (y >= this._field.length - 1) {
                console.log("You're about to fall off the world's edge to the South! Choose wisely!");
            } else {
                y += 1;
            }
        } else if (direction.toUpperCase() === 'W') {
            if (x === 0) {
                console.log("You can't go West, that's where the dragons live! Try a different direction.");
            } else {
                x -= 1;
            }
        } else if (direction.toUpperCase() === 'E') {
            if (x >= this._field[y].length - 1) {
                console.log("Going East? Land's end ahead! Better turn around.");
            } else {
                x += 1;
            }
        } else {
            console.log("Oops, that's not a valid direction. Are you inventing new ones? Stick to N, S, E, or W.");
        }

        if (this._hatAndHoles[y][x] === hat) {
            console.log("Huzzah! You found the hat and won! Time for a celebration dance!");
            break;
        } else if (this._hatAndHoles[y][x] === hole) {
            console.log("Yikes, you fell into a hole! Game Over. Watch your step next time!");
            break;
        } else {
            this._field[y][x] = pathCharacter;
            this.print();
        }
    }
}

  //print field method
  print() {
    for (let row of this._field){
      console.log(row.join(' '));
    }
  }
  
  //generate field with hat and holes
  static generateField(height, width, holes) {
    let newField = [];
    for (let i = 0; i < height; i++) {
      newField.push([]);
      for (let j = 0; j < height; j++) {
          newField[i].push(fieldCharacter)
      };
    };
    newField[0][0] = pathCharacter;
    let hatX = Math.floor(Math.random() * width);
    let hatY = Math.floor(Math.random() * height);
    newField[hatY][hatX] = hat;
    
    for (let k = holes; k > 0; k--) {
      let holeX = hatX;
      let holeY = hatY;
      while (holeX === hatX) {
        holeX = Math.floor(Math.random() * width)
      };
      while (holeY === hatY) {
        holeY = Math.floor(Math.random() * height)
      };
     newField[holeY][holeX] = hole; 
    }
    return newField;
  } 
  
  //generate blank field for the user to traverse without seeing the hat and holes
  static generateBlankField(height, width){
    let newField = [];
    for (let i = 0; i < height; i++) {
      newField.push([]);
      for (let j = 0; j < height; j++) {
          newField[i].push(fieldCharacter)
      };
    };
    newField[0][0] = pathCharacter;
    return newField;
  }
}


let myField; 

//create the blank field for the user to see
const blankField = Field.generateBlankField(5, 5)

//created the field with the hat and holes
const newField = Field.generateField(5, 5, 1);
console.log(blankField);

//instantiate a Field object using newField = hatAndHoles and field = blankField  
myField = new Field (newField, blankField);

//call playGame method
myField.playGame();