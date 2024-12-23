// Rover object goes here:
let rover = {
    direction: "N",
    x: 0,
    y: 0,
}

let travelLog = [];

// =================
function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
    console.log(`turnLeft was called, rover is facing ${rover.direction}`);
}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
    console.log(`turnRight was called, rover is facing ${rover.direction}`);
}

function moveForward(rover) {
   if (rover.direction === "N") {
    rover.y += 1;
   } else if (rover.direction === "S") {
    rover.y -= 1;
   } else if (rover.direction === "E") {
    rover.x += 1;
   } else if (rover.direction === "W") {
    rover.x -= 1;
   }
   console.log(`moveForward was called, rover is now at [${rover.x}, ${rover.y}]`);
   travelLog.push([rover.x, rover.y]);
}

function commands(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "f") {
            moveForward(rover);
        } else if (string[i] === "r") {
            turnRight(rover);
        } else if (string[i] === "l") {
            turnLeft(rover);
        }
    }
    console.log("Travel Log:\n", travelLog);
}

// turnLeft(rover);
// turnLeft(rover);
// turnRight(rover);
// moveForward(rover);

commands("rffrfflfrff");