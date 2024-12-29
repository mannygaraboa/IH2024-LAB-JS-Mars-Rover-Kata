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
    switch (rover.direction) {
        case "N":
            if (rover.y > 0) {
                rover.y -= 1;
            } else {
                console.log("You can't move North, you are at the edge of the grid!");
            }
            break;
        case "S":
            if (rover.y < 9) {
                rover.y += 1;
            } else {
                console.log("You can't move South, you are at the edge of the grid!");
            }
            break;
        case "E":
            if (rover.x < 9) {
                rover.x += 1;
            } else {
                console.log("You can't move East, you are at the edge of the grid!");
            }
            break;
        case "W":
            if (rover.x > 0) {
                rover.x -= 1;
            } else {
                console.log("You can't move West, you are at the edge of the grid!");
            }
            break;
    }

    console.log(`moveForward was called, rover is now at [${rover.x}, ${rover.y}]`);
    travelLog.push([rover.x, rover.y]);
}

function moveBackward(rover) {
    switch (rover.direction) {
        case "N":
            if (rover.y < 9) {
                rover.y += 1;
            } else {
                console.log("You can't move backwards facing North, you are at the edge of the grid!");
            }
            break;
        case "S":
            if (rover.y > 0) {
                rover.y -= 1;
            } else {
                console.log("You can't move backwards facing South, you are at the edge of the grid!");
            }
            break;
        case "E":
            if (rover.x > 0) {
                rover.x -= 1;
            } else {
                console.log("You can't move backwards facing East, you are at the edge of the grid!");
            }
            break;
        case "W":
            if (rover.x < 9) {
                rover.x += 1;
            } else {
                console.log("You can't move backwards facing West, you are at the edge of the grid!");
            }
            break;
    }

    console.log(`moveBackward was called, rover is now at [${rover.x}, ${rover.y}]`);
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
        } else if (string[i] === "b") {
            moveBackward(rover);
        } else {
            console.log(`Invalid command: ${string[i]}`);
        }
    }
    console.log("Travel Log:\n", travelLog);
}


// turnLeft(rover);
// turnLeft(rover);
// turnRight(rover);
// moveForward(rover);

commands("rffffopopopopffrffffffflbbblff");