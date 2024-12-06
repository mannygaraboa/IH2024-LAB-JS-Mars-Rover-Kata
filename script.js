// Rover object goes here:
let rover = {
    direction: "N",
    x: 0,
    y: 0
}

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

}

turnLeft(rover);
turnLeft(rover);
turnRight(rover);